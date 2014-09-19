{:index 1}
Inserting Charts into WordPress controlled Sites 
===========
  
As far as WordPress is one of the most popular Content Management Systems, this page is fully devoted to all feature and aspects of AnyChart usage in WordPress controlled sites.

All necessary information, about first steps in AnyChart usage can be found in our [Quick Start](../Quick_Start/Quick_Start) page.

There are several ways of including AnyChart into web page. The easiest one is inserting JavaScript into page text. 




## Including AnyChart into WordPress without any plugins

So, first you'll have to open page editor and switch into Text Editing Mode and insert AnyChart JS, data and container. Chart container may be any size, by if there are no style settings for container, it would have zero height and zero width. 
<br/><br/>
![](http://cdn.anychart.com/images/wordpress/no_plugins.png)
Now the page is ready to be published. Let's preview and check, if everything looks fine and if there are no mistakes in data.
<br/><br/>
![](http://cdn.anychart.com/images/wordpress/preview.png)
<br/><br/>
EveryThing looks perfect. Page is ready to be used.
<br/><br/>
**Note:** Script tag with data have to contain no empty Lines. If there are any, WordPress will replace them with \<p> tag and all data would be corrupted. Ways of avoiding data corruption will be presented below.
 
## Chart data with disabled smart insert

WordPress provides you with variate of plugins for disabling smart insert. In the sample below was used "Raw HTML" plugin, but which of the smart insert disabling plugins was used plays no roll.

First of all. we have to install and activate plugin.
<br/><br/>
![](http://cdn.anychart.com/images/wordpress/pluging_activation.png)
<br/><br/>
After plugin activation. wrap data script with data into \[raw]...\[/raw] tag. Now you are free to use any number of empty lines you want. It will make no difference for chart visualisation but it may be of great help for feather data adjusting in this very chart, if there is a need.
<br/><br/>
![](http://cdn.anychart.com/images/wordpress/raw_html.png)
<br/><br/>
## Inserting AnyChart into Head of a Page

AnyChart can be used in any part of a page, but we do recommend to set data and JS link into a head of a page. There are quite a few plugin for inserting scripts into head. In the sample was used "Header and Footer Scripts" plugin. It can insert scripts in head for one page, or for the whole site. In the sample used both functions.
<br/><br/>
As the first step, insert AnyChart JS into head of every page, as it is shown below
<br/><br/>
![](http://cdn.anychart.com/images/wordpress/header_plugin.png)
<br/><br/>
At the second Step insert data for chart into the head of a page with a chart 
<br/><br/>
![](http://cdn.anychart.com/images/wordpress/header_script.png)
<br/><br/>
The chart is ready.