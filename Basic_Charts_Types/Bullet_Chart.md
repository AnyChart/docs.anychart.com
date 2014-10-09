# Bubble Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Size](#size)
* [Axes](#axes)
 * [Positioning](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
 * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)
 
## Overview

A Bullet Chart is a variation of [Bar Chart](Bar_Chart) designed to compares a single, primary measure (for example, 
current year-to-date revenue) to one or more other measures to enrich its meaning (for example, 
compared to a target), and displays it in the context of qualitative ranges of performance, such as poor, 
satisfactory, and good. The qualitative ranges are displayed as varying intensities of a single hue to make them 
discernible by those who are color blind and to restrict the use of colors on the dashboard to a minimum.
  
  
Bullet chart always uses only one data series, but a dashboard may contain several bullet charts at the same time. 
This kind of charts can be of great help in some cases as far as it provides the clearest, 
most meaningful presentation of the data in the least amount of space.

## Chart

Bullet Chart consist of a main bar of key measure and a range bar of comparative measure. 
  
  
Let's create a simple bullet chart. Data for the chart is base on the sales of ACME Corp. apparel through different 
retail channels in 2003 and 2004 years:

<table width="536" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="227"><b>Retail Channel</b></th>
<th width="141"><b>Year 2003 Sales</b></th>
<th width="141"><b>Year 2004 Sales</b></th>
<th width="141"><b>Fixed Maximum</b>
</tr>
<tr>
<td>Department Stores</td>
<td>$637.166</td>
<td>$737.166</td>
<td>$957.309</td>
</tr>
<tr>
<td>Discount Stores</td>
<td> $721.630</td>
<td>$537.166</td>
<td>$879.252</td>
</tr>
<tr>
<td>Men's/Women's Specialty Stores</td>
<td> $148.662</td>
<td>$188.662</td>
<td>$512.203</td>
</tr>
<tr>
<td>Juvenile Specialty Stores</td>
<td> $78.662</td>
<td>$178.662</td>
<td>$178.662</td>
</tr>
<tr>
<td>All other outlets</td>
<td> $90.000</td>
<td>$89.000</td>
<td>$124.812</td>
</tr>
</tbody>
</table>

As far as there are 5 retail channels there are 5 different bullet charts on one dashboard. Main bar is relevant to 
2003 year sales, darker range is relevant to 2004 year sales and lighter range is relevant to the maximum of sales at
ever sold in the channel per year.

