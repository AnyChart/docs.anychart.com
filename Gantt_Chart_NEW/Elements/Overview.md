{:index 1}
# Overview

Timeline elements are the parts of the Gantt chart that are shown on the [timeline](Timeline).

On the [Project Gantt](Project_Chart) and [Resource Gantt](Resource_Chart) charts different types of elements are displayed, and for each element type slightly different settings are available.

## Articles

The articles in this section explain how to configure:

* [Project Chart](#project_chart), [Resource Chart](#resource_chart) – all elements of one type
* [All Elements](#all_elements) – all elements at once
* [Individual Elements](#individual_elements) – individual elements
* [Labels](#labels) – labels of elements
* [Markers](#markers) – markers

**Note:** See [Timeline: Tooltips](Timeline/Tooltips) to learn how to adjust tooltips shown when the timeline is hovered over.

## Classes

Elements are defined as instances of the following classes:

* [regular tasks](#regular_tasks) – {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* [parent tasks](#parent_tasks) – {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [milestones](#milestones) – {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [baselines](#baselines_\(planned\)) – {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [progress bars](#progress_bars) – {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* [connectors](#connectors) – {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [periods](#periods) – {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [all elements](#all_elements) – {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}

## Methods

The following methods, combined with {api:anychart.charts.Gantt#getTimeline}getTimeline(){api}, are used to access elements:

* [regular tasks](#regular_tasks) – {api:anychart.core.ui.Timeline#tasks}tasks(){api}
* [parent tasks](#parent_tasks) – {api:anychart.core.ui.Timeline#groupingTask}groupingTask(){api}
* [milestones](#milestones) – {api:anychart.core.ui.Timeline#milestones}milestones(){api}
* [baselines](#baselines_\(planned\)) – {api:anychart.core.ui.Timeline#baselines}baselines(){api}
* [progress bars](#progress_bars) – {api:?entry=progress}progress(){api}
* [connectors](#connectors) – {api:anychart.core.ui.Timeline#connectors}connectors(){api}
* [periods](#periods) – {api:anychart.core.ui.Timeline#periods}periods(){api}
* [all elements](#all_elements) – {api:anychart.core.ui.Timeline#elements}elements(){api}