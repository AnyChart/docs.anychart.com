# Range Column/Bar chart
                                                                         
* [Overview](#overview)
* [Chart](#chart)
* [Temperature Range Chart Sample](#temperature_range_chart_sample)
* [Waterfall Chart Sample](#waterfall_chart_sample)
* [3D Range Bar](#3d_range_bar)
<!-- * [Configuration](#configuration)-->

## Overview

The Range Column/Bar charts displays a range of data by plotting two Y values per data point. Each Y value used is drawn as the upper, and lower bounds of a column/bar.
  
  
Sometimes range charts are referred as "floating" column/bar charts. Some data may look very nice and are easily understood in this form, in which the column floats in the chart, spanning a region from the minimum value to the maximum value.
  
  
Also you can create Waterfall charts - this type is a special type of Floating Column Charts. A typical waterfall chart shows how an initial value is increasing and decreasing by a series of intermediate values, leading to a final value.

## Chart

As range bar charts have to define lower and upper bound of bars, you have to specify these two values using **"low"** and **"high"** parameters.
  
  
Also "RangeBar" series type should be specified.

```
    chart.rangeBar([
        { high: 0.6, low: 6.3},
        { high: 0.7, low: 6.1},
        { high: 1.9, low: 8.5}
    ]);
```

## Temperature Range Chart Sample

This sample shows how JavaScript range bars can be used to chart temperature averages, the data is taken from UK average weather statistics from 1971 to 2000:

{sample}BCT_Range\_Bar-Column\_Charts\_01{sample}

## Waterfall Chart Sample

In the sample below we formatted start and end values, here we will colorize chart as we need. Here it is - a Waterfall chart is displayed.

{sample}BCT_Range\_Bar-Column\_Charts\_02{sample}

## 3D Range Bar

Along with common versions of range bars and columns you can use 3d version of these charts. Call {api:anychart#bar3d}**.bar3d()**{api} to use 3d bar or {api:anychart#column3d}**.column3d()**{api} if you desire to visualize your data using 3D column chart.

```
var chart = anychart.bar3d();
var series1 = chart.bar3d(dataSet1);
series1.name("Sales 2009");
var series2 = chart.bar3d(dataSet2);
series2.name("Sales 2010");
var series3 = chart.bar3d(dataSet3);
series3.name("Sales 2011");
```

{sample}BCT_Range\_Bar-Column\_Charts\_03{sample}

<!--
<a name="configuration"/>
## Configuration

All range charts are configured and tuned almost the same way as usual Bar or Column charts, with the only difference: as we have to tell a starting and an ending points to Y-axis, we have two tooltips, two labels and two markers.

So, to configure them we define chart as chart.rangeBar node and <bar_style>. <range_bar_series> contains <start_point> and <end_point> nodes that hold tooltip, label and marker settings for the starting and the ending points.

For example, we want to change markers to "Star" for all range bar series on the chart, for both start and end:

XML Syntax
XML Code
Plain code
01
<range_bar_series>
02
  <start_point>
03
    <marker_settings enabled="True">
04
      <marker type="Star5" size="20" />
05
    </marker_settings>
06
  </start_point>
07
  <end_point>
08
    <marker_settings enabled="True">
09
      <marker type="Star5" size="20" />
10
    </marker_settings>
11
  </end_point>
12
</range_bar_series>
Here is the result of application of these settings to the waterfall chart sample data:

Live Sample:  Sample Range chart - Waterfall chart with markers

to top

Some range bar settings can be moved to a style definition, and this style can be applied to the certain point - not a series.

Style named "Balance" definition may look like that:

XML Syntax
XML Code
Plain code
01
<range_bar_style name="Starring">
02
  <fill color="Blue" />
03
  <hatch_fill enabled="True" />
04
</range_bar_style>
To apply this style to the certain point we specify its name in it:

XML Syntax
XML Code
Plain code
01
<point name="Balance" start="0" end="60" style="Balance" />
And again, here is a sample resulting chart:

Live Sample:  Sample Range chart - Waterfall chart with style
-->
