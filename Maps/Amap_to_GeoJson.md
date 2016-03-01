{:index 5}

# Custom GeoJson Maps

* [Overview](#overview)
* [Creating Maps For AnyChart](#creating_maps_for_anychart)
* [amap to JSON converter]

## Overview

This Python-based converter allows you to convert any AnyMap 4.x, 5.x and 6.x **amap** map source files to AnyMap 7.x GeoJSON based JavaScript, pure GeoJSON and SHP format.
  
  
You might have obtained .amap files from [the set of maps AnyChart provided with old versions](http://6.anychart.com/products/anychart/mapList/index.php) or created yourself with [AnyChart SHP to AMAP Converter](http://6.anychart.com/products/anymap/converter/).
  
  
AnyChart 7.x maps collection can be found in [AnyChart CDN Maps Collection](https://cdn.anychart.com/#maps-collection).
  
  
Converter generates AnyMap 7.x GeoJSON based JavaScript (.js), pure GeoJSON (.json) and SHP (.shp, .shx and .dbf) formats in the specified output folder.
  
  
After you converted .amap file you can [use .js or .json files directly in the new HTML5 AnyMap](http://docs.anychart.com/7.9.1/Maps/Quick_Start) or tune .json or .shp files further as described in [AnyMap Custom GeoJSON Maps Tutorial](http://docs.anychart.com/7.9.1/Maps/Custom_GeoJson_Maps).

## Installation

### Windows

First of all, you need to download the converter. The converter can be downloaded from the [github page of the project](https://github.com/AnyChart/amap-converter).
  
  
As far as this is a Python-based converter, you need to install Python in your system. This converter requires Python version 2.7.x, which can be obtained from the official [download page](https://www.python.org/downloads/).
  
  
**Note**: it is strongly recommended to add python.exe to Path while python installation.
  
SCREENSHOT


PC reboot is required to finish python installation.
  
  
After successful installation of the python on your PC you need to install all the requirements for the appropriate work of the converter. To do it you need to run Command Prompt and switch into converter's folder:

```
  cd %PATH_TO_THE_FOLDER%
```

He is a sample of switching into another folder in Command Prompt.

SCREENSHOT

Now, we need to launch the process of requirements installation. Run the following command to do it:

```
  pip install -r requirements
```

After all the requirements are installed you will see same massage as on the screenshot below

SCREENSHOT

### \*Unix

The process of converter installation into an operation system of the Unix family works almost in the same as for windows. First of all ypu need to download and install the Python version 2.7.x which can be download from [official web site](https://www.python.org/downloads/) and the converter itself from the [github](https://github.com/AnyChart/amap-converter).
  
  
Second step is installation of all requirements. You need to launch the terminal and switch into the converter's directory. It can be easily done by using **cd** command:

```
  cd PATH_TO_THE_CONVERTER
```

Run the following code to launce the process of requirements intallation:

```
  pip install -r requirements
```

If you see the massage like this, all the requirements are installed.

SCREENSHOT

Now, we may proceed to the process of files conversion.

## Converting

### Single File

Conversion of files works the same in all the systems: you need to switch into the converter's folder and run the following code:

```
  python converter.py PATH_TO_YOUR_MAP.amap OUTPUT_PATH/FILES_NAME
```

SCREENSHOT(of the terminal)

Here is a screenshot of a single **.amap** file conversion:

SCREENSHOT(of the result in folder)

### Multiple Files

#### Windows


As far as there might be multiple files for converting you can convert the whole folder with files. The syntax for convertin several files is here: **forfiles** command can prosses several files. **/p** defines the path to the folder with **.amao** files, **/m**  sets the mask for files filtering, **/s** enables search in sub-folders, **/c** defines the command for each file. Here is a snippet of converting all **.amap** files in the directory **C:\Users\a1\Desktop\maps** and placing them into **C:\Users\a1\Desktop\amap-converter\result\all** folder:

```
  forfiles /p C:\Users\a1\Desktop\maps /m *.amap /s /c "cmd /c python C:\Users\a1\Desktop\amap-converter\converter.py @file C:\Users\a1\Desktop\amap-converter\result\all\/@fname"
```

After running this code the result will be similar to the one on the screenshot:

SCREENSHOT

**Note**: in the snippet were used *@file* and some other prompt variables. More information can be found on [technet.microsoft.com](https://technet.microsoft.com/en-us/library/cc753551(v=ws.10).aspx).

As far as the code doesn't limit the number or files for processing, we might need to place files for each map into separate folder. Here is a bit adjusted snippet for this purpose:

```
  forfiles /p C:\Users\a1\Desktop\maps /m *.amap /s /c "cmd /c python C:\Users\a1\Desktop\amap-converter\converter.py @file C:\Users\a1\Desktop\amap-converter\result\all\/@relpath\..\/@fname\/@fname"
```

The result for this code is here:

SCREENSHOT

#### \*Unix

For operation systems from Unix family there is a bit more simple way of converting multiple files from a single folder. Use **convert-batch** for the terminal and set the path to the folder with **amap** files and the desirable path to output files.

```
  ./convert-batch src-folder output-folder
```

He is a screenshot of converting a folder with **amap** files:

SCREENSHOT(terminal)

The source folder for conversion were:

SCREENSHOT (of the folder)

And the output folder contains these files:

SCREENSHOT(of the folder)

<!--



## amap to JSON converter

This section contains instruction for converting map files with **.amap** extension from anychart version 6 into JSON format for further usage in the 7 version of AnyChart charting library. The converter itself can be downloaded from


### Windows

AnyChart provides a converter that can transform old **.amap** files into a format that is acceptable for the new version of AnyChart charting library. The converter requires to have python installed on your PC. Note, that converter works only with the python version 2.7.x. The python can be downloaded from the official [download page](https://www.python.org/downloads/).

**Note**: it is strongly recommended to add python.exe to Path while python installation.

SCREENSHOT

PC reboot is required to finish python installation.
  
  
After successful installation of the python on your PC you need to install all the requirements for the appropriate work of the converter. To do it you need to run Command Prompt and switch into converter's folder:

```
  cd %PATH_TO_THE_FOLDER%
```

He is a sample of switching into another folder in Command Prompt.

SCREENSHOT

Now, we need to launch requirements installation process. Run the following command to do it:

```
  pip install -r requirements
```

After all the requirements are installed you will see same massage as on the screenshot below

SCREENSHOT

Now we can proceed to the file conversion. The command for converting files is pretty simple: write **python** then write the path to **converter.py** file, path to the **.amap** file and path to the output folder.

```
  python converter.py PATH_TO_YOUR_MAP.amap OUTPUT_PATH/FILES_NAME
```

SCREENSHOT

Here is a screenshot of a single **.amap** file conversion:

SCREENSHOT

As far as there might be multiple files for converting you can convert the whole folder with files. The syntax for convertin several files is here: **forfiles** command can prosses several files. **/p** defines the path to the folder with **.amao** files, **/m**  sets the mask for files filtering, **/s** enables search in sub-folders, **/c** defines the command for each file. Here is a snippet of converting all **.amap** files in the directory **C:\Users\a1\Desktop\maps** and placing them into **C:\Users\a1\Desktop\amap-converter\result\all** folder:

```
  forfiles /p C:\Users\a1\Desktop\maps /m *.amap /s /c "cmd /c python C:\Users\a1\Desktop\amap-converter\converter.py @file C:\Users\a1\Desktop\amap-converter\result\all\/@fname"
```

After running this code the result will be similar to the one on the screenshot:

SCREENSHOT

**Note**: in the snippet were used *@file* and some other prompt variables. More information can be found on [technet.microsoft.com](https://technet.microsoft.com/en-us/library/cc753551(v=ws.10).aspx).

As far as the code doesn't limit the number or files for processing, we might need to place files for each map into separate folder. Here is a bit adjusted snippet for this purpose:

```
  forfiles /p C:\Users\a1\Desktop\maps /m *.amap /s /c "cmd /c python C:\Users\a1\Desktop\amap-converter\converter.py @file C:\Users\a1\Desktop\amap-converter\result\all\/@relpath\..\/@fname\/@fname"
```

The result for this code is here:

SCREENSHOT

### \*Unix

For Unix family of operation systems the process of **.amap** conversion works pretty much the same.

First of all, you need to install python 2.7.x. (which can be obtained from the official [download page](https://www.python.org/downloads/)). The installation isn't complete until the PC is rebooted.

