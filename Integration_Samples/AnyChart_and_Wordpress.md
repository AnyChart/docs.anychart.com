{:index 1}
Inserting Charts into WordPress controlled Sites 
===========
  
As far as WordPress is one of the most popular Content Management Systems on the net, here is an article about main 
features and aspects of AnyChart usage in WordPress controlled sites.
  
All necessary information, about first steps in AnyChart usage can be found on our 
[Quick Start](../Quick_Start/Quick_Start) page.

## Overview

Data visualisation is fast developing internet industry. Data visualisation rooted almost into any aspect of our life. 
As far as it's the most effective way of presenting information, every presentation and every information dashboard 
requires visualized information. Moreover, pretty designed dashboard makes any web-page even more beautiful.
  
  
Visualized data looks good as on a page of any blog writer, as it does on the page of a big company, such as microsoft 
or oracle.
  
  
<!--нагло спиздил с главной страницы-->
AnyChart is a flexible JavaScript (HTML5) based solution that allows you to create interactive and great looking 
charts. It is a cross-browser and cross-platform charting solution intended for everybody who deals with creation of 
dashboard, reporting, analytics, statistical, financial or any other data visualization solutions. PCs, Macs, iPhones, 
iPads, Android devices - AnyChart works everywhere, you'll get the same experience across any devices and browsers! 


## Integration AnyChart into a Page

There are several ways of including AnyChart into a web page:
 * without installation of any plugins, 
 * with disabling WordPress smart insert and 
 * with inserting all scripts into head tag of a page.
  
Also, as far as we may need data from other domain, we shall overview AJAX data request form. All mentioned points will 
be described below


## Including AnyChart into WordPress without any plugins

AnyChart complies all standards, that's why there are no problems with using it on any web-page or in any project. As 
for WordPress, it would take you few steps, to insert it into page. First you'll have to open page editor and switch 
into Text Editing Mode and insert AnyChart JS, data and container.
  
![](http://cdn.anychart.com/images/wordpress/no_plugins.png)
**Note:** Chart container may be any size, but if there are no style settings for container, it would have zero height 
and zero width.
  
  
That were minimum requests. What can be simpler? Now the page is ready to be published. Let's preview and check, if 
everything looks fine and if there are no mistakes in data.
  
![](http://cdn.anychart.com/images/wordpress/preview.png)
  
Everything looks perfect. the page is ready.
  
**Note:** Script tag with data have to contain no empty Lines. If there are any, WordPress will replace them with \<p> 
tag and all data would be corrupted. Ways of avoiding data corruption will be presented below.

## Chart data with disabled smart insert

Previous sample of AnyChart usage is quite continent. But in most cases, we may need a bit more. A simple dividing data 
into paragraphs may help you to get the purpose of any line in your data in no time. Very desirable <!-- !!!! -->object 
in some cases. It doesn't take much, to achieve this goal. 
  
WordPress provides you with variate of plugins for disabling smart insert. In the sample below was used "Raw HTML" 
plugin, but which of the smart insert disabling plugins was used plays no roll.
  
First of all. we have to install and activate plugin.
  
![](http://cdn.anychart.com/images/wordpress/pluging_activation.png)
  
After plugin activation. wrap data script with data into \[raw]...\[/raw] tag. Now you are free to use any number of 
empty lines you want. It will make no difference for chart visualisation but it may be of great help for feather data 
adjusting in this very chart, if there is a need.
  
![](http://cdn.anychart.com/images/wordpress/raw_html.png)
  
## Inserting AnyChart into Head of a Page

AnyChart can be used in any part of a page, but we do recommend to set data and JS link into a head tag of a page. 
There are quite a few plugin for inserting scripts into head. In the sample was used "Header and Footer Scripts" plugin.
 It can insert scripts in head for one page, or for the whole site. In the sample used both functions.
  
As the first step, insert AnyChart JS into head of every page, as it is shown below:
  
![](http://cdn.anychart.com/images/wordpress/header_plugin.png)
  

At the second Step insert data for chart into the head of a page with a chart 
  
![](http://cdn.anychart.com/images/wordpress/header_script.png)
  
The chart is ready.