{:index 1}
# Overview

Timeline elements are parts of the Gantt chart that are shown on the [timeline](Timeline) and represent time intervals as well as information related to them.

On the [Project Gantt](../Project_Chart) chart and [Resource Gantt](../Resource_Chart) chart, different types of elements are displayed, and for each element type slightly different settings are available.

## Articles

Articles in this section explain how to configure:

* [Project Chart](Project_Chart), [Resource Chart](Resource_chart) – all elements of one type
* [All Elements](All_Elements) – all elements at once
* [Individual Elements](Individual_Elements) – individual elements
* [Labels](Labels) – labels of elements
* [Markers](Markers) – markers

Articles in other sections explain how to adjust:

* [Timeline: Tooltips](../Timeline/Tooltips) – tooltips shown when the timeline is hovered over

To learn more about the available types of elements and data fields used to set them, see:

* [Project Chart](Project_Chart#elements)
* [Resource Chart](Resource_Chart#lements)

## Classes

Elements are defined as instances of the following classes:

* [regular tasks](Project_Chart#regular_tasks) – {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* [parent tasks](Project_Chart#parent_tasks) – {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [milestones](Project_Chart#milestones) – {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [baselines](Project_Chart#baselines_\(planned\)) – {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [progress bars](Project_Chart#progress_bars) – {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* [connectors](Project_Chart#connectors) – {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [periods](Resource_Chart#periods) – {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [all elements](All_Elements) – {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}

## Methods

The following methods, combined with {api:anychart.charts.Gantt#getTimeline}getTimeline(){api}, are used to access elements:

* [regular tasks](Project_Chart#regular_tasks) – {api:anychart.core.ui.Timeline#tasks}tasks(){api}
* [parent tasks](Project_Chart#parent_tasks) – {api:anychart.core.ui.Timeline#groupingTask}groupingTask(){api}
* [milestones](Project_Chart#milestones) – {api:anychart.core.ui.Timeline#milestones}milestones(){api}
* [baselines](Project_Chart#baselines_\(planned\)) – {api:anychart.core.ui.Timeline#baselines}baselines(){api}
* [progress bars](Project_Chart#progress_bars) – {api:?entry=progress}progress(){api}
* [connectors](Project_Chart#connectors) – {api:anychart.core.ui.Timeline#connectors}connectors(){api}
* [periods](Resource_Chart#periods) – {api:anychart.core.ui.Timeline#periods}periods(){api}
* [all elements](All_Elements) – {api:anychart.core.ui.Timeline#elements}elements(){api}