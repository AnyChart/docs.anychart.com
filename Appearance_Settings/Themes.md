# Themes

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [International Symbols](#international_symbols)
* [HTML](#html)
  * [Supported tags](#supported_tags)
* [Text Formatting](#text_formatting)

##Overview

To simplify visual adjustment of charts AnyChart provides "AnyChart Themes" technique. 
Chart themes is a named preset for some of the chart settings.
  
In this tutorial we will explain what themes can be used for and how they can be used.
  
###Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reuse in another charts that should look the same way.
  
AnyChart provides two default themes and one of them ......
  
  
This type of chart will be widely used on your site, so you just store it in some js file and when you need such chart you just specify what them should be used - you don't need to configure chart again an copy-paste settings from one place to another.

Another example of themes use - you can create several themes that configure different chart look (colors, border, etc.), store them in a single file and then you can choose how chart should look like (depending on users choice, for example).

##Create Theme

The best way to create a theme is to create variable with settings in JSON format. 


create a desired chart, then choose what parts of its settings should be included into template and then - move them there.

For example, you've took a sample Bar Chart from Bar Chart Tutorial, its code look like that:

```
  // data
  var data = anychart.data.set([
    ["Department Stores", 637166],
    ["Discount Stores", 721630],
    ["Men's/Women's Specialty Stores", 148662],
    ["All other outlets", 90000]
  ]);

  // chart type
  var chart = anychart.bar();

  // set title
  chart.title("Bar Chart");

  // set axes titles
  var xAxis = chart.xAxis();
  xAxis.title("Retail Channel");
  var yAxis = chart.yAxis();
  yAxis.title("Sales");

  // set data
  chart.bar(data);
```

Suppose you will create such charts many times, and all of them will have the same axes and chart titles, so you want to move to the theme these settings:

```
  chart.title("Bar Chart");
  var xAxis = chart.xAxis();
  xAxis.title("Retail Channel");
  var yAxis = chart.yAxis();
  yAxis.title("Sales");
```

So, the theme should look like that (we will name it "Custom Theme"):

```
  // create variable for custom theme
  var customTheme = {
    // define settings for bsr charts
    "bar": {
      // set chart title
      "title": "Bar Chart",
      // settings for default x axis
      "defaultXAxisSettings": {
        // set x axis title
        "title": "Retail Channel"
      },
      // settings for default y axis
      "defaultYAxisSettings": {
        // set axis name
        "title": 'Sales'
      }
    }
  };
```

Now, when template is ready we will learn where we can store them and how to apply them.

##Internal Themes

You can store your theme within chart code:

```
  // create variable for custom theme
  var customTheme = {
    // define settings for bsr charts
    "bar": {
      // set chart title
      "title": "Bar Chart",
      // settings for default x axis
      "defaultXAxisSettings": {
        // set x axis title
        "title": "Retail Channel"
      },
      // settings for default y axis
      "defaultYAxisSettings": {
        // set axis name
        "title": 'Sales'
      }
    }
  };
  
  // data
  var data = anychart.data.set([
    ["Department Stores", 637166],
    ["Discount Stores", 721630],
    ["Men's/Women's Specialty Stores", 148662],
    ["All other outlets", 90000]
  ]);
  
  anychart.theme(customTheme);
  
  var chart = anychart.bar();
  chart.bar(data);
  
  // draw chart
  chart.container("container");
  chart.draw();
```

Sample chart using internal theme, click to view live sample and JS settings:

{sample}AS\_Themes\_01{sample}

##External Themes

Next, you can create a file with templates and use it to store settings for the chart.

Do not forget to set the link to the file with theme into the <head> tag of your page:

```
  <head>
    <!--Link to file with custom theme-->
    <script src="custom_theme.js"></script>
    <script>
      anychart.onDocumentReady(function() {
        // data
        var data = anychart.data.set([
          ["Department Stores", 637166],
          ["Discount Stores", 721630],
          ["Men's/Women's Specialty Stores", 148662],
          ["All other outlets", 90000]
        ]);
      
        // apply custom theme
        anychart.theme(customTheme);
      
        // set chart type
        var chart = anychart.bar();
        // set data
        chart.bar(data);
      
        // set container and draw chart
        chart.container("container");
        chart.draw();
      });
    </script>
  </head>
```

##Multiple Chart Types

As far as the main goal of AnyChart themes is to simplify the process of chart creation one theme can store settings for several chart types. 

```
  var customTheme = {
    // settings for bar charts
    "bar": {
      "title": "Bar Chart"
    },
    // settings for column charts
    "column": {
      "title": "Column Chart"
    }
  };
```

Below is a sample of two charts with minimal settings and a predefined theme with title settings.

{sample}AS\_Themes\_02{sample}

##Themes Use in Dashboard Mode

In the sample below a table contain several charts. Most settings of these charts are predefined in them. It is very convenient as far as all these charts have many alike settings. Click "Launch in playground" to examine the code of the sample.

{sample :width 690 :height 680}AS\_Themes\_03{sample}
