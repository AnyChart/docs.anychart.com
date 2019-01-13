{:index 5}
# Project Chart

## Overview

...

## Quick Start

* ссылка на раздел Quick Start (Resource)

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_01{sample}

## Data

### Setting Data

* ссылка на tree data
* имплицитное и эксплицитное задание дерева

### Data Fields

* перечисление всех полей со ссылками на подразделы
* обязательно: `id`, `name` + `periods`, `start`, `end`
* дополнительно: иерархия --> `children` / `parent`
* (?) дополнительно: `markers`
* (?) дополнительно: `rowHeight` + ссылка на Basic Settings: Header / Row Height
* (?) дополнительно: `collapsed` + ссылка на Basic Settings: Navigation и Hierarchy
* примечание про ремаппинг + ссылка на Data: Mapping

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
* Each resource, defined by the `name` and `id` data fields (ссылка), includes a period or periods, defined by `periods`, `start`, and `end`.
* (?) Periods are shown on the timeline, while resources are just logical elements represented only as names on the data grid.

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_04{sample}

### (?) Markers

## (?) Other Settings