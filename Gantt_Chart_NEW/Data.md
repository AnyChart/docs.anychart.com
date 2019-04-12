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

* `id`, `name` – names and unique identifiers of tasks
* `children` / `parent` – hierarchical relationships between tasks
* `actualStart`, `actualEnd`, `actual` – start & end dates and settings of tasks
* `baselineStart`, `baselineEnd`, `baseline` – start & end dates and settings of baselines
* `progressValue`, `progress` – values and settings of progress bars
* `connectTo`, `connectorType`, `connector`  – settings of connectors
* `markers`, `rowHeight`, `collapsed` – other settings

**Resource chart**

* `id`, `name` – names and unique identifiers of resources
* `children` / `parent` – hierarchical relationships between resources
* `periods` + `id`, `start`, `end` – settings of periods
* `rowHeight`, `collapsed` – other settings

**Note 1:** You can rename the default data fields – see the [Mapping](#mapping) section of this article.

**Note 2:** You can also add custom fields to your data.

## Setting Data

## Hierarchy (?)

## Mapping