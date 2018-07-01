# Themes

## Overview

To simplify visual adjustment of JS charts AnyChart provides "AnyChart Themes" technique. Chart theme is a named preset for chart settings. The themes' usage is described in this article.
  
### Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reusing settings in another charts that should look the same way.
    
If some chart type is used widely on your site, you can store settings in a js file and then use theme when needed to reduce the necessity of - no need to configure chart again and copy-paste settings from one place to another.

AnyChart comes with a number of Out of the box themes that can be used to change look and feel of every chart in the package, learn about them in the next section.

### Out of the box Themes

Out of the box Themes can be located either at [Themes Section at AnyChart CDN](https://cdn.anychart.com/) or in the AnyChart Downloadable Package, these themes change the look, feel and layout of every chart, map, gauge, treemap or stock chart. You are free to use and modify these themes as you want. To use any of these themes you need, just with any [External theme](#external_themes) reference the proper file in HTML document and then apply theme by name:

```
<head>
  <!--Link to the files with out of the box themes -->
  <script src="https://cdn.anychart.com/themes/{{branch-name}}/coffee.min.js"></script>
  <script src="https://cdn.anychart.com/themes/{{branch-name}}/dark_blue.min.js"></script>
  <script>
    anychart.onDocumentReady(function () {
      // data
      var data = [
        ["Department Stores", 637166],
        ["Discount Stores", 721630],
        ["Men's/Women's Specialty Stores", 148662],
        ["All other outlets", 90000]
      ];

      // apply coffee theme
      anychart.theme(anychart.themes.coffee);

      // apply dark blue theme
      // anychart.theme(anychart.themes.darkBlue);

      // create and display chart
      var chart = anychart.bar();
      chart.bar(data);

      chart.container("container");
      chart.draw();
    });
  </script>
</head>
```

You can find minified and uncompressed themes at CDN, it is recommended to use minifed themes in production, uncompressed themes can be used to create new themes, you can compress them with the JavaScript compression tool of your choice or use uncompressed. 

There are 16 themes in AnyChart at the moment: *Coffee*, *Dark Blue*, *Dark Earth*, *Dark Glamour*, *Dark Provence*, *Default Theme*, *Light Blue*, *Light Earth*, *Light Glamour*, *Light Provence*, *Monochrome*, *Morning*, *Pastel*, *Sea*, *6.x Version*, *Wines*.

And there are 11 accompanying [Color palettes](Palettes) which are used by these themes, but their use can be combined if needed.

Here is a simple demo where you can choose a theme and a palette and change them on-the-fly:

{sample}AS\_Themes\_00{sample}

You can also take a look at the [AnyChart Themes Demo](https://www.anychart.com/solutions/themes-demo/) where you can try every theme and palette on any of charts and maps available in AnyChart JavaScript Charts package.

## Create Theme

To create a theme create variable with all desirable chart settings and set it using {api:anychart#theme}theme(){api}.

Suppose you want to create several bar charts, and all of them should use the same axes and chart titles. The next code sample demonstrates how to use {api:anychart.charts.Cartesian#xAxis}xAxis(){api}, {api:anychart.charts.Cartesian#yAxis}yAxis(){api} and {api:anychart.charts.Cartesian#title}title(){api} methods to define all these settings.

```
// data
var data = [
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
];

// chart type
var chart = anychart.bar();

// set title
chart.title("Bar Chart");

// set axes titles
chart.xAxis().title("Retail Channel");
chart.yAxis().title("Sales");

// set data
chart.bar(data);
```

Another way to set some identical parameters to axes and title (and everything else if necessary) is to use themes. You can predefine these settings in a theme and use it anytime you want. Below there is a snippet of variable that contains AnyChart theme.

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

Now, when a simple theme is ready it's time to learn how to manage it.

## Internal Themes

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
var data = [
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
];

// apply theme
anychart.theme(customTheme);
  
var chart = anychart.bar();
chart.bar(data);
chart.container("container");
chart.draw();
```

There is a sample chart with an internal theme. Click "Launch in playground" to view JS settings:

{sample}AS\_Themes\_01{sample}

## External Themes

Next, you can create a file with several themes or several files with themes and use them to store settings. In this case you need to reference this file in the page where your chart is using the **script** tag.

```
<head>
  <!--Link to the file with the custom theme-->
  <script src="custom_theme.js"></script>
  <script>
    anychart.onDocumentReady(function () {
      // data
      var data = [
        ["Department Stores", 637166],
        ["Discount Stores", 721630],
        ["Men's/Women's Specialty Stores", 148662],
        ["All other outlets", 90000]
      ];
      
      // apply custom theme
      anychart.theme(customTheme);

      // creta and display chart
      var chart = anychart.bar();
      chart.bar(data);
      chart.container("container");
      chart.draw();
    });
  </script>
</head>
```

The content of **custom_theme.js** should be something like in the snippet below:

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

You can find the **defaultTheme.js** in **binaries** folder in the downloaded AnyChart package.
This file can be found in **binaries** folder in the downloaded AnyChart package. You **DON'T NEED** to reference this file to use the default theme as it is integrated in the component, so this file is provided only as a reference for a custom theme you may want to create.

**Note**: the theme you create does not need to contain all settings you see in a default theme - tune only the settings you want to change.

## Several Themes

It is possible to set several themes through one {api:anychart#theme}theme(){api} method. Themes, set as an array, will be applied to a chart or all charts on a dashboard one after another, in the order they are set, so the settings from the last theme in the array have the highest priority.

The chart below has three different themes applied. Each theme contains several settings for one of the chart types demonstrated on a dashboard, as well as several general settings for all charts, and those settings values are being redefined in each theme. You can notice that those values of the general settings defined in the last theme set (namely, in the Spline Chart theme) are finally applied to the dashboard.

```
// apply custom themes
anychart.theme([barTheme, columnTheme, splineTheme]);
```

{sample}AS\_Themes\_02{sample}

Explore the chart in the playground to understand how it works. It is possible to set external themes as well.

## Append Theme

In some situations, it might be necessary to add some settings to all charts simultaneously over an existing theme. In this case AnyChart provides an {api:anychart#appendTheme}appendtheme(){api} method allowing to add a theme over another one. Settings defined through this method have higher priority than those set through the {api:anychart#theme}theme(){api} method. The next sample demonstrates this. 

```
// append a theme 
anychart.appendTheme(additional_theme);
```

The additional theme has the majority of the color and format settings, while the internal one contains some basic settings.

{sample}AS\_Themes\_03{sample}

Note that both themes contain title text settings but those in the additional theme are applied due to its higher priority.

## Multiple Chart Types

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

The sample below shows two charts using the same theme with title settings.

{sample :width 690 :height 680}AS\_Themes\_04{sample}

## Themes Use in Dashboard Mode

In the sample below a table contains several charts. Settings for these charts are predefined in the theme. It is very convenient - these charts have many similar settings. Click "Launch in playground" to examine the code of the sample.

{sample :height 680}AS\_Themes\_05{sample}

## Reset Theme

There is one very important thing you need to remember when you work with themes in Dashboard mode: after the theme is defined in code every chart uses this theme until you set another theme. To reset theme to the default or to the new one you have to use {api:anychart#theme}theme(){api} method again.

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
<td>{api:anychart.core.Text#wordWrap}wordWrap{api}</td>
<td>{"defaultFontSettings": {"wordWrap": ""}}</td>
</tr>
<tr>
<td>{api:anychart.core.Text#wordBreak}wordBreak{api}</td>
<td>{"defaultFontSettings": {"wordBreak": ""}}</td>
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

{sample :width 690 :height 220}AS\_Themes\_06{sample}
