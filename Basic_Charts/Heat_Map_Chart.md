{:index 1.5}
# Heat Map Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Appearance](#appearance)
  * [Color Scale](#color_scale)
  * [Labels](#labels)
  * [Tooltip](#tooltip)
  * [Scroller](#scroller)

## Overview

[AnyChart JavaScript Heat map is a graphical representation of data where the individual values contained in a matrix are represented as colors. This article will tell you how to work with Heat map charts in AnyChart JavaScript Charting Library.]

This article explains how to create a basic Area chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Area}anychart.core.cartesian.series.Area{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Area](Stacked/Value/Area_Chart), [Percent Stacked Area](Stacked/Percent/Area_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Area](Vertical/Area_Chart)</td></tr>
<tr><td>3D</td><td>[3D Area](3D/Area_Chart)</td></tr>
<tr><td>Error Bars</td><td>[Area Chart with Error Bars](Error_Chart/Area_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polar Area](Polar_Plot/Overview)</td></tr>
<tr><td>Radar</td><td>[Radar Area](Radar_Plot/Overview)</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Area](../Stock_Charts/Series/Area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Step Area](Step_Area_Chart)</td></tr>
<tr><td></td><td>[Range Area](Range_Area_Chart)</td></tr>
<tr><td></td><td>[Range Spline Area](Range_Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Range Step Area](Range_Step_Area_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/area-chart/" target="_blank">Chartopedia: Area Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

{api:anychart#heatMap}heatMap(){api}

```

```

{sample}BCT\_HeatMapChart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Heat Map chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

### Data

```

```

{sample}BCT\_HeatMapChart\_02{sample}

### Appearance

* **fill**
* **hoverFill**
* **stroke** ({api:anychart.charts.HeatMap#stroke}.stroke(){api})
* **hoverStroke**

```

```

{sample}BCT\_HeatMapChart\_03{sample}


**Note**: You can use only object as values for  **stroke** and **hoverStroke** sets while **fill** and **hoverFill** sets use either string or object as a value. When you set color directly to a point you can omit **"heat"** in a data set.

```

```

{sample}BCT\_HeatMapChart\_04{sample}

### Color Scale

* {api:anychart.charts.HeatMap#colorScale}colorScale(){api}
* { api:anychart.scales.OrdinalColor}ordinalColor(){api}
* {api:anychart.charts.HeatMap#colorScale}colorScale(){api}

```

```

{sample}BCT\_HeatMapChart\_05{sample}

```

```

{sample}BCT\_HeatMapChart\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

```

```
{sample}BCT\_HeatMapChart\_07{sample}

```

```
{sample}BCT\_HeatMapChart\_08{sample}

* {api:anychart.charts.HeatMap#labelsDisplayMode}labelsDisplayMode(){api}
* **"clip"**
* **"drop"**
* **"alwaysShow"**

* [**"Clip"** parameter makes all labels be displayed regardless the width of each point. If a label doesn't fit the point width, a part of this label will be cropped.]
* [**"Drop"** parameter hides the whole label, if it doesn't fit point's width]
* [**"AlwaysShow"** parameter force all labels to be shown despite the situation. Be careful using this parameter. Labels may overlap, if label's width is larger than point's width.]
  
{sample :width 690 :height 725}BCT\_HeatMapChart\_09{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

```

```

{sample}BCT\_HeatMapChart\_10{sample}

```

```

{sample}BCT\_HeatMapChart\_11{sample}

### Scroller

* {api:anychart.charts.Cartesian#xScroller}xScroller(){api}
* {api:anychart.charts.Cartesian#yScroller}yScroller(){api} 
* {api:anychart.charts.Cartesian#xZoom}xZoom(){api}
* {api:anychart.charts.Cartesian#yZoom}yZoom(){api}methods.
* [Scroller](../Common_Settings/Scroller)

[y-scroller есть только у этого типа]

```

```

{sample}BCT\_HeatMapChart\_12{sample}
