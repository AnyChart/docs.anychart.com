#Tooltip

* [Overview](#overview)
* [Default Tooltip](#default_tooltip)
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

Tooltip is a text box that is hidden by default and can be displayed only if a point of the chart is hovered. Tooltip is a very powerful way to show information on a chart. It may display additional information or just show exact information for the current point. The main tooltip settings are described in this article.

## Default Tooltip

You can enable or disable series tooltip using {api:anychart.core.ui.Tooltip#enabled}**enabled()**{api} method.

```
  // create column chart plot
  var chart = anychart.column();

  // set series
  var series1 = chart.column(data1);
  var series2 = chart.column(data2);

  // disable tooltip for the first series
  var tooltip1 = series1.tooltip();
  tooltip1.enabled(false);

  // enable tooltip for the second series
  var tooltip2 = series2.tooltip();
  tooltip2.enabled(true);
```

Hover each of the series to see the difference.

{sample}CS\_Tooltip\_01{sample}

## Display Mode

There are several modes for tooltip displaying. In this section you will find samples for all of them.

### Single

Single tooltip is a default mode for every AnyChart tooltip. A tooltip displays information based only on the hovered point or hovered series data.

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

Union display mode helps to display information for all series in one tooltip. These display mode may be of great use for comparing series data. Here is a sample of the union tooltip.

```
  // get chart's tooltip
  var tooltip = chart.tooltip();
  // set display mode for the tooltip
  tooltip.displayMode("union");
```

{sample}CS\_Tooltip\_03{sample}

### Separated

"Separated" display mode shows a tooltip for all series of the chart at the same time. Set "separated" value as a parameter of {api:anychart.core.ui.Tooltip#displayMode}**displayMode()**{api} method:

```
  var tooltip = chart.tooltip();
  chart.displayMode("separated");
```

{sample}CS\_Tooltip\_04{sample}

**Note**: You have to manage tooltips position of each tooltip to prevent overlapping. Information on tooltips position can be found in this article in [position section](#position).

## Visualization

Tooltip itself consist of a title, title separator and the tooltip content. Methods used for adjusting those components are described in this article.

### Title

You can easily manage tooltip title visual appearance using **title()** method. You can adjust font's visual settings along title's background appearance.

```
  var title = chart.tooltip().title();
  title.fontFamily("Calibri");
  title.fontDecoration("underline");
  title.fontWeight(400);
```

Here is a sample of adjusted title:

{sample}CS\_Tooltip\_05{sample}

For adjusting text of the tooltip title you have to use **titleFormatter()** method. This method uses function as parameter and can help you to format title in any desirable way.

{sample}CS\_Tooltip\_06{sample}

### Separator

Separator is a space between tooltip title and content. Use **separator()** method to adjust this space.

```
  // get tooltip
  var tooltip = chart.tooltip();
  // disable separator
  tooltip.separator(false);
```

Here is a sample with disabled title **separator()**.

{sample}CS\_Tooltip\_07{sample}

<a name="content_settings"></a>
### Content

You can adjust tooltip content appearance in any way you want. All you have to do is to define custom settings for the **tooltip()** method.

```
  var tooltip = chart.tooltip();
  tooltip.fontSize(13);
  tooltip.fontFamily("Calibri");
  tooltip.fontStyle("italic");
```

Here is a sample with the settings from above.

{sample}CS\_Tooltip\_08{sample}

### Prefix and Postfix

Use **prefix()** and **postfix()** methods to add symbols or the whole words before/after tooltip content. These methods can be used to set dollar symbol as prefix ($) or degrees fahrenheit as postfix (°F).

{sample}CS\_Tooltip\_09{sample}

### Background

Tooltip background appearance can be controlled using **background()** method. More information about adjusting backgrounds can be found in [Background tutorial](../Appearance_Settings/Background).

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

In case you need more complex content formatting there is the **textFormatting()** method that uses a function as parameter. Use this method for complex content formatting.

```
  var tooltip = chart.tooltip();
  tooltip.textFormatter(function(){
    /* code of your function */
  });
```

Here is a sample of advanced tooltip content formatting:

{sample}CS\_Tooltip\_11{sample}

## Position

There are several methods for managing tooltips position on the chart. This section contains information on most of this methods.
  
  
AnyChart allows to choose should the tooltip bind to cursor position, hovered point or to the exact place on the chart plot. Use **positionMode()** method to choose a target for binding tooltip to. *float* parameter is the default one for this method and makes tooltip to follow your cursor. *point* parameter binds tooltip to the hovered series point. Use *chart* parameter for **positionMode()** method to bind tooltip to a place on the chart plot.

```
  var tooltip = chart.tooltip();
  tooltip.positionMode("point");
```

Here is a sample with the tooltip sticks to the hovered point:

{sample}CS\_Tooltip\_12{sample}

### Fixed Tooltip Position

You can bind tooltips to a certain point on the chart plot using **chart** as a value for **positionMode()**. The sample of such settings can be found [below](#sample). You have to manage other tooltip parameters along with **positionMode()**.
  
  
You can choose which part of the tooltip should be considered as anchor and used for position managing. **anchor()** method defines the main part of the tooltip for further positioning.

```
  // tooltip settings
  var tooltip = chart.tooltip();

  // set tooltip anchor
  tooltip.anchor("bottomLeft");
```

Here is a sample of two series with fixed tooltip position. Tooltip settings are the same except for the the tooltip anchor.

<a name="sample"></a>
{sample}CS\_Tooltip\_13{sample}

Along with the main point for tooltip you can set the point to which the tooltip should be bound. Use **position()** method to set the point for tooltip to be bound to.

```
  var tooltip1 = series1.tooltip();
  tooltip1.position("leftCenter");
  
  var tooltip2 = series2.tooltip();
  tooltip2.position("rightCenter");
```

That is how the sample with the code from above looks like:

{sample}CS\_Tooltip\_14{sample}

**Note**: You can shift tooltips position using **offsetX()** and **offsetY()** methods.

## Hiding Time

In some cases you may need to display a tooltip for a couple of moments after a point was unhovered. Use **hideDelay()** method to set timer to display tooltip a bit longer.

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

{sample}CS\_Tooltip\_15{sample}