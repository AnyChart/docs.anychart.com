#!/usr/bin/env bash
clear
########################################################################################################################
#
#  Utility function to fix known troubles with production server
#
#  You can run this command with parameters
#
########################################################################################################################

# install pre-push hook if it does not exists
hook='.git/hooks/pre-push'
if [ ! -f ${hook} ]; then
   echo 'Install pre-push hook'
   touch ${hook}
   echo '#!/bin/bash' >> ${hook}
   echo 'if [ $(git symbolic-ref HEAD | sed -e "s,.*/\(.*\),\1,") = "develop" ] && [[ ! $(git log -1 --pretty=%B) =~ "#without-check" ]] ' >> ${hook}
   echo 'then  . ./checker.sh; fi' >> ${hook}
   chmod +x ${hook}
   echo 'done'
fi

########################################################################################################################
#   Define default variables
########################################################################################################################
CURRENT_BRANCH=$(git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/');

# IGNORE files
declare -a IGNOREFILES=(
    "./samples/AS_Fonts_01.html"
    "./samples/BCT_Sunburst_Chart_04.html"
    "./samples/CS_Labels_10.html"
    "./samples/CS_Preloader_01.html"
    "./samples/Maps_Connectors_11.html"
    "./samples/WD_Data_Adapter_HTML_Table_02.html"
    "./samples/quick_start_pie.html"
    )

# filter only files that diff with origin/develop
FILESLIST=$(git diff --name-only origin/develop | grep -e .html -e .md )
FILESLIST_COUNT=$(git diff --name-only origin/develop | grep -e .html -e .md | wc -l)

# function for "fix" file.
function heal_file(){
    filename=$1
    # replace all STG urls to COM and non-{{branch-name}}
    perl -pi -e 's,src="../anychart,src="https://cdn.anychart.com/releases/d/js/anychart,g' ${filename}
    perl -pi -e 's/\.stg/\.com/g' ${filename}
    perl -pi -e 's,(releases)/([^/])+/,\1/{{branch-name}}/,g' ${filename}

    if [[ ! " ${IGNOREFILES[*]} " == *"$filename"* ]]; then
        # match all non-ascii symbols
        # Search charcode by symbol here  https://www.compart.com/en/unicode/search?q=
        # Search symbol by hex code here https://utf8-chartable.de/unicode-utf8-table.pl?start=8192&number=128&utf8=string-literal
        match=$(cat ${filename} | tr -d '\r' | tr -d '\n' | sed 's/\xC2\xA0/+/g' | \
            sed -e "s/'//g;s/[\s\t]/ /g" | sed -e 's/[0-9A-z"*+-=()/&!?.,:;$<>#{}%~|@ ]//g' | \
            awk '{$1=$1}1' )
        if [ ! ${#match} -eq 0 ]; then
            res=""
            for i in $(seq 1 ${#match});do
                char=${match:i-1:1}
                res="$res $char($(echo ${char} | tr -d '\n' | xxd -u -p | sed 's/\(..\)/\\x\1/g' ))"
            done
            echo "[Non-ASCII] $filename: $res"
            # echo ${match:0:1} | tr -d '\n' | xxd -ps -c 200
        fi
    fi
}
# default mode
FILE_MODIFYER="heal_file"

# sugar function
function broke_file(){
    perl -pi -e "s,(releases)/({{branch-name}})+/,\1/$CURRENT_BRANCH/,g" $1
}

########################################################################################################################
#   Main functionality
########################################################################################################################

# read command arguments
for ARGUMENT in "$@"
do
    case "$ARGUMENT" in
            replace|r|"-r")    FILE_MODIFYER="broke_file" ;;
            all|a|"-a")        
                FILESLIST=$(find . -type f | grep -e .md -e .html)
                FILESLIST_COUNT=$(find . -type f | grep -e .md -e .html | wc -l)
            ;;
            "-h"|"--help"|help|h|"-help")  printf "parameters: \
                \n 'replace (-r)' - to rename all {{branch-name}} to current branch\
                \n 'all (-a)' - modify all files (by default False, modify only diff with origin/develop)\
                \n 'links (-l)' - get links to pg and github.com for changed samples\
                \n" && exit 1 ;;
            links|link|l|"-l")
                for filename in ${FILESLIST}; do
                    fileext=${filename:${#filename}-4}

                    if [[ "$fileext" = "html" ]]; then
                        pglink="http://playground.anychart.stg/docs/$CURRENT_BRANCH/${filename:0:${#filename}-5}\n\t"
                    fi

                    printf "\n*$filename*\n\t${pglink}https://github.com/AnyChart/docs.anychart.com/blob/$CURRENT_BRANCH/$filename\n"
                done
                exit 0
                ;;
            *)
    esac
done

echo 'Starting check...'

printf "Items to check: \n$FILESLIST\n\nModifier: ${FILE_MODIFYER}\n"

nr=0
# for each files in tree of folders do (like python walk)
for filename in ${FILESLIST}; do
    (( ++nr ))
    # in diff mode file may be marked as deleted
    if [ -f $filename ];then 
        echo -ne "${nr} / ${FILESLIST_COUNT} > ${filename}                                              \r"
        ${FILE_MODIFYER} ${filename}
    fi
done
# cause echo -ne previous
echo

CHANGES=$(git diff --name-only)
if [ "$CHANGES" ] && [[ "${FILE_MODIFYER}"=~"heal_file" ]]; then
    echo
    echo 'ABORTED! Files were modified (autofixed). Check them before doing the commit, please.'
    echo '   git status'
    exit 1
fi

exit 0
