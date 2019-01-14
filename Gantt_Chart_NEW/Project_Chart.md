{:index 4}
# Project Chart

## Overview

...

## Quick Start

* ссылка на раздел Quick Start (Project)

{sample :height 220}GANTT\_NEW\_Project\_Chart\_01{sample}

## Data

### Data Fields

* перечисление всех полей со ссылками на подразделы
* обязательно: `name`, `id`, `actualStrart`, `actualEnd`
* дополнительно: иерархия --> `children` / `parent`
* дополнительно: `actual`
* дополнительно: `progressValue`, `progress`
* дополнительно: `baselineStart`, `baselineEnd`, `baseline`
* дополнительно: `connectTo`, `connectorType`, `connector`
* дополнительно: `markers`
* дополнительно: `rowHeight` + ссылка на Basic Settings: Header / Row Height
* дополнительно: `collapsed` + ссылка на Basic Settings: Navigation
* примечание про ремаппинг + ссылка на Data: Mapping
* примечание: id не обязателен если дерево, но это плохая практика

### Setting Data

* ссылка на tree data
* имплицитное и эксплицитное задание дерева
* если иерархии нет, технически это множественные корни
* если иерархии нет, неважно, как дерево задаешь данные или как таблицу

### Hierarchy

* multiple roots

#### Tree

* `children`

{sample :height 280}GANTT\_NEW\_Project\_Chart\_02{sample}

#### Table

* `id`, `parent`

{sample :height 280}GANTT\_NEW\_Project\_Chart\_03{sample}

## Elements

* ссылка на Elements
* ссылка на Timeline (elements shown on the timeline...)

### Tasks (Actual)

* `name`, `actualStrart`, `actualEnd` + `actual`
* типы тасков, причем: так можно задать только actual, а planned см. Baselines
* ссылка на статьи Elements: Tasks, Grouping (Parent) Tasks, Milestones
* ссылка на Elements: Markers

{sample :height 240}GANTT\_NEW\_Project\_Chart\_04{sample}

### Baselines (Planned)

* `baselineStart`, `baselineEnd` + `baseline`
* есть у обычных и родительских тасков, см. Tasks
* ссылка на статью Elements: Baselines

{sample :height 220}GANTT\_NEW\_Project\_Chart\_05{sample}

### Progress Bars

* `progressValue`, `progress`
* примечание: родитель автоматически вычисляет общий прогресс, но можно и задать вручную
* ссылка на статью Elements: Progress Bars

{sample :height 220}GANTT\_NEW\_Project\_Chart\_06{sample}

### Connectors

* `connectTo`, `connectorType` + `connector`
* `"start-start"`, `"start-finish"`, `"finish-start"`, `"finish-finish"`
* http://api.anychart.stg/develop/anychart.enums.ConnectorType
* ссылка на статью Elements: Connectors

{sample :height 200}GANTT\_NEW\_Project\_Chart\_07{sample}

### (?) Milestones

* ссылка на Tasks (Actual)
* ссылка на Elements: Markers

## (?) Other Settings