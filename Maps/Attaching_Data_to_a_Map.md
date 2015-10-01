Attaching Data to a Map
======================

* [Overview](#overview)
* [Basic values](#basic_values)
* [Extra values](#extra_values)

## Overview

According to user's needs, AnyChart allows to attach any data to a chart or a map, and this data might be numerical or textual and then should be formatted properly to be shown in labels, tooltips, legend or actions. There are some data fields that are basic for maps, but it's always possible to add some extra and use it.

## Basic values

The most important and basic values for maps are the regions' ID and the values represented. Regions without values might take place, but those will represent no information, they will just exist on a map.

You can create a dataSet of objects:

```
var dataSet = anychart.data.set([
        {'id': 'AU.WA', 'value':  300},
        {'id': 'AU.JB', 'value':  230},
        {'id': 'AU.NS', 'value':  240},
        {'id': 'AU.VI', 'value':  275},
        {'id': 'AU.NT', 'value':  130},
        {'id': 'AU.TS', 'value':  190},
        {'id': 'AU.CT', 'value':  100},
        {'id': 'AU.SA', 'value':  305},
        {'id': 'AU.QL', 'value':  190}
    ]);
```

Or as the array:

```
var dataSet = anychart.data.set([
        ['AU.WA', 300],
        ['AU.JB', 230],
        ['AU.NS', 240],
        ['AU.VI', 275],
        ['AU.NT', 130],
        ['AU.TS', 190],
        ['AU.CT', 100],
        ['AU.SA', 305],
        ['AU.QL', 190]
    ]);
```
In this case you should use the {api:anychart.data.Set#mapAs}**.mapAs()**{api} function to define the connection between the data and the map.

```
// mapping the data to the chart
            var mapDataSet = dataSet.mapAs({id: [0], value: [1]});
```

{sample}Maps\_AD\_01{sample}

## Extra values

Adding some custom data is being done the same way. Look at the example below.

```
var dataSet = anychart.data.set([
        {'id': 'AU.WA', 'value': 300, 'capital': 'Perth'},
        {'id': 'AU.JB', 'value': 230, 'capital': 'Canberra'},
        {'id': 'AU.NS', 'value': 240, 'capital': 'Sydney'},
        {'id': 'AU.VI', 'value': 275, 'capital': 'Melbourne'},
        {'id': 'AU.NT', 'value': 130, 'capital': 'Darwin'},
        {'id': 'AU.TS', 'value': 190, 'capital': 'Hobart'},
        {'id': 'AU.CT', 'value': 100, 'capital': 'Canberra'},
        {'id': 'AU.SA', 'value': 305, 'capital': 'Adelaide'},
        {'id': 'AU.QL', 'value': 190, 'capital': 'Brisbane'}
    ]);
```
You may do the same through the array:

```
var dataSet = anychart.data.set([
        ['AU.WA', 300, 'Perth'],
        ['AU.JB', 230, 'Canberra'],
        ['AU.NS', 240, 'Sydney'],
        ['AU.VI', 275, 'Melbourne'],
        ['AU.NT', 130, 'Darwin'],
        ['AU.TS', 190, 'Hobart'],
        ['AU.CT', 100, 'Canberra'],
        ['AU.SA', 305, 'Adelaide'],
        ['AU.QL', 190, 'Brisbane']
    ]);
```

<!-- тут надо дописать еще новое поле в тултип -->{sample}Maps\_AD\_02{sample}












