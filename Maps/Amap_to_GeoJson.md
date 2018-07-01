{:index 6}

# Amap to GeoJson

## Overview

This Python-based converter allows you to convert any AnyMap 4.x, 5.x and 6.x **amap** map source files to AnyMap 7.x GeoJSON based JavaScript, pure GeoJSON and SHP format.  
  
You might have obtained .amap files from [the set of maps AnyChart provided with old versions](http://6.anychart.com/products/anychart/mapList/index.php) or created yourself with [AnyChart SHP to AMAP Converter](http://6.anychart.com/products/anymap/converter/).  
  
AnyChart 7.x maps collection can be found in [AnyChart CDN Maps Collection](https://cdn.anychart.com/).  
  
Converter generates AnyMap 7.x GeoJSON based JavaScript (.js), pure GeoJSON (.json) and SHP (.shp, .shx and .dbf) formats in the specified output folder.  
  
After you converted .amap file you can [use .js or .json files directly in the new HTML5 AnyMap](Quick_Start) or tune .json or .shp files further as described in [AnyMap Custom GeoJSON Maps Tutorial](Custom_GeoJson_Maps).

## Installation

### Windows

First of all, you need to download the converter from the [github page of AMAP to JSON converter](https://github.com/AnyChart/amap-converter).  
  
As far as this is a Python-based converter, you need to install Python version 2.7.x  which can be obtained from the official [Python download page](https://www.python.org/downloads/).  
  
**Note**: it is strongly recommended to add python.exe to Path during the installation:
  
<a href="https://static.anychart.com/images/amap-converter/python-install.jpg" target="_blank"><img width = "400" src = "https://static.anychart.com/images/amap-converter/python-install.jpg"></a>

Reboot your system to finish Python installation.  
  
After you've installed Python on your PC you need to install all requirements for the converter. Run Command Prompt and switch to converter's folder:

```
cd PATH\TO\THE\FOLDER
```

Here is a sample of switching to another folder in Command Prompt:

<a href="https://static.anychart.com/images/amap-converter/change-directory.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/change-directory.jpg"></a>

Then launch the process of installing requirements, run the following command:

```
pip install -r requirements
```

After all the requirements are installed you will see the message as the screenshot below shows:

<a href="https://static.anychart.com/images/amap-converter/pip-install.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/pip-install.jpg"></a>

### Unix

The process of installing converter in operation systems of the Unix family works almost in the same as for Windows. You need to download and install Python version 2.7.x from [official Python web site](https://www.python.org/downloads/) and the converter itself from the [AMAP to JSON Converter github page](https://github.com/AnyChart/amap-converter).  
  
Then you install requirements. You need to launch the terminal and switch to the converter's directory:

```
cd PATH\TO\THE\CONVERTER
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
python converter.py PATH\TO\YOUR\MAP\sample.amap OUTPUT_PATH\FILE_NAME
```

<a href="https://static.anychart.com/images/amap-converter/single-file-windows.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/single-file-windows.jpg"></a>

Here is a screenshot of a converted **.amap** file:

<a href="https://static.anychart.com/images/amap-converter/single-file-result-windows.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/single-file-result-windows.jpg"></a>

### Multiple Files

There is a special script to convert files in batch. There are two different scripts for batch conversion: **windows_convert-batch.bat** - for Windows system and **convert-batch** - for Unix-like systems.

The way of converting multiple files in both systems is pretty much the same: launch the script in termnial and provide it with a path to a folder with .amap files and a path for the converted files.
  
  
#### Unix systems

```
./convert-batch src-folder output-folder
```

Converting a folder with **amap** files in UNIX:

<a href="https://static.anychart.com/images/amap-converter/batch-convert.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/batch-convert.jpg"></a>

If the source folder for the conversion is:

<a href="https://static.anychart.com/images/amap-converter/batch-convert-source.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/batch-convert-source.jpg"></a>

The output folder will contain several folders with files like these:

<a href="https://static.anychart.com/images/amap-converter/batch-convert-result-unix.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/batch-convert-result-unix.jpg"></a>

#### Windows

```
windows_convert-batch.bat src-folder out-folder
```
The result folder in Windows may look like this:

<a href="https://static.anychart.com/images/amap-converter/batch-convert-result-windows.jpg" target="_blank"><img width = "700" src = "https://static.anychart.com/images/amap-converter/batch-convert-result-windows.jpg"></a>