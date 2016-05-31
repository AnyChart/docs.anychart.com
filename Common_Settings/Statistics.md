Statistics
==========

* [Overview](#overview)
* [Statistics Methods](#statistics_methods)

## Overview 

AnyChart Charts provide you an ability to access different statistical data calculated by chart engine.

## Statistics Methods

To obtain statistical data from chart use {api:anychart.core.Chart#getStat}getStat(){api} method with field name as a parameter, available field names can be found in {api:anychart.enums.Statistics}anychart.enums.Statistics{api}, you can use them by name or by their string representation:

```
var pointsCount = chart.getStat(anychart.enums.Statistics.DATA_PLOT_POINT_COUNT);
var bubbleMaxSize = chart.getStat("dataPlotBubbleMaxSize");
```

Here is a sample chart where maximum bubble size and number of points is obtained using {api:anychart.core.Chart#getStat}getStat(){api} method:

{sample}CS\_Statistics\_01{sample}
