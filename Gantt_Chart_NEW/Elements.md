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
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))

#### Parent Tasks

* {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))

#### Milestones

* {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Markers](#markers)

### Baselines (Planned)

* {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [Progress Chart: Baselines](Project_Chart#baselines_\(planned\))

### Progress Bars

* {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* два метода progress() - [basic](#basic_tasks) and [parent](#parent_tasks) tasks
* [Progress Chart: Progress Bars](Project_Chart#progress_bars)

### Connectors

* {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [Progress Chart: Connectors](Project_Chart#connectors)

## Resource Chart

* [Resource Chart](Resource_Chart)

### Periods

* {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [Resource Chart: Periods](Project_Chart#periods)

## All Elements

* {api:anychart.core.gantt.elements.TimelineElement}api:anychart.core.gantt.elements.TimelineElement{api}
* 2 примера, на Project и Resource

## Individual Elements

* `"actual"`
* `"baseline"`
* `"progress"`
* `"connector"`
* + объяснить, как настраивать отдельные ресурсы
* 2 примера, на Project и Resource

## Markers

* 2 примера, на Project и Resource
* сослаться куда-то, где приведены все настройки
* [Milestones](#milestones)