{:index 1.61}
# Pie Chart

## Overview

A pie chart is a circular chart looking like a pie divided into slices (sectors). Slices show the percentage each value contributes to a total, the area of each slice being proportional to the quantity it represents, and the circle representing 100%. A pie chart with a blank circular area in the center is called a [doughnut chart](Doughnut_Chart).

Pie charts are used very widely with small sets of data to compare categories. They cannot be multi-series and should not be used when there are more than just a few categories.

This article explains how to create a basic Pie chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Pie chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Pie}anychart.charts.Pie{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>[3D Pie](3D/Pie_Chart)</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Doughnut](Doughnut_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/pie-chart/" target="_blank">Chartopedia: Pie Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

To create a Pie chart, use the {api:anychart#pie}anychart.pie(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {x: "A", value: 637166},
  {x: "B", value: 721630},
  {x: "C", value: 148662},
  {x: "D", value: 78662},
  {x: "E", value: 90000}
];

// create a chart and set the data
var chart = anychart.pie(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Pie\_Chart\_01{sample}

##General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pie chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Slices

The [appearance settings](../Appearance_Settings) of a Pie chart can be configured in two [states](../Common_Settings/Interactivity/States): **normal** and **hover**. Use the {api:anychart.charts.Pie#normal}normal(){api} and {api:anychart.charts.Pie#hovered}hovered(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there a Pie chart with appearance settings configured:

```
chart.normal().fill("#669999", 0.5);
chart.hovered().fill("#669999", 0.3);
chart.normal().hatchFill("forward-diagonal", "#669999");
chart.hovered().hatchFill("forward-diagonal", "#669999", 3);
chart.normal().stroke("#669999", 3);
chart.hovered().stroke("#669999", 3);
```

{sample}BCT\_Pie\_Chart\_02{sample}

#### Aqua Style

There is a special visual setting available for the Pie chart – Aqua Style. To apply it, use the {api:anychart.charts.Pie#fill}fill(){api} method with the **"aquastyle"** parameter:

```
// enable aqua style
chart.fill("aquastyle");
```
{sample}BCT\_Pie\_Chart\_03{sample}

#### Individual Slices

It is possible to configure the appearance of each slice individually – use extra data fields corresponding with the methods mentioned above:

```
// create data
var data = [
  {x: "Pacman", value: 400,
   normal:  {
              fill: "#ffff00",
              hatchFill: "percent50"        
            },
   hovered: {
              fill: "#ffff00",
              hatchFill: "percent50"
            }
  },
  {x: "Not Pacman", value: 130,
   normal:  {fill: "#404040"},
   hovered: {fill: "#404040"}
  }
];

// create a chart and set the data
chart = anychart.pie(data);
```

{sample}BCT\_Pie\_Chart\_04{sample}

### Start Angle

You can set the start angle of the first slice by using the {api:anychart.charts.Pie#startAngle}startAngle(){api} method. The angle is 0° by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90°:

```
// set the start angle
pie2.startAngle(90);
```

{sample}BCT\_Pie\_Chart\_06{sample}

### Sorting Order

In AnyChart you can sort the slices of a Pie chart in an ascending or descending order with the {api:anychart.charts.Pie#sort}sort(){api} method. Use **"asc"**, **"desc"**, or **"none"** as a parameter (the default sorting mode is "none"):

```
// set the sorting mode
pie1.sort("none");
pie2.sort("asc");
pie3.sort("desc");
```

{sample}BCT\_Pie\_Chart\_07{sample}

### Exploded Slices

By default, there is no spaces between the slices of a Pie chart, and when a user clicks a slice, it "explodes", moving away from the others.

You can configure the range of explosion by using the {api:anychart.charts.Pie#explode}explode(){api} method:

```
// set the explosion range
chart.explode (30);
```

To make some slices exploded by default, use the {api:anychart.charts.Pie#explodeSlice}explodeSlice(){api} method with two parameters. The first one is the number of a slice (numbering starts from 0), and the second one is a boolean value that enables explosion:

```
// explode the third slice
chart.explodeSlice(2, true);
```

Another way to enable explosion is to add a special field to your data, which should be set as an object:

```
// create a data
var data = [
  {x: "A", value: 637166},
  {x: "B", value: 721630},
  {x: "C", value: 148662},
  {x: "D", value: 78662, exploded: true},
  {x: "E", value: 90000}
];
```

In this sample, there is a Pie chart with two slices exploded by default and the explosion range set to 30:

{sample}BCT\_Pie\_Chart\_08{sample}

### Radius

To set the radius of a Pie chart, call the {api:anychart.charts.Pie#radius}radius(){api} method and specify either a value or a percentage of the chart's bounds.

In the following sample, the radius of the first Pie chart is not configured, and the radius of the second one is set to 30%:

```
// set the radius
pie2.radius("30%")
```

{sample}BCT\_Pie\_Chart\_09{sample}

The {api:anychart.charts.Pie#innerRadius}innerRadius(){api} method allows you to set the inner radius of a Pie chart (which is 0 by default), thus turning it into a Doughnut chart. Read more in the [Doughnut Chart](Doughnut_Chart) article.

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

#### Outer Labels

By default, labels are placed on the Pie chart. However, you can place them outside of the chart by using the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} method with the **"outside"** parameter:

```
// set the position of labels
chart.labels().position("outside");
```

To configure connectors (the lines connecting labels with slices), call the {api:anychart.charts.Pie#connectorStroke}connectorStroke(){api} method:

```
// configure connectors
chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
```

Other settings available for outer labels are {api:anychart.charts.Pie#outsideLabelsSpace}outsideLabelsSpace(){api} and {api:anychart.charts.Pie#outsideLabelsCriticalAngle}outsideLabelsCriticalAngle(){api}.

In this sample, there are outside labels with customized connectors:

{sample}BCT\_Pie\_Chart\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.