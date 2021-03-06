{:index 14}
# Live Edit

## Overview

In the Live Edit mode, a special UI is enabled that allows users to edit Gantt charts on-the-fly. It is possible to edit the data structure by moving rows, change the duration and position of timeline [elements](Elements), create and remove connections between them, and edit the [data grid](Data_Grid) text.

To learn more, see the sections below. They demonstrate the [default behavior](#default_behavior) of the chart in the Live Edit mode and explain how to [enable / disable](#enabling_/_disabling) it and adjust its appearance and other [settings](#settings).

**Note:** For the correct work of the Live Edit mode, as well as of Gantt charts in general, the `id` [data field](Data#data_fields) is required.

## Default Behavior

This section describes the default behavior of the chart in the Live Edit mode and lists the events triggered by users' actions. By handling events, you can change the default behavior - see the [Events](Events) article to learn more.

Please keep in mind that in addition to the special events mentioned below, all Live Edit interactions (as well as any interactions with Gantt charts) trigger [row events](Events#rows).

**1. Editing Data Grid Text**

Double-clicking on [data grid](Data_Grid) labels allows altering their text.

It triggers a [data tree event](Events#data_tree):

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemUpdate</td><td>A data item has been updated.</td></tr>
</table>

**2. Editing Data Structure**

You can edit the structure of the data by dragging and dropping rows up and down. It is possible to change both the sequence of rows and their hierarchical relationships.

A [data tree event](Events#data_tree) is triggered:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove</td><td>A data item has been moved.</td></tr>
</table>

**3. Editing Elements**

Drag and drop timeline [elements](Elements) to change their positions on the timeline. To change the duration and progress of an element, use duration thumbs on its sides and the slider on the progress bar.

Also, you can draw new connectors with the help of connector thumbs on the sides of tasks. To remove a connector, select it and press Del in Windows or Cmd-Backspace in Mac OS.

A [data tree event](Events#data_tree) and a [connector event](Events#connectors) are triggered:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove</td><td>A data item has been updated.</td></tr>
<tr><td>beforeCreateConnector</td><td>A connector is about to be created.</td></tr>
</table>

The following sample shows how the Live Edit mode works. All types of editing are enabled on the whole chart:

{sample :height 360}GANTT\_Live\_Edit\_01{sample}

## Enabling / Disabling

You can enable the Live Edit mode either on the whole chart or on its part: on the [data grid](Data_Grid), on the [timeline](Timeline), or on a particular [element](Elements) (except for connectors).

Depending on the part of the chart, different types of editing are enabled:

<table>
<tr><th>Part of Chart</th><th>Editing Data Grid Text</th><th>Editing Data Structure</th><th>Editing Elements</th></tr>
<tr><td>Chart</td><td>&#10004</td><td>&#10004</td><td>&#10004</td></tr>
<tr><td>Data Grid</td><td>&#10004</td><td>&#10004</td><td></td></tr>
<tr><td>Timeline</td><td></td><td>&#10004</td><td>&#10004</td></tr>
<tr><td>Element</td><td></td><td></td><td>&#10004</td></tr>
</table>

**Note:** To learn more about the types of editing, see the [Default Behavior](#default_behavior) section.

To allow or forbid editing the whole chart, pass `true` / `false` to the {api:anychart.charts.Gantt#edit}edit(){api} method of the chart:

```
// allow editing the chart
chart.edit(true);
```

To allow or forbid editing a part of the chart, access this part and pass `true` / `false` to its {api:?entry=edit}edit(){api} method:

```
// allow editing the data grid
chart.dataGrid().edit(true);
```

```
// allow editing the timeline
chart.getTimeline().edit(true);
```

```
// allow editing milestones
chart.getTimeline().milestones().edit(true);
```

```
// allow editing periods 
chart.getTimeline().periods().edit(true);
```

Below, there are two samples, one with a [Project](Project_Chart) chart and another with a [Resource](Resource_Chart) chart. They show how enabling the Live Edit mode on different parts of the chart looks like:

{sample :height 260}GANTT\_Live\_Edit\_02{sample}

{sample :height 200}GANTT\_Live\_Edit\_03{sample}

## Settings

It is possible to adjust the appearance and other settings of the chart in the Live Edit mode. You can change the way how [rows](#rows) and [elements](#elements) are colored when they are being dragged by users. Also, you can configure [controls](#controls) - duration and connector thumbs on elements and sliders on progress bars.

To access these settings, combine the {api:?entry=edit}edit(){api} method of the chart / [data grid](Data_Grid) / [timeline](Timeline) / [element](Elements) with methods of the classes listed below:

<table>
<tr><th>Settings</th><th>Class</th><th>Part of Chart</th></tr>
<tr><td>**Editing Data Structure**<br>[Rows](#rows)</td><td>{api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api}</td><td>Chart<br>Data Grid<br>Timeline</td></tr>
<tr><td>**Editing Elements**<br>[Elements](#elements)<br>[Controls](#controls)</td><td>{api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api}</td><td>Element</td></tr>
</table>

**Note:** To learn more about the types of editing, see the [Default Behavior](#default_behavior) section.

### Rows

It is possible to change the way how rows are colored when they are being dragged by users.

First, access either the whole chart or its part: the [data grid](Data_Grid) or the [timeline](Timeline).

Then combine {api:?entry=edit}edit(){api} with methods of the {api:anychart.core.gantt.edit.StructureEdit}anychart.core.gantt.edit.StructureEdit{api} class:

* {api:anychart.core.gantt.edit.StructureEdit#fill}fill(){api} to set the fill of the row
* {api:anychart.core.gantt.edit.StructureEdit#stroke}stroke(){api} to set the stroke of the row
* {api:anychart.core.gantt.edit.StructureEdit#placementStroke}placementStroke(){api} to set the stroke of the line marking the target position

In the following sample, rows in the Live Edit mode have different stroke settings on the data grid and on the timeline. Other settings are applied to the whole chart.

```
// allow editing the chart
chart.edit(true);

// configure the appearance of rows in the live edit mode
chart.edit().fill("#dd2c00", 0.2);
chart.edit().placementStroke("#dd2c00", 2, "5 2", "round");
chart.dataGrid().edit().stroke("#dd2c00", 2);
chart.getTimeline().edit().stroke(null);
```

{sample :height 220}GANTT\_Live\_Edit\_04{sample}

### Elements

You can change the way how elements are colored when they are being dragged by users.

First, access an [element](Elements) type (except for connectors) or [all elements](Elements/All_Elements).

Then combine {api:?entry=edit}edit(){api} with methods of the {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api} class:

* {api:anychart.core.gantt.edit.ElementEdit#fill}fill(){api} to set the fill
* {api:anychart.core.gantt.edit.ElementEdit#stroke}stroke(){api} to set the stroke

Please note that **sliders on progress bars** inherit the settings of tasks. To override them, use the {api:anychart.core.gantt.elements.ProgressElement#edit}edit(){api} method of [progress bars](Elements/Project_Chart#progress_bars). 

To set the **preview stroke of connectors**, use the {api:anychart.core.gantt.elements.ConnectorElement#previewStroke}previewStroke(){api} method of [connectors](Elements/Project_Chart#connectors).

In the sample below, fill and stroke settings are applied to all elements and overridden for baselines and progress sliders. Also, the preview stroke of connectors is set.

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

{sample :height 360}GANTT\_Live\_Edit\_05{sample}

### Controls

You can configure controls - duration and connector thumbs on elements and sliders on progress bars.

First, access an [element](Elements) type (except for connectors) or [all elements](Elements/All_Elements).

Then combine {api:?entry=edit}edit(){api} with methods of the {api:anychart.core.gantt.edit.ElementEdit}anychart.core.gantt.edit.ElementEdit{api} class:

* {api:anychart.core.gantt.edit.ElementEdit#thumbs}thumbs(){api} to access duration thumbs
* {api:anychart.core.gantt.edit.ElementEdit#connectorThumbs}connectorThumbs(){api} to access connector thumbs
* {api:anychart.core.gantt.edit.ElementEdit#start}start(){api} + {api:anychart.core.gantt.edit.SideControl#thumb}thumb(){api} / {api:anychart.core.gantt.edit.SideControl#connectorThumb}connectorThumb(){api} to access thumbs on the left sides of elements
* {api:anychart.core.gantt.edit.ElementEdit#end}end(){api} + {api:anychart.core.gantt.edit.SideControl#thumb}thumb(){api} / {api:anychart.core.gantt.edit.SideControl#connectorThumb}connectorThumb(){api} to access thumbs on the right sides of elements

To configure **duration thumbs** and **connector thumbs**, use methods of {api:anychart.core.gantt.edit.Thumb}anychart.core.gantt.edit.Thumb{api}:

* {api:anychart.core.gantt.edit.Thumb#type}type(){api} + enums from {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api} to set the type
* {api:anychart.core.gantt.edit.Thumb#fill}fill(){api} and {api:anychart.core.gantt.edit.Thumb#stroke}stroke(){api} to set the fill and stroke
* {api:anychart.core.gantt.edit.Thumb#size}size(){api} to set the size
* {api:anychart.core.gantt.edit.Thumb#horizontalOffset}horizontalOffset(){api} and {api:anychart.core.gantt.edit.Thumb#verticalOffset}verticalOffset(){api} to set the horizontal and vertical offset

To adjust **sliders on progress bars**, use the {api:anychart.core.gantt.elements.ProgressElement#edit}edit(){api} method of [progress bars](Elements/Project_Chart#progress_bars) or let them inherit the settings of tasks, as shown in the [Elements](#elements) section above.

The following sample shows how to configure thumbs. Please note that there are connector thumbs of different types on the left and on the right sides of elements:

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

{sample :height 360}GANTT\_Live\_Edit\_06{sample}

## Events

The events triggered by users' actions in the Live Edit mode are listed in the [Default Behavior](#default_behavior) section of this article. The [Events](Events) article explains how to handle them and change the default behavior.