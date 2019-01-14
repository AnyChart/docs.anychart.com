{:index 5}
# Project Chart

## Overview

* ссылки: Periods, Hierarchy

## Quick Start

* ссылка на раздел Quick Start (Resource)

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_01{sample}

## Data

### Data Fields

The Resource chart requires setting resources. Use the following data fields:

* `name` to set names
* `id` to set unique identifiers

All resources except for parent ones (see [Hierarchy](#hierarchy)) should include [periods](#periods). Use these fields:

* `periods` to add an array of periods
* `id` to set unique identifiers
* `start` to set start dates
* `end` to set end dates

You can also use optional fields:

* `children` / `parent` to set the [hierarchy](#hierarchy)
* `rowHeight` to set the [row height](Basic_Settings#header_and_row_height)
* `collapsed` to [expand or collapse](#Basic_Settings#navigation) a parent resource

... написать про ремаппинг + ссылка на Data: Mapping

### Setting Data

* ссылка на Tree Data
* имплицитное и эксплицитное задание дерева
* ссылка на Quick Start - пример без иерархии
* если иерархии нет, технически это множественные корни
* если иерархии нет, неважно, как дерево задаешь данные или как таблицу

### Hierarchy

* для родительских ресурсов можно не задавать периоды

#### Tree

* `children`

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_02{sample}

#### Table

* `parent`

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_03{sample}

## Elements

* ссылка на Elements
* ссылка на Timeline

### Periods

* `periods`, `start`, `end`
* Each resource includes a **period** or periods, defined by `periods`, `id`, `start`, and `end`.
* While resources are represented only as labels on the data grid, periods are elements shown on the timeline...
* ссылки: Data fields, Data Grid

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_04{sample}

### Markers

## (?) Other Settings