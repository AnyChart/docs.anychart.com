{:index 3}
# Scale

misc:

* {api:anychart.scales.GanttDateTime}anychart.scales.GanttDateTime{api}
* {api:anychart.scales.GanttDateTime.ZoomLevelsSettings}anychart.scales.GanttDateTime.ZoomLevelsSettings{api}
* [Header](Header)
* уровни нужно задавать в порядке от самого мелкого к самому крупному

methods:

* scale: {api:anychart.core.ui.Timeline#scale}scale(){api}
* {api:anychart.scales.GanttDateTime#maximum}maximum(){api}
* {api:anychart.scales.GanttDateTime#minimum}minimum(){api}
* {api:anychart.scales.GanttDateTime#zoomLevels}zoomLevels(){api}

## Minimum & Maximum


```
// configure the scale
chart.getTimeline().scale().minimum("2018-01-01");
chart.getTimeline().scale().maximum("2018-07-15");
```

{sample :height 220}GANTT\_NEW\_Timeline\_Scale\_01{sample}

## Levels

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