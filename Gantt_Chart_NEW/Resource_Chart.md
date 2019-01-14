{:index 5}
# Project Chart

## Overview

...

## Quick Start

* ссылка на раздел Quick Start (Resource)

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_01{sample}

## Data

### Data Fields

To create a Resource chart, use the following data fields:

* `name` to set the names of resources
* `id` to set the unique identifiers of resources
* `periods` to set [periods](#periods)
* `id` to set the unique identifiers of [periods](#periods)
* `start` to set the start dates of [periods](#periods)
* `end` to set teh end dates of [periods](#periods)

You can also use optional fields:

* `children` / `parent` to set the [hierarchy](#hierarchy)
* `rowHeight` to set the [row height](Basic_Settings#header_and_row_height)
* `collapsed` to [expand or collapse](#Basic_Settings#navigation) a parent task

* перечисление всех полей со ссылками на подразделы
* обязательно: `id`, `name`
* обязательно: `periods`, `start`, `end`

... написать про ремаппинг + ссылка на Data: Mapping

### Setting Data

* ссылка на tree data
* имплицитное и эксплицитное задание дерева
* ссылка на Quick Start - пример без иерархии
* если иерархии нет, технически это множественные корни
* если иерархии нет, неважно, как дерево задаешь данные или как таблицу

### Hierarchy

#### Tree

* `children`

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_02{sample}

#### Table

* `parent`

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_03{sample}

## Elements

* ссылка на Elements
* ссылка на Timeline (elements shown on the timeline...)

### Periods

* `periods`, `start`, `end`
* (?) Each resource, defined by the `name` and `id` data fields (ссылка), includes a period or periods, defined by `periods`, `id`, `start`, and `end`.
* (?) While resources are just logical elements represented only as labels on the data grid, periods are visual elements shown on the timeline... (ссылки?)

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_04{sample}

### Markers

## (?) Other Settings