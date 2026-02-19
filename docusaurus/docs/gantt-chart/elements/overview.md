---
sidebar_position: 1
---
# Overview

Timeline elements are parts of the Gantt chart that are shown on the [timeline](../timeline) and represent time intervals as well as information related to them.

On the [Project Gantt](../project-chart) chart and [Resource Gantt](../resource-chart) chart, different types of elements are displayed, and for each element type slightly different settings are available.

## Articles

Articles in this section explain how to configure:

* [Project Chart](project-chart), [Resource Chart](resource-chart) - all elements of one type
* [All Elements](all-elements) - all elements at once
* [Individual Elements](individual-elements) - individual elements
* [Labels](labels) - labels of elements
* [Markers](markers) - markers

Articles in other sections explain how to adjust:

* [Timeline: Tooltips](../timeline/tooltips) - tooltips shown when the timeline is hovered over

To learn more about the available types of elements and data fields used to set them, see:

* [Project Chart: Elements](../project-chart#elements)
* [Resource Chart: Elements](../resource-chart#elements)

## Classes

Elements are defined as instances of the following classes:

* [regular tasks](project-chart#regular-tasks) - {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* [parent tasks](project-chart#parent-tasks) - {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [milestones](project-chart#milestones) - {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [previews of milestones](project-chart#milestones) - {api:anychart.core.gantt.elements.MilestonesPreviewElement}anychart.core.gantt.elements.MilestonesPreviewElement{api}
* [baselines](project-chart#baselines-planned)) - {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [progress bars](project-chart#progress-bars) - {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* [connectors](project-chart#connectors) - {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [periods](resource-chart#periods) - {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [all elements](all-elements) - {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}

## Methods

The following methods, combined with {api:anychart.charts.Gantt#getTimeline}getTimeline(){api}, are used to access elements:

* [regular tasks](project-chart#regular-tasks) - {api:anychart.core.ui.Timeline#tasks}tasks(){api}
* [parent tasks](project-chart#parent-tasks) - {api:anychart.core.ui.Timeline#groupingTasks}groupingTasks(){api}
* [milestones](project-chart#milestones) - {api:anychart.core.ui.Timeline#milestones}milestones(){api}
* [previews of milestones](project-chart#milestones) - {api:anychart.core.ui.Timeline#milestones}milestones(){api} + {api:anychart.core.gantt.elements.MilestonesElement#preview}preview(){api}
* [baselines](project-chart#baselines-planned)) - {api:anychart.core.ui.Timeline#baselines}baselines(){api}
* [progress bars](project-chart#progress-bars) - {api:anychart.core.ui.Timeline#tasks}tasks(){api} / {api:anychart.core.ui.Timeline#groupingTask}groupingTask(){api} / + {api:?entry=progress}progress(){api}
* [connectors](project-chart#connectors) - {api:anychart.core.ui.Timeline#connectors}connectors(){api}
* [periods](resource-chart#periods) - {api:anychart.core.ui.Timeline#periods}periods(){api}
* [all elements](all-elements) - {api:anychart.core.ui.Timeline#elements}elements(){api}