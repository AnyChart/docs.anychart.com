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
  
<a href="https://pp.vk.me/c627831/v627831947/3f2ed/YrBmGHLYlCo.jpg" target=_blank><img width = "400" src = "https://pp.vk.me/c627831/v627831947/3f2ed/YrBmGHLYlCo.jpg"></a>

PC reboot is required to finish Python installation.  
  
After successful installation of the Python on your PC you need to install all the requirements for the appropriate work of the converter. To do it you need to run Command Prompt and switch into converter's folder:

```
  cd %PATH_TO_THE_FOLDER%
```

He is a sample of switching into another folder in Command Prompt.

<a href="https://pp.vk.me/c627831/v627831947/3f2f6/V9FpvxJSkcU.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f2f6/V9FpvxJSkcU.jpg"></a>

Now, we need to launch the process of requirements installation. Run the following command to do it:

```
  pip install -r requirements
```

After all the requirements are installed you will see same message as on the screenshot below

<a href="https://pp.vk.me/c627831/v627831947/3f328/8ac0YOKGGEA.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f328/8ac0YOKGGEA.jpg"></a>

<a name="unix_install">
### Unix

The process of converter installation into an operation system of the Unix family works almost in the same as for Windows. First of all you need to download and install the Python version 2.7.x which can be download from [official web site](https://www.python.org/downloads/) and the converter itself from the [github](https://github.com/AnyChart/amap-converter).  
  
Second step is installation of all requirements. You need to launch the terminal and switch into the converter's directory. It can be easily done by using **cd** command:

```
  cd PATH_TO_THE_CONVERTER
```

Run the following code to launch the process of requirements intallation:

```
  pip install -r requirements
```

Now, we may proceed to the process of files conversion.

## Converting

### Single File

Conversion of an .amap file works the same in all the systems: you need to switch into the converter's folder and run the following code:

```
  python converter.py PATH_TO_YOUR_MAP.amap OUTPUT_PATH\FILES_NAME
```

<a href="https://pp.vk.me/c627831/v627831947/3f332/NDBR4IuMg0g.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f332/NDBR4IuMg0g.jpg"></a>

Here is a screenshot of a converted **.amap** file:

<a href="https://pp.vk.me/c627831/v627831947/3f33c/bkE-VDU\_MoE.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f33c/bkE-VDU\_MoE.jpg"></a>

### Multiple Files

For converting multiple there is a special script. As far as Windows and Unix-like systems are quite different and can't process same scripts, there are two different file for converting multiple **.amap** files: **windows_convert-batch.bat** file works for Windows system and **convert-batch** file for Unix-like systems.  
  
The way of converting multiple files in both systems is the same: in terminal (for Unix-like systems) or command prompt (for Windows) write the path to the script, the path to the folder with .amap files and a path for the converted files.
  
  
####Unix systems

```
  ./convert-batch src-folder output-folder
```

Here is a screenshot of converting a folder with **amap** files:

<a href="https://pp.vk.me/c627831/v627831947/3f36e/Bc7cHCelBHY.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f36e/Bc7cHCelBHY.jpg"></a>

The source folder for conversion were:

<a href="https://pp.vk.me/c627831/v627831947/3f378/qs1pRlCCPM0.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f378/qs1pRlCCPM0.jpg"></a>

And the output folder contains these files:

<a href="https://pp.vk.me/c627831/v627831947/3f38c/85dyMNs2qgo.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f38c/85dyMNs2qgo.jpg"></a>

####Windows

```
  windows_convert-batch.bat src-folder out-folder
```
The result for Windows:

<a href="https://pp.vk.me/c627831/v627831947/3f364/Qorv7FwMzR4.jpg" target=_blank><img width = "700" src = "https://pp.vk.me/c627831/v627831947/3f364/Qorv7FwMzR4.jpg"></a>
