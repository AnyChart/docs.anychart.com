{:index 14}
# Live Edit

## Overview

misc:

* {api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api}: chart, timeline, data grid
* {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api}: elements (except for connectors)
* data grid text: настроек нет
* поле `id` необходимо для корректной работы этого режима и ганттов в целом
* список классов?

## Enabling / Disabling

misc:

* chart: structure edit + element edit + data grid text
* timeline: structure edit + element edit	
* elements: element edit
* data grid: structure edit + data grid text

```
chart.edit(true);
```

```
chart.edit().enabled(true);
```

```
chart.dataGrid().edit(true);
```

```
chart.getTimeline().edit(true);
```

```
chart.getTimeline().milestones().edit(true);
```

{sample :height 260}GANTT\_NEW\_Live\_Edit\_01{sample}

```
chart.dataGrid().edit(true);
```

```
chart.getTimeline().edit(true);
```

```
chart.getTimeline().periods().edit(true);
```

{sample :height 200}GANTT\_NEW\_Live\_Edit\_02{sample}

## Default Behavior

misc:

* упоминать события
* сослаться на Events

```
chart.edit(true);
```

{sample :height 360}GANTT\_NEW\_Live\_Edit\_03{sample}

## Events

* отсылочный раздел: Events

## Settings

misc:

* StructureEdit: fill(), stroke(), placementStroke()
* ElementEdit:  fill(), stroke()
* ConnectorElement: previewStroke()
* ссылка на Controls
* ползунок прогресс-баров: настройки наследуются у тасков, также могут задаваться отдельно

### Rows

```
// allow editing the chart
chart.edit(true);

// configure the appearance of rows in the live edit mode
chart.edit().fill("#dd2c00", 0.2);
chart.edit().placementStroke("#dd2c00", 2, "5 2", "round");
chart.dataGrid().edit().stroke("#dd2c00", 2);
chart.getTimeline().edit().stroke(null);
```

{sample :height 220}GANTT\_NEW\_Live\_Edit\_04{sample}

### Elements

```
// allow editing the chart
chart.edit(true);

// configure the appearance of timeline elements in the live edit mode
var timeline = chart.getTimeline();
timeline.elements().edit().fill("#dd2c00", 0.2);
timeline.elements().edit().stroke("#dd2c00", 2);
timeline.baselines().edit().stroke("#dd2c00", 2, "5 2", "round");
timeline.connectors().previewStroke("#dd2c00", 2, "5 2", "round");
timeline.tasks().progress().edit().fill("#00bfa5");
```

{sample :height 360}GANTT\_NEW\_Live\_Edit\_05{sample}

### Controls

* {api:anychart.core.gantt.edit.Thumb}anychart.core.gantt.edit.Thumb{api}
* {api:anychart.core.gantt.edit.SideControl}anychart.core.gantt.edit.SideControl{api}
* {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* ElementEdit:  thumbs(), connectorThumbs()
* ElementEdit -> start() & end() + thumb() & connectorThumb()
* метод thumbs(): проверить, у каких классов он на самом деле работает
* примечание про ползунок прогресс-баров


```
// allow editing the chart
chart.edit(true);

// access the timeline
var timeline = chart.getTimeline();

// access timeline elements
var elements = timeline.elements();

// configure live edit thumbs
elements.edit().thumbs().size(10);
elements.edit().thumbs().stroke("#dd2c00", 2);
elements.edit().thumbs().fill("#00bfa5");

// configure live edit connector thumbs
elements.edit().connectorThumbs().size(15);
elements.edit().connectorThumbs().fill("#dd2c00");
elements.edit().connectorThumbs().stroke("#dd2c00", 2);

// configure live edit connector thumbs on the right
elements.edit().end().connectorThumb().type("triangleRight");
elements.edit().end().connectorThumb().horizontalOffset(-1);

// configure live edit connector thumbs on the left
elements.edit().start().connectorThumb().type("triangleLeft");
elements.edit().start().connectorThumb().horizontalOffset(1);

// configure live edit sliders of progress bars
timeline.tasks().progress().edit().fill("#00bfa5");
timeline.tasks().progress().edit().stroke("#dd2c00", 2);
```

{sample :height 360}GANTT\_NEW\_Live\_Edit\_06{sample}