#Circular Gauge Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Axes](#axes)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Padding](#padding)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)



##Overview

In this tutorial we will learn how to build the basic circular gauge step by step, trying to cover all major elements and pointing to the articles for the further tuning a gauge.

So, a Circular Gauge is a radial scale that sweeps any angle from 0 to 360 degrees and a pointer (Needle or Knob) that indicates values on that scale. Gauge scale is usually colored for easy value quality distinction. Gauges can be used as clocks, speedometer, compass, audio feature tuner or any other gauge that should represent the value as an angle on a circle plot.

Let's start with adding or configuring gauge elements step by step, so in the end we'll create a typical speedometer gauge as a result.

Note: in this sample AnyChart.swf is used, but you can optimize the page with selected chart type if you use custom type dependent swf. These swfs are described in SWFs Guide.

##Chart

Depending on data model and the visualization purpose the bar chart may contain single series or multi series.

###Single Series

Let's see single series bar chart created using the following data - sales of ACME Corp. apparel through different 
retail channels in one year:

<table width="328" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="210"><b>Retail Channel</b></th>
<th width="102"><b>Sales  </b></th>
</tr>
<tr>
<td>Department Stores</td>
<td>$637.166</td>
</tr>
<tr>
<td>Discount Stores</td>
<td> $721.630</td>
</tr>
<tr>
<td>Men's/Women's Specialty Stores</td>
<td> $148.662</td>
</tr>
<tr>
<td>Juvenile Specialty Stores</td>
<td> $78.662</td>
</tr>
<tr>
<td>All other outlets</td>
<td> $90.000</td>
</tr>
</tbody>
</table>

Now we need to convert this data. In terms of AnyChart data model we have one series of data (Sales) with categories that hold Retail channels names. Each point in series represents one channels and sales amount through this channel. Converted data looks like:

```
dataSet = anychart.data.set([81,34.5]);
```

###Multi-series
