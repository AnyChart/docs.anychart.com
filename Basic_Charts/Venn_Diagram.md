{:index 6.9}
#Venn Diagram

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Data](#data)
* [Appearance](#appearance)
* [Intersection](#intersection)
* [Labels](#labels)
* [Tooltips](#tooltips)

## Overview

[a diagram representing mathematical or logical sets pictorially as circles or closed curves within an enclosing rectangle (the universal set), common circles of the sets being represented by intersections of the circles.]

This article explains how to create a basic Venn diagram as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Venn diagram's characteristics:

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
<tr><td></td><td>[???](???)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="???" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Venn diagram, use the {api:anychart#venn}venn(){api} chart constructor, like in the following sample:

```
//create data
var data = [
    {
        x: "A",
        value: 100
    },
    {
        x: "B",
        value: 100
    },
    {
        x: ["A", "B"],
        value: 25
    }
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

## Data

When you create data for a Venn diagram, you should use the **x** data field to set a unique identifier of an element (circle or intersection), and **value** to set the size of an element.

There is also **name**, an optional field that allows you to add a name, not necessarily unique, of an element. By default, the names of circles are shown in labels, tooltips, and the legend. In the case of intersections it is different – read more in the [Labels](#labels) and [Tooltips](#tooltips) sections of this article.

The sample below shows two circles with their names set:

```
//create data
var data = [
    {
        x: "A",
        name: "Circle A",
        value: 400
    },
    {
        x: "B",
        name: "Circle B",
        value: 200
    }
];
```

{sample}BCT\_Venn\_Diagram\_02{sample}

To identify intersections (in their **x** fields), you need to combine the identifiers of intersecting circles. You can do that via an array:

```
{
    x: ["A", "B"],
    value: 20
},
{
},
{
    x: ["B", "C"],
    value: 20
},
{
    x: ["A", "B", "C"],
    value: 20
}
```

{sample}BCT\_Venn\_Diagram\_03{sample}

The identifiers of circles can be also combined via data separators, the default separator being **&**:

```
x: "A&B",
value: 20
```

The {api:anychart.charts.Venn#dataSeparator}dataSeparator{api} method allows you to change it to anything you like:

```
{
    x: "A+C",
    value: 20
},
{
    x: "B+C",
    value: 20
},
{
    x: "A+B+C",
    value: 20
}
```

{sample}BCT\_Venn\_Diagram\_04{sample}

## Appearance

Here is a full list of methods used to configure visual settings that are available for the Venn diagram:

* {api:anychart.charts.Venn#fill}fill(){api}, {api:anychart.charts.Venn#hatchFill}hatchFill(){api}, {api:anychart.charts.Venn#stroke}stroke(){api} set the fill, hatch fill, and stroke
* {api:anychart.charts.Venn#hoverFill}hoverFill(){api}, {api:anychart.charts.Venn#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.charts.Venn#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.charts.Venn#selectFill}selectFill(){api}, {api:anychart.charts.Venn#selectHatchFill}selectHatchFill(){api}, {api:anychart.charts.Venn#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there a Venn diagram with some of the appearance settings configured:

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

## Intersection

Here are methods that configure visual settings of intersections:

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

## Labels

## Tooltips