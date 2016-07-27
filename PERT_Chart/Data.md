{:index 2}
PERT Chart Data
===========

* [Overview](#overview)
* [Nodes and Connections Set Simultaneously](#nodes_and_connections_set_simultaneously)
* [Nodes and Connections Set Separately](#nodes_and_connections_set_separately)

## Overview

PERT charts use a special type of data, which cannot be set the same way as data for other chart types: one needs not only to create a set of items (nodes), but also to specify how they are connected. There are two ways to set data for PERT charts, both based on [Anychart Data Tree Model](../Working_with_Data/Using_Data_Tree_Model).

## Nodes and Connections Set Simultaneously

Nodes and connections between them can be set simultaneously. In this case, nodes' descriptions contain information on their connections.

```
var data = [
  {id: 0, name: 'A'},
  {id: 1, name: 'B'},
  {id: 2, name: 'C', dependsOn: [1]},
  {id: 3, name: 'D', dependsOn: [0]},
  {id: 4, name: 'E', dependsOn: [0]},
  {id: 5, name: 'F', dependsOn: [4, 3]}
];
var tree = anychart.data.tree(data);
```

## Nodes and Connections Set Separately

Nodes and connections can be set separately, in two sets of data.

```
var data = [
  {id: 0, name: 'A'},
  {id: 1, name: 'B'},
  {id: 2, name: 'C'},
  {id: 3, name: 'D'},
  {id: 4, name: 'E'},
  {id: 5, name: 'F'}
];

var dependencies = [
  {from: 0, to: 3},
  {from: 0, to: 4},
  {from: 1, to: 2},
  {from: 4, to: 5}
];
var tree = anychart.data.tree(data, dependencies);
```
