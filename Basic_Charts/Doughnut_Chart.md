{:index 1}
#Doughnut Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)
* [Special Settings](#special_settings)
  * [Labels](#labels)
    * [Outer Labels](#outer_labels)
    * [Inner Labels](#inner_labels)

##Overview

A doughnut (or donut) chart is a pie chart with a "hole" – a blank circular area in the center. The chart is divided into parts that show the percentage each value contributes to a total. 

Like the regular pie chart, the doughnut chart is used with small sets of data to compare categories. It drives attention from the area taken by each part to emphasize the length of arcs. The blank space also allows displaying some additional information in the center: for example, labels, the name of a selected category, or the chart title.

The Doughnut chart is a modification of the Pie chart and shares almost all the setting with it, so this article explains just how to create a basic Doughnut chart and configure its labels. To learn about other settings, read the [Pie Chart](Pie_Chart) article. See also <a href="https://www.anychart.com/chartopedia/chart-types/donut-chart/" target="_blank">Chartopedia: Doughnut Chart</a>.

##Quick Start

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
var chart = anychart.pie(data);

// set the inner radius
// (to turn the pie chart into a doughnut chart)
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

By default, labels are placed on the Doughnut chart. However, you can place them outside of the chart by using the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} method with the <strong>"outside"</strong> parameter:

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

{sample}BCT\_Doughnut\_Chart\_02{sample}

#### Inner Labels

To place labels into the blank area in the center of a Doughnut chart, call the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} method with the <strong>"inside"</strong> parameter. You can also configure the offset of the inner labels by using the {api:anychart.charts.Pie#insideLabelsOffset}isideLabelsOffset(){api} method.

The sample below shows a Doughnut chart with inner labels, the offset is -75%:

```
// set the position of labels
chart.labels().position("inside");

// set the offset for the labels
chart.insideLabelsOffset("-75%");
```

{sample}BCT\_Doughnut\_Chart\_03{sample}