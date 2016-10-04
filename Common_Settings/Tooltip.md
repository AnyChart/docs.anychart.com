#Tooltip

* [Overview](#overview)
* [Default Tooltip](#default_tooltip)
* [Settings Inheritance](#settings_inheritance)
 * [Simple](#simple)
 * [Complex](#complex)
* [Display Mode](#display_mode)
 * [Single](#single)
 * [Union](#union)
 * [Separated](#separated)
* [Formatting](#formatting)
 * [Title](#title)
 * [Separator](#separator)
 * [Content](#content)
 * [Size](#size)
* [Other Visual Settings](#other_visual_settings)
 * [Prefix and Postfix](#prefix_and_postfix)
 * [Background](#background)
 * [Out of chart](#out_of_chart)
* [Position](#position)
 * [Fixed Tooltip Position](#fixed_tooltip_position)
* [Hiding Time](#hiding_time)
* [Themes](#themes)

## Overview

Tooltip is a text box that is hidden by default and can be displayed when a point on a chart is hovered. Tooltip demonstrates the information that each point contains. It may also display some additional information if this is defined by the tooltip settings, which are described in this article.

## Default Tooltip

By default, the tooltip is being shown when a point on a chart is hovered. To disable them from showing at all set "false" to the {api:anychart.core.ui.Tooltip#enabled}enabled(){api} method.

```
// disable tooltip for the first series
var tooltip1 = series1.tooltip();
tooltip1.enabled(false);
```

Hover each of the series to see the difference.

{sample}CS\_Tooltip\_01{sample}



## Settings Inheritance

One of the most useful and practical features of AnyChart Tooltips is their ability to inherit settings. It means that if there are some settings defined for tooltips of a whole chart, the series' tooltips will inherit them and have the same settings. 
All tooltip settings can be separated in two parts: simple and complex (or complicated). Let's first talk about simple ones.

### Simple settings

These are settings which can have an only parameter as a value - such text settings like {api:anychart.core.ui.Tooltip#fontColor}fontColor(){api} or {api:anychart.core.ui.Tooltip#fontFace}fontFace(){api}. 
For example, let's set "gold" color to the {api:anychart.core.ui.Tooltip#fontColor}fontColor(){api} method for the whole chart tooltips and "green" for the same method of one of the series. 

```
// settings
chart.tooltip().fontColor("gold");
series2.tooltip().fontColor("green");
```

You can notice that three series have tooltips with text of gold color and only the one has its tooltips text colored green.

{sample}CS\_Tooltip\_02{sample}


### Complex 

There are four tooltip settings that can have more than one value so they are being called complex. These settings are {api:anychart.core.ui.Tooltip#background}background(){api}, {api:anychart.core.ui.Tooltip#padding}padding(){api}, {api:anychart.core.ui.Tooltip#title}title(){api} and {api:anychart.core.ui.Tooltip#separator}separator(){api}. Series tooltips inherit those settings from chart tooltip settings as well as simple ones.

Let's adjust some of these settings to show how it works.

```
// padding for all series on a chart
chart.tooltip().padding().left(20);

// bg color
chart.tooltip().background().fill("#663399");
series2.tooltip().background().fill("green");
```

{sample}CS\_Tooltip\_03{sample}

Formatting title and separator is described [below](#title_formatting). 


## Display Mode

There are three modes of a tooltip displaying. This section describes them all.

### Single

Single tooltip is a default mode for every AnyChart tooltip. A tooltip displays information based only on the hovered point.

```
// create column chart plot
var chart = anychart.column();

// get chart tooltip
var tooltip = chart.tooltip();
// set single mode for the tooltip
tooltip.displayMode("single");
```

Here is a sample of a chart with the tooltip in a **single** state:

{sample}CS\_Tooltip\_04{sample}

### Union

Union display mode helps to display information about one point for all series in one tooltip. This display mode may be of great use for comparing series data. Here is a sample of the union tooltip.

```
// get chart's tooltip
var tooltip = chart.tooltip();
// set display mode for the tooltip
tooltip.displayMode("union");
```

{sample}CS\_Tooltip\_05{sample}

Note that if your tooltip is of union mode, setting background color for series separately has no sense as this setting is taken from chart tooltip settings

### Separated

Separated display mode shows a single tooltip for all series of the chart at the same time. Set "separated" value as a parameter of {api:anychart.core.ui.Tooltip#displayMode}displayMode(){api} method:

```
var tooltip = chart.tooltip();
tooltip.displayMode("separated");
```

{sample}CS\_Tooltip\_06{sample}

**Note**: It might be necessary to manage tooltips position for each series to prevent overlapping. Information on tooltips position can be found in this article in the [position section](#position). 



## Formatting 

<a name="title_formatting"></a>
### Title

You can easily manage tooltip title visual appearance using {api:anychart.core.ui.Tooltip#title}title(){api} method. You can adjust font's visual settings along with the title's background appearance.

```
var title = chart.tooltip().title();
title.fontFamily("Calibri");
title.fontDecoration("underline");
title.fontWeight(400);
```

Note that all title settings defined for a chart are inherited with the series tooltips. Here is a sample with title adjusted for all tooltips on a chart:

{sample}CS\_Tooltip\_07{sample}

### Separator

Separator is a space between tooltip title and content. Use {api:anychart.core.ui.Tooltip#separator}separator(){api} method to adjust this space.

```
// get tooltip
var tooltip = chart.tooltip();
// disable separator
tooltip.separator(false);
```

Here is a sample with a title separator disabled.

{sample}CS\_Tooltip\_09{sample}

<a name="content_settings"></a>
### Content

You can adjust tooltip content appearance in any way you want. All you have to do is to define custom settings for the {api:anychart.core.cartesian.series.Base#tooltip}tooltip(){api} method.

```
var tooltip = chart.tooltip();
tooltip.fontSize(13);
tooltip.fontFamily("Calibri");
tooltip.fontStyle("italic");
```

Here is a sample with the settings from above.

{sample}CS\_Tooltip\_10{sample}

The default content of a tooltip may vary for different chart types and series, but mainly it displays main points' properties: **x** and **value**. Check out the {api:anychart.core.ui.Tooltip#textFormatter}textFormatter(){api} method which is described in [Advanced Content Formatting](#advanced_content_formatting) section to find information about changing tooltip content.


### Advanced Content Formatting

There are two parts of a tooltip that can hold some information: its title and its body text. This section describes formatting both parts for making your tooltips more customized and informative in a way you need.

### Title

For adjusting text of the tooltip title use the {api:anychart.core.ui.Tooltip#titleFormatter}titleFormatter(){api} method. This method uses function or string with tokens as a parameter and can help you to format title in any desirable way.

```
```

{sample}CS\_Tooltip\_13{sample}

### Content

In case you need more complex content formatting there is the {api:anychart.core.ui.tooltip#textFormatter}textFormatting(){api} method that uses a function or a string token as a parameter. More information on adjusting text can be found in the [Text Formatters article](../Common_Settings/Text_Formatters).

```
var tooltip = chart.tooltip();
tooltip.textFormatter(function(){
  /* code of your function */
});
```

There are several possible ways of formatting the tooltip text: tokens, external functions and functions set as a parameter. It's better to use one of them if possible. Using tokens suit situations when you plan to serialize/deserialize your charts to/from xml or json, external functions are good when you need to do the same complex calculations in several series' (of charts' - in case you work with a dashboard) tooltips and setting function as a parameter is the best option if you need to use unique formatter just once. Remember that series tooltips inherit their settings from chart tooltips, so you need to format the text once for the chart to make all tooltips of this chart look the same.

The following sample demonstrates using tokens for formatting tooltips:

```
// tooltip settings
var tooltip = chart.tooltip();
tooltip.positionMode("point");
tooltip.textFormatter("Manager: <b>{%x}</b>\nSales volume: <b>${%Value}</b>");
```

{sample}CS\_Tooltip\_13\_1{sample}


Use several formatting ways if there are some series on your chart or charts on a dashboard which tooltips need different formatting:

```
// set the tooltip title and text for the Column Chart
columnChart.tooltip().titleFormatter("{%SeriesName}");
columnChart.tooltip().textFormatter("Department: {%x} \nSum: {%Value}");

// set the tooltip content
seriesSpline.tooltip().textFormatter(function(e){
  var value = (this.value)/1000000;
  return "Total: $" + value + "M";
});
```

{sample}CS\_Tooltip\_13\_2{sample}


**Note**: You can find information on custom tooltips and an example of using a chart as a tooltip in the [Interactivity article](../Common_Settings/Interactivity#creating_custom_tooltip)


### Size

Width and height can be also set for all tooltips at once or for the determined series. Use {api:anychart.core.ui.Tooltip#width}width(){api} and {api:anychart.core.ui.Tooltip#height}height(){api} to set the corresponding parameters. Don't forget to format the text of the tooltip properly to avoid text overflowing or to set the width corresponding to the maximum text length.

```
// set tooltip size
columnChart.tooltip().width(200);
columnChart.tooltip().height(80);
```

{sample}CS\_Tooltip\_13\_3{sample}


## Other Visual Settings

This section describes how to adjust some visual settings that are not essential but can be quite useful.


### Prefix and Postfix

Use {api:anychart.core.ui.Tooltip#valuePrefix}valuePrefix(){api} and {api:anychart.core.ui.Tooltip#valuePostfix}valuePostfix(){api} methods to add symbols, whole words or anything before/after tooltip content. These methods can be used to set dollar symbol as prefix ($) or degrees fahrenheit as postfix (°F).

{sample}CS\_Tooltip\_11{sample}

### Background

Tooltip background appearance can be controlled using {api:anychart.core.ui.Tooltip#background}background(){api} method. More information about adjusting background can be found in [Background tutorial](../Appearance_Settings/Background).

```
var background = chart.tooltip().background();
background.fill("#EEE 0.8");
background.stroke("#888");
background.cornerType("roundInner");
background.corners(5);
```

That is how tooltip background with the settings from above looks like:

{sample}CS\_Tooltip\_12{sample}


### Out of chart

In case a tooltip on your chart is as big in dimensions as it becomes a problem to demonstrate it within the chart bounds for all points, you can allow the tooltip to be shown out of a chart. Set {api:anychart.core.ui.Tooltip#allowLeaveChart}allowLeaveChart(){api} in "true" to let the tooltips to leave the chart bounds.

```
// let tooltips to leave the chart bounds
chart.tooltip().allowLeaveChart(true);
```

Note that this method can be applied only for tooltips of the whole chart, as this setting is chart-oriented.

{sample}CS\_Tooltip\_12\_1{sample}


## Position

There are several methods for managing tooltips position on the chart. This section contains information on most of these methods.
  
AnyChart html5 charting library allows to choose should the tooltip be bound to a cursor position, hovered point or to the exact place on the chart plot. Use {api:anychart.core.ui.Tooltip#positionMode}positionMode(){api} method to choose a target for binding tooltip to. *float* parameter is the default one for this method and makes tooltip to follow the cursor. Setting *point* and a parameter binds tooltip to the hovered series point. Use the *chart* parameter for the {api:anychart.core.ui.Tooltip#positionMode}positionMode(){api} method to bind tooltips to a place on the chart plot.

```
var tooltip = chart.tooltip();
tooltip.positionMode("point");
```

Here is a sample with the tooltip sticked to the hovered point:

{sample}CS\_Tooltip\_14{sample}

### Fixed Tooltip Position

You can bind tooltips to a certain point on the chart plot using **chart** as a value for {api:anychart.core.ui.Tooltip#positionMode}positionMode(){api}. The sample of such settings can be found [below](#sample). You have to manage other tooltip parameters along with {api:anychart.core.ui.Tooltip#positionMode}positionMode(){api}.

You can choose which part of the tooltip should be considered as anchor and used for position managing. {api:anychart.core.ui.Tooltip#anchor}anchor(){api} method defines the main part of the tooltip for further positioning.

```
// tooltip settings
var tooltip = chart.tooltip();

// set tooltip anchor
tooltip.anchor("bottomLeft");
```

Here is a sample of two series with fixed tooltip position. Tooltip settings are the same except for the the tooltip anchor.

<a name="sample"></a>
{sample}CS\_Tooltip\_15{sample}

Along with the main point for tooltip you can set the point to which the tooltip should be bound. Use {api:anychart.core.ui.Tooltip#position}position(){api} method to set the point for tooltip to be bound to.

```
var tooltip1 = series1.tooltip();
tooltip1.position("leftCenter");
  
var tooltip2 = series2.tooltip();
tooltip2.position("rightCenter");
```

That is how the sample with the code from above looks like:

{sample}CS\_Tooltip\_16{sample}

**Note**: You can shift tooltips position using {api:anychart.core.ui.Tooltip#offsetX}offsetX(){api} and {api:anychart.core.ui.Tooltip#offsetY}offsetY(){api} methods.

## Hiding Time

In some cases you may need to display a tooltip for a couple of moments after a point was unhovered. Use {api:anychart.core.ui.Tooltip#hideDelay}hideDelay(){api} method to set timer to display tooltip a bit longer.

```
// tooltip settings
var tooltip = series.tooltip();
// set delay time in milliseconds
tooltip.hideDelay(1000);
```

### Themes

Tooltips can be adjusted using AnyChart Themes. Themes makes it possible to set the same settings for several charts. Here is a sample of adjusting tooltips using themes:

```
var themeSettings = {
  "column":{
    // set tooltip display mode
    "tooltip": {
      "displayMode": "point"
    },
    // series hub
    "defaultSeriesSettings":{
      // series settings
      "column":{
        // tooltip settings
        "tooltip": {
          "anchor": "bottomCenter",
          "position": "topCenter",
          "offsetX": 0,
          "hideDelay": 3000,
          "fontFamily": "Menlo",
          "fontSize": 14
        }
      }
    }
  }
};
```

Settings for the tooltip in the sample below were applied using themes. Click "launch in playground" to see how settings for tooltip can be applied using AnyChart themes.

{sample}CS\_Tooltip\_17{sample}
