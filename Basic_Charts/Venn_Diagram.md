{:index 6.9}
# Venn Diagram

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
<tr><td></td><td>[Treemap](TreeMap_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/venn-diagram/" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Venn diagram, use the {api:anychart#venn}anychart.venn(){api} chart constructor, like in the following sample:

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

Data for a Venn diagram can be passed to the chart constructor {api:anychart#venn}anychart.venn(){api} or to the {api:anychart.charts.Venn#data}data(){api} method.

When you create data, you should use these data fields for both circles and intersection areas:

* **x** to set unique identifiers
* **value** to set sizes
* **name** to set names

The **name** field is optional, and the names of elements, unlike identifiers, do not need to be unique. By default, the names of circles are shown in labels, tooltips, and the legend. However, in the case of intersections the default choice for labels is **value**.

Please note that it is possible to add custom fields to your data – see the [Labels](#labels) and [Tooltips](#tooltips) sections of this article.

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

// create a chart and set the data
chart = anychart.venn(data);
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
    {x: "A&B", value: 20},
    {x: "A&C", value: 20},
    {x: "B&C", value: 20},
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
chart.dataSeparator("+");
```

{sample}BCT\_Venn\_Diagram\_04{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Venn diagram can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Venn#normal}normal(){api}, {api:anychart.charts.Venn#hovered}hovered(){api}, and {api:anychart.charts.Venn#selected}selected(){api} methods.

Combine them with the following methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

In the sample below, there is a Venn diagram with some of the appearance settings configured:

```
// configure the visual settings of the chart
chart.normal().fill("#00cc99", 0.3);
chart.hovered().fill("#00cc99", 0.1);
chart.selected().fill("#00cc99", 0.5);
chart.normal().hatchFill("percent20", "#808080");
chart.hovered().hatchFill("percent20", "#808080");
chart.selected().hatchFill("percent20", "#808080");
chart.normal().stroke("#00cc99");
chart.hovered().stroke("#00cc99", 2);
chart.selected().stroke("#00cc99", 4);
```

{sample}BCT\_Venn\_Diagram\_05{sample}

Intersection areas can also be configured in three states. Use the {api:anychart.core.venn.Intersections#normal}normal(){api}, {api:anychart.core.venn.Intersections#hovered}hovered(){api}, and {api:anychart.core.venn.Intersections#selected}selected(){api} methods.

Combine them with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

This sample shows a Venn diagram with the appearance of intersections configured:

```
// configure the visual settings of intersections
var intersect = chart.intersections();    
intersect.normal().fill("white", 0.1);
intersect.hovered().fill("white", 0.1);
intersect.selected().fill("white", 0.5);
intersect.normal().hatchFill("percent20", "#808080");
intersect.hovered().hatchFill("percent20", "white");
intersect.selected().hatchFill("percent20", "white");
intersect.normal().stroke("white");
intersect.hovered().stroke("white", 2);
intersect.selected().stroke("white", 4);
```

{sample}BCT\_Venn\_Diagram\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

Please note: when you create a Venn diagram, you can set labels both for circles and intersections.

This chart type supports an optional data field – **name**. The names of circles are shown in their labels by default, but in the case of intersections the default choice is **value**. If you want some other field to be displayed in the labels of intersections, you should configure them manually.

You can also add a custom data field and use it for configuring labels.

The sample below shows how to customize the labels of circles and intersections:

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
        value: 25
    }
];

// configure the labels of circles
chart.labels().format("{%name}\n\n{%custom_field}\n{%value}");

// configure the labels of intersections
chart.intersections().labels().format("{%name}\n\n{%value}");
```

{sample}BCT\_Venn\_Diagram\_07{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

Please note: when you create a Venn diagram, you can set tooltips both for circles and intersections.

This chart type supports an optional data field – **name**, which is shown in the tooltips of circles and intersections by default. You can also add a custom data field and use it for configuring tooltips.

The sample below shows how to customize the tooltips of circles and intersections:

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

// configure the tooltips of circles
chart.tooltip().format(
    "Set Info: {%custom_field}\n_Cardinality: {%value}"
);

// configure the tooltips of intersections
chart.intersections().tooltip().format(
    "Intersection Info: {%custom_field}\nCardinality: {%value}"
);
```

{sample}BCT\_Venn\_Diagram\_08{sample}