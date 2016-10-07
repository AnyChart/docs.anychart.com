# Standalones

* [Overview](#overview)
* [Standalones List](#standalones_list)
* [Using Standalones](#using_standalones)
* [Custom Chart with Standalones](#custom_chart_with_standalones)

## Overview

Standalones are elements of the charting library. They are not charts or parts of charts themselves, they are building blocks that can be used out of a chart. Standalones do not depend on a chart, so they allow to create completely custom charts and manage them or add some custom elements to charts made with AnyChart solutions. 


## Standalones List

There are 7 stanalones AnyChart provides.

<table>
<tr>
<td>
Standalone
</td>
<td>
What it creates
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.Table}Table(){api}
</td>
<td>
A table 
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.Title}Title(){api}
</td>
<td>
A text element with settings of the title element
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.Legend}Legend(){api}
</td>
<td>
A legend
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.Label}Label(){api}
</td>
<td>
A text element with settings of the label element
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.axes.Linear}Linear{api}
</td>
<td>
A Linear Axis
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.axes.Polar}Polar{api}
</td>
<td>
A Polar Axis
</td>
</tr>

<tr>
<td>
{api:anychart.standalones.axes.Radar}Radar{api}
</td>
<td>
A Radar Axis
</td>
</tr>
</table>


## Using Standalones

Using standalone elements is no more complicated than using basic AnyChart elements. Create an object and add it on a stage:

```
stage = anychart.graphics.create("container");
yAxis = anychart.standalones.axes.Linear();
yAxis.parent(stage);
```


## Custom Chart with Standalones

Using standalones in cooperation with AnyChart Graphics JS elements allows to create a completely custom chart. In this section a simple chart is being created with no elements provided by AnyChart.

