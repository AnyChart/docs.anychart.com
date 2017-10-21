{:index 1.5}

# Funnel Chart

## Overview

Funnel Charts are so-called Accumulation Charts and they show percentage ratio. Funnel Charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage. This type of chart can also be useful in identifying potential problem areas in an organization’s sales processes. 

This article explains how to create a basic Funnel Chart as well as configure settings that are specific to the type. The table below gives a brief overview of the Funnel Chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Funnel}anychart.charts.Funnel{api}</td></tr>
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
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Pyramid](Pyramid_Chart)</td></tr>
<tr><td></td><td>[Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/funnel-chart/" target="_blank">Chartopedia: Funnel Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Funnel Chart, use the {api:anychart#funnel}anychart.funnel(){api} chart constructor. If you pass the data to this chart constructor, it will create a Funnel series. Another way to create the Funnel Chart is to call the {api:anychart.charts.Funnel}funnel(){api} method. Funnel Charts are single-series, like Pie or Pyramid Charts.


The following sample demonstrates how a basic Funnel Chart is created:

```
var data = [
  ["Total Market", 232000],
  ["Prospects", 94480],
  ["Leads", 47390],
  ["Sales", 22181]
];

chart = anychart.funnel(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Funnel\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Head

Head (or base) is the upper part of a Funnel, where the difference between areas is significant (in percentage value) and is demonstrated by areas' size. To adjust the width of the Funnel Head, use the {api:anychart.charts.Funnel#baseWidth}baseWidth(){api} method.

```
// set the base width
chart.baseWidth("50%");
```

{sample}BCT\_Funnel\_Chart\_02{sample}


### Neck

The neck is a lower part of a Funnel. All values under the neck look like a Stacked Column, which means that the difference between them is not really important. The default value of the Neck height is 25%. The {api:anychart.charts.Funnel#neckWidth}neckWidth(){api} and {api:anychart.charts.Funnel#width}width(){api} will help to adjust the neck width, and the {api:anychart.charts.Funnel#neckHeight}neckHeight(){api} method is used for setting the Funnel Chart neck's height.

```
// adjust the funnels neck
chart.neckWidth("20%");
chart.neckHeight("35%");
```

{sample}BCT\_Funnel\_Chart\_03{sample}

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Funnel chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Funnel#normal}normal(){api}, {api:anychart.charts.Funnel#hovered}hovered(){api}, and {api:anychart.charts.Funnel#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there is a Funnel chart with appearance settings configured:

```
chart.normal().fill("#00cc99", 0.3);
chart.hovered().fill("#00cc99", 0.1);
chart.selected().fill("#00cc99", 0.5);
chart.normal().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.hovered().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.selected().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.normal().stroke("white");
chart.hovered().stroke("white", 2);
chart.selected().stroke("white", 2);
```

{sample}BCT\_Funnel\_Chart\_04{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance (and some other settings) of individual points by adding special fields to the data set:

```
// create a data set
var data = [
  {name: "Total Market", value: 232000},
  {name: "Prospects", value: 94480,
   normal:   {
               hatchFill: "backward-diagonal",
               stroke: "black",
             },
   hovered:  {
               hatchFill: "backward-diagonal",
               stroke: "black",
             },
   selected: {
               fill: "lightGray",
               hatchFill: "backward-diagonal",
               stroke: "black",
             }
  },
  {name: "Leads", value: 47390},
  {name: "Sales", value: 22181}
];

// create a chart and set the data
chart = anychart.funnel(data);
```

{sample}BCT\_Funnel\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

#### Connectors

The line that joins a label with a particular funnel point is called a connector. Tune connectors' visual appearance with the {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method. 

```
chart.connectorStroke({
  // set thickness of the connectors
  thickness: 2,
  // set color of the connectors
  color: "#444",
  // set dashed connectors. Dashes are 4px and gaps are 2px
  dash: "4 2"
});
```

Find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings). Here is the funnel with tuned connectors.

{sample}BCT\_Funnel\_Chart\_06{sample}

**Note:** to hide connectors, set **null** value for {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method.


#### Position

Position of the labels is controlled by the {api:anychart.core.ui.LabelsFactory#position}position(){api} method. There are five acceptable values for funnel labels:
* **inside** - place labels inside each funnel point.
* **outsideLeftInColumn** - place labels to the left of the funnel and align them in a column.
* **outsideRightInColumn** - place labels to the right of the funnel and align them in a column.
* **outsideLeft** - place labels to the left of the funnel.
* **outsideRight** - place labels to the right of the funnel.

If you use **outsideLeft** or **outsideRight**, it becomes possible to adjust length of labels connectors. Use {api:anychart.charts.Funnel#connectorLength}connectorLength(){api} parameter to set custom length for all labels connectors.

```
// place labels to the right
var labels = chart.labels();
labels.position("outsideRight");

// set 45px connectors length
chart.connectorLength(45);
```

{sample}BCT\_Funnel\_Chart\_07{sample}

The content of the labels is adjusted with the {api:anychart.core.ui.LabelsFactory#format}format(){api} method. Read more about text formatting in the [Labels Text Formatting article](../Common_Settings/Labels#format_text).

#### Overlapping

After adjusting content of the funnel labels some of them can overlap others. To control or prevent overlapping use the {api:anychart.charts.Funnel#overlapMode}overlapMode(){api} method. The code sample below demonstrates setting labels with overlapping allowed.

```
// allow labels overlapping
chart.overlapMode("allowOverlap");
```

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a chart point is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.