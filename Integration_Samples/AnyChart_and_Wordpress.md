{:index 1}
Adding Charts into WordPress
===========
  
* [Overview](#overview)
* [Integration](#integration)
 * [Including AnyChart into WordPress without any Plugins](#including_anychart_into_wordpress_without_any_plugins)
 * [Chart Data with Disabled Smart Insert](#chart_data_with_disabled_smart_insert)
 * [Inserting AnyChart into Head of a Page](#inserting_anychart_into_head_of_a_page)
 * [Requesting Data from JSON File](#requesting_data_from_json_file)
  
  
WordPress is one of the most popular Content Management Systems out there, here is an article about main features and aspects of AnyChart usage in WordPress controlled sites.
  
All necessary information, about first steps in AnyChart usage can be found on our  [Quick Start](../Quick_Start/Quick_Start) page.

## Overview

Data visualisation is a fast developing internet industry. It has rooted almost into any aspect of our life. 
As far as it's one of the most effective way of presenting information, every presentation and every information dashboard  requires visualized information. Moreover, pretty designed dashboard makes any web-page even more beautiful.
  
Visualized data looks as good on a page of a blog writer, as it does on a page of a big company, such as Microsoft or Oracle.
  
AnyChart is a flexible JavaScript (HTML5) based solution which allows you to create interactive and great looking  charts. It is a cross-browser and cross-platform charting solution intended for everybody who deals with creation of  dashboard, reporting, analytics, statistical, financial or any other data visualization solutions. PCs, Macs, iPhones, iPads, Android devices - AnyChart works everywhere, you'll get the same experience across any devices and browsers! 

## Integration

There are several ways of including AnyChart into a web page:
 * without installation of any plugins, 
 * with disabling WordPress smart insert and 
 * with inserting all scripts into head tag of a page.
  
Also, as far as we may need data from other domain, we shall overview AJAX data request form. All mentioned options are described below

### Including AnyChart into WordPress without Any Plugins

AnyChart complies all standards, which leads to avoiding any problems with integration into any web-page or in any project. Asfor WordPress, it would take you few steps to insert AnyChart into a page. First you'll have to open **page editor** and switch into **Text Editing Mode** and insert AnyChart JS, some data and set chart container.
  
  
![](http://cs624320.vk.me/v624320947/2a33/cTHQT-3NOjE.jpg)
  
  
**Note:** Chart container may be any size, but if there are no style settings for container, it would have zero height and zero width.
  
That's basically all! What can be simpler? Now the page is ready to be published. Let's preview and check if 
everything looks fine and if there are any mistakes in data.
  
  
![](http://cs624320.vk.me/v624320947/2a43/K9aqJ-t0KbY.jpg)
  
  
Everything looks perfect, the page is ready.
  
  
**Note:** Script tag with data have to contain no empty lines. If there are any, WordPress will replace them with &lt;p&gt; tag and all data will be corrupted. Some ways of avoiding data corruption are presented below.

### Chart Data with Disabled Smart Insert

Previous sample of AnyChart usage is quite convenient. But in most cases, we may need a bit more. A simple dividing data  into paragraphs may help to get the functionality of any line in your data in no time. Comments are very desirable in  some cases. It doesn't take much to achieve this goal. 
  
WordPress provides you with a number of plugins to disable smart insert. In the sample below we used "Raw HTML" 
plugin, but id doesn't matter which of smart insert disabling plugins is used.
  
First of all, we have to install and activate plugin.
  
![](http://cs624320.vk.me/v624320947/2a3b/mLa14vSx8qY.jpg)

After plugin activation. wrap data script with data into \[raw]...\[/raw] tag. Now you are free to use any number of 
empty lines you want. It will make no difference for chart visualisation but it may be of a great help for feather data adjusting in this very chart.

![](https://pp.vk.me/c625427/v625427947/5853/atwXSSytyNA.jpg)
  
### Inserting AnyChart into Head of a Page

AnyChart can be used in any part of a page, but we do recommend to set data and JS link into a head tag of a page. 
There are quite a few plugin for inserting scripts into head. In the sample below was used "Header and Footer Scripts" plugin. It can insert scripts in head for one page, or for the whole site. In the sample used both functions.
  
As the first step, insert AnyChart JS into head of every page, as it is shown below:
  
![](http://cs624320.vk.me/v624320947/2a53/filH2a7m6NA.jpg)
  
At the second step insert chart data into the head of a page with a chart 
  
![](http://cs624320.vk.me/v624320947/2a5b/zmelVycMBn0.jpg)
  
The chart is ready.

In common, AnyChart link and container setting are set at the header for any page of a site could contain chart 
without unnecessary manipulations and data can be placed in a head of a page.

### Requesting Data from JSON File

AnyChart is a pure on JavaScript library, it is possible to use any JavaScript feature. One of the most popular is 
requesting data from JSON file. A JSON file can be on any domain, any public host. The easiest way to get JSON and 
parse it is through jQuery library. Below is a sample of getting and parsing  data of the [JSON file](http://static.anychart.com/data/wordpress_article_data.json)
  
![](https://pp.vk.me/c625427/v625427947/5723/Mx7_-8LM2Y8.jpg)

As you can see, we've used AJAX post request to get data, adjusted some settings and started AnyChart function after successful getting of the data. 
  
![](http://cs624320.vk.me/v624320947/2a2b/liCrq1hq8Hg.jpg)
  
As a result, we see a pretty chart based on data from JSON file.
