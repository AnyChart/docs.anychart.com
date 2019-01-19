{:index 5}
# Resource Chart

## Overview

* [Elements](Elements)
* [Periods](#periods)
* [Hierarchy](#hierarchy)
* {api:anychart.charts.Gantt}api:anychart.charts.Gantt{api}

## Quick Start

* [Quick Start (Resource)](Quick_Start_\(Resource\))

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_01{sample}

## Data

### Data Fields

The Resource chart requires setting resources by using the following data fields:

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
* `collapsed` to [expand or collapse](Basic_Settings#navigation) a parent resource

**Note:** To learn how to rename the default data fields, see [Data: Mapping](Data#mapping).

### Setting Data

* имплицитное и эксплицитное задание дерева
* [Quick Start](#quick_start)
* [as a tree](#as_tree), [as a table](#as_table)
* [Tree Data Model](../Working_with_Data/Tree_Data_Model)

**(?) Note:** If there is no hierarchical relationships between data items, there is no difference between the tree and table structures (in this case, technically, all items are roots). Both parameters can be used.

### Hierarchy

* для родительских ресурсов можно не задавать [periods](#periods)

#### As Tree

* `children`

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_02{sample}

#### As Table

* `parent`

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_03{sample}

## Elements

* [Elements](Elements)
* [Timeline](Timeline)

### Periods

* Each resource includes a **period** or periods, defined by the `periods`, `id`, `start`, and `end` data fields.
* While resources are logical elements represented only as text (?) on the data grid, periods are elements shown on the timeline...
* [Data Grid](#data_grid)

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_04{sample}

### Markers

* [Elements: Markers](Elements#markers)

## (?) Other Settings