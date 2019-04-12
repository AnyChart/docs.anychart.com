{:index 6}
# Data

## Overview

* примечание про то, как переименовывать поля
* The chart type depends exclusively on how your data is organized.
* [Mapping](#mapping)
* [Project Chart](Project_Chart)
* [Resource Chart](Resource_Chart)
* [tree data model](../Working_with_Data/Tree_Data_Model)

## Data Fields

**Project chart:**

* `id`, `name`
* `children` / `parent`
* `actualStart`, `actualEnd`, `actual`
* `baselineStart`, `baselineEnd`, `baseline`
* `progressValue`, `progress`
* `connectTo`, `connectorType`, `connector` 
* `markers`, `rowHeight`, `collapsed`

**Resource chart:**

* `id`, `name`
* `children` / `parent`
* `periods` + `id`, `start`, `end`
* `rowHeight`, `collapsed`

## Setting Data

## Hierarchy (?)

## Mapping