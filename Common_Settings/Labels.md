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
series = chart.column([
  {x: "Veni", value: 1}, 
  {x: "Vidi", value: 2}, 
  {x: "Vici", value: 3}
]);

// enable labels for a series
// in any state
series.labels(true);
series.selectLabels(true);
series.hoverLabels(true);
```

{sample}CS\_Labels\_01{sample}

### Format Text 

You can specify the text displayed in labels using [Text Formatters](Text_Formatters) mechanism. Here is how you can show a name of point instead of a value:

```
series.labels().format("{%x}");
```

{sample}CS\_Labels\_02{sample}

## Visual Settings

You can also change background, font and other settings.

```
// background border color
series.labels().background().stroke("#663399");
series.selectLabels().background().stroke("Green");

// font color
series.labels().fontColor("#663399");
series.selectLabels().fontColor("Green");
```

{sample}CS\_Labels\_03{sample}

### Background

Labels background can be set using {api:anychart.core.ui.LabelsFactory#background}background(){api} method. More information about adjusting background can be found in [Background tutorial](../Appearance_Settings/Background).

```
// background settings
var background = series.labels().background();
background.enabled(true);
background.fill("#EEEEEE 0.8");
background.stroke("#888888");
background.cornerType("round");
background.corners(5);
```

That is how labels background with the settings from above looks like:

{sample}CS\_Labels\_04{sample}

### Font

Font settings are set as for any other [Text](../Appearance_Settings/Text_Settings):

```
// font labels font settings
chart.labels().fontFamily("Menlo");
chart.labels().fontSize(18);
chart.labels().fontDecoration("underline");
chart.labels().fontWeight(900);
```

{sample}CS\_Labels\_05{sample}

### Position

Labels postions is set using an anchor set by {api:anychart.standalones.LabelsFactory#anchor}anchor(){api} and {api:anychart.standalones.LabelsFactory#position}position(){api} methods. Anchor and position are set with values from {api:anychart.enums.Anchor}anychart.enums.Anchor{api} and {api:anychart.enums.Position}anychart.enums.Position{api} enums. 

Fine tuning can be done using {api:anychart.standalones.LabelsFactory#offsetX}offsetX(){api} and {api:anychart.standalones.LabelsFactory#offsetY}offsetY(){api} methods.

Labels are rotated using {api:anychart.standalones.LabelsFactory#rotation}rotation(){api} method.

Here is how you can put labels in the center of columns:

```
// set labels position
labels = series.labels();
labels.position("Center");
labels.anchor("Center");
```

And here is a sample of rotated labels put on top of columns:

```
// set labels position
labels = chart.getSeries(0).labels();
labels.enabled(true);
labels.position("TopCenter");
labels.anchor("Left");
labels.offsetY(-10);
labels.rotation(-90);
```

{sample}CS\_Labels\_06{sample}

### Size

Use {api:anychart.core.ui.LabelsFactory#width}width(){api} and {api:anychart.core.ui.LabelsFactory#height}height(){api} to set the labels width and height. Don't forget to format the text of the label properly to avoid text overflow.

```
// set labels size
series.labels().width(200);
series.labels().height(80);
```

In the sample below we have also used {api:anychart.standalones.LabelsFactory#vAlign}vAilgn(){api} and {api:anychart.standalones.LabelsFactory#hAlign}hAlign(){api} methods to set proper text placement:

{sample}CS\_Labels\_07{sample}

## Themes

Labels can be adjusted using [AnyChart Themes](../Appearance_Settings/Themes). Themes make it possible to set the same settings for several charts. Here is a sample of adjusting labels using themes:

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

Settings for the labels in the sample below are applied using themes. Click "launch in playground" to see how settings for labels can be applied using AnyChart themes.

{sample}CS\_Labels\_08{sample}
