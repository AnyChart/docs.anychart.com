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
* [Visualization](#visualization)
 * [Title](#title)
 * [Separator](#separator)
 * [Content](#content_settings)
 * [Prefix and Postfix](#prefix_and_postfix)
 * [Background](#background)
 * [Advanced Content Formatting](#advanced_content_formatting)
* [Position](#position)
 * [Fixed Tooltip Position](#fixed_tooltip_position)
* [Hiding Time](#hiding_time)
* [Themes](#themes)

## Overview

Tooltip is a text box that is hidden by default and can be displayed when a point on a chart is hovered. Tooltip demonstrates the information that each point contains. It may also display some additional information if this is defined by the tooltip settings, which are described in this article.

## Default Tooltip

By default, the tooltip is being shown when a point on a chart is hovered. To disable them from showing at all set "false" to the {api:anychart.core.ui.SeriesTooltip#enabled}enabled(){api} method.


```

```

Hover each of the series to see the difference.

{sample}CS\_Tooltip\_01{sample}

## Settings Inheritance

One of the most useful and practical features of AnyChart Tooltips is their ability to inherit settings. It means that if there are some settings defined for tooltips of a whole chart, the series' tooltips will inherit and have the same settings. 
All tooltip settings can be separated in two parts: simple and complex (or complicated). Let's first talk about simple ones.

### Simple settings

These are settings which can have an only parameter as a value - such text settings like {api}fontColor(){api} or {api}fontFace(){api}. 
For example, let's set "gold" color to the {api}fontColor(){api} method for the whole chart tooltips and "green" for the same method of one of the series. 

```

```

You can notice that three series have tooltips with text of gold color and only the one has its tooltips text colored green.

{sample}CS\_Tooltip\_02{sample}


### Complex 

There are four tooltip settings that can have more than one value so they are being called complex. These settings are {api}background(){api}, {api}padding(){api}, {api}title(){api} and {api}separator(){api}. Series tooltips inherit those settings from chart tooltip settings as well as simple ones.

Let's adjust some of these settings to show how it works.

```
например установить паддинг слева 20 для чарт.тултип и бг цвет какой-нибудь и какой-то одной серии цвет другой бг
```

{sample}CS\_Tooltip\_03{sample}

You can easily manage tooltip title visual appearance using {api:anychart.core.ui.SeriesTooltip#title}title(){api} method. You can adjust font's visual settings along with the title's background appearance.

```
var title = chart.tooltip().title();
title.fontFamily("Calibri");
title.fontDecoration("underline");
title.fontWeight(400);
```

Note that all title settings defined for a chart are inherited with the series tooltips. Here is a sample with title adjusted for all tooltips on a chart:

{sample}CS\_Tooltip\_05{sample}

Separator is a space between tooltip title and content. Use {api:anychart.core.ui.ChartTooltip#separator}separator(){api} method to adjust this space.

```
// get tooltip
var tooltip = chart.tooltip();
// disable separator
tooltip.separator(false);
```

Here is a sample with a title separator disabled.

{sample}CS\_Tooltip\_07{sample}


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

{sample}CS\_Tooltip\_02{sample}

### Union

Union display mode helps to display information about one point for all series in one tooltip. These display mode may be of great use for comparing series data. Here is a sample of the union tooltip.
                                                                                                                                                                                                                                        d
```
// get chart's tooltip
var tooltip = chart.tooltip();
// set display mode for the tooltip
tooltip.displayMode("union");
```

{sample}CS\_Tooltip\_03{sample}

Note that if your tooltip is of union mode, setting background color for series separately has no sense as this setting is taken from chart tooltip settings

### Separated

Separated display mode shows a single tooltip for all series of the chart at the same time. Set "separated" value as a parameter of {api:anychart.core.ui.ChartTooltip#displayMode}displayMode(){api} method:

```
var tooltip = chart.tooltip();
tooltip.displayMode("separated");
```

{sample}CS\_Tooltip\_04{sample}

**Note**: It might be necessary to manage tooltips position for each series to prevent overlapping. Information on tooltips position can be found in this article in the [position section](#position). 


## Formatting 



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

{sample}CS\_Tooltip\_08{sample}

The default content of a tooltip may vary for different chart types and series, but mainly it displays main points' properties: **x** and **value**. Check out the {api:anychart.core.ui.Tooltip#textFormatter}textFormatter(){api} method which is described in [Advanced Content Formatting](#advanced_content_formatting) section to find information about changing tooltip content.

### Prefix and Postfix

Use {api:anychart.core.ui.Tooltip#valuePrefix}valuePrefix(){api} and {api:anychart.core.ui.Tooltip#valuePostfix}valuePostfix(){api} methods to add symbols or the whole words before/after tooltip content. These methods can be used to set dollar symbol as prefix ($) or degrees fahrenheit as postfix (°F).

{sample}CS\_Tooltip\_09{sample}

### Background

Tooltip background appearance can be controlled using {api:anychart.core.ui.SeriesTooltip#background}background(){api} method. More information about adjusting backgrounds can be found in [Background tutorial](../Appearance_Settings/Background).

```
  var background = chart.tooltip().background();
  background.fill("#EEE 0.8");
  background.stroke("#888");
  background.cornerType("roundInner");
  background.corners(5);
```

That is how tooltip background with the settings from above looks like:

{sample}CS\_Tooltip\_10{sample}

### Advanced Content Formatting

There are two parts of a tooltip that can hold some information: its title and its body text. This section describes formatting both parts for making your tooltips more customized and informative in a way you need.

### Title

For adjusting text of the tooltip title use the {api:anychart.core.ui.SeriesTooltip#titleFormatter}titleFormatter(){api} method. This method uses function or string with tokens as a parameter and can help you to format title in any desirable way.

```
```

{sample}CS\_Tooltip\_06{sample}

### Content

In case you need more complex content formatting there is the {api:anychart.core.ui.SeriesTooltip#textFormatter}textFormatting(){api} method that uses a function or a string token as parameter. More information on adjusting a text can be found in [Text Formatters article](../Common_Settings/Text_Formatters).

```
  var tooltip = chart.tooltip();
  tooltip.textFormatter(function(){
    /* code of your function */
  });
```

---->>> переделать нафиг

In the sample below there are used all possible ways of formatting text: tokens, named function and functions set as a parameter. You don't have to use all of them: choose the one that fits you best. For example, if you are going to serialize/deserialize your charts to/from xml or json you need to use tokens; if you want to use complex calculations in tooltips and you need to use it several times - use named functions; set a function as a parameter if you need to use unique formatter just one time.

{sample}CS\_Tooltip\_11{sample}


----->>>>>

**Note**: You can find information on custom tooltips and an example of using a chart as a tooltip in the [Interactivity article](../Common_Settings/Interactivity#creating_custom_tooltip)

## Position

There are several methods for managing tooltips position on the chart. This section contains information on most of this methods.
  
AnyChart html5 charting library allows to choose should the tooltip bind to cursor position, hovered point or to the exact place on the chart plot. Use {api:anychart.core.ui.ChartTooltip#positionMode}positionMode(){api} method to choose a target for binding tooltip to. *float* parameter is the default one for this method and makes tooltip to follow your cursor. *point* parameter binds tooltip to the hovered series point. Use *chart* parameter for {api:anychart.core.ui.ChartTooltip#positionMode}positionMode(){api} method to bind tooltip to a place on the chart plot.

```
var tooltip = chart.tooltip();
tooltip.positionMode("point");
```

Here is a sample with the tooltip sticks to the hovered point:

{sample}CS\_Tooltip\_12{sample}

### Fixed Tooltip Position

You can bind tooltips to a certain point on the chart plot using **chart** as a value for {api:anychart.core.ui.ChartTooltip#positionMode}positionMode(){api}. The sample of such settings can be found [below](#sample). You have to manage other tooltip parameters along with {api:anychart.core.ui.ChartTooltip#positionMode}positionMode(){api}.
  
  
You can choose which part of the tooltip should be considered as anchor and used for position managing. {api:anychart.core.ui.SeriesTooltip#anchor}anchor(){api} method defines the main part of the tooltip for further positioning.

```
// tooltip settings
var tooltip = chart.tooltip();

// set tooltip anchor
tooltip.anchor("bottomLeft");
```

Here is a sample of two series with fixed tooltip position. Tooltip settings are the same except for the the tooltip anchor.

<a name="sample"></a>
{sample}CS\_Tooltip\_13{sample}

Along with the main point for tooltip you can set the point to which the tooltip should be bound. Use {api:anychart.core.ui.SeriesTooltip#position}position(){api} method to set the point for tooltip to be bound to.

```
var tooltip1 = series1.tooltip();
tooltip1.position("leftCenter");
  
var tooltip2 = series2.tooltip();
tooltip2.position("rightCenter");
```

That is how the sample with the code from above looks like:

{sample}CS\_Tooltip\_14{sample}

**Note**: You can shift tooltips position using {api:anychart.core.ui.ChartTooltip#offsetX}offsetX(){api} and {api:anychart.core.ui.ChartTooltip#offsetY}offsetY(){api} methods.

## Hiding Time

In some cases you may need to display a tooltip for a couple of moments after a point was unhovered. Use {api:anychart.core.ui.SeriesTooltip#hideDelay}hideDelay(){api} method to set timer to display tooltip a bit longer.

```
  // tooltip settings
  var tooltip = series.tooltip();
  // set delay time in milliseconds
  tooltip.hideDelay(1000);
```

### Themes

---->>>>>>> тут тоже наверное по другому

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

{sample}CS\_Tooltip\_15{sample}
