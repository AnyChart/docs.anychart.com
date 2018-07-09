{:index 2}
# Pyramid Chart

## Overview

Pyramid chart is a kind of [Funnel chart](Funnel_Chart) that presents data in the similar way the funnel does. The main different of the pyramid chart from the funnel is an absence of the neck part. 

This article explains how to create a basic Pyramid Chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Pyramid chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Pyramid and Funnel](../Quick_Start/Modules#pyramid_and_funnel)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Pyramid}anychart.charts.Pyramid{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[name, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[NO](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[Funnel](Funnel_Chart)</td></tr>
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Pyramid Chart](https://www.anychart.com/chartopedia/chart-types/pyramid-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Pyramid chart requires adding the [Pyramid and Funnel](../Quick_Start/Modules#pyramid_and_funnel) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pyramid-funnel.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Pyramid Chart, use the {api:anychart#pyramid}anychart.pyramid(){api} chart constructor. Another way to create a Pyramid Chart is to use the {api:anychart.charts.Pyramid}anychart.charts.Pyramid{api} class constructor.

The following sample demonstrates how a basic Pyramid chart is created:

```
chart = anychart.pyramid([
  {name: "Fantasy", value: 637166},
  {name: "Science Fiction", value: 721630},
  {name: "Detective", value: 148662},
  {name: "Classics", value: 78662},
  {name: "Textbooks", value: 90000}
]);

// draw chart
chart.container("container");
chart.draw();
```

{sample}BCT\_Pyramid\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pyramid Chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Pyramid chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Pyramid#normal}normal(){api}, {api:anychart.charts.Pyramid#hovered}hovered(){api}, and {api:anychart.charts.Pyramid#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there is a Pyramid chart with appearance settings configured:

```
// configure the visual settings of the chart
chart.normal().fill("#004d39", 0.3);
chart.hovered().fill("#004d39", 0.1);
chart.selected().fill("#004d39", 0.5);
chart.hovered().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.selected().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.normal().stroke("white");
chart.hovered().stroke("white", 2);
chart.selected().stroke("white", 2);
```

{sample}BCT\_Pyramid\_Chart\_02{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance (and some other settings) of individual points by adding special fields to your data:

```
// create data
var data = [
  {name: "Fantasy", value: 637166},
  {name: "Science Fiction", value: 721630,
   normal:   {
             hatchFill: "backward-diagonal",
             stroke: "black"
             },
   hovered:  {
               fill: "lightGray",
               hatchFill: "backward-diagonal",
               stroke: "black"
             },
   selected: {
               fill: "white",
               hatchFill: "backward-diagonal",
               stroke: "black"
             }
  },
  {name: "Detective", value: 148662},
  {name: "Classics", value: 78662},
  {name: "Textbooks", value: 90000}
];

// create a chart and set the data  
chart = anychart.pyramid(data);
```

{sample}BCT\_Pyramid\_Chart\_03{sample}

### Base

The base of a pyramid is the largest horizontal line of the pyramid chart. In this section, we will quickly demonstrate how we can set the custom base width and invert base position.

Use the {api:anychart.charts.Pyramid#baseWidth}baseWidth(){api} to set the base size (in pixels or in percent):

```
// set base width to 50% of the container width
chart.baseWidth("50%")
```

{sample}BCT\_Pyramid\_Chart\_04{sample}

*Note:* Define an integer value of {api:anychart.charts.Pyramid#baseWidth}baseWidth(){api} to set fixed size of the base.


### Orientation

By default, the base of the pyramid is placed at the bottom of the chart. Use the {api:anychart.charts.Pyramid#reversed}reversed(){api} method to turn the pyramid upside down.

```
// turn the pyramid upside-down
chart.reversed(true);
```

Here is how reversed pyramid looks like:

{sample}BCT\_Pyramid\_Chart\_05{sample}


### Padding

As you can see, each part of a pyramid is separated from another with some space. The space between each part of pyramid chart is controlled by a {api:anychart.charts.Pyramid#pointsPadding}pointsPadding(){api} parameter. 

```
// set space between pyramid blocks
chart.pointsPadding(5);
```

Here is how the pyramid chart with a significant spacing looks like.

{sample}BCT\_Pyramid\_Chart\_06{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart. This section explains how to adjust the connectors and position of labels and to allow or forbid overlapping. To learn how to modify the text of labels, see the [Labels and Tooltips (Text)](#labels_and_tooltips_\(text\)) section of this article.

#### Connectors

The line that joins a label with a particular pyramid point is called a connector. You can tune connectors visual appearance using the {api:anychart.charts.Pyramid#connectorStroke}connectorsStroke(){api} method. 

```
chart.connectorStroke({
  // set thickness of the connectors
  thickness: 2,
  // set color of the connectors
  color: '#444',
  // set dashed connectors. Dashes are 4px and gaps are 2px
  dash: '4 2'
});
```

{sample}BCT\_Pyramid\_Chart\_07{sample}

Find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings).

*Note:* if you want to hide connectors set the **null** value for {api:anychart.charts.Pyramid#connectorStroke}connectorsStroke(){api} method.

#### Position

The position of the labels is controlled by the {api:anychart.core.ui.LabelsFactory#position}position(){api} method. There are five acceptable values for pyramid labels:

* `"inside"` - place labels inside each pyramid point.
* `"outsideLeftInColumn"` - place labels to the left of the pyramid and align them in a column.
* `"outsideRightInColumn"` - place labels to the right of the pyramid and align them in a column.
* `"outsideLeft"` - place labels to the left of the pyramid.
* `"outsideRight"` - place labels to the right of the pyramid.

If you use `"outsideLeft"` or `"outsideRight"`, it will be possible to adjust the length of labels connectors. Use the {api:anychart.charts.Pyramid#connectorLength}connectorsLength(){api} method to set custom length for all labels connectors:

```
// place labels to the right
chart.labels().position('outside-right');

// set 45px connectors length   
chart.connectorLength(45);
```

{sample}BCT\_Pyramid\_Chart\_08{sample}

#### Overlapping

Sometimes labels overlap each other. To allow or forbid overlapping, use the {api:anychart.charts.Pyramid#overlapMode}overlapMode(){api} method. The code sample below demonstrates setting labels with overlapping allowed.

```
// allow labels overlapping
chart.overlapMode("allowOverlap");
```

### Labels and Tooltips (Text)

For text [labels](../Common_Settings/Labels), font settings and [text formatters](../Common_Settings/Text_Formatters) are available. The same settings can be applied to [tooltips](../Common_Settings/Tooltip) - text boxes displayed when chart points are hovered.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.Pyramid#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Pyramid#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Besides tokens that work with all chart types, there is a token that is specific to the Pyramid - `{%yPercentOfTotal}`. It returns an element's percentage of the total.

Also, you can add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```
// create a chart and set the data
var chart = anychart.pyramid([
  {name: "Fantasy", value: 637166, custom_field: "info 1"},
  {name: "Science Fiction", value: 721630, custom_field: "info 1"},
  {name: "Detective", value: 148662, custom_field: "info 1"},
  {name: "Classics", value: 78662, custom_field: "info 1"},
  {name: "Textbooks", value: 90000, custom_field: "info 1"}
]);

// configure labels
chart.labels().format("{%name}: {%yPercentOfTotal}%");

// configure tooltips
chart.tooltip().format("{%yPercentOfTotal}% ({%value})\n{%custom_field}");
```

{sample}BCT\_Pyramid\_Chart\_09{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) instead of tokens.

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

In the sample below, functions modify the format of labels and tooltips depending on elements' percentages of the total, and a custom data field is used:

```
// create a chart and set the data
var chart = anychart.pyramid([
  {name: "Fantasy", value: 637166, custom_field: "info 1"},
  {name: "Science Fiction", value: 721630, custom_field: "info 2"},
  {name: "Detective", value: 148662, custom_field: "info 3"},
  {name: "Classics", value: 78662, custom_field: "info 4"},
  {name: "Textbooks", value: 90000, custom_field: "info 5"}
]);

// enable HTML for labels and tooltips
chart.labels().useHtml(true);
chart.tooltip().useHtml(true);

// configure labels
chart.labels().format(function (){
  var percentOfTotal = (this.getData("value")*100)/this.getStat("sum");
  if (percentOfTotal > 40)
      return "<span style='color:#dd2c00;font-weight:bold'>" +
             this.name + ": " + percentOfTotal.toFixed(1) + "%</span>";
  return this.name + ": " +percentOfTotal.toFixed(1) + "%";
});

// configure tooltips
chart.tooltip().format(function (){
  var percentOfTotal = (this.getData("value")*100)/this.getStat("sum");
  if (percentOfTotal > 40)
      return "<span style='font-size:18'>" +
             percentOfTotal.toFixed(1) + "% (" +
             this.value + ")</span><br></br><br>" +
             this.getData("custom_field");
  return percentOfTotal.toFixed(1) + "% (" + this.value +
         ")<br></br><br></br>" + this.getData("custom_field");
});
```

{sample}BCT\_Pyramid\_Chart\_10{sample}