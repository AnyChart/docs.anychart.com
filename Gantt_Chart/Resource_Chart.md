# Resource Chart


* [Overview](#overview)
* [Chart](#chart)
* [Periods](#Periods)


## Overview

Resources Gantt Chart is one of two types of Gantt Charts. It is intended for showing the resources you have and spreading these resources along the timeline (into periods).

## Chart

The Recource Gantt Chart creation is the same as Project Chart except you should define the chat type:

```
//create project gantt chart
  chart = anychart.ganttResource();
```

Here is a sample demonstrates how to create simple Project Chart.
{sample :width 690 :height 180}GANTT\_Chart\_01{sample}

##Periods

As shown above every resource has a set of its own properties:

```
 "id": "1",
 "name": " Sarah Connor",
 "periods": [..]
```

Each period has the id, name, start and end time.

```
 "periods": [
        {"id": "1_1", "start": 1171468800000, "end": 1171987200000},
        {"id": "1_2", "start": 1174921200000, "end": 1175612400000}
        ]
```

Also you can define the view of the given period:

```
//solid fill
{"fill": "#FFFF00 0.7", "stroke": "none"},

//gradient fill
{"fill": {"angle": 0, "keys": [{"color": "orange", "position": 0}, {"color": "#6B9866", "position": 0.5}, {"color": "red", "position": 1}]}},
```

{sample :width 710 :height 150}GANTT\_Chart\_03{sample}