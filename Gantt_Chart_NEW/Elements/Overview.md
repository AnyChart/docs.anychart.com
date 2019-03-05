{:index 1}
# Overview

Timeline elements are the parts of the Gantt chart that are shown on the [timeline](Timeline). The [Project Gantt](Project_Chart) and [Resource Gantt](Resource_Chart) charts include different types of elements, and for each element type slightly different settings are available.

The sections below explain how to configure:

* all elements of one type – [Project Chart](#project_chart), [Resource Chart](#resource_chart)
* all elements at once – [All Elements](#all_elements)
* individual elements – [Individual Elements](#individual_elements)
* labels of elements – [Labels](#labels)
* markers – [Markers](#markers)

**Note:** To learn how to adjust tooltips shown when the timeline is hovered over, see [Timeline: Tooltips](Timeline/Tooltips).

Elements are defined as instances of the following classes:

* [regular tasks](#regular_tasks) – {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* [parent tasks](#parent_tasks) – {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [milestones](#milestones) – {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [baselines](#baselines_\(planned\)) – {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [progress bars](#progress_bars) – {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* [connectors](#connectors) – {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [periods](#periods) – {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [all elements](#all_elements) – {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}

The following methods, combined with {api:anychart.charts.Gantt#getTimeline}getTimeline(){api}, are used to access elements:

* [regular tasks](#regular_tasks) – {api:anychart.core.ui.Timeline#tasks}tasks(){api}
* [parent tasks](#parent_tasks) – {api:anychart.core.ui.Timeline#groupingTask}groupingTask(){api}
* [milestones](#milestones) – {api:anychart.core.ui.Timeline#milestones}milestones(){api}
* [baselines](#baselines_\(planned\)) – {api:anychart.core.ui.Timeline#baselines}baselines(){api}
* [progress bars](#progress_bars) – {api:?entry=progress}progress(){api}
* [connectors](#connectors) – {api:anychart.core.ui.Timeline#connectors}connectors(){api}
* [periods](#periods) – {api:anychart.core.ui.Timeline#periods}periods(){api}
* [all elements](#all_elements) – {api:anychart.core.ui.Timeline#elements}elements(){api}