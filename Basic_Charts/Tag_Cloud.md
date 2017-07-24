{:index 6.1}
#Tag Cloud

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
  * [Color Scale](#color_scale)
  * [Angles](#angles)
  * [Text Scpacing](#text_spacing)
  * [Mode](#mode)
  * [Scales](#scales)
  * [Tooltips](#tooltips)
  * [Interactivity](#interactivity)

## Overview

[A tag cloud (word cloud, or weighted list in visual design) is a visual representation of text data, typically used to depict keyword metadata (tags) on websites, or to visualize free form text. Tags are usually single words, and the importance of each tag is shown with font size or color.]

This article explains how to create a basic Tag Cloud chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Tag Cloud's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.TagCloud}anychart.charts.TagCloud{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, category](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>N/A</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/tag-cloud-chart/" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Tag Cloud, use {api:anychart#tagCloud}tagCloud(){api} method, like in the following sample:

```
// create data
var data = [
    {"x": "learning", "value": 80},
    {"x": "includes", "value": 56},
    {"x": "lists", "value": 44},
    {"x": "meaning", "value": 40},
    {"x": "useful", "value": 36},
    {"x": "different", "value": 32},
    {"x": "grammar", "value": 28},
    {"x": "teaching", "value": 24},
    {"x": "example", "value": 20},
    {"x": "thing", "value": 12},
];

// create a chart and set the data
chart = anychart.tagCloud(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Tag\_Cloud\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Tag Cloud chart (for example, legend settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Tag Cloud can be passed to the chart constructor {api:anychart#tagCloud}tagCloud(){api} or to the {api:anychart.charts.TagCloud#data}data(){api} method.

There are two ways to create data: you can add either a list of words or a text.

When you add a list of words (or other elements), like in the sample from [Quick Start](#quick_start), you have to specify their frequencies. Use the following data fields:

* **x** to set words
* **value** to set frequencies
* **category** to set categories

The "category" field is optional: it is required for the [color scale](#color_scale).

This is how working with a list of words looks like:

```
// create data
var data = [
    {"x": "learning", "value": 80},
    {"x": "includes", "value": 56},
    {"x": "lists", "value": 44},
    {"x": "meaning", "value": 40},
    {"x": "useful", "value": 36},
    {"x": "different", "value": 32},
    {"x": "grammar", "value": 28},
    {"x": "teaching", "value": 24},
    {"x": "example", "value": 20},
    {"x": "thing", "value": 12},
];

// create a chart and set the data
chart = anychart.tagCloud(data);
```

When you add just a text, the next step is to parse it into elements and calculate their frequencies. For parsing, use the {api:anychart.charts.TagCloud#data}data(){api} method with settings from this list: {api:anychart.data.TextParsingSettings}anychart.data.TextParsingSettings{api}.

* **cutLength** cuts the length of words
* **ignoreItems** adds a list of ignored elements
* **ignoreTrailingSpaces** ignores trailing spaces
* **maxItems** sets the number of the most frequent elements to be displayed
* **maxLength** ignores elements longer than a certain value
* **minLength** ignores elements shorter than a certain value
* **mode** sets the parsing mode

The parsing mode, unlike other settings, must be always specified. There are two parsing modes:

* **byWord** for parsing text into words
* **byChar** for parsing text into characters

If the only thing you want to set is the mode, you can use a shortcut from here: {api:anychart.anychart.enums.TextParsingMode}anychart.anychart.enums.TextParsingMode{api}.

```
chart.data("Tyger, tyger, burning bright", "by-char");
```

The following sample shows how to work with parsing settings. It is a Tag Cloud with the 16 most frequent words in William Blake's poem "The Tyger", some function words ignored:

```
// create data
var text =
    "Tyger, tyger, burning bright " +
    "In the forests of the night, " +
    "What immortal hand or eye " +
    "Could frame thy fearful symmetry? ";

// set the parsing mode and configure parsing settings
chart.data(text, {
        mode: "byWord",
        maxItems: 16,
        ignoreItems: [

                         "the",
                         "and",
                         "he",
                         "or",
                         "of",
                         "in",
                         "thy",
        ]
});
```

{sample}BCT\_Tag\_Cloud\_02{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Tag Cloud chart can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.charts.TagCloud#normal}normal(){api}
* {api:anychart.charts.TagCloud#hovered}hovered(){api}
* {api:anychart.charts.TagCloud#selected}selected(){api}

Combine them with methods from this list: {api:anychart.core.TagCloudStateSettings}anychart.core.TagCloudStateSettings{api}.

* {api:anychart.core.TagCloudStateSettings#fill}fill(){api} sets the color and opacity of the fill
* {api:anychart.core.TagCloudStateSettings#fontFamily}fontFamily(){api} sets the font family – Verdana, Helvetica, Arial, etc.
* {api:anychart.core.TagCloudStateSettings#fontSize}fontSize(){api} sets the font size
* {api:anychart.core.TagCloudStateSettings#fontStyle}fontStyle(){api} sets the font style – normal, italic, oblique
* {api:anychart.core.TagCloudStateSettings#fontVariant}fontVariant(){api} sets the font variant — normal or small caps
* {api:anychart.core.TagCloudStateSettings#fontWeight}fontWeight(){api} sets the font weight 

For example:

```
// configure visual settings in the normal state
chart.normal().fill("#009999", 0.7);
```

**Note**: If settings are specified only for the normal state, they are inherited by the hover and selected states. The only exception is the fill: the selected state does not inherit its settings (but the hover state does).

The {api:anychart.charts.TagCloud#normal}normal(){api}, {api:anychart.charts.TagCloud#hovered}hovered(){api}, and {api:anychart.charts.TagCloud#selected}selected(){api} also allow to specify settings as an object. See the sample below:

```
// configure visual settings in the normal state
chart.normal({fill: "#009999 0.7", fontWeight: 600});

// configure visual settings in the hover state
chart.hovered({fill: "#003366 0.5"});

// configure visual settings in the selected state
chart.selected({fill: "#003366 0.7"});
```

{sample}BCT\_Tag\_Cloud\_03{sample}

### Color Scale

* {api:anychart.scales.LinearColor}colorScale(){api}
* {api:anychart.charts.TagCloud#colorRange}colorRange(){api}

* {api:anychart.scales.LinearColor}anychart.scales.LinearColor{api}
* {api:anychart.scales.OrdinalColor}anychart.scales.OdinalColor{api}

```
// create and configure a custom color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#ffcc00", "#00ccff"]);

/* set the custom color scale
as the color scale of the chart*/
chart.colorScale(customColorScale);
```

{sample}BCT\_Tag\_Cloud\_04{sample}

```
// create and configure a custom color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: 50},
    {from: 50, to: 60},
    {greater: 60}
]);
customColorScale.colors(["lightgray", "#ffcc00", "#00ccff"]);

/* set the custom color scale
as the color scale of the chart*/
chart.colorScale(customColorScale);
```

{sample}BCT\_Tag\_Cloud\_05{sample}

```
// create and configure a custom color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.colors(["#00b8e6", "#e6b800", "#ff4d4d"]);

/* set the custom color scale
as the color scale of the chart*/
chart.colorScale(customColorScale);

// add a color range
chart.colorRange().enabled(true);
chart.colorRange().colorLineSize(30);
```

{sample}BCT\_Tag\_Cloud\_06{sample}

### Angles

* {api:anychart.charts.TagCloud#angles}angles(){api}
* {api:anychart.charts.TagCloud#anglesCount}anglesCount(){api}
* {api:anychart.charts.TagCloud#fromAngle}fromAngle(){api}
* {api:anychart.charts.TagCloud#toAngle}toAngle(){api}

```
// configure angles
chart.angles([0, 30, 90]);
```

{sample}BCT\_Tag\_Cloud\_07{sample}

```
// configure angles
chart.fromAngle(10);
chart.toAngle(100);
chart.anglesCount(5);
```

{sample}BCT\_Tag\_Cloud\_08{sample}


### Text Spacing

* {api:anychart.charts.TagCloud#textSpacing}textSpacing(){api}

default: 1

```
// set text spacing
chart.textSpacing(15);
```

{sample}BCT\_Tag\_Cloud\_09{sample}

### Mode

* rect
* spiral

* {api:anychart.enums.TagCloudMode}anychart.enums.TagCloudMode{api}

```
// change the mode
chart.mode("rect");
```

{sample}BCT\_Tag\_Cloud\_010{sample}

### Scales

```
// create a logarithmic scale and set it as the Y-scale
tagCloud2.scale(anychart.scales.log());
```

{sample}BCT\_Tag\_Cloud\_011{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

frequency = value

```
// configure tooltips
chart.tooltip().format("Value: {%Value}\n Percent: {%YPercentOfTotal}");
```

{sample}BCT\_Tag\_Cloud\_012{sample}

```
// configure tooltips
chart.tooltip().format(function(){
    percentOfTotal = (this.getData("value")*100)/this.getStat("sum");
    return percentOfTotal.toFixed(1) + "%";
});
```

{sample}BCT\_Tag\_Cloud\_013{sample}

### Interactivity

```
  //add an event listener
  chart.listen("pointDblClick", function(e){
      var url = "//en.wiktionary.org/wiki/" + e.point.get("x");
      window.open(url, "_blank");
  });
```

{sample}BCT\_Tag\_Cloud\_014{sample}