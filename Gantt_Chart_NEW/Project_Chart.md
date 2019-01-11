{:index 4}
# Project Chart

## Overview

...

## Quick Start

* ссылка на раздел Quick Start (Project)
* пример

{sample :height 220}GANTT\_NEW\_Project\_Chart\_01{sample}

## Data

### Setting Data

* ссылка на tree data
* имплицитное и эксплицитное задание дерева

### Data Fields

* перечисление всех полей
* обязательно: id, parent / children
* обязательно: name + actualStrart, actualEnd
* дополнительно: actual
* дополнительно: progressValue, progress
* дополнительно: baselineStart, baselineEnd, baseline
* дополнительно: connectTo, connectorType, connector
* примечание про ремаппинг + ссылка на Data: Mapping

### Hierarchy

#### Tree

* children

{sample :height 280}GANTT\_NEW\_Project\_Chart\_02{sample}

#### Table

* id, parent

{sample :height 280}GANTT\_NEW\_Project\_Chart\_03{sample}

### Tasks (Actual)

* name + actualStrart, actualEnd, actual
* типы тасков, причем: так можно задать только actual, а planned см. Baselines
* ссылка на статьи Elements: Tasks, Grouping (Parent) Tasks, Milestones

{sample :height 240}GANTT\_NEW\_Project\_Chart\_04{sample}

### Baselines (Planned)

* baselineStart, baselineEnd, baseline
* есть у обычных и родительских тасков, см. Tasks
* swapping
* пример с кнопкой
* ссылка на статью Elements: Baselines

{sample :height 220}GANTT\_NEW\_Project\_Chart\_05{sample}

### Progress Bars

* progressValue, progress
* примечание: родитель автоматически вычисляет общий прогресс, но можно и задать вручную
* ссылка на статью Elements: Progress Bars

{sample :height 200}GANTT\_NEW\_Project\_Chart\_06{sample}

### Connectors

* connectTo, connectorType, connector
* пример
* ссылка на статью Elements: Connectors

{sample :height 220}GANTT\_NEW\_Project\_Chart\_07{sample}

## Settings

* ссылки на другие разделы
* особенности настроек