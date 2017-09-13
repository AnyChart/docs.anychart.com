{:index 2}
# Axes Orientation

## Overview
   
Orientation depends on plot type and inversion of axes, below you will find all possible axes {api:anychart.core.axes.Linear#orientation}orientation{api} and {api:anychart.scales.Linear#inverted}inverting{api} JS Settings with demonstration preview.
  
Though these settings are demonstrated using {api:anychart.core.cartesian.series.Bar}Bar{api}/{api:anychart.core.cartesian.series.Column}Column{api} charts - they work for all other chart types.

## Column Mode

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="420"><b>Preview</b></th>
<th width="280"><b>JS Settings</b></th>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_01{sample}
</td>
<td>
```
// set x axis position. This position is set by default
var xAxis = chart.xAxis();
xAxis.orientation("bottom");

// set y axis position. This position is set by default
var yAxis = chart.yAxis();
yAxis.orientation("left");

var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_02{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_03{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_04{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_05{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_06{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_07{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_08{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_09{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_10{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_11{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_12{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_13{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_14{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_15{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_16{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
</tbody>
</table>

##Bar Mode
{api:anychart.charts.Cartesian#xAxis}x-Axis{api} isn't restricted in only by Top and Bottom orientation. It can by placed on the Left or Right sides. So can {api:anychart.charts.Cartesian#yAxis}y-Axis{api} be placed on the top or bottom. This option enabled by default in {api:anychart.core.cartesian.series.Bar}Bar{api} charts.
  
Here are some samples of Bar chart Axes orientation

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="420"><b>Preview</b></th>
<th width="280"><b>JS Settings</b></th>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_17{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_18{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("bottom");
var yAxis = chart.yAxis();
yAxis.orientation("left");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_19{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(false);
var yScale = chart.yScale();
yScale.inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Orientation\_20{sample}
</td>
<td>
```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
var xScale = chart.xScale();
xScale.inverted(true);
var yScale = chart.yScale();
yScale.inverted(true);
```
</td>
</tr>
</tbody>
</table>