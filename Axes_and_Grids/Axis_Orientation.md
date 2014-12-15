{:index 2}
# Axes Orientation

* [Overview](#overview)
* [Column Mode](#column_mode)
* [Bar Mode](#bar_mode)

## Overview
   
Orientation depends on plot type and inversion of axes, below you will find all possible axes orientation and inverting
JS Settings with demonstration preview.
  
Though these settings are demonstrated using Bar/Column charts - they work for all other chart types.

## Column Mode

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="420"><b>Preview</b></th>
<th width="280"><b>JS Settings</b></th>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_01{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('left');
chart.xScale().inverted(false);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_02{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('left');
chart.xScale().inverted(true);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_03{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('left');
chart.xScale().inverted(false);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_04{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('left');
chart.xScale().inverted(true);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_05{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('left');
chart.xScale().inverted(true);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_06{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('left');
chart.xScale().inverted(true);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_07{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('left');
chart.xScale().inverted(false);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_08{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('left');
chart.xScale().inverted(true);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_09{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('right');
chart.xScale().inverted(false);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_10{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('right');
chart.xScale().inverted(true);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_11{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('right');
chart.xScale().inverted(false);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_12{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('right');
chart.xScale().inverted(true);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_13{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('right');
chart.xScale().inverted(false);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_14{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('right');
chart.xScale().inverted(true);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_15{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('right');
chart.xScale().inverted(false);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_16{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('right');
chart.xScale().inverted(true);
chart.yScale().inverted(true);
```
</td>
</tr>
</tbody>
</table>

##Bar Mode
x-Axis isn't restricted in only by Top and Bottom orientation. It can by placed on the Left or Right sides. So can 
y-Axis be placed on the top or bottom. This option enabled by default in Bar charts. 
  
Here are some samples of Bar chart Axes orientation

<table width="700" border="1" class="dtTABLE">
<tbody><tr>
<th width="420"><b>Preview</b></th>
<th width="280"><b>JS Settings</b></th>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_17{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('left');
chart.xScale().inverted(false);
chart.yScale().inverted(false);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_18{sample}
</td>
<td>
```
chart.xAxis().orientation('bottom');
chart.yAxis().orientation('left');
chart.xScale().inverted(true);
chart.yScale().inverted(true);
```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_19{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('right');
chart.xScale().inverted(false);
chart.yScale().inverted(false);

```
</td>
</tr>
<tr>
<td>
{sample}AGST\_Axis\_Position\_20{sample}
</td>
<td>
```
chart.xAxis().orientation('top');
chart.yAxis().orientation('right');
chart.xScale().inverted(true);
chart.yScale().inverted(true);
```
</td>
</tr>
</tbody>
</table>
