# Marker Chart
                                                                       
 * [Overview](#overview)
 * [Chart](#chart)
  * [Single Series Marker Chart](#single_series)
  * [Multi-series Marker Chart](#multi_categorized)
<!--  * [Scatter Marker chart](#marker_scatterplot) -->
 * [Axes](#axes)
  * [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum](#min_max)
 * [Visualization](#visualization)
  * [Basic Sample](#simple_style)
 * [Labels and Tooltips](#labels_and_tooltips)
 * [Colors](#colors)
  * [Colorizing Elements](#color_setting)
 * [Hatch Fills](#hatches)

<a name="overview"/>
## Overview

Marker chart, also known as a point chart is identical to a line chart without the lines. A marker chart shows only endpoints of segments that make up each line.

<a name="chart"/>
## Chart

Depending on data model and the visualization purpose the marker chart may contain single series or multi series.

<a name="single_series"/>
### Single Series Line Line Chart

Let's see single-series marker chart created using the following data - ACME Movie studio total box office through several years:

<table width="305" border="1" class="dtTABLE">
<tbody><tr>
<th width="135"><b>Year</b></th>
<th width="154"><b>Box office  (billions)</b></th>
</tr>
<tr>
<td>2000</td>
<td>$1100</td>
</tr>
<tr>
<td>2001</td>
<td> $880</td>
</tr>
<tr>
<td>2002</td>
<td> $1100</td>
</tr>
<tr>
<td>2003</td>
<td> $1500</td>
</tr>
<tr>
<td>2004</td>
<td> $921</td>
</tr>
<tr>
<td>2005</td>
<td>$1000</td>
</tr>
<tr>
<td>2006</td>
<td>$1400</td>
</tr>
</tbody></table>
Now we need to convert this data table into js format, this format will be accepted by AnyChart. In terms of AnyChart first column represents year and second one contains total income of Box office. Converted Data looks like:

```
  chart.xAxis();
  chart.yAxis();
  chart.grid()
      .evenFill('none')
      .oddFill('none')
      .layout(anychart.utils.layout.VERTICAL);
  chart.marker([
   ['2000', 1100],
   ['2001', 880],
   ['2002', 1100],
   ['2003', 1500],
   ['2004', 921],
   ['2005', 1000],
   ['2006', 1400]
```
As you can see, we've specified chart type as Marker.

Look at the chart sample below and click on it and lunch preview and full configured data in our playground.

{sample}BCT\_Marker\_Chart\_01{sample}

<a name="multi_categorized"/>
### Multi-Series Marker Chart

To compare two or more data rows you have to use multi-series line charts as it shown in the sample below.

Let's compare ACME Movies box office to other studios:
<table border="1" class="dtTABLE">
<tbody><tr>
<th width="34"><b>Year</b></th>
<th width="80"><b>ACME</b></th>
<th width="80"><b>Galaxy</b></th>
<th width="80"><b>CSS</b></th>
<th width="80"><b>HARE</b></th>
<th width="80"><b>Soundy</b></th>
<th width="80"><b>Space</b></th>
</tr>
<tr>
<td>2000</td>
<td>$1100</td>
<td>$1000</td>
<td>$1500</td>
<td>$700</td>
<td>$600</td>
<td>$900</td>
</tr>
<tr>
<td>2001</td>
<td> $880</td>
<td>$950</td>
<td>$1300</td>
<td>$800</td>
<td>$700</td>
<td>$1200</td>
</tr>
<tr>
<td>2002</td>
<td> $1100</td>
<td>$800</td>
<td>$1000</td>
<td>$900</td>
<td>$1500</td>
<td>$1000</td>
</tr>
<tr>
<td>2003</td>
<td> $1500</td>
<td>$1000</td>
<td>$1050</td>
<td>$770</td>
<td>$1200</td>
<td>$1100</td>
</tr>
<tr>
<td>2004</td>
<td> $921</td>
<td>$890</td>
<td>$1500</td>
<td>$930</td>
<td>$1300</td>
<td>$1200</td>
</tr>
<tr>
<td>2005</td>
<td>$1000</td>
<td>$1000</td>
<td>$1330</td>
<td>$1350</td>
<td>$900</td>
<td>$1370</td>
</tr>
<tr>
<td>2006</td>
<td>$1400</td>
<td>$800</td>
<td>$950</td>
<td>$1200</td>
<td>$1700</td>
<td>$1050</td>
</tr>
</tbody></table>
As we do in single series line sample above we need to convert this table into js format, the only difference between these two samples is the fact that now we have several series of data - one series for each studio(we will show here only two series):
```
  chart.marker([
     [2000, 1100],
 [2001, 880],
 [2002, 1100],
 [2003, 1500],
 [2004, 921],
 [2005, 1000],
 [2006, 1400]
  ]);
  chart.marker([
    [2000, 1000], 
 [2001, 950],  
 [2002, 800],  
 [2003, 1000], 
 [2004, 890],  
 [2005, 1000], 
 [2006, 800],  
  ]);
```

{sample}BCT\_Marker\_Chart\_02{sample}
<!--
<a name="marker_scatterplot"/>
### Marker scatter plot

The sample of scatter marker chart can be found in Scatter Charts Tutorial.
-->
<a name="axes"/>
## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in <!--link in need-->Working with Axes tutorial<!--link-->, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of **yAxis** or **xAxis** nodes.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning and Inverting Templates.

```    
    chart.xAxis(0).orientation('top');
    chart.yAxis(0).orientation('right');
```
And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_Marker\_Chart\_03{sample}

<a name="inversion"/>
### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by **scale().inverted()**:

```
chart.yScale().inverted(true);
```
And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_Marker\_Chart\_04{sample}

<a name="min_max"/>
### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 800, and maximum is 1600. You can control these values by setting maximum and minimum attributes of <scale> node:
```
chart.yScale().minimum('0').maximum('1800');
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Marker\_Chart\_05{sample}

<a name="visualization"/>
## Visualization

In this section we will describe main parts of marker chart visualization and ways to adjust it. Visual appearance of areas is defined using certain methods. For Marker chart the main thing is the **.fill()** method.
<a name="simple_style"/>
### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an js structure:
```
  chart.marker([
   ['2000', 1100],
   ['2001', 880],
   ['2002', 1100],
   ['2003', 1500],
   ['2004', 921],
   ['2005', 1000],
   ['2006', 1400]
  ])
  .fill('gold')
  .hoverFill('darkred')
  .hoverStroke(0)
  .hoverSize(20);
```
Using such settings we've defined markers of Gold color and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed and made bigger.

{sample}BCT\_Marker\_Chart\_06{sample}

<a name="labels_and_tooltips"/>
## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in <!--Labels and tooltips-->.

If you want to configure data labels and tooltips for all series - you should do that using **.labels()** and **.tooltip()** methods. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the top of the data points, also, we will format labels so they show only the value corresponding to the point and tooltip will show detailed description.

{sample}BCT\_Marker\_Chart\_07{sample}
<!--
Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->
<a name="colors"/>
## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can set and apply the color to exact data point.

<a name="color_setting"/>
### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set **.fill()** attribute in the **chart.marker()**. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_Marker\_Chart\_08{sample}

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting **.fill()** attribute for the point.

{sample}BCT\_Marker\_Chart\_09{sample}

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSV(?,?,?)" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. <!--But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

[Link in need]Different ways of setting colors of elements[liink in need]
Advanced coloring techniques in [link in need]Styles tutorial[link in need]-->

<a name="hatches"/>
## Hatch Fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. <!--To see whole range of available hatch types see [Link in need]Hatch tutorial.[Link]-->

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 2 data points in each. For every series we've applied different hatch fills by setting **.hatchFill()** attribute.

{sample}BCT\_Marker\_Chart\_10{sample}