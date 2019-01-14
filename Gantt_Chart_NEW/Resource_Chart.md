{:index 5}
# Project Chart

## Overview

...

## Quick Start

* ссылка на раздел Quick Start (Resource)

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_01{sample}

## Data

### Data Fields

* перечисление всех полей со ссылками на подразделы
* обязательно: `id`, `name`
* обязательно: `periods`, `start`, `end`
* дополнительно: иерархия --> `children` / `parent`
* дополнительно: `markers`
* дополнительно: `rowHeight` + ссылка на Basic Settings: Header / Row Height
* дополнительно: `collapsed` + ссылка на Basic Settings: Navigation и Hierarchy
* примечание про ремаппинг + ссылка на Data: Mapping
* примечание: id не обязателен если дерево, но это плохая практика

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

### (?) Markers

## (?) Other Settings