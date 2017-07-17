{:index 6.1}
#Tag Cloud

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
  * [Color Scale](#color_scale)
  * [Mode](#mode)
  * [Angles](#angles)
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

To create a Tag cloud, use {api:anychart#tagCloud}tagCloud(){api} method, like in the following sample:

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

When you create data for a Tag Cloud, you should use these data fields for each element (circles or intersection areas):

* **x** to ...
* **value** to ...
* **category** to set the category

The **category** field is optional...

{sample}BCT\_Tag\_Cloud\_02{sample}

### Appearance

* {api:anychart.charts.TagCloud#normal}normal(){api}
* {api:anychart.charts.TagCloud#hovered}hovered(){api}
* {api:anychart.charts.TagCloud#selected}selected(){api}

{sample}BCT\_Tag\_Cloud\_03{sample}

### Color Scale

* {api:anychart.scales.LinearColor}colorScale(){api}
* {api:anychart.charts.TagCloud#colorRange}colorRange(){api}

* {api:anychart.scales.LinearColor}anychart.scales.LinearColor{api}
* {api:anychart.scales.OrdinalColor}anychart.scales.OdinalColor{api}

{sample}BCT\_Tag\_Cloud\_04{sample}

{sample}BCT\_Tag\_Cloud\_05{sample}

{sample}BCT\_Tag\_Cloud\_06{sample}

### Mode

* rect
* spiral

{api:anychart.enums.TagCloudMode}anychart.enums.TagCloudMode{api}

{sample}BCT\_Tag\_Cloud\_07{sample}

### Angles

* {api:anychart.charts.TagCloud#angles}angles(){api}
* {api:anychart.charts.TagCloud#anglesCount}anglesCount(){api}
* {api:anychart.charts.TagCloud#fromAngle}fromAngle(){api}
* {api:anychart.charts.TagCloud#toAngle}toAngle(){api}

{sample}BCT\_Tag\_Cloud\_08{sample}

### Scales

{sample}BCT\_Tag\_Cloud\_09{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

{sample}BCT\_Tag\_Cloud\_010{sample}

{sample}BCT\_Tag\_Cloud\_011{sample}

### Interactivity

{sample}BCT\_Tag\_Cloud\_012{sample}