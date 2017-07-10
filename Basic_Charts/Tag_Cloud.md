{:index 6.1}
#Tag Cloud

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
  * [Scale](#scale)
  * [Color Scale](#color_scale)
  * [Interactivity](#interactivity)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

[A tag cloud (word cloud, or weighted list in visual design) is a visual representation of text data, typically used to depict keyword metadata (tags) on websites, or to visualize free form text. Tags are usually single words, and the importance of each tag is shown with font size or color.]

This article explains how to create a basic Tag Cloud chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Tag Cloud's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.TagCloud}anychart.charts.TagCloud{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[]()</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/tag-cloud-chart/" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Tag cloud, use {api:anychart#tagCloud}tagCloud(){api} method, like in the following sample:

```
// create data
var data = [
    {"x": "learning", "value": 80},
    {"x": "lists", "value": 44},
    {"x": "meaning", "value": 40},
    {"x": "useful", "value": 36},
    {"x": "different", "value": 32},
    {"x": "grammar", "value": 28},
    {"x": "teaching", "value": 24},
    {"x": "example", "value": 20},
    {"x": "includes", "value": 56},
    {"x": "thing", "value": 12},
    {"x": "vocabulary", "value": 10},
    {"x": "frequency", "value": 10},
    {"x": "phrases", "value": 15},
    {"x": "content", "value": 27}
];

// create a chart and set the data
chart = anychart.tagCloud(data);

// set the container id
chart.container('container');

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Tag\_Cloud\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Tag Cloud chart (for example, legend settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

### Appearance

### Scale

### Color Scale

### Interactivity

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.