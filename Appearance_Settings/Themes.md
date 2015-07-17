# Themes

* [Overview](#overview)
 * [Themes Explained](#themes_explained)
* [Create Theme](#create_theme)
* [Internal Themes](#internal_themes)
* [External Themes](#external_themes)
 * [Old Theme](#old_theme)
* [Multiple Chart Types](#multiple_chart_types)
* [Themes Use in Dashboard Mode](#themes_use_in_dashboard_mode)
* [Reset Theme](#reset_theme)
* [AnyChart 6.x, 7.0.0 to 7.5.1 look to AnyChart 7.6 Conversion](#anychart_6.x,_7.0.0_to_7.5.1_look_to_anychart_7.6_conversion)

##Overview

To simplify visual adjustment of charts AnyChart provides "AnyChart Themes" technique. Chart theme is a named preset for some of the chart settings.
  
  
In this tutorial we will explain what themes are used for and how they are used.
  
###Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reuse settings in another charts that should look the same way.
  
  
If this some chart type is used widely on your site, you can store settings in a js file and then use theme when needed - no need to configure chart again and copy-paste settings from one place to another.
  
  
Another example of templates use - you can store several themes in one place and create several groups of similar chart. Just [reset theme](#reset_theme) when you need to set new group of charts.

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

### Old Theme
  
AnyChart provides several default themes along with the opportunity to [create custom themes](#create_theme). One of default them is the default one from AnyChart 5.x, 6.x. To use old theme you have to reference special file with the theme. This file has name **anychart_theme_v6.js** and it can be found in **binaries** folder in the downloaded AnyChart package. After referencing the file you can use {api:anychart#theme}**.theme()**{api} method with **anychart.themes.v6** parameter to apply old theme:

<a name="old_theme"></a>
```
  // apply old theme
  anychart.theme(anychart.themes.v6);
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

##Reset Theme

There is one very important thing you need to remember when you work with themes in Dashboard mode: after the theme is defined in code every chart in the scope of the chart function uses this theme. To reset theme to the default or to the new one you have to use {api:anychart#theme}**.theme()**{api} method again.

```
  // return default theme to the charts below
  anychart.theme(anychart.themes.default);
```

## AnyChart 6.x, 7.0.0 to 7.5.1 look to AnyChart 7.6 Conversion

Themes are introduced in AnyChart 7.6, along with new color scheme and changed default settings. If you have never used AnyChart 7 before the release version 7.6 you can ignore this section cause it does not affect you.
  
  
If you are already using AnyChart 7.0 to 7.5.1, you may face some conflicts in chart settings after the upgrade. These conflicts are not critical, but the visual appearance of your charts can change unexpectedly. There are several solutions for this problem: 
  
  
1. use special **anychart\_theme\_v6.min.js** with the old theme to your charts as default one (this js file can be found in **binaries** folder in the downloaded AnyChart package).
2. or you can simply use new **anychart.min.js** and [set old them for your charts](#old_theme) (this is the recommended way to solve this problem). 
  
  
*Note:* AnyChart recommends you to use new AnyChart theme, version 6 style will not be developed further and supported for the new chart types.