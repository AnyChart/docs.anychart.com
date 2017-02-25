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
<tr><td>3D</td><td>[3D Pie](3D_Charts/3D_Pie_Chart)</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Doughnut](Doughnut_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/pie-chart/" target="_blank">Chartopedia: Pie Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

{sample}BCT\_Pie\_Chart\_01{sample}

## Settings

The Step Line chart is a modification of the Line chart, so these two types share almost all the settings. You can find more settings in this article: [Line Chart](Line_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Step Line chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Step Line series: {api:anychart.core.cartesian.series.StepLine}anychart.core.cartesian.series.StepLine{api}.

## Special Settings

### Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

(???) отмечаю на будущее, что нужно добавить текст

To configure a label on a Pie chart, you need to know the following peculiarities regarding formatting and positioning lables.... 

{sample}BCT\_Pie\_Chart\_05{sample}