#!/usr/bin/env bash

################################################################################################################################################
# Utility function to fix known troubles with production server
################################################################################################################################################
function ord {
  printf $1 | hexdump
}
# filter only MD files and html samples
FILESLIST=$(find . -type f \( -name "*.md" -o -name "*.html" \) ) 

# for each files in tree of folders do (like python walk)
for filename in $FILESLIST; do
    # replace all STG url on COM and  non-{{branch-name}}
    perl -pi -e 's/\.stg/\.com/g' $filename
    perl -pi -e 's,(releases)/([^/])+/,$1/{{branch-name}}/,g' $filename
    
    # match all non-ascii symbols
    # Search charcode here  https://www.compart.com/en/unicode/search?q=
    match=$(cat $filename | tr -d '\r' | tr -d '\n' | sed 's/\xC2\xA0/+/g' | \
        sed -e "s/'//g;s/[\s\t]/ /g" | sed -e 's/[0-9A-z"*+-=()/&!?.,:;$<>#{}%~|@ ]//g' | \
        awk '{$1=$1}1' )
    if [ ! ${#match} -eq 0 ]; then
        res=""
        for i in $(seq 1 ${#match});do
            char=${match:i-1:1}
            res="$res $char($(echo $char | tr -d '\n' | xxd -u -p | sed 's/\(..\)/\\x\1/g' ))"
        done
        echo "[Non-ASCII] $filename: $res"
        # echo ${match:0:1} | tr -d '\n' | xxd -ps -c 200 
    fi
done

CHANGES=$(git diff --name-only)
if [ "$CHANGES" ]; then    
    git status
    exit 1
fi

exit 0