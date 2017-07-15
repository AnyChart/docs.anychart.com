{:index 6.9}
#Venn Diagram

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
    * [Intersections](#intersections)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Venn diagram, named after John Venn, is a diagram representing all possible logical relations between a finite collection of different sets. Sets are shown as regions inside circles or other closed curves, and common elements of the sets are shown as intersections of these circles.

The AnyChart Venn chart type can be also used for creating Euler diagrams. The Euler diagram, named after Leonhard Euler, is very similar to the Venn diagram, but represents only relevant relations between sets.

This article explains how to create a basic Venn (or Euler) diagram as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Venn diagram's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Venn}anychart.charts.Venn{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, name](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[TreeMap](TreeMap_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/venn-diagram/" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Venn diagram, use the {api:anychart#venn}venn(){api} chart constructor, like in the following sample:

```
//create data
var data = [
    {x: "A", value: 100},
    {x: "B", value: 100},
    {x: ["A", "B"], value: 25}
];

// create a chart and set the data
chart = anychart.venn(data);

// configure labels of intersections
chart.intersections().labels().format("{%X}");

// set the container id
chart.container('container');

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Venn\_Diagram\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Venn diagram (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

When you create data for a Venn diagram, you should use these data fields for each element (circles or intersection areas):

* **x** to set a unique identifier
* **value** to set the size
* **name** to set the name

The **name** field is optional, and names of elements, unlike identifiers, do not need to be unique. By default, the names of circles are shown in labels, tooltips, and the legend. However, in the case of intersections the default choice for labels is **value**. Read more in the [Labels](#labels) and [Tooltips](#tooltips) sections of this article.

The sample below shows two circles with their names set:

```
//create data
var data = [
    {
    	x: "A",
    	name: "Set A",
    	value: 400
    },
    {
    	x: "B",
    	name: "Set B",
    	value: 200
    }
];
```

{sample}BCT\_Venn\_Diagram\_02{sample}

To set the identifier of an intersection (in its **x** field), combine the identifiers of intersecting circles. You can use an array:

```
// create data
var data = [
    {x: "A", value: 100},
    {x: "B", value: 100},
    {x: "C", value: 100},
	{x: ["A", "B"],	value: 20},
	{x: ["B", "C"], value: 20},
	{x: ["A", "B", "C"], value: 20}
];
```

{sample}BCT\_Venn\_Diagram\_03{sample}

With the help of data separators, the identifiers of circles can be also set as strings. The default separator is *&*:

```
// create data
var data = [
	{x: "A", value: 100},
	{x: "B", value: 100},
	{x: "C", value: 100},
	{x: A&B, value: 20},
	{x: B&C, value: 20},
	{x: "A&B&C", value: 20}
];
```

The {api:anychart.charts.Venn#dataSeparator}dataSeparator{api} method allows you to change it to anything you like:

```
// create data
var data = [
    {x: "A", value: 100},
    {x: "B", value: 100},
    {x: "C", value: 100},
    {x: "A+B", value: 20},
    {x: "A+C", value: 20},
    {x: "B+C", value: 20},
    {x: "A+B+C", value: 20}
];

// set the data separator
chart.dataSeparator("+")
```

{sample}BCT\_Venn\_Diagram\_04{sample}

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Venn diagram:

* {api:anychart.charts.Venn#fill}fill(){api}, {api:anychart.charts.Venn#hatchFill}hatchFill(){api}, {api:anychart.charts.Venn#stroke}stroke(){api} set the fill, hatch fill, and stroke
* {api:anychart.charts.Venn#hoverFill}hoverFill(){api}, {api:anychart.charts.Venn#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.charts.Venn#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.charts.Venn#selectFill}selectFill(){api}, {api:anychart.charts.Venn#selectHatchFill}selectHatchFill(){api}, {api:anychart.charts.Venn#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there is a Venn diagram with some of the appearance settings configured:

```
// configure visual settings
chart.fill("#00cc99", 0.3);
chart.hoverFill("#00cc99", 0.3);
chart.selectFill("#00cc99", 0.5);
chart.hatchFill("percent20", "#808080");
chart.hoverHatchFill("percent20", "#808080");
chart.selectHatchFill("percent20", "#808080");
chart.stroke("#00cc99");
chart.hoverStroke("#00cc99", 2);
chart.selectStroke("#00cc99", 4);
```

{sample}BCT\_Venn\_Diagram\_05{sample}

#### Intersections

Here are methods that configure visual settings of intersection areas:

* {api:anychart.core.venn.Intersections#fill}fill(){api}, {api:anychart.core.venn.Intersections#hatchFill}hatchFill(){api}, {api:anychart.core.venn.Intersections#stroke}stroke(){api} set the fill, hatch fill, and stroke
* {api:anychart.core.venn.Intersections#hoverFill}hoverFill(){api}, {api:anychart.core.venn.Intersections#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.venn.Intersections#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.venn.Intersections#selectFill}selectFill(){api}, {api:anychart.core.venn.Intersections#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.venn.Intersections#selectStroke}selectStroke(){api} configure the visual settings on select

This sample shows a Venn diagram with the appearance of intersections configured:

```
// configure visual settings of intersections
var intersect = chart.intersections();    
intersect.fill("white", 0.3);
intersect.hoverFill("white", 0.3);
intersect.selectFill("white", 0.5);
intersect.hatchFill("percent20", "#808080");
intersect.hoverHatchFill("percent20", "white");
intersect.selectHatchFill("percent20", "white");
intersect.stroke("white");
intersect.hoverStroke("white", 2);
intersect.selectStroke("white", 4);
```

{sample}BCT\_Venn\_Diagram\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

Please note: when you create a Venn diagram, you can set labels both for circles and intersections.

This chart type supports an optional data field – **name**. Names of circles are shown in their labels by default, but in the case of intersections the default choice is **value**. If you want some other field to be displayed in labels of intersections, you should configure them manually.

You can also add a custom data field and use it for configuring labels.

In the sample below, there is a Venn diagram with customized labels of circles and intersections:

```
//create data
var data = [
    {
        x: "A",
        name: "Set A",
        custom_field: "info 1",
        value: 100
    },
    {
        x: "B",
        name: "Set A",
        custom_field: "info 2",
        value: 100
    },
    {
        x: ["A", "B"],
        name: "Set A + Set B",
        custom_field: "info 3",
        value: 25
    }
];
```

```
// configure labels of circles
chart.labels().format("{%name}\n\n{%custom_field}\n{%value}");

// configure labels of intersections
chart.intersections().labels().format("{%name}\n\n{%custom_field}\n{%value}");
```

{sample}BCT\_Venn\_Diagram\_07{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

Please note: when you create a Venn diagram, you can set tooltips both for circles and intersections.

This chart type supports an optional data field – **name**, which is shown in tooltips of circles and intersections by default. You can also add a custom data field and use it for configuring tooltips.

In the sample below, there is a Venn diagram with customized tooltips of circles and intersections:

```
//create data
var data = [
    {
        x: "A",
        name: "Set A",
        custom_field: "info 1",
        value: 100
    },
    {
        x: "B",
        name: "Set A",
        custom_field: "info 2",
        value: 100
    },
    {
        x: ["A", "B"],
        name: "Set A + Set B",
        custom_field: "info 3",
        value: 25
    }
];
```

```
// configure tooltips of intersections
chart.intersections().tooltip().format("{%custom_field}\n{%value}");
```

{sample}BCT\_Venn\_Diagram\_08{sample}