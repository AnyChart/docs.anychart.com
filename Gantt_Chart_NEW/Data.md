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

The Project and Resource charts work with different data fields:

* [Project Chart: Data Fields](Project_Chart#data_fields)
* [Resource Chart: Data Fields](Resource_Chart#data_fields)

**Note 1:** You can rename the default data fields – see the [Mapping](#mapping) section of this article.

**Note 2:** You can also add custom fields to your data.

## Setting Data

To create a Gantt chart, you should use the [tree data model](../Working_with_Data/Tree_Data_Model):

<ol><li>Create a data tree by passing your data to {api:anychart.data#tree}anychart.data.tree(){api}.</li>
<li>Create a chart with the help of the {api:anychart#ganttProject}anychart.ganttProject(){api} construtor.</li>
<li>Pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart.</li></ol>


```
var treeData = anychart.data.tree(data, "as-tree");
var chart = anychart.ganttProject();
chart.data(treeData);
```

See the following sections to learn more:

* [Project Chart: Setting Data](Project_Chart#setting_data)
* [Resource Chart: Setting Data](Resource_Chart#setting_data)

## Hierarchy

The sections below explain how to organize your data hierarchically:

* [Project Chart: Hierarchy](Project_Chart#hierarchy)
* [Resource Chart: Hierarchy](Resource_Chart#hierarchy)


## Mapping