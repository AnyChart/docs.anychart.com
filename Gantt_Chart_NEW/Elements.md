{:index 11}
# Elements

## Overview

* elements are shown on the [Timeline](Timeline)
* the [Project](#project_chart) and [Resource](#resource_chart) charts: different types of elements are available
* all elements of one type: [tasks](#tasks_\(actual\)), [baselines](#baselines_\(planned\)), [progress bars](#progress_bars), [connectors](#connectors), [periods](#periods)
* [all elements](#all_elements) at once
* [individual elements](#individual_elements)
* [markers](#markers)

## Project Chart

* [Project Chart](Project_Chart)

### Tasks (Actual)

#### Regular Tasks

* {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* `actual` + [Individual Elements](#individual_elements)

#### Parent Tasks

* {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* `actual` + [Individual Elements](#individual_elements)

#### Milestones

* {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* `actual` + [Individual Elements](#individual_elements)
* [Markers](#markers)

### Baselines (Planned)

* {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* `planned` + [Individual Elements](#individual_elements)

### Progress Bars

* {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* два метода progress() - [basic](#basic_tasks) and [parent](#parent_tasks) tasks
* `progress` + [Individual Elements](#individual_elements)

### Connectors

* {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* `connector` + [Individual Elements](#individual_elements)

## Resource Chart

* [Resource Chart](Resource_Chart)

### Periods

* {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* ? + [Individual Elements](#individual_elements)

## All Elements

* {api:anychart.core.gantt.elements.TimelineElement}api:anychart.core.gantt.elements.TimelineElement{api}
* 2 примера, на Project и Resource

## Individual Elements

* список полей
* 2 примера, на Project и Resource
* [Project Chart: Data Fields](Project_Chart#data_fields)
* [Resource Chart: Data Fields](Resource_Chart#data_fields)

## Markers

* 2 примера, на Project и Resource
* сослаться куда-то, где приведены все настройки
* [Milestones](#milestones)