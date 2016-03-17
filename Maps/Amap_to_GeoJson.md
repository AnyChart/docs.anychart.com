{:index 5}

# Amap to GeoJson

* [Overview](#overview)
* [Installation](#installation)
 * [Windows](#windows_install)
 * [Unix](#unix_install)
* [Converting](#converting)
 * [Single File](#single_file)
 * [Multiple Files](#multiple_files)

## Overview

This Python-based converter allows you to convert any AnyMap 4.x, 5.x and 6.x **amap** map source files to AnyMap 7.x GeoJSON based JavaScript, pure GeoJSON and SHP format.  
  
You might have obtained .amap files from [the set of maps AnyChart provided with old versions](http://6.anychart.com/products/anychart/mapList/index.php) or created yourself with [AnyChart SHP to AMAP Converter](http://6.anychart.com/products/anymap/converter/).  
  
AnyChart 7.x maps collection can be found in [AnyChart CDN Maps Collection](https://cdn.anychart.com/#maps-collection).  
  
Converter generates AnyMap 7.x GeoJSON based JavaScript (.js), pure GeoJSON (.json) and SHP (.shp, .shx and .dbf) formats in the specified output folder.  
  
After you converted .amap file you can [use .js or .json files directly in the new HTML5 AnyMap](http://docs.anychart.com/7.9.1/Maps/Quick_Start) or tune .json or .shp files further as described in [AnyMap Custom GeoJSON Maps Tutorial](http://docs.anychart.com/7.9.1/Maps/Custom_GeoJson_Maps).

## Installation
<a name="windows_install">
### Windows

First of all, you need to download the converter. The converter can be downloaded from the [github page of AMAP to JSON converter](https://github.com/AnyChart/amap-converter).  
  
As far as this is a Python-based converter, you need to install Python in your system. This converter requires Python version 2.7.x, which can be obtained from the official [download page](https://www.python.org/downloads/).  
  
**Note**: it is strongly recommended to add python.exe to Path while Python installation.
  
<a href="http://static.anychart.com/images/amap-converter/python-install.jpg" target=_blank><img width = "400" src = "http://static.anychart.com/images/amap-converter/python-install.jpg"></a>

PC reboot is required to finish Python installation.  
  
After you've installed the Python on your PC you need to install all requirements for the the converter. To do it you need to run Command Prompt and switch into converter's folder:

```
  cd %PATH_TO_THE_FOLDER%
```

Here is a sample of switching into another folder in Command Prompt.

<a href="http://static.anychart.com/images/amap-converter/change-directory.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/change-directory.jpg"></a>

Now, we need to launch the process of installing requirements. Run the following command:

```
  pip install -r requirements
```

After all the requirements are installed you will see same message as shown the screenshot below

<a href="http://static.anychart.com/images/amap-converter/pip-install.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/pip-install.jpg"></a>

<a name="unix_install">
### Unix

The process of installing converter in operation systems of the Unix family works almost in the same as for Windows. You need to download and install the Python version 2.7.x which can be download from [official web site](https://www.python.org/downloads/) and the converter itself from the [github](https://github.com/AnyChart/amap-converter).  
  
Then you install requirements. You need to launch the terminal and switch into the converter's directory. It can be easily done by using cd command:

```
  cd PATH_TO_THE_CONVERTER
```

Run the following command to launch installation of requirements:

```
  pip install -r requirements
```

Now we can proceed to converting AMAP files to JSON format.

## Converting

### Single File

Conversion of .amap files works the same in all the systems: you need to switch to the converter's folder and run the following command:

```
  python converter.py PATH_TO_YOUR_MAP.amap OUTPUT_PATH\FILES_NAME
```

<a href="http://static.anychart.com/images/amap-converter/single-file-windows.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/single-file-windows.jpg"></a>

Here is a screenshot of a converted **.amap** file:

<a href="http://static.anychart.com/images/amap-converter/single-file-result-windows.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/single-file-result-windows.jpg"></a>

### Multiple Files

There is a special script to convert several files at once. There are two different scripts for converting multiple **.amap** files: **windows_convert-batch.bat** file works for Windows system and **convert-batch** file for Unix-like systems.

For converting multiple there is a special script. As far as Windows and Unix-like systems are quite different and can't process same scripts, there are two different file for converting multiple **.amap** files: **windows_convert-batch.bat** file works for Windows system and **convert-batch** file for Unix-like systems.  
  
The way of converting multiple files in both systems is the same: in terminal (for Unix-like systems) or command prompt (for Windows) write the path to the script, the path to the folder with .amap files and a path for the converted files.
  
  
####Unix systems

```
  ./convert-batch src-folder output-folder
```

Converting a folder with **amap** files in UNIX:

<a href="http://static.anychart.com/images/amap-converter/batch-convert.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/batch-convert.jpg"></a>

If the source folder for the conversion is:

<a href="http://static.anychart.com/images/amap-converter/batch-convert-source.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/batch-convert-source.jpg"></a>

The output folder will contains several folders with these files in each of the folders:

<a href="http://static.anychart.com/images/amap-converter/batch-convert-result-unix.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/batch-convert-result-unix.jpg"></a>

####Windows

```
  windows_convert-batch.bat src-folder out-folder
```
The result folder in Windows may look like this:

<a href="http://static.anychart.com/images/amap-converter/batch-convert-result-windows.jpg" target=_blank><img width = "700" src = "http://static.anychart.com/images/amap-converter/batch-convert-result-windows.jpg"></a>
