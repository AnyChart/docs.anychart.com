{:index 3}
PERT Chart Data
===========

* [Overview](#overview)
* [Data Formats](#data_formats)
 * [Nodes and Connections Set Simultaneously](#nodes_and_connections_set_simultaneously)
 * [Nodes and Connections Set Separately](#nodes_and_connections_set_separately)
* [Duration Setting Options](#duration_setting_options)
 * [Duration](#duration)
 * [Time Estimates](#time_estimates)
* [Statistics](#statistics)

## Overview

PERT charts use a special type of data, which cannot be set the same way as data for other chart types: one needs not only to create a set of items (nodes), but also to specify how they are connected. There are two ways to set data for PERT charts, both based on [Anychart Data Tree Model](../Working_with_Data/Using_Data_Tree_Model).

## Data Formats

### Nodes and Connections Set Simultaneously

Nodes and connections between them can be set simultaneously. In this case, nodes' descriptions contain information on their connections.

```
// set the data
var data = [
  {id: 0, name: 'A'},
  {id: 1, name: 'B'},
  {id: 2, name: 'C', dependsOn: [1]},
  {id: 3, name: 'D', dependsOn: [0]},
  {id: 4, name: 'E', dependsOn: [0]},
  {id: 5, name: 'F', dependsOn: [4, 3]}
];

// transform the data
chart.data(data, "asTable");
```

Here is a sample with data set in this way:

{sample :width 827 :height 300}Pert\_Data\_01{sample}

### Nodes and Connections Set Separately

Nodes and connections can be set separately, in two sets of data.

```
// set the data
var data = [
  {id: 0, name: 'A'},
  {id: 1, name: 'B'},
  {id: 2, name: 'C'},
  {id: 3, name: 'D'},
  {id: 4, name: 'E'},
  {id: 5, name: 'F'}
];

// set the dependencies for the data
var dependencies = [
  {from: 0, to: 3},
  {from: 0, to: 4},
  {from: 1, to: 2},
  {from: 4, to: 5}
];

chart.data(data, "asTree", dependencies);
```

Here is a sample with data set in this way:

{sample :width 827 :height 300}Pert\_Data\_02{sample}

## Duration Setting Options

When a task is created, it is necessary to set its duration. The PERT technology is based on time, so it is very important to set all time values appropriately.

There are two ways how the time periods can be transferred to the dataset. 

### Duration

You can set the estimated time period directly to the task. It this case, no standard deviation will be calculated as the optimistic, pessimistic and most likely values are not set and the deviation is not actually necessary.

```
// set the data with strict durations
var data = [
  {id: "1", duration: 1, name: "A"},
  {id: "2", duration: 3, name: "B"},
  {id: "3", duration: 1, name: "D"},
  {id: "4", duration: 2, name: "AD", dependsOn: ["1", "3"]},
  {id: "5", duration: 2, name: "BC", dependsOn: ["2", "3"]}
];
```

{sample :width 827 :height 300}Pert\_Data\_03{sample}

### Time Estimates

It is also possible to set three time estimates: optimistic, pessimistic and most likely time periods. Find more about them in the [Terminology article](Terminology). 

In case when these parameters are set, the estimated time and the standard deviation are calculated.

```
// set the data with three time estimates
var data = [
  {id: "1", optimistic: 1, pessimistic: 10, mostLikely: 6, name: "A"},
  {id: "2", optimistic: 3, pessimistic: 8, mostLikely: 5, name: "B"},
  {id: "3", optimistic: 1, pessimistic: 4, mostLikely: 3, name: "D"},
  {id: "4", optimistic: 2, pessimistic: 12, mostLikely: 5, name: "AD", dependsOn: ["1", "3"]},
  {id: "5", optimistic: 4, pessimistic: 16, mostLikely: 10, name: "BC", dependsOn: ["2", "3"]}
];
```

{sample :width 827 :height 300}Pert\_Data\_04{sample}

## Statistics

Use the {api:anychart.charts.Pert#getStat}getStat(){api} method to obtain and set PERT statistical calculations.

```
// chart initiation
chart = anychart.pert();

// get project duration
var duration = chart.getStat(anychart.enums.Statistics.PERT_CHART_PROJECT_DURATION);

// get project deviation
var deviation = chart.getStat(anychart.enums.Statistics.PERT_CHART_CRITICAL_PATH_STANDARD_DEVIATION);
```

{sample :width 827 :height 300}Pert\_Data\_05{sample}