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

```

```

{sample :height 240}GANTT\_NEW\_Elements\_01{sample}

#### Regular Tasks

* {api:anychart.core.gantt.elements.TasksElement}anychart.core.gantt.elements.TasksElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Progress Bars](#progress_bars)

#### Parent Tasks

* {api:anychart.core.gantt.elements.GroupingTasksElement}anychart.core.gantt.elements.GroupingTasksElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Progress Bars](#progress_bars)

#### Milestones

* {api:anychart.core.gantt.elements.MilestonesElement}anychart.core.gantt.elements.MilestonesElement{api}
* [Project Chart: Tasks](Project_Chart#tasks_\(actual\))
* [Markers](#markers)

### Baselines (Planned)

* {api:anychart.core.gantt.elements.BaselinesElement}anychart.core.gantt.elements.BaselinesElement{api}
* [Progress Chart: Baselines](Project_Chart#baselines_\(planned\))

```

```

{sample :height 240}GANTT\_NEW\_Elements\_02{sample}

### Progress Bars

* {api:anychart.core.gantt.elements.ProgressElement}anychart.core.gantt.elements.ProgressElement{api}
* два метода progress() - [basic](#basic_tasks) and [parent](#parent_tasks) tasks
* [Progress Chart: Progress Bars](Project_Chart#progress_bars)
* [Regular Tasks](#regular_tasks)
* [Parent Tasks](#parent_tasks)


```

```

{sample :height 240}GANTT\_NEW\_Elements\_03{sample}

### Connectors

* {api:anychart.core.gantt.elements.ConnectorElement}anychart.core.gantt.elements.ConnectorElement{api}
* [Progress Chart: Connectors](Project_Chart#connectors)

```

```

{sample :height 240}GANTT\_NEW\_Elements\_04{sample}

## Resource Chart

* [Resource Chart](Resource_Chart)

### Periods

* {api:anychart.core.gantt.elements.PeriodsElement}anychart.core.gantt.elements.PeriodsElement{api}
* [Resource Chart: Periods](Resource_Chart#periods)


```

```

{sample :height 240}GANTT\_NEW\_Elements\_05{sample}

## All Elements

* {api:anychart.core.gantt.elements.TimelineElement}anychart.core.gantt.elements.TimelineElement{api}
* примечание про Resource


```

```

{sample :height 240}GANTT\_NEW\_Elements\_06{sample}

## Individual Elements

* `"actual"`
* `"baseline"`
* `"progress"`
* `"connector"`
* + объяснить, как настраивать отдельные ресурсы


```

```

{sample :height 240}GANTT\_NEW\_Elements\_07{sample}

```

```

{sample :height 240}GANTT\_NEW\_Elements\_08{sample}

## Markers

* могут быть добавлены к заданию любого типа
* 2 примера, на Project и Resource
* показать: множественные маркеры; на элементе, вне элемента; в строке, где больше ничего нет
* один общий параметр настроить методом {api:anychart.core.ui.Timeline#markers}markers(){api}
* сослаться куда-то, где приведены все настройки
* [Milestones](#milestones)


```

```

{sample :height 240}GANTT\_NEW\_Elements\_09{sample}

```

```

{sample :height 240}GANTT\_NEW\_Elements\_10{sample}