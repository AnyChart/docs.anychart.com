{:index 4}
# Project Chart

## Overview

* [Elements](Elements)
* [Tasks](#tasks_\(actual\))
* [Hierarchy](#hierarchy)

## Quick Start

* ссылка на раздел Quick Start (Project)

{sample :height 220}GANTT\_NEW\_Project\_Chart\_01{sample}

## Data

### Data Fields

The Project chart requires setting [tasks](#tasks_\(actual\)). Use the following data fields:

* `name` to set names
* `id` to set unique identifiers
* `actualStrart` to set start dates
* `actualEnd` to set end dates

You can also use optional fields:

* `children` / `parent` to set the [hierarchy](#hierarchy)
* `actual` to add optional [task](#tasks_\(actual\)) settings
* `baselineStart`, `baselineEnd`, and `baseline` to add and configure [baselines](#baselines_\(planned\))
* `progressValue` and `progress` to add and configure [progress bars](#progress_bars)
* `connectTo`, `connectorType`, and `connector` to ass and configure [connectors](#connectors)
* `markers` to add [markers](#milestones_and_markers)
* `rowHeight` to set the [row height](Basic_Settings#header_and_row_height)
* `collapsed` to [expand or collapse](Basic_Settings#navigation) a parent task

... написать про ремаппинг + ссылка [Data: Mapping](Data#mapping)

### Setting Data

* имплицитное и эксплицитное задание дерева
* если иерархии нет, технически это множественные корни
* если иерархии нет, неважно, как задаются данные, [as tree](#as_tree) or [as table](#as_table)
* [Tree Data Model](../Working_with_Data/Tree_Data_Model)

### Hierarchy

* multiple roots

#### As Tree

* `children`

{sample :height 280}GANTT\_NEW\_Project\_Chart\_02{sample}

#### As Table

* `parent`

{sample :height 280}GANTT\_NEW\_Project\_Chart\_03{sample}

## Elements

* [Elements](Elements)
* [Timeline](Timeline)

### Tasks (Actual)

* `name`, `actualStart`, `actualEnd` + `actual`
* **basic tasks**, **parent tasks**, **milestones**
* так можно задать только actual, а planned см. [Baselines](#baselines_\(planned\))
* [Elements: Tasks](Elements#tasks_\(actual\))
* [Elements: Markers](Elements#markers)
* [Hierarchy](#hierarchy)

{sample :height 240}GANTT\_NEW\_Project\_Chart\_04{sample}

### Baselines (Planned)

* `baselineStart`, `baselineEnd` + `baseline`
* baselines can be added to basic and parent [tasks](#tasks_\(actual\))
* [Elements: Baselines](Elements#baselines_\(planned\))

{sample :height 220}GANTT\_NEW\_Project\_Chart\_05{sample}

### Progress Bars

* `progressValue`, `progress`
* примечание: родитель автоматически вычисляет общий прогресс, но можно и задать вручную
* [Elements: Progress Bars](Elements#progress_bars)

{sample :height 220}GANTT\_NEW\_Project\_Chart\_06{sample}

### Connectors

* `connectTo`, `connectorType` + `connector`
* `"start-start"`, `"start-finish"`, `"finish-start"`, `"finish-finish"`
* {api:anychart.enums.ConnectorType}api:anychart.enums.ConnectorType{api}
* [Elements: Connectors](#Elements#connectors)

{sample :height 220}GANTT\_NEW\_Project\_Chart\_07{sample}

### Milestones and Markers

* [Tasks](#tasks_\(actual\))
* [Elements: Markers](Elements#markers)

## (?) Other Settings