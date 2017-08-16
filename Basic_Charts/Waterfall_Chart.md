{:index 7.5}
#Waterfall Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
  * [Connectors](#connectors)
  * [Labels](#labels)

## Overview

[A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air.]

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Waterfall}anychart.charts.Waterfall{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, isTotal](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>???</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>???</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Column](Column_Chart), [Range Column](Range_Column_Chart), [Pareto](Pareto_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/waterfall-chart/" target="_blank">Chartopedia: Waterfall Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Waterfall chart, use the {api:anychart#waterfall}waterfall(){api} chart constructor, like in the following sample:

```

```

{sample}BCT\_Waterfall\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Waterfall chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Waterfall chart can be passed to the chart constructor {api:anychart#waterfall}waterfall(){api} or to the {api:anychart.charts.Waterfall#data}data(){api} method.

Use the following data fields:

* **x **to set words
* **value** to set frequencies
* **isTotal** to set...

isTotal: optional, boolean

[Если есть value, то по дефолту isTotal считается false
    Если isTotal = true - рисуется Column
    Если isTotal = false - рисуется RangeColumn
Если value нет, то по дефолту isTotal считается true
    Если isTotal = true - рисуется Column
    Если isTotal = false - рисуется Missing]

[value - в зависимости от chart.dataMode ожидается либо абсолютное значение, либо значение относительно предыдущего.]

data mode: {api:anychart.charts.Waterfall#dataMode}dataMode(){api}

diff data mode (default):

```

```

{sample}BCT\_Waterfall\_Chart\_02{sample}

absolute data mode:

```

```

{sample}BCT\_Waterfall\_Chart\_03{sample}

### Appearance

You can set the stroke, fill, and hatch fill of falling and rising elements. Use the following methods:

* {api:anychart.core.waterfall.series.Waterfall#fallingFill}fallingFill{api}, {api:anychart.core.waterfall.series.Waterfall#fallingHatchFill}fallingHatchFill{api}, {api:anychart.core.waterfall.series.Waterfall#fallingStroke}fallingStroke{api}
* {api:anychart.core.waterfall.series.Waterfall#risingFill}risingFill{api}, {api:anychart.core.waterfall.series.Waterfall#risingHatchFill}risingHatchFill{api}, {api:anychart.core.waterfall.series.Waterfall#risingStroke}risingStroke{api}

To configure these settings on hover, use:

* {api:anychart.core.waterfall.series.Waterfall#hoverFallingFill}hoverFallingFill{api}, {api:anychart.core.waterfall.series.Waterfall#hoverFallingHatchFill}hoverFallingHatchFill{api}, {api:anychart.core.waterfall.series.Waterfall#hoverFallingStroke}hoverFallingStroke{api}
* {api:anychart.core.waterfall.series.Waterfall#hoverRisingFill}hoverRisingFill{api}, {api:anychart.core.waterfall.series.Waterfall#risingHatchFill}hoverRisingHatchFill{api}, {api:anychart.core.waterfall.series.Waterfall#hoverRisingStroke}hoverRisingStroke{api}

To configure these settings on select, use:

* {api:anychart.core.waterfall.series.Waterfall#selectFallingFill}selectFallingFill{api}, {api:anychart.core.waterfall.series.Waterfall#selectFallingHatchFill}selectFallingHatchFill{api}, {api:anychart.core.waterfall.series.Waterfall#selectFallingStroke}selectFallingStroke{api}
* {api:anychart.core.waterfall.series.Waterfall#selectRisingFill}selectRisingFill{api}, {api:anychart.core.waterfall.series.Waterfall#selectRisingHatchFill}selectRisingHatchFill{api}, {api:anychart.core.waterfall.series.Waterfall#selectRisingStroke}selectRisingStroke{api}

You can also set fill, hatch fill, and stroke of...

* {api:anychart.core.cartesian.series.Waterfall#fill}fill(){api}, {api:anychart.core.cartesian.series.Waterfall#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Waterfall#stroke}stroke(){api} set the fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Waterfall#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Waterfall#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Waterfall#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Waterfall#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Waterfall#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Waterfall#selectStroke}selectStroke(){api} configure the visual settings on select

Lear more: [Appearance Settings](../Appearance_Settings) section.

```

```

{sample}BCT\_Waterfall\_Chart\_04{sample}

### Connectors

{api:anychart.charts.Waterfall#connectorStroke}connectorStroke(){api} 

```

```

{sample}BCT\_Waterfall\_Chart\_01{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

[В контексты форматтеров, помимо обычных данных для stacked column серии приходят поля 'diff', 'absolute' и 'isTotal'. Они приходят как поля и как токены (кроме isTotal - он не токен), их так же можно спросить через this.getMeta() (но не через this.getData())]