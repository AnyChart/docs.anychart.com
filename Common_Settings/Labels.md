#Labels

* [Overview](#overview)
* [Basic Settings](#basic_setings)
 * [Enable](#enable)
 * [Format Text](#format_text)
* [Visual Settings](#visual_settings)
 * [Background](#background)
 * [Font](#font)
 * [Position](#position)
 * [Size](#size)
* [Themes](#themes)

## Overview

Label is a text box that can be displayed along a point on a chart. Labels usually shows the information that each point contains. It may display any additional information if it is defined by the labels settings.

You can configure different settings for labels on select and hover.

## Basic Setting

### Enable

In most of the cases, series labels are disabled by default. To enable them set "true" using the {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api} method.

```
// create a chart
chart = anychart.column();

// add a data series
series = chart.column([["Veni", 1], ["Vidi", 2], ["Veni", 3]]);

// enable labels for a series
// in any state
series.labels(true);
series.selectLabels(true);
series.hoverLabels(true);
```

{sample}CS\_Labels\_01{sample}

### Format Text 

You can specify the text displayed in labels using [Text Formatters](Text_Formatters) mechanism:

```
series.labels().textFormatter("The value of {%x} is {%Value}");
```

{sample}CS\_Labels\_02{sample}

## Visual Settings

You can also change background, padding and other settings.

```
// labels padding
series.labels().padding().left(20);

// background color
series.labels().background().fill("#663399");
series.labels().background().fill("green");
```

{sample}CS\_Tooltip\_03{sample}

### Background

Tooltip background appearance can be controlled using {api:anychart.core.ui.LabelsFactory#background}background(){api} method. More information about adjusting background can be found in [Background tutorial](../Appearance_Settings/Background).

```
var background = series.labels().background();
background.fill("#EEE 0.8");
background.stroke("#888");
background.cornerType("roundInner");
background.corners(5);
```

That is how labels background with the settings from above looks like:

{sample}CS\_Labels\_04{sample}

## Font

Font settings

{sample}CS\_Labels\_18{sample}

## Position

Anchors list

{sample}CS\_Labels\_18{sample}

### Size

Use {api:anychart.core.ui.LabelsFactory#width}width(){api} and {api:anychart.core.ui.LabelsFactory#height}height(){api} to set the labels width and height. Don't forget to format the text of the label properly to avoid text overflow.

```
// set labels size
series.labels().width(200);
series.labels().height(80);
```

{sample}CS\_Labels\_17{sample}

### Themes

Labels can be adjusted using [AnyChart Themes](../Appearance_Settings/Themes). Themes makes it possible to set the same settings for several charts. Here is a sample of adjusting tooltips using themes:

```
var themeSettings = {
  "column":{
    // series hub
    "defaultSeriesSettings":{
      // series settings
      "column":{
        // label settings
        "labels": {
          "anchor": "bottomCenter",
          "position": "topCenter",
          "fontFamily": "Menlo",
          "fontSize": 14
        }
      }
    }
  }
};
```

Settings for the tooltip in the sample below were applied using themes. Click "launch in playground" to see how settings for tooltip can be applied using AnyChart themes.

{sample}CS\_Labels\_21{sample}
