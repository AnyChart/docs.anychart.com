---
sidebar_position: 1
---
# Overview

## Overview

A Gantt chart is a tool used to schedule projects or show resources (e.g., equipment or employees) over periods of time. Project tasks or periods are visualized as horizontal bars, their width representing the duration.

AnyGantt allows creating two types of Gannt charts - [Project](project-chart) and [Resource](resource-chart). They display different timeline [elements](elements), but share most settings.

Both chart types are defined as instances of the {api:anychart.charts.Gantt}anychart.charts.Gantt{api} class. To create them, use the {api:anychart#ganttProject}anychart.ganttProject{api} and {api:anychart#ganttResource}anychart.ganttResource(){api} constructors.

This is how the Project chart and Resource chart are structured:

**Project Gantt Chart**

<img width="700" src ="https://static.anychart.com/images/project_timeline.jpg" />

**Resource Gantt Chart**

<img width="700" src ="https://static.anychart.com/images/resource_timeline.jpg" />

## Articles

The first four articles explain how to create Project and Resource charts:

* [Quick Start (Project)](quick-start-project))
* [Quick Start (Resource)](quick-start-resource))
* [Project Chart](project-chart)
* [Resource Chart](resource-chart)

To learn about data and date & time formats, see these articles:
* [Data](data)
* [Date and Time Formats](date-and-time-formats)

Here the basic settings are listed - appearance, row height, navigation, etc.:
* [Basic Settings](basic-settings)

The following sections explain how to adjust the main parts of the Gantt chart:

* [Data Grid](data-grid)
* [Timeline](timeline)
* [Elements](elements)

There are also advanced settings available:
* [Custom Drawing](custom-drawing)
* [Events](events)
* [Live Edit](live-edit)

## Modules

AnyGantt requires adding two [modules](../quick-start/modules) - [Core](../quick-start/modules#core) and [Gantt](../quick-start/modules#gantt):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js" type="text/javascript"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-gantt.min.js" type="text/javascript"></script>
```

## Classes

Below you can find the list of classes used to configure the Gantt chart and its parts.

Gantt chart:

* Project and Resource charts - {api:anychart.charts.Gantt}anychart.charts.Gantt{api}

Data grid:

* data grid - {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api}
* columns - {api:anychart.core.ui.DataGrid.Column}anychart.core.ui.DataGrid.Column{api}
* buttons - {api:anychart.core.gantt.DataGridButton}anychart.core.gantt.DataGridButton{api}

Timeline:

*  timeline - {api:anychart.core.ui.Timeline}anychart.core.ui.Timeline{api}
* line markers - {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api}
* range markers - {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}
* text markers - {api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}
* header - {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}

Timeline elements:

* regular tasks - {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* parent tasks - {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* milestones - {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* previews of milestones - {api:anychart.core.gantt.elements.MilestonesPreviewElement}anychart.core.gantt.elements.MilestonesPreviewElement{api}
* baselines - {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* progress bars - {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* connectors - {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* periods - {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* all elements - {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}
