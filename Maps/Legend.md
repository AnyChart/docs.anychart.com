{:index 13}
# Map Legend

## Overview

Legend is used predominantly to show names of the regions on a map and some side values that describes this series at some point (like sales amount, divorce rate, etc.). 

AnyMap legend works the same way it works in all other chart types. Look through the [Legend](../Common_Settings/Legend/Overview) section for more information about legends.

This articles shows several samples how legend is used with AnyChart JavaScript maps.

## Simple Legend

To enable legend on the map:

```
// enable legend
map.legend(true);
```

{sample}Maps\_Legend\_01{sample}

## Thresholds in Legend

You can use Legend with thresholds; with thresholds, the legend looks similar to a [Color Range](ColorRange) with an ordinal [Color Scale](Scales). 

First you need to create a threshold scale:

```
var scale = anychart.scales.ordinalColor([
  {less: 5},
  {from: 5, to: 10},
  {greater: 10}
  ]);
  
scale.colors(['#73E6BF', '#54D1B5', '#26B2A6']);
```

Then apply it to a series:

```
series.colorScale(scale);  
```

And then tell legend where to get items:

```
map.legend().legend(true);
map.legend().itemsSourceMode('categories');
```

{sample}Maps\_Legend\_02{sample}