# Themes

* [Overview](#overview)
 * [Themes Explained](#themes_explained)
* [Create Theme](#create_theme)
* [Internal Themes](#internal_themes)
* [External Themes](#external_themes)
 * [Default Theme](#default_theme)
 * [Old Theme](#old_theme)
* [Multiple Chart Types](#multiple_chart_types)
* [Themes Use in Dashboard Mode](#themes_use_in_dashboard_mode)
* [Reset Theme](#reset_theme)
* [Global Settings, Defaults and Theme Reference](#global_settings,_defaults_and_theme_reference)
* [AnyChart 6.x, 7.0.0 to 7.5.1 look to AnyChart 7.6 Conversion](#anychart_6.x,_7.0.0_to_7.5.1_look_to_anychart_7.6_conversion)

##Overview

To simplify visual adjustment of js charts AnyChart provides "AnyChart Themes" technique. Chart theme is a named preset for some of the chart settings.


In this tutorial we will explain what themes are used for and how they are used.
  
###Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reuse settings in another charts that should look the same way.
  

If this some chart type is used widely on your site, you can store settings in a js file and then use theme when needed - no need to configure chart again and copy-paste settings from one place to another.

##Create Theme

The best way to create a theme is to create variable with all desirable chart settings. Every possible theme adjustment can be found in {api:anychart#themes}**API**{api}.
  

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
      "title": {
        // set title text
        "text": "Bar Chart",
        // display title
        "enabled": true
      },
      // settings for default x axis
      "defaultXAxisSettings": {
        // set x axis title
        "title": {
          // set title text
          "text": "Retail Channel",
          // force title to be shown
          "enabled": true
        }
      },
      // settings for default y axis
      "defaultYAxisSettings": {
        // set axis name
        "title": {
          "text": "Sales",
          "enabled": true
        }
      }
    }
  };
```

Now, when simple theme is ready we will learn where we can store it and how to apply it.

##Internal Themes

You can store a theme right where your chart code is, just be sure to apply the theme before you create a chart:

```
  // create variable for custom theme
  var customTheme = {
    // define settings for bar charts
    "bar": {
      // set chart title
      "title": {
        "text": "Bar Chart",
        "enabled": true
      },
      // settings for default x axis
      "defaultXAxisSettings": {
        // set x axis title
        "title": {
          "text": "Retail Channel",
          "enabled": true
        }
      },
      // settings for default y axis
      "defaultYAxisSettings": {
        // set axis name
        "title": {
          "text": "Sales",
          "enabled": true
        }
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

### Default Theme

You can find **defaultTheme.js** in **binaries** folder in the downloaded AnyChart package.
This file can be found in **binaries** folder in the downloaded AnyChart package. You **DON'T NEED** to reference this file to use Default theme, it is built-in in the component, we provide this file only as a reference for a custom theme you may want to create yourself.
  

**Note**: the theme you create need not contain all settings you see in a default theme - you need to tune only the settings you want to change or want them to be persistent no matter what.

### Old Theme
  
AnyChart provides several default themes along with the opportunity to [create custom themes](#create_theme). One of default themes is the default one from AnyChart 5.x, 6.x. To use old theme you have to reference special theme file with the name **v6.js**. This file can be found in **binaries** folder in the downloaded AnyChart package. After referencing the file you can use {api:anychart#theme}**theme()**{api} method with **anychart.themes.v6** parameter to apply old theme:

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
      "title": {
        "text": "Bar Chart",
        "enabled": true
      }
    },
    // settings for column charts
    "column": {
      "title": {
        "text": "Column Chart",
        "enabled": true
      }
    }
  };
```

Sample below shows two charts with minimal settings, both of them use one theme with title settings.

{sample :width 690 :height 680}AS\_Themes\_02{sample}

##Themes Use in Dashboard Mode

In the sample below a table contains several charts. Settings for these charts are predefined in the theme. It is very convenient - these charts have many similar settings. Click "Launch in playground" to examine the code of the sample.

{sample :width 690 :height 680}AS\_Themes\_03{sample}

##Reset Theme

There is one very important thing you need to remember when you work with themes in Dashboard mode: after the theme is defined in code every chart uses this theme until you set another theme. To reset theme to the default or to the new one you have to use {api:anychart#theme}**theme()**{api} method again.

```
  // return default theme to the charts below
  anychart.theme(null);
```

## Global Settings, Defaults and Theme Reference

As you may have noticed, theme is basically chart settings done in JSON and its structure is almost identical to chart JSON settings, and can be described by JSON Scheme, you can read more about this at [JSON article](../Working_with_Data/Data_From_JSON#schema).

But there are some very important characteristics and features in a theme: you can set defaults and global settings for some elements, and you can set default settings for a chart type.


**Note**: AnyChart themes can contain much more settings than this table presents. File with default theme contains all possible chart settings with default values and this file can be used as a reference of all theme settings. Read more about default theme in [Default Theme section](#default_theme).


Here is a list of global settings and defaults that can be defined in a theme:

<table class="dtTABLE" width="700">
<tbody>
<tr>
<th width="101"><b>Method</b></th>
<th width="587"><b>Way to set</b></th>
</tr>
<tr>
<th style="border-right: none;"></th>
<th style="text-align:center; border-left: none;"><b>Font</b></th>
</tr>
<tr>
<td>{api:anychart.core.Text#fontSize}fontSize{api}</td>
<td>{"defaultFontSettings": {"fontSize": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontFamily}fontFamily{api}</td>
<td>{"defaultFontSettings": {"fontFamily": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontColor}fontColor{api}</td>
<td>{"defaultFontSettings": {"fontColor": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#textDirection}textDirection{api}</td>
<td>{"defaultFontSettings": {"textDirection": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontOpacity}fontOpacity{api}</td>
<td>{"defaultFontSettings": {"fontOpacity": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontDecoration}fontDecoration{api}</td>
<td>{"defaultFontSettings": {"fontDecoration": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontStyle}fontStyle{api}</td>
<td>{"defaultFontSettings": {"fontStyle": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontVariant}fontVariant{api}</td>
<td>{"defaultFontSettings": {"fontVariant": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#fontWeight}fontWeight{api}</td>
<td>{"defaultFontSettings": {"fontWeight": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#letterSpacing}letterSpacing{api}</td>
<td>{"defaultFontSettings": {"letterSpacing": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#lineHeight}lineHeight{api}</td>
<td>{"defaultFontSettings": {"lineHeight": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#textIndent}textIndent{api}</td>
<td>{"defaultFontSettings": {"textIndent": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#vAlign}vAlign{api}</td>
<td>{"defaultFontSettings": {"vAlign": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#hAlign}hAlign{api}</td>
<td>{"defaultFontSettings": {"hAlign": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#textWrap}textWrap{api}</td>
<td>{"defaultFontSettings": {"textWrap": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#textOverflow}textOverflow{api}</td>
<td>{"defaultFontSettings": {"textOverflow": ""}}</td>
</tr>
<tr>
<th style="border-right: none;"></th>
<th style="text-align:center; border-left: none;"><b>Palettes</b></th>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#palette}palette{api}</td>
<td>{"palette": {"type": "","items": []}}</td>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#hatchFillPalette}hatchFillPalette{api}</td>
<td>{"hatchFillPalette": {"items": {}}</td>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#markerPalette}markerPalette{api}</td>
<td>{"markerPalette": {"items": {}}</td>
</tr>
</tbody>
</table>

Here is a sample of a dashboard with a column chart, pie chart and a radar with default font altered by the default node in a theme:

{sample :width 690 :height 220}AS\_Themes\_04{sample}

## AnyChart 6.x, 7.0.0 to 7.5.1 look to AnyChart 7.6 Conversion

Themes are introduced in AnyChart 7.6, along with new color scheme and changed default settings. If you have never used AnyChart 7 before the release version 7.6 you can ignore this section cause it does not affect you.


If you are already using AnyChart 7.0 to 7.5.1, you may face some conflicts in chart settings after the upgrade. These conflicts are not critical, but the visual appearance of your charts can change unexpectedly. There are several solutions for this problem: 


* use special **anychart.theme_v6.min.js** with the old theme to your charts as default one.
* or you can simply use new **anychart.min.js** and [set old theme for your charts](#old_theme) (this is the recommended way to solve this problem).


**Note**: AnyChart html5 charting framework recommends you to use new AnyChart theme, version 6 style will not be developed further and supported for the new chart types.
