{:index 1}
# Overview

## Overview

A Gantt chart is a tool used to schedule projects or show resources (e.g., equipment or employees) over periods of time. Project tasks or periods are visualized as horizontal bars, their width representing the duration.

AnyGantt allows creating two types of Gannt charts – [Project](Project_Chart) and [Resource](Resource_Chart). They display different timeline [elements](Elements), but share most settings.

Both chart types are defined as instances of the {api:anychart.charts.Gantt}anychart.charts.Gantt{api} class, and both are created with the help of the {api:anychart#ganttResource}anychart.ganttResource(){api} constructor. The chart type depends exclusively on how your data is organized.

This is how the Project chart and Resource chart are structured:

**Project Gantt Chart**

<img width="700" src ="https://static.anychart.com/images/project_timeline.jpg" />

**Resource Gantt Chart**

<img width="700" src ="https://static.anychart.com/images/resource_timeline.jpg" />

## Articles

The first four articles explain how to create Project and Resource charts:

* [Quick Start (Project)](Quick_Start_\(Project\))
* [Quick Start (Resource)](Quick_Start_\(Resource\))
* [Project Chart](Project_Chart)
* [Resource Chart](Resource_Chart)

To learn about data and date & time formats, see these articles:
* [Data](Data)
* [Date and Time Formats](Date_and_Time_Formats)

Here the basic settings are listed – appearance, row height, navigation, etc.:
* [Basic Settings](Basic_Settings)

The following sections explain how to adjust the main parts of the Gantt chart:

* [Data Grid](Data_Grid)
* [Timeline](Timeline)
* [Elements](Elements)

There are also advanced settings available:
* [Custom Drawing](Custom_Drawing)
* [Events](Events)
* [Live Edit UI](Live_Edit_UI)

## Classes

Below you can find the list of classes used to configure the Gantt chart and its parts.

Gantt chart:

* project and resource charts – {api:anychart.charts.Gantt}anychart.charts.Gantt{api}

Data grid:

* data grid – {api:anychart.core.ui.DataGrid}anychart.core.ui.DataGrid{api}
* columns – {api:anychart.core.ui.DataGrid.Column}anychart.core.ui.DataGrid.Column{api}
* buttons – {api:anychart.core.gantt.DataGridButton}anychart.core.gantt.DataGridButton{api}

Timeline:

*  timeline – {api:anychart.core.ui.Timeline}anychart.core.ui.Timeline{api}
* line markers – {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api}
* range markers – {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}
* text markers – {api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}
* header – {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}

Timeline elements:

* regular tasks – {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* parent tasks – {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* milestones – {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* baselines – {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* progress bars – {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* connectors – {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* periods – {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* all elements – {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}