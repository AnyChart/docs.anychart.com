{:index 1}
Inserting Charts into WordPress controlled Sites 
===========
  
As far as WordPress is one of the most popular Content Management Systems, this page is fully devoted to all feature and aspects of AnyChart usage in WordPress controlled sites.

All necessary information, about first steps in AnyChart usage can be found in our [Quick Start](./Quick_Start) page.

There are several ways of including AnyChart into web page. The easiest one is inserting JavaScript into page text. 

## Including AnyChart into WordPress without any plugins

So, first you'll have to open page editor:

[](img)

Switch into Text Editing Mode and insert AnyChart JS, data and container.
[](img)
That's all. Now you may preview the page. Chart is already in it
[](img)
**Note:** Script tag with data have to contain no empty Lines. If there are any, WordPress will replace them with \<p> tag and all data would be corrupted. Ways of avoiding data corruption will be presented below.
 
## Chart data with disabled smart insert

WordPress provides you with variate of plugins for disabling smart insert. In the sample below was used "Raw HTML" plugin, but which of the smart insert disabling plugins was used plays no roll.

First of all. we have to install and activate plugin.
[](img)

After plugin activation. wrap data script with data into \[raw]...\[/raw] tag. Now you are free to use any number of empty lines you want. It will make no difference for chart visualisation but it may be of great help for feather data adjusting in this very chart, if there is a need.

[](img)

## Inserting AnyChart into Head of a Page

AnyChart can be used in any part of a page, but we do recommend to set data and JS link into a head of a page. There are quite a few plugin for inserting scripts into head. In the sample was used "Header and Footer Scripts" plugin. It can insert scripts in head for one page, or for the whole site. In the sample used both functions.

As the first step, insert AnyChart JS into head of every page, as it is shown below
[](img)

At the second Step insert data for chart into the head of a page with a chart 
[](img)

The chart is ready.



















AnyChart can be used in any page. In this section we will take a closer look at all aspects of using chart on sites, controlled with WordPress Content Management System.

WordPress 

As far as WordPress uses auto-correction (also called smart quotes), we have to follow o

## 3 simple steps to start using AnyChart
###1. Include AnyChart into your web page
Include the JavaScript file in the `<head>` section of your web page.  
You can use CDN as shown below or visit the [download page](./Downloading_AnyChart).  
```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```
###2. Create a container for the chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart uses 100% of the container if other behaviour is not specified. 
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```  
###3. Create a chart
Add the JavaScript tag `<script>` with the following code anywhere in the  page. 
This code example uses JavaScript API to create a chart, but you also can use JSON or XML format. See [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) to learn more about supported formats.
Example:
```
<script>
    anychart.onDocumentLoad(function() {
        var chart = anychart.pieChart([ //create an instance of a pie chart with data
            ['Chocolate paste', 5],
            ['White honey', 2],
            ['Strawberry jam', 2],
            ['Сondensed milk', 1]
        ]);
        chart.title('The kind of pancakes preferred at the Sochi 2014 Olympic Games');
        chart.container('container'); // pass the container id, chart will be displayed there
        chart.draw(); // call the chart draw() method to initiate chart display
    });
</script>
```
  
## The result
###See the result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.
{sample}quick\_start\_pie{sample}
###Full source code
You can copy this to a file on your computer and open it in your browser to display the pie chart shown above:  
```
<!doctype html>
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
    <script>
        anychart.onDocumentLoad(function() {
            var chart = anychart.pieChart([ //create an instance of pie chart with data
                ['Chocolate paste', 5],
                ['White honey', 2],
                ['Strawberry jam', 2],
                ['Сondensed milk', 1]
            ]);
            chart.title('The kind of pancakes preferred at the Sochi 2014 Olympic Games');
            chart.container('container'); //pass the container where chart will be drawn
            chart.draw(); //call the chart draw() method to initiate chart drawing
        });
    </script>
</head>
<body>
	<div id="container" style="width: 500px; height: 400px;"></div>
</body>
</html>
```
  
## Further Steps
### Learn more
* Explore [JavaScript API Reference](http://api.anychart.com/)
* See [Playground demos](http://playground.anychart.com/)

### Subscribe
* Follow us on [Facebook](https://www.facebook.com/AnyCharts) and [Twitter](https://twitter.com/intent/follow?&screen_name=anychart&original_referer=http%3A%2F%2Fdocs.anychart.com)
* Read the [blog](http://www.anychart.com/blog/)



