{:index 1}
Inserting Charts into WordPress Controlled Site 
===========
  
* [Overview](#overview)
* [Integration](#integration)
 * [Including AnyChart into WordPress without Any Plugins](#including_anychart_into_wordpress_without_any_plugins)
 * [Chart Data with Disabled Smart Insert](#chart_data_with_disabled_smart_insert)
 * [Inserting AnyChart into Head of a Page](#inserting_anychart_into_head_of_a_page)
 * [Requesting Data from JSON File](#requesting_data_from_json_file)
  
  
As far as WordPress is one of the most popular Content Management Systems on the net, here is an article about main 
features and aspects of AnyChart usage in WordPress controlled sites.
  
All necessary information, about first steps in AnyChart usage can be found on our 
[Quick Start](../Quick_Start/Quick_Start) page.

## Overview

Data visualisation is fast developing internet industry. It has rooted almost into any aspect of our life. 
As far as it's the most effective way of presenting information, every presentation and every information dashboard 
requires visualized information. Moreover, pretty designed dashboard makes any web-page even more beautiful.
  
  
Visualized data looks as good on a page of a blog writer, as it does on a page of a big company, such as Microsoft 
or Oracle.
  
  
AnyChart is a flexible JavaScript (HTML5) based solution that allows you to create interactive and great looking 
charts. It is a cross-browser and cross-platform charting solution intended for everybody who deals with creation of 
dashboard, reporting, analytics, statistical, financial or any other data visualization solutions. PCs, Macs, iPhones, 
iPads, Android devices - AnyChart works everywhere, you'll get the same experience across any devices and browsers! 

## Integration

There are several ways of including AnyChart into a web page:
 * without installation of any plugins, 
 * with disabling WordPress smart insert and 
 * with inserting all scripts into head tag of a page.
  
Also, as far as we may need data from other domain, we shall overview AJAX data request form. All mentioned points are 
described below

### Including AnyChart into WordPress without Any Plugins

AnyChart complies all standards, which leads to avoiding any problems with integration into any web-page or in any project. As 
for WordPress, it would take you few steps, to insert AnzChart into a page. First you'll have to open **page editor** and switch 
into **Text Editing Mode** and insert AnyChart JS, some data and set chart container.

![](https://photos-2.dropbox.com/t/1/AACeJRihykr5LXHzddDiJ-ms7TkOP9VkznjbbrkTR35seA/12/272497567/png/1024x768/3/1411966800/0/2/no_plugins.PNG/eIXAMiSdn0ufUkuq2wZb_b3cKfahm66XTQzG5YDu2Js)

**Note:** Chart container may be any size, but if there are no style settings for container, it would have zero height 
and zero width.
  
  
That were minimum requests. What can be simpler? Now the page is ready to be published. Let's preview and check, if 
everything looks fine and if there are no mistakes in data.

![](https://photos-6.dropbox.com/t/1/AACNtVWzhQTqJAyWt2MsCagFRNH1NYDiYwvIYvZXyEyuGQ/12/272497567/png/1024x768/3/1411966800/0/2/preview.PNG/C3bypdoYwKnU5_sUTUvvUID2xBv0LWsPN57m4myFVhk)

Everything looks perfect. the page is ready.
  
  
**Note:** Script tag with data have to contain no empty Lines. If there are any, WordPress will replace them with \<p> 
tag and all data would be corrupted. Some ways of avoiding data corruption are presented below.

### Chart Data with Disabled Smart Insert

Previous sample of AnyChart usage is quite convenient. But in most cases, we may need a bit more. A simple dividing data 
into paragraphs may help to get the functionality of any line in your data in no time. Comments are very desirable in 
some cases. It doesn't take much, to achieve this goal. 
  
  
WordPress provides you with variate of plugins for disabling smart insert. In the sample below was used "Raw HTML" 
plugin, but which of the smart insert disabling plugins was used plays no roll.
  
  
First of all. we have to install and activate plugin.

![](https://photos-4.dropbox.com/t/1/AADhSjo4Lj2bRfOutOAlDC5QBagiWNthg6QBc6UsHDlblg/12/272497567/png/1024x768/3/1411966800/0/2/pluging_activation.PNG/ogUhcbujMT8dDzMlfBwNCVc-uZW1mDveSw68Y3fLVi4)

After plugin activation. wrap data script with data into \[raw]...\[/raw] tag. Now you are free to use any number of 
empty lines you want. It will make no difference for chart visualisation but it may be of a great help for feather data 
adjusting in this very chart.

![](http://cdn.anychart.com/images/wordpress/raw_html.png)

### Inserting AnyChart into Head of a Page

AnyChart can be used in any part of a page, but we do recommend to set data and JS link into a head tag of a page. 
There are quite a few plugin for inserting scripts into head. In the sample below was used "Header and Footer Scripts" 
plugin. It can insert scripts in head for one page, or for the whole site. In the sample used both functions.
  
  
As the first step, insert AnyChart JS into head of every page, as it is shown below:

![](http://cdn.anychart.com/images/wordpress/header_plugin.png)

At the second Step insert chart data into the head of a page with a chart 

![](http://cdn.anychart.com/images/wordpress/header_script.png)

The chart is ready.
  
  
In common, AnyChart link and container setting are set at the header for any page of a site could contain chart 
without unnecessary manipulations and data can be placed in a head of a page.

### Requesting Data from JSON File

As far as AnyChart is based on JavaScript, it is possible to use any JavaScript feature. One of the most popular is 
requesting data from JSON file. A JSON file may be on any domain, any public host. The easiest way to get JSON and 
parse it is through jQuary library. Below is a sample of getting and parsing  data of the [JSON file](http://cdn.anychart.com/data/wordpress_article_data.json)
  
(img)
  
As you can see, we've used ajax post request to get data, adjusted some settings and started AnyChart function after 
successful getting of the data. 
  
  (img)
  
As a result, we may see a pretty chart, based on data from JSON file.
