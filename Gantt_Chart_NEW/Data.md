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

The Project and Resource charts work with different data fields. You can find detailed information about them in the [Project Chart](Project_Chart#data_fields) and [Resource Chart](Resource_Chart#data_fields) articles. Here is just a brief overview:

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

AnyGantt requires using the [tree data model](../Working_with_Data/Tree_Data_Model). The [Project Chart](Project_Chart#hierarchy) and [Resource Chart](Resource_Chart#hierarchy) articles explain in detail how to organize your data for it.

To create a chart, you need to perform the following steps:

<ol><li>pass your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` or `"as-table"` as the second parameter</li>
<li>create a chart with the help of the {api:anychart#ganttProject}anychart.ganttProject(){api} construtor</li>
<li>pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart</li></ol>

This is how it looks like:

```
var treeData = anychart.data.tree(data, "as-tree");
var chart = anychart.ganttProject();
chart.data(treeData);
```

## Hierarchy (?)

## Mapping