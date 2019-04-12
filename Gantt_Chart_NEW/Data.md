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

The Project and Resource charts require different data fields. You can find detailed information about them in the [Project Chart](Project_Chart) and [Resource Chart](Resource_Chart) articles. Here is just a brief overview:

**Project chart**

* `id`, `name`
* `children` / `parent`
* `actualStart`, `actualEnd`, `actual`
* `baselineStart`, `baselineEnd`, `baseline`
* `progressValue`, `progress`
* `connectTo`, `connectorType`, `connector` 
* `markers`, `rowHeight`, `collapsed`

**Resource chart**

* `id`, `name`
* `children` / `parent`
* `periods` + `id`, `start`, `end`
* `rowHeight`, `collapsed`

**Note 1:** You can rename the default data fields – see the [Mapping](#mapping) section of this article.

**Note 2:** You can also add custom fields to your data.

## Setting Data

## Hierarchy (?)

## Mapping