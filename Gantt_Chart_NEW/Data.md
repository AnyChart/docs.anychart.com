{:index 6}
# Data

## Overview

* разные типы чартов требуют разных полей и разной организации данных
* примечание про то, как переименовывать поля
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

To create a Gantt chart, perform the following steps:

**1.** Create a [data tree](../Working_with_Data/Tree_Data_Model) by passing data to the {api:anychart.data#tree}anychart.data.tree(){api} method.<br>
**2.** Create a chart by using the {api:anychart#ganttProject}anychart.ganttProject(){api} / {api:anychart#ganttResource}anychart.ganttResource(){api} construtor.<br>
**3.** Pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart.


```
var treeData = anychart.data.tree(data, "as-tree");
var chart = anychart.ganttProject();
chart.data(treeData);
```

See the following sections to learn more:

* [Project Chart: Setting Data](Project_Chart#setting_data)
* [Resource Chart: Setting Data](Resource_Chart#setting_data)
* [Tree Data Model: Setting Data](../Working_with_Data/Tree_Data_Model#setting_data)

## Hierarchy

The sections below explain how to organize your data hierarchically:

* [Project Chart: Hierarchy](Project_Chart#hierarchy)
* [Resource Chart: Hierarchy](Resource_Chart#hierarchy)

## Mapping

In case you need to map your data, call the {api:anychart.data.Tree#mapAs}mapAs{api} method on the data tree. Then pass the mapped data to the {api:anychart.charts.Gantt#data}data(){api} method.

To map the `children`, `parent`, and `id` fields, use the {api:anychart.data#tree}anychart.data.tree(){api} constructor.

Learn more: [Tree Data Model: Mapping](../Working_with_Data/Tree_Data_Model#mapping).

### Project Chart

The following sample shows how to map data for a Project chart. The {api:anychart.data#tree}anychart.data.tree(){api} constructor is used to map `child_items` as `children`, and the {api:anychart.data.Tree#mapAs}mapAs{api} method maps `start_date` and `end_date` as `actualStart` and `actualEnd`:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    start_date: "2018-01-15",
    end_date: "2018-03-10",
    child_items: [
      {
        id: "1_1",
        name: "Analysis",
        start_date: "2018-01-15",
        end_date: "2018-01-25"
      },
      {
        id: "1_2",
        name: "Design",
        start_date: "2018-01-20",
        end_date: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Meeting",
        start_date: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        start_date: "2018-02-05",
        end_date: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
        start_date: "2018-02-25",
        end_date: "2018-03-10"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree", null, {children: "child_items"});

// map the data
var mapping = treeData.mapAs({actualStart: "start_date", actualEnd: "end_date"});

// create a chart
var chart = anychart.ganttProject();
```

{sample :height 220}GANTT\_NEW\_Data\_01{sample}

### Resource Chart

```

```

{sample :height 220}GANTT\_NEW\_Data\_02{sample}