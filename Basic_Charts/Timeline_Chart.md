{:index 6.1}

# Timeline Chart

## Overview

A timeline chart is...

a display of a list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates paralleling it, and usually contemporaneous events. A / [Gantt chart](../Gantt_Chart) is a form of timeline used in project management. /

This article explains how to create a basic Timeline chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Timeline chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Timeline](../Quick_Start/Modules#timeline)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Timeline}anychart.charts.Timeline{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>(?)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
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
<tr><td></td><td>(?)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Timeline Chart](https://www.anychart.com/chartopedia/chart-types/timeline-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Timeline chart requires adding the [Core](../Quick_Start/Modules#core) and [Timeline Chart](../Quick_Start/Modules#timeline) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-timeline.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Timeline chart, use the {api:anychart#timeline}anychart.timeline(){api} chart constructor...

* {api:anychart.charts.Timeline#range}range(){api} – [range series](#range_series)
* {api:anychart.charts.Timeline#moment}moment(){api} – [moment series](#moment_series)


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Timeline chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

[range series](#range_series):

* `name`
* `start`
* `end`

[moment series](#moment_series):

* `x`
* `y`


```

```

{sample}BCT\_Timeline\_Chart\_02{sample}

### Range Series

* (?) {api:anychart.charts.Timeline#range}range(){api}
* (?) [Data](#data), [Quick Start](#quick_start)
* [Labels and Tooltips](#labels_and_tooltips)

#### All Ranges

To adjust ranges, combine {api:anychart.charts.Timeline#range}range(){api} with the following methods:

* {api:anychart.core.timeline.series.Range#direction}direction(){api} to set the direction
* {api:anychart.core.timeline.series.Range#height}height(){api} to set the height

The available direction types, listed in {api:anychart.enums.Direction}anychart.enums.Direction{api}, include:

* `"auto"` (default)
* `"up"`
* `"down"`
* `"odd-even"`

The [appearance](../Appearance_Settings) of ranges can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.timeline.series.Range#normal}normal(){api}, {api:anychart.core.timeline.series.Range#hovered}hovered(){api}, and {api:anychart.core.timeline.series.Range#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke


```

```

{sample}BCT\_Timeline\_Chart\_03{sample}

#### Individual Ranges

```

```

{sample}BCT\_Timeline\_Chart\_04{sample}

### Moment Series

* (?) {api:anychart.charts.Timeline#moment}moment(){api}
* (?) [Data](#data), [Quick Start](#quick_start)
* [Labels and Tooltips](#labels_and_tooltips)

#### All Moments

To adjust the direction of moments, combine {api:anychart.charts.Timeline#moment}moment(){api} with the {api:anychart.core.timeline.series.Moment#direction}direction(){api} method.

The available direction types, listed in {api:anychart.enums.Direction}anychart.enums.Direction{api}, include:

* `"auto"` (default)
* `"up"`
* `"down"`
* `"odd-even"`

The [appearance](../Appearance_Settings) of moments and their markers as well as the shape and size of markers can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.timeline.series.Moment#normal}normal(){api}, {api:anychart.core.timeline.series.Moment#hovered}hovered(){api}, and {api:anychart.core.timeline.series.Moment#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke
* {api:anychart.core.StateSettings#markers}markers(){api} to access markers

To adjust markers, use the following methods:

* {api:anychart.core.ui.MarkersFactory#type}type(){api} to set the type – {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* {api:anychart.core.ui.MarkersFactory#size}size(){api} to set the size
* {api:anychart.core.ui.MarkersFactory#fill}fill(){api} to set the fill
* {api:anychart.core.ui.MarkersFactory#stroke}stroke(){api} to set the stroke


```

```

{sample}BCT\_Timeline\_Chart\_05{sample}

#### Individual Moments

```

```

{sample}BCT\_Timeline\_Chart\_06{sample}

### Axis

* {api:anychart.charts.Timeline#axis}axis(){api}
* {api:anychart.core.axes.Timeline}anychart.core.axes.Timeline{api}
*

### Appearance

* [Moment Series](#moment_series)
* [Range Series](#range_series)
* [Axis](#axis)
* [appearance](../Appearance_Settings)

### Markers

#### Line

* {api:anychart.charts.Timeline#lineMarker}lineMarker(){api}
* {api:anychart.charts.Timeline#todayMarker}todayMarker(){api}


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

#### Range

* {api:anychart.charts.Timeline#rangeMarker}rangeMarker(){api}


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

#### Text

* {api:anychart.charts.Timeline#textMarker}textMarker(){api}


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

### Labels and Tooltips

можно настроить у:

* range series
* moment series
* axis (labels)

поля:

* date
* title
* description
* даты
* ?

#### Tokens

#### Formatting Functions

### Scale

* min
* max

### Navigation

#### Methods

* {api:anychart.charts.Timeline#fit}fit(){api}
* {api:anychart.charts.Timeline#scroll}scroll(){api}
* {api:anychart.charts.Timeline#zoomTo}zoomTo(){api}

пример с кнопками, показать все:

```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

#### Scroller

* ссылка на статью о скроллере
* ссылка на класс
* пример на включение и выключение

#### Zoom Control Panel

The [Zoom Control Panel](../Common_Settings/UI_Controls/Zoom_Controls) is an HTML object with three buttons that allow zooming in, zooming out, and resetting the chart.

It requires adding the [Common UI](../Quick_Start/Modules#common_ui) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>
```

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css?hcode=a0c21fc77e1449cc86299c5faa067dc4"/> 
```

Also, you should reference the `anychart-ui.min.css` and `anychart-font.min.css` files:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css"/>
```

Then combine the {api:anychart.ui#zoom}anychart.ui.zoom(){api} method with {api:anychart.ui.Zoom#target}target(){api} and {api:anychart.ui.Zoom#render}render(){api} to create the panel:

```
// add a zoom control panel
var zoomController = anychart.ui.zoom();
zoomController.target(chart);
zoomController.render();
```

{sample}BCT\_Timeline\_Chart\_01{sample}

### Behavior

* zoomOnMouseWheel()
* scrollOnMouseWheel() - по умолчанию включено, но не работает ни горизонатльно, ни вертикально 
* enabled() - метода не существует