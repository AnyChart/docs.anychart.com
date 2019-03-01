{:index 3}
# Scale

## Overview

You can configure the timeline scale, for example set its [minimum & maximum](#minimum_&_maximum) values and specify [levels](#levels). These settings affect the position of the [elements](../Elements) on the timeline and the content of the [header](Header).

The scale is defined as an instance of the {api:anychart.scales.GanttDateTime}anychart.scales.GanttDateTime{api} class.

To access the scale, use the {api:anychart.core.ui.Timeline#scale}scale(){api} method.

Here is the full list of available settings:

* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}
* {api:anychart.scales.GanttDateTime#}(){api}

## Minimum & Maximum

* {api:anychart.scales.GanttDateTime#maximum}maximum(){api}
* {api:anychart.scales.GanttDateTime#minimum}minimum(){api}


```
// configure the scale
chart.getTimeline().scale().minimum("2018-01-01");
chart.getTimeline().scale().maximum("2018-07-15");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Scale\_01{sample}

## Levels

* {api:anychart.scales.GanttDateTime#zoomLevels}zoomLevels(){api}
* {api:anychart.scales.GanttDateTime.ZoomLevelsSettings}anychart.scales.GanttDateTime.ZoomLevelsSettings{api}
* [Header](Header)
* уровни нужно задавать в порядке от самого мелкого к самому крупному


```
// configure the scale
chart.getTimeline().scale().zoomLevels([
  [
    {unit: 'month', count: 1},
    {unit: 'quarter', count: 1}
  ]
]);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Scale\_02{sample}