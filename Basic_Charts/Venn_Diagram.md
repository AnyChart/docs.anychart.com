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
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Venn Diagram](https://www.anychart.com/chartopedia/chart-types/venn-diagram/)</td></tr>
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

// configure the labels of intersections
chart.intersections().labels().format("{%x}");

// set the container id
chart.container('container');

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Venn\_Diagram\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Venn diagram (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

### Data

Data for a Venn diagram can be passed to the chart constructor {api:anychart#venn}anychart.venn(){api} or to the {api:anychart.charts.Venn#data}data(){api} method.

When you create data, you should use these data fields for both circles and intersection areas:

* `x` to set unique identifiers
* `value` to set sizes
* `name` to set names

The `name` field is optional, and the names of elements, unlike identifiers, do not need to be unique. By default, the names of circles are shown in labels, tooltips, and the legend. However, in the case of intersections the default choice for labels is `value`.

**Note:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

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

To set the identifier of an intersection (in its `x` field), combine the identifiers of intersecting circles. You can use an array:

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

#### Sets

The [appearance settings](../Appearance_Settings) of a Venn diagram can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Venn#normal}normal(){api}, {api:anychart.charts.Venn#hovered}hovered(){api}, and {api:anychart.charts.Venn#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

Please note that these settings affect only circles. To learn how to adjust intersection areas, see the [next section](#intersections).

In the sample below, there is a Venn diagram with appearance settings configured:

```
// configure the visual settings of the chart
chart.normal().fill("#00cc99", 0.3);
chart.hovered().fill("#00cc99", 0.1);
chart.selected().fill("#00cc99", 0.5);
chart.normal().hatchFill("percent50", "#004d39");
chart.hovered().hatchFill("percent50", "#004d39");
chart.selected().hatchFill("percent50", "#004d39");
chart.normal().stroke("#004d39");
chart.hovered().stroke("#004d39", 2);
chart.selected().stroke("#004d39", 4);
```

{sample}BCT\_Venn\_Diagram\_05{sample}

#### Intersections

Intersection areas can be configured in three [states](../Common_Settings/Interactivity/States). Use the {api:anychart.charts.Venn#intersections}intersections(){api} method with the {api:anychart.core.venn.Intersections#normal}normal(){api}, {api:anychart.core.venn.Intersections#hovered}hovered(){api}, and {api:anychart.core.venn.Intersections#selected}selected(){api} methods.

Combine them with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

This sample shows a Venn diagram with the appearance of intersections configured:

```
// configure the visual settings of intersections
var intersections = chart.intersections();    
intersections.normal().fill("green", 0.3);
intersections.hovered().fill("green", 0.1);
intersections.selected().fill("green", 0.5);
intersections.normal().hatchFill("percent50", "white");
intersections.hovered().hatchFill("percent50", "white");
intersections.selected().hatchFill("percent50", "white");
intersections.normal().stroke("white");
intersections.hovered().stroke("white", 2);
intersections.selected().stroke("white", 4);
```

{sample}BCT\_Venn\_Diagram\_06{sample}

#### Individual Points

You can change the appearance of individual points, both sets and intersections, by adding special fields to your data:

```
//create data
var data = [
    {x: "A", value: 100,
     normal:   {fill: "#455a64 0.5"},
     hovered:  {fill: "#455a64 0.5"},
     selected: {fill: "#455a64 0.5"}
    },
    {x: "B", value: 100,
     normal:   {fill: "#00bfa5 0.5"},
     hovered:  {fill: "#00bfa5 0.5"},
     selected: {fill: "#00bfa5 0.5"}
    },
    {x: "C", value: 200,
     normal:   {fill: "#1976d2 0.5"},
     hovered:  {fill: "#1976d2 0.5"},
     selected: {fill: "#1976d2 0.5"}
    },
    {x: ["A", "B"], value: 10},
    {x: ["B", "C"], value: 10,
     normal:   {stroke: "2 white"},
     hovered:  {stroke: "2 white"},
     selected: {stroke: "4 white"}
    }
];

// create a chart and set the data
chart = anychart.venn(data);
```

{sample}BCT\_Venn\_Diagram\_07{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

When you create a Venn diagram, you can set labels and tooltips both for circles and intersections.

To change the text of labels, combine the {api:anychart.charts.Venn#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens), and to configure tooltips, do the same with the {api:anychart.charts.Venn#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Use the {api:anychart.charts.Venn#intersections}intersections(){api} method to set the labels and tooltips of intersections.

Here are tokens that work with the Venn diagram:

* `{%x}`
* `{%value}`
* `{%name}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

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

// create a chart and set the data
chart = anychart.venn(data);

// configure the labels of circles
chart.labels().format("{%name}\n\n{%custom_field}\n{%value}");

// configure the labels of intersections
chart.intersections().labels().format("{%name}\n\n{%value}");

// configure the tooltips of circles
chart.tooltip().format(
    "Set Info: {%custom_field}\nCardinality: {%value}"
);

// configure the tooltips of intersections
chart.intersections().tooltip().format(
    "Intersection Info: {%custom_field}\nCardinality: {%value}"
);
```

{sample}BCT\_Venn\_Diagram\_08{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields: 

* `x`
* `value`
* `name`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

In the following sample, formatting function are used to show labels only on the intersections of three or more circles and display the number of intersections and a custom data field in tooltips:

```
//create data
var data = [
    {x: "A", value: 100},
    {x: "B", value: 100},
    {x: "C", value: 100},
    {x: ["A", "B"], value: 20, custom_field: "info 1"},
    {x: ["A", "C"], value: 20, custom_field: "info 2"},
    {x: ["B", "C"], value: 20, custom_field: "info 3"},
    {x: ["A", "B", "C"], value: 20, "custom_field": "info 4"}
];

// create a chart and set the data
chart = anychart.venn(data);

// configure the labels of intersections
chart.intersections().labels().format(function() {
  if (this.x.length > 2)
    return this.x; 
});

// configure the tooltips of intersections
chart.intersections().tooltip().format(function() {
  return "Value: " + this.value + "\n(" +
         this.x.length + " sets intersecting)\n\n" +
         this.getData("custom_field"); 
});
```

{sample}BCT\_Venn\_Diagram\_09{sample}