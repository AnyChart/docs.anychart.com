# Themes

* [Overview](#overview)
 * [Themes Explained](#themes_explained)
* [Create Theme](#create_theme)
* [Internal Themes](#internal_themes)
* [External Themes](#external_themes)
* [Multiple Chart Types](#multiple_chart_types)
* [Themes Use in Dashboard Mode](#themes_use_in_dashboard_mode)
* [AnyChart 6.x, 7.0.0 to 7.5.1 look to AnyChart 7.6 Conversion](#anychart_6.x,_7.0.0_to_7.5.1_look_to_anychart_7.6_conversion)

##Overview

To simplify visual adjustment of charts AnyChart provides "AnyChart Themes" technique. Chart theme is a named preset for some of the chart settings.
  
  
In this tutorial we will explain what themes are used for and how they are used.
  
###Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reuse settings in another charts that should look the same way.
  
  
AnyChart provides two default themes and one of them is the default them from AnyChart 5.x, 6.x    .............
  
  
If this some chart type is used widely on your site, you can store settings in a js file and then use theme when needed - no need to configure chart again and copy-paste settings from one place to another.
<!--
Another example of themes use - you can create several themes that configure different chart look (colors, border, etc.), store them in a single file and then you can choose how chart should look like (depending on users choice, for example).
-->
##Create Theme

The best way to create a theme is to create variable with all desirable chart settings. Every possible theme adjustment can be found in {api:anychart#themes}**api**{api}.
  
  
Suppose you want to create such charts many times, and all of them will use the same axes and chart titles.

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

You can predefine these settings in theme and use it anytime you want. Below is the snippet of variable that contains AnyChart theme.

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
        "title": 'Sales'
      }
    }
  };
```

Now, when simple theme is ready we will learn where we can store it and how to apply it.

##Internal Themes

You can store a theme right where your chart code is:

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

Next, you can create a file with several themes and use it to store settings. In this case you need to reference this file in the page where your chart is using **script** tag.

```
  <head>
    <!--Link to file with the custom theme-->
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

The content of **custom_theme.js** should be something like to the snippet below:

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

The main purpose of AnyChart Themes is to simplify the process of chart creation, so one theme can store settings for the different chart types. 

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

Sample below shows two charts with minimal settings, both of them use one theme with title settings.

{sample :width 690 :height 680}AS\_Themes\_02{sample}

##Themes Use in Dashboard Mode

In the sample below a table contains several charts. Settings for these charts are predefined in the theme. It is very convenient - these charts have many similar settings. Click "Launch in playground" to examine the code of the sample.

{sample :width 690 :height 680}AS\_Themes\_03{sample}

<a name="conversion"></a>
## AnyChart 6.x, 7.0.0 to 7.5.1 look to AnyChart 7.6 Conversion

AnyChart 7.6 brings you brand new themes for the pleasure of your eyes. Along with new colors lots of default settings were added or adjusted. If you have never used AnyChart before the realise of AnyChart 7.6 you can omit this section this section cause it will not concern you in any way. The ones how have already used AnyChart 7 may face some conflicts in settings. These conflicts don't influence the security of your page. The only aspect that might be impacted is the visual appearance of your charts which may be altered in very unexpected way. The solution for this tiny nuisance is simple:  
  
1) Use special **anychart.min.js** with the old them as default one that can be found (this js can be found in **binaries** folder).  
  
2) or you can simply use new anychart.min.js with predefined old them (this is the best way) and use new AnyChart themes in feather.