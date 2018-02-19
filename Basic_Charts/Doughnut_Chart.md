{:index 1}

# Doughnut Chart

## Overview

A doughnut (or donut) chart is a pie chart with a "hole" – a blank circular area in the center. The chart is divided into parts that show the percentage each value contributes to a total. 

Like the regular pie chart, the doughnut chart is used with small sets of data to compare categories. It drives attention from the area taken by each part to emphasize the length of arcs. The blank space also allows displaying some additional information in the center: for example, labels, the name of a selected category, or the chart title.

The Doughnut chart is a modification of the Pie chart and shares almost all the setting with it, so this article explains just how to create a basic Doughnut chart and configure its labels. To learn about other settings, read the [Pie Chart](Pie_Chart) article. See also <a href="https://www.anychart.com/chartopedia/chart-types/donut-chart/" target="_blank">Chartopedia: Doughnut Chart</a>.

## Quick Start

To create a Doughnut chart, use the {api:anychart#pie}anychart.pie(){api} chart constructor and the {api:anychart.charts.Pie#innerRadius}innerRadius(){api} method to set the inner radius. The radius is 0 by default and can be set either as a value or a percentage of the chart's bounds.

The following sample shows how to create a basic Doughnut chart:

```
// create data
var data = [
  {x: "A", value: 637166},
  {x: "B", value: 721630},
  {x: "C", value: 148662},
  {x: "D", value: 78662},
  {x: "E", value: 90000}
];

// create a pie chart and set the data
chart = anychart.pie(data);

/* set the inner radius
(to turn the pie chart into a doughnut chart)*/
chart.innerRadius("30%");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Doughnut\_Chart\_01{sample}

## Settings

The Doughnut chart is a modification of the Pie chart, so these two types share almost all the settings. You can find more settings in this article: [Pie Chart](Pie_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Doughnut chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Pie chart: {api:anychart.charts.Pie}anychart.charts.Pie{api}

## Special Settings

### Labels

#### Outer Labels

By default, labels are placed on the Doughnut chart. However, you can place them outside of the chart by using the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} method with the `"outside"` parameter:

```
// set the position of labels
chart.labels().position("outside");
```

To configure connectors (the lines connecting labels with slices), call the {api:anychart.charts.Pie#connectorStroke}connectorStroke(){api} method:

```
// configure connectors
chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
```

Another setting available for outer labels is {api:anychart.charts.Pie#outsideLabelsCriticalAngle}outsideLabelsCriticalAngle(){api}.

In this sample, there are outside labels with customized connectors:

{sample}BCT\_Doughnut\_Chart\_02{sample}

#### Inner Labels

To place labels into the blank area in the center of a Doughnut chart, call the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} method with the `"inside"` parameter. You can also configure the offset of the inner labels by using the {api:anychart.charts.Pie#insideLabelsOffset}isideLabelsOffset(){api} method.

The sample below shows a Doughnut chart with inner labels, the offset is -75%:

```
// set the position of labels
chart.labels().position("inside");

// set the offset for the labels
chart.insideLabelsOffset("-75%");
```

{sample}BCT\_Doughnut\_Chart\_03{sample}

### Center Content

You can place almost anything in the center of a Doughnut chart: e.g., a text label, a chart, a map. Use the {api:anychart.charts.Pie#center}center(){api} method, which provides the access to the {api:anychart.core.pie.Center}anychart.core.pie.Center{api} object.

#### Center Label

To put some text in the center of a Doughnut chart, create a label and assign it to the center:

```
// create and configure a label
var label = anychart.standalones.label();
label.text("Activities");
label.width("100%");
label.height("100%");
label.fontColor("#60727b");
label.hAlign("center");
label.vAlign("middle");

// set the label as the center content
chart.center().content(label);
```

{sample}BCT\_Doughnut\_Chart\_04{sample}

#### Chart

To put a chart in the center of a Doughnut, create this chart and specify it as the center content:

```
// create and configure a pie chart
var chart1 = anychart.pie(data);
chart1.innerRadius("75%");

// create a bar chart
var chart2 = anychart.bar(data);

// set bar chart as the center content of a pie chart
chart1.center().content(chart2);
```

{sample}BCT\_Doughnut\_Chart\_05{sample}

#### Map

To put a map in the center of a Doughnut, create this map and specify it as the center content:

```
// create pie chart and configure it
var pie = anychart.pie(data);
pie.innerRadius('85%');;

// create a map and configure it
var map = anychart.map();
map.geoData('anychart.maps.united_states_of_america');

// set map as the center of the chart 
pie.center().content(map);
```

{sample}BCT\_Doughnut\_Chart\_06{sample}

#### Custom Drawing

Another thing you can place in the center is a custom drawing created with the [Graphics](../Graphics/Overview) engine. Here a basic sample with several simple shapes:

```
// create pie chart and configure it
var pie = anychart.pie(data);
// create a layer and put some shapes in it
var layer = anychart.graphics.layer();
// draw the square
layer.rect(25, 50, 350, 300);
// set layer as the center of the chart 
pie.center().content(layer);
```

{sample}BCT\_Doughnut\_Chart\_07{sample}