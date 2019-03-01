{:index 3}
# Scale

## Overview

You can configure the timeline scale, for example set its [minimum & maximum](#minimum_&_maximum) values and specify zoom [levels](#levels). (?) These settings affect the size and position of timeline [elements](../Elements) and the content of the timeline [header](Header).

The scale is defined as an instance of the {api:anychart.scales.GanttDateTime}anychart.scales.GanttDateTime{api} class.

To access the scale, call {api:anychart.core.ui.Timeline#scale}scale(){api}.

To configure it, call the following methods (?):

* {api:anychart.scales.GanttDateTime#minimum}minimum(){api} to set the [minimum](#minimum_&_maximum)
* {api:anychart.scales.GanttDateTime#maximum}maximum(){api} to set the [maximum](#minimum_&_maximum)
* {api:anychart.scales.GanttDateTime#softMinimum}softMinimum(){api} to set the soft minimum
* {api:anychart.scales.GanttDateTime#softMaximum}softMaximum(){api} to set the soft maximum
* {api:anychart.scales.GanttDateTime#minimumGap}minimumGap(){api} to set the minimum gap (?)
* {api:anychart.scales.GanttDateTime#maximumGap}maximumGap(){api} to set the maximum gap (?)
* {api:anychart.scales.GanttDateTime#zoomlevels}zoomlevels(){api} to set zoom [levels](#levels)

## Minimum & Maximum

Combine {api:anychart.core.ui.Timeline#scale}scale(){api} with the {api:anychart.scales.GanttDateTime#maximum}maximum(){api} and {api:anychart.scales.GanttDateTime#minimum}minimum(){api} methods to set the minimum and maximum dates of the scale:

```
// configure the scale
chart.getTimeline().scale().minimum("2018-01-01");
chart.getTimeline().scale().maximum("2018-07-15");
```

As you can see in this sample, setting minimum and maximum affects the size and position of timeline [elements](../Elements):

{sample :height 220}GANTT\_NEW\_Timeline\_Scale\_01{sample}

## Levels

(?) The settings of zoom levels affect the number and position of timeline columns and content of the timeline [header](Header).

By default, there are three levels: the **month**, the **quarter**, and the **year**. You can change this configuration by combining {api:anychart.core.ui.Timeline#scale}scale(){api} with {api:anychart.scales.GanttDateTime#zoomLevels}zoomLevels(){api} and specifying...

* {api:anychart.scales.GanttDateTime.ZoomLevelsSettings}anychart.scales.GanttDateTime.ZoomLevelsSettings{api}
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