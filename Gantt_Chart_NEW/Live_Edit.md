{:index 14}
# Live Edit

## Overview

In the Live Edit mode, a special UI is enabled that allows users to edit Gantt charts on-the-fly. It is possible to edit the [data](Data) structure by moving rows, change the duration and position of timeline [elements](Elements), create and remove connections between them, and edit the [data grid](Data_Grid) text.

This article demonstrates the [default behavior](#default_behavior) of the chart in the Live Edit mode and explains how to [enable / disable](#enabling_/_disabling) it and access its appearance and other [settings](#settings).

Here are the available types of editing are listed as well as classes that allow accessing their settings:

**1.** editing data grid text<br>
**2.** editing data structure (moving rows) – {api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api}<br>
**3.** editing timeline elements (position, duration, connections) – {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api}<br>

**Note:** For the correct work of the Live Edit mode, as well as of Gantt charts in general, the `id` [data field](Data#data_fields) is required.

## Default Behavior

This section describes the default behavior of the chart in the Live Edit mode and lists the events triggered by users' actions. By handling events, you can change the default behavior – see the [Events](Events) article to learn more.

Please keep in mind that in addition to the special events mentioned below, all Live Edit interactions (as well as any interactions with Gantt charts) trigger [row events](Events#rows).

**1. Editing Data Grid Text**

Double-clicking on [data grid](Data_Grid) labels, except for the labels of the first column, allows altering their text.

It triggers a [data tree event](Events#data_tree):

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemUpdate<br></td><td>A data item has been updated.</td></tr>
</table>

**2. Editing Data Structure**

You can edit the structure of the [data](Data) by dragging and dropping rows up and down. It is possible to change both the sequence of rows and their hierarchical relationships.

A [data tree event](Events#data_tree) is triggered:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove<br></td><td>A data item has been moved.</td></tr>
</table>

**3. Editing Timeline Elements**

Drag and drop timeline [elements](Elements) to change their positions on the timeline. To change the duration and progress of an element, use duration thumbs on its sides and the slider on the progress bar.

Also, you can draw new connectors with the help of connector thumbs on the sides of tasks. To remove a connector, select it and press Del in Windows or Cmd-Backspace in Mac OS.

A [data tree event](Events#data_tree) and a [connector event](Events#connectors) are triggered:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove<br></td><td>A data item has been updated.</td></tr>
<tr><td>beforeCreateConnector<br></td><td>A connector is about to be created.</td></tr>
</table>

The following sample shows how the Live Edit mode works. All types of editing are enabled on the whole chart:

{sample :height 360}GANTT\_NEW\_Live\_Edit\_01{sample}

## Enabling / Disabling

misc:

* chart: structure edit + element edit + data grid text
* timeline: structure edit + element edit	
* elements: element edit (except for connectors)
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

{sample :height 260}GANTT\_NEW\_Live\_Edit\_02{sample}

```
chart.dataGrid().edit(true);
```

```
chart.getTimeline().edit(true);
```

```
chart.getTimeline().periods().edit(true);
```

{sample :height 200}GANTT\_NEW\_Live\_Edit\_03{sample}

## Settings

misc:

* {api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api}: chart, timeline, data grid
* {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api}
* (?) {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}

### Rows

StructureEdit:

* {api:anychart.core.gantt.edit.StructureEdit#fill}fill(){api}
* {api:anychart.core.gantt.edit.StructureEdit#stroke}stroke(){api}
* {api:anychart.core.gantt.edit.StructureEdit#placementStroke}placementStroke(){api}


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

ElementEdit:
* {api:anychart.core.gantt.edit.ElementEdit#fill}fill(){api}
* {api:anychart.core.gantt.edit.ElementEdit#stroke}stroke(){api}

ConnectorElement:
* {api:anychart.core.gantt.elements.ConnectorElement#previewStroke}previewStroke(){api}

misc:
* ползунок прогресс-баров: настройки наследуются у тасков, также могут задаваться отдельно


```
// allow editing the chart
chart.edit(true);

// configure the appearance of timeline elements in the live edit mode
var timeline = chart.getTimeline();
timeline.elements().edit().fill("#dd2c00", 0.2);
timeline.elements().edit().stroke("#dd2c00", 2);
timeline.baselines().edit().stroke("#dd2c00", 2, "5 2", "round");
timeline.tasks().progress().edit().fill("#00bfa5");
timeline.connectors().previewStroke("#dd2c00", 2, "5 2", "round");
```

{sample :height 360}GANTT\_NEW\_Live\_Edit\_05{sample}

### Controls

* {api:anychart.core.gantt.edit.Thumb}anychart.core.gantt.edit.Thumb{api}
* {api:anychart.core.gantt.edit.SideControl}anychart.core.gantt.edit.SideControl{api}
* {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* ElementEdit:  {api:anychart.core.gantt.edit.ElementEdit#thumbs}thumbs(){api}, {api:anychart.core.gantt.edit.ElementEdit#connectorThumbs}connectorThumbs(){api}
* ElementEdit -> {api:anychart.core.gantt.edit.ElementEdit#start}start(){api} & {api:anychart.core.gantt.edit.ElementEdit#end}end(){api} + {api:anychart.core.gantt.edit.SideControl#thumb}thumb(){api} & {api:anychart.core.gantt.edit.SideControl#connectorThumb}connectorThumb(){api}
* все это работает только у элементов
* ползунок прогресс-баров: настройки наследуются у тасков, также могут задаваться отдельно


```
// allow editing the chart
chart.edit(true);

// access the timeline and timeline elements
var timeline = chart.getTimeline();
var elements = timeline.elements();

// configure duration thumbs
elements.edit().thumbs().size(10);
elements.edit().thumbs().stroke("#dd2c00", 2);
elements.edit().thumbs().fill("#00bfa5");

// configure connector thumbs
elements.edit().connectorThumbs().size(15);
elements.edit().connectorThumbs().fill("#dd2c00");
elements.edit().connectorThumbs().stroke("#dd2c00", 2);

// configure connector thumbs on the right
elements.edit().end().connectorThumb().type("triangleRight");
elements.edit().end().connectorThumb().horizontalOffset(-1);

// configure connector thumbs on the left
elements.edit().start().connectorThumb().type("triangleLeft");
elements.edit().start().connectorThumb().horizontalOffset(1);

// configure sliders of progress bars
timeline.tasks().progress().edit().fill("#00bfa5");
timeline.tasks().progress().edit().stroke("#dd2c00", 2);
```

{sample :height 360}GANTT\_NEW\_Live\_Edit\_06{sample}

## Events

misc:

* [Default Behavior](#default_behavior)
* [Events](Events)
