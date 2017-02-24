{:index 1}
#Pie Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

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

##General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pie chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Pie series:

* {api:anychart.charts.Pie#fill}fill(){api}, {api:anychart.charts.Pie#hatchFill}hatchFill(){api}, {api:anychart.charts.Pie#stroke}stroke(){api} set the fill, hatch fill, and stroke
* {api:anychart.charts.Pie#hoverFill}hoverFill(){api}, {api:anychart.charts.Pie#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.charts.Pie#hoverStroke}hoverStroke(){api} configure the visual settings on hover

animation, background, hatchFillPalette, palette, connectorStroke?

{sample}BCT\_Pie\_Chart\_02{sample}

{sample}BCT\_Pie\_Chart\_03{sample}

{sample}BCT\_Pie\_Chart\_04{sample}

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

### Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

(???) отмечаю на будущее, что нужно добавить текст

To configure a label on a Pie chart, you need to know the following peculiarities regarding formatting and positioning lables.... 

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

(???) отмечаю на будущее, что нужно добавить текст

In case of Pie charts, there are some peculiarities in formatting the text of tooltips...