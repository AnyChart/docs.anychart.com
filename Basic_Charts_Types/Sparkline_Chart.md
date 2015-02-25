#Sparkline Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
* [Scales](#scales)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels](#labels)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)

## Overview

In some cases it might be necessary to represent a lot of similar data over a long period of time, such as currency trends. Up and down arrows are used for this purpose quite often, but they cannot give the whole picture of the trends. That's where sparklines come to the fore.

Sparkline charts are rather small with neither axes nor grids, amount of additional information is minimized, but they tell a richer story than trend arrows: we can make a chart display not just the current situation, but its changing over time. Sometimes sparklines can be even more informative than any of usual chart types - just because of its simplicity.

## Chart

As sparklines are very simple and their main purpose is showing the trend of something unique, there's no possibilty (and no need) to make them multi-series.

Sparkline series can be of 4 types: line, area, column and win/loss. 

### Line Sparkline Chart

Let's build an example with 2 single-series line charts using the following data - trends of EUR/USD and GBP/USD currency rate.

<table width="287" border="1" class="dtTABLE">
<tbody>
<tr><th colspan=2>EUR/USD</th></tr>
<tr>
<th width="88"><b>Day</b></th>
<th width="88"><b>Rate</b></th>
</tr>
<tr>
<td>25.02</td>
<td>1,1371</td>
</tr>
<tr>
<td>24.02</td>
<td>1,1341</td>
</tr>
<tr>
<td>23.02</td>
<td>1,1132</td>
</tr>
<tr>
<td>21.02</td>
<td>1,1381</td>
</tr>
<tr>
<td>20.02</td>
<td>1,1371</td>
</tr>
</tbody></table>

<table width="287" border="1" class="dtTABLE">
<tbody>
<tr><th colspan=2>GBP/USD</th></tr>
<tr>
<th width="88"><b>Day</b></th>
<th width="88"><b>Rate</b></th>
</tr>
<tr>
<td>25.02</td>
<td>1,5500</td>
</tr>
<tr>
<td>24.02</td>
<td>1,5458</td>
</tr>
<tr>
<td>23.02</td>
<td>1,5463</td>
</tr>
<tr>
<td>21.02</td>
<td>1,5397</td>
</tr>
<tr>
<td>20.02</td>
<td>1,5385</td>
</tr>
</tbody></table>

Now we need to convert this data table into an acceptable format. In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. Converted Data looks like:





### Area Sparkline Chart
