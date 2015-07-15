# Themes

* [Overview](#overview)
 * [Themes Explained](#themes_explained)
* [Create Theme](#create_theme)
* [Internal Themes](#internal_themes)
* [External Themes](#external_themes)
* [Multiple Chart Types](#multiple_chart_types)
* [Themes Use in Dashboard Mode]

##Overview

To simplify visual adjustment of charts AnyChart provides "AnyChart Themes" technique. Chart themes is a named preset for some of the chart settings.
  
  
In this tutorial we will explain what themes can be used for and how they can be used.
  
###Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reuse in another charts that should look the same way.
  
  
AnyChart provides two default themes and one of them the default them from sixth version of AnyChart.............
  
  
This type of chart will be widely used on your site, so you just store it in some js file and when you need such chart you just specify what them should be used - you don't need to configure chart again and copy-paste settings from one place to another.
<!--
Another example of themes use - you can create several themes that configure different chart look (colors, border, etc.), store them in a single file and then you can choose how chart should look like (depending on users choice, for example).
-->
##Create Theme

The best way to create a theme is to create variable with all desirable chart settings. Every possible them adjustment can be found in api.
  
  
Suppose you will create such charts many times, and all of them will have the same axes and chart titles.

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

You can predefine these settings in themes and use it anytime you want with minimum code lines. Below is the snippet of variable that contains AnyChart theme.

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

Now, when simple them is ready we will learn where we can store them and how to apply them.

##Internal Themes

You can store your theme within chart code:

```
  // create variable for custom theme
  var customTheme = {
    // define settings for bar charts
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
        "title": "Sales"
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
  
  // apply theme
  anychart.theme(customTheme);
  
  var chart = anychart.bar();
  chart.bar(data);
  chart.container("container");
  chart.draw();
```

Sample chart using internal theme, click "Launch in playground" to view JS settings:

{sample}AS\_Themes\_01{sample}

##External Themes

Next, you can create a file with templates and use it to store settings for the chart.

*Note:* Do not forget to set the link to the file with theme into the <head> tag of your page:

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

        var chart = anychart.bar();
        chart.bar(data);
        chart.container("container");
        chart.draw();
      });
    </script>
  </head>
```

In this case the content of custom_theme.js should be similar to the snippet below

```
  var customTheme = {
    "bar": {
      "title": "Bar Chart",
      "defaultXAxisSettings": {
        "title": "Retail Channel"
      },
      "defaultYAxisSettings": {
        "title": "Sales"
      }
    }
  };
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