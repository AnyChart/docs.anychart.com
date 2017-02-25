{:index 1}
#Doughnut Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)
* [Special Settings](#special_settings)
  * [Labels](#labels)

##Overview

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Pie}anychart.charts.Pie{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>[3D Doughnut](3D_Charts/3D_Doughnut_Chart)</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/donut-chart/" target="_blank">Chartopedia: Doughnut Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

```
// create a data set
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

* [Pie Chart](Pie_Chart)
* [General Settings](General_Settings)
* {api:anychart.charts.Pie}anychart.charts.Pie{api}

## Special Settings

### Labels

```
// set the position of labels
chart.labels().position('outside');

// configure connectors
chart.connectorStroke(
// thickness, color
  "2 #595959",
// opacity
  1,
// dashes and gaps
  "2 2"
);
```

{sample}BCT\_Doughnut\_Chart\_02{sample}

```
// set the position of labels
chart.labels().position('inside');

// set the offset for the labels
chart.insideLabelsOffset("-75%");
```

{sample}BCT\_Doughnut\_Chart\_03{sample}