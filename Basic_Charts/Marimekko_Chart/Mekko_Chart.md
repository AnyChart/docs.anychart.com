{:index 1}
# Mekko Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Mekko chart with %-axis (often called *marimekko chart* or *100% cost curve*) is a two-dimensional [100% chart](../Stacked/Overview). As in the 100% chart, the value axis is based on percentages and column heights are shown relative to 100%. In the regular 100% chart, since the columns are scaled to relative heights, there is no visual representation of absolute column totals.

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.mekko.series.Mekko}anychart.core.mekko.series.Mekko{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](Mekko_Chart)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[YES]</td></tr>
<tr><td>Vertical</td><td>[YES](Vertical/Mekko_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Mekko Chart with Error Bars](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[BarMekko](BarMekko_Chart)</td></tr>
<tr><td></td><td>[Mosaic Chart](Mosaic_Chart)</td></tr>
<tr><td></td><td>[Column Chart](../Column_Chart)</td></tr>
<tr><td></td><td>[Bar Chart](../Bar_Chart)</td></tr>
<tr><td></td><td>[Stacked Charts](../Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/mekko-chart/" target="_blank">Chartopedia: Marimekko Mekko Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

{sample}BCT\_Mekko\_Chart\_01{sample}

## General Settings
## Special Settings
### Appearance

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Mekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical Mekko Chart:

* [Vertical Mekko Line](Vertical/Mekko_Chart)

