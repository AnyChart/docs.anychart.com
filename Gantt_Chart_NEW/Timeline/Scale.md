{:index 3}
# Scale

## Overview

You can configure the timeline scale, for example set its [minimum & maximum](#minimum_&_maximum) values and specify zoom [levels](#levels). These settings affect the position and relative size of timeline [elements](../Elements), the number of timeline columns, and the configuration of the [header](Header).

The scale is defined as an instance of the {api:anychart.scales.GanttDateTime}anychart.scales.GanttDateTime{api} class.

To access the scale, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#scale}scale(){api}.

To configure it, call the following methods:

* {api:anychart.scales.GanttDateTime#minimum}minimum(){api} to set the [minimum](#minimum_&_maximum)
* {api:anychart.scales.GanttDateTime#maximum}maximum(){api} to set the [maximum](#minimum_&_maximum)
* {api:anychart.scales.GanttDateTime#softMinimum}softMinimum(){api} to set the soft minimum
* {api:anychart.scales.GanttDateTime#softMaximum}softMaximum(){api} to set the soft maximum
* {api:anychart.scales.GanttDateTime#minimumGap}minimumGap(){api} to set the minimum offset
* {api:anychart.scales.GanttDateTime#maximumGap}maximumGap(){api} to set the maximum offset
* {api:anychart.scales.GanttDateTime#zoomlevels}zoomlevels(){api} to set zoom [levels](#levels)

## Minimum & Maximum

The {api:anychart.scales.GanttDateTime#maximum}maximum(){api} and {api:anychart.scales.GanttDateTime#minimum}minimum(){api} methods allow setting the minimum and maximum dates of the scale:

```
// set the minimun and maximum values of the scale
chart.getTimeline().scale().minimum("2018-01-01");
chart.getTimeline().scale().maximum("2018-07-15");
```

As you can see, the minimum and maximum affect the position and relative size of timeline [elements](../Elements):

{sample :height 220}GANTT\_NEW\_Timeline\_Scale\_01{sample}

## Levels

The settings of zoom levels affect the number of timeline columns and the configuration of the [header](Header).

By default, there are three levels, each of them representing a time unit. The exact set of units depends on your data. You can change this preset by passing an array of settings to the {api:anychart.scales.GanttDateTime#zoomLevels}zoomLevels(){api} method.

Each entry of the array is an object standing for a level. There you should specify two values, `unit` and `count`: the time unit of the level and the number of units per column.

```
// set zoom levels of the scale
chart.getTimeline().scale().zoomLevels([
  [
    {unit: "year", count: 1},
    {unit: "month", count: 3}
  ]
]);
```

Alternatively, you can pass just an array of units (the default count is 1):

```
// configure the scale
chart.getTimeline().scale().zoomLevels([["month", "quarter"]]);
```

**Note:** Levels must be listed in a particular order: from the level with the smallest time unit to the level with the largest one. For example, the millisecond goes before the second, the month goes before the year, and so on.

The available units can be found in {api:anychart.enums.Interval}anychart.enums.Interval{api}:

* `"millisecond"`
* `"second"`
* `"minute"`
* `"hour"`
* `"day"`
* `"week"`
* `"third-of-month"`
* `"month"`
* `"quarter"`
* `"semester"`
* `"year"`

In this sample, there are two levels, the month and the quarter:

```
// configure the scale
chart.getTimeline().scale().zoomLevels([
  [
    {unit: "month", count: 1},
    {unit: "quarter", count: 1}
  ]
]);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Scale\_02{sample}