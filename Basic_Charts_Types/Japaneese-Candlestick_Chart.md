# Japanese Candlestick Chart
                                                                                                              
* [Overview](#overview)                                                                                                   
* [Chart](#create)                                                                                               
  * [Single Series](#single)                                                                                              
  * [Multi-series](#multi)                                                                                                
* [Axes](#axes)                                                                                                	
  * [Positioning](#position)                                                                                              
  * [Logarithmic](#logarithmic)                                                                                     
  * [Minimum and Maximum](#min_max)                                                                        
* [Visualization](#visualization)                                                                                         
  * [Basic Sample](#basic_style)                                                                                  
* [Labels and Tooltips](#labels_and_tooltips)                                                                                                                                                                                                                                                                                   	
* [Colors](#colors)                                                                                                       	
  * [Colorizing Elements](#color_setting)                                                                                                                                                                                                                         
* [Advanced Candlestick Chart Sample - Candlestick, Line and Range Area Combination](#advanced-candlestick-stock-charting)                                                                                                                                                                                                                                

<a name="overview"/>
## Overview

Overview

The Japanese candlestick chart a style of bar-chart used primarily to describe price movements of an equity over time. It is a combination of a line-chart and a bar-chart, in that each bar represents the range of price movement over a given time interval. It is most often used in technical analysis of equity and currency price patterns.

Candlesticks are usually composed of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock, and the body the opening and closing trades. If the stock went up, the body is white, with the opening price at the bottom of the body and the closing price at the top. If the stock went down, the body is black, with the opening price at the top and the closing price at the bottom. A candlestick need not have either a body or a wick.

Some traders find the candlestick chart easier to read, than [Open-High-Low-Close charts](Open-High-Low-Close_chart).
<a name="create"/>
## Chart

Candlestick chart uses four values, so we need to pass opening, high, low and closing price values to chart, this should be done setting **open**, **high**, **low**, **close** attributes into second, third, fourth and fifth columns:

```
   ['White', 507, 511, 506, 510]
```
<a name="single"/>
### Single Series

Let's see single-series candlestick chart created using an imaginable price ranges that will show candlestick's basic patterns:

<table width="319" border="1" class="dtTABLE">
<tbody><tr>
<th width="133"><b>Pattern</b></th>
<th width="38"><b>Open</b></th>
<th width="38"><b>High</b></th>	
<th width="38"><b>Low</b></th>		
<th width="38"><b>Close</b></th>			
</tr>
<tr>
<td>White </td>
<td>507</td>
<td>511</td>
<td>506</td>
<td>510</td>			
</tr>
<tr>
<td>Black</td>
<td>510</td>
<td>511</td>
<td>506</td>
<td>507</td>			
</tr>
<tr>
<td>Long lower shadow</td>
<td>508.5</td>
<td>511</td>
<td>506</td>
<td>510</td>			
</tr>
<tr>
<td>Long upper shadow</td>
<td>508.5</td>
<td>511</td>
<td>506</td>
<td>507</td>			
</tr>
<tr>
<td>Hammer </td>
<td>510</td>
<td>511</td>
<td>506</td>
<td>511</td>			
</tr>
<tr>
<td>Inverted hammer</td>
<td>507</td>
<td>511</td>
<td>506</td>
<td>506</td>
</tr>
<tr>
<td>Spinning top white</td>
<td>508</td>
<td>511</td>
<td>506</td>
<td>509</td>
</tr>
<tr>
<td>Spinning top black</td>
<td>509</td>
<td>511</td>
<td>506</td>
<td>508</td>
</tr>
<tr>
<td>Doji</td>
<td>508.5</td>
<td>510</td>
<td>507</td>
<td>508.5</td>
</tr>
<tr>
<td>Long legged doji </td>
<td>508.5</td>
<td>511</td>
<td>506</td>
<td>508.5</td>
</tr>
<tr>
<td>Dragonfly doji</td>
<td>511</td>
<td>511</td>
<td>506</td>
<td>511</td>
</tr>
<tr>
<td>Gravestone doji</td>
<td>506</td>
<td>511</td>
<td>506</td>
<td>506</td>
</tr>
<tr>
<td>Marubozu white</td>
<td>506</td>
<td>511</td>
<td>506</td>
<td>511</td>
</tr>
<tr>
<td>Marubozu black</td>
<td>511</td>
<td>511</td>
<td>506</td>
<td>506</td>
</tr>
</tbody></table>
Now we need to convert this data into acceptable format.
```
var data = [
  ['White', 507, 511, 506, 510],
  ['Black', 510, 511, 506, 507],
  ['Long lower shadow', 508.5, 511, 506, 510],
  ['Long upper shadow', 508.5, 511, 506, 507],
  ['Hammer', 510, 511, 506, 511],
  ['Inverted hammer', 507, 511, 506,506],
  ['Spinning top white', 508, 511, 506, 509],
  ['Spinning top black', 509, 511, 506, 508],
  ['Doji', 508.5, 510, 507, 508.5],
  ['Long legged doji', 508.5, 511, 506, 508.5],
  ['Dragonfly doji', 511, 511, 506, 511],
  ['Gravestone doji', 506, 511, 506, 506],
  ['Marubozu white', 506, 511, 506, 511],
  ['Marubozu black', 511, 511, 506, 506]
];
```

As you can see, we've specified chart as "Candlestick". Each series of data contains **column name, open, high, low and close** attributes.

Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on on it to see it's java source.

{sample}BCT\_Japaneese-Candlestick\_Chart\_01{sample}

<a name="multi"/>
### Multi-series

To compare two or more data rows you have to use multi-series candlestick charts as it shown in the sample below.

Let's compare ACME Corp. and Duff Brewing Corp. stock prices sales:
<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="75"><b>Company</b></th>
<th colspan="4"><b>ACME Corp</b>.</th>
<th colspan="4"><b>Duff Brewery Corp</b>.</th>
</tr>
<tr>
<th width="75"><b>Day</b></th>
<th width="46"><b>Open</b></th>
<th width="46"><b>High</b></th>	
<th width="46"><b>Low</b></th>		
<th width="46"><b>Close</b></th>			
<th width="46"><b>Open</b></th>
<th width="46"><b>High</b></th>	
<th width="46"><b>Low</b></th>		
<th width="46"><b>Close</b></th>			
</tr>
<tr>
<td>28-Aug-07</td>
<td>511.53</td>
<td>514.98</td>
<td>505.79</td>
<td>506.40</td>			
<td>522.95</td>
<td>523.10</td>
<td>522.50</td>
<td>522.52</td>			
</tr>
<tr>
<td>29-Aug-07</td>
<td>507.84</td>
<td>513.30</td>
<td>507.23</td>
<td>512.88</td>			
<td>522.60</td>
<td>522.69</td>
<td>522.27</td>
<td>522.55</td>			
</tr>
<tr>
<td>30-Aug-07</td>
<td>512.36</td>
<td>515.40</td>
<td>510.58</td>
<td>511.40</td>			
<td>522.49</td>
<td>522.91</td>
<td>522.38</td>
<td>522.61</td>			
</tr>
<tr>
<td>31-Aug-07</td>
<td>513.10</td>
<td>516.50</td>
<td>511.47</td>
<td>515.25</td>		
<td>522.81</td>
<td>522.83</td>
<td>522.51</td>
<td>522.73</td>			
</tr>
<tr>
<td>4-Sep-07</td>
<td>515.02</td>
<td>528.00</td>
<td>514.62</td>
<td>525.15</td>		
<td>523.30</td>
<td>524.50</td>
<td>523.20</td>
<td>523.97</td>			
</tr>
</tbody></table>
As we do in single series sample above we need to convert this table into acceptable format, the only difference between these two samples is the fact that now we have two data sets - one for each year:
```
      chart.candlestick([
['28-Aug-07', 511.53, 514.98, 505.79, 506.40],
['29-Aug-07', 507.84, 513.30, 507.23, 512.88],
['30-Aug-07', 512.36, 515.40, 510.58, 511.40],
['31-Aug-07', 513.10, 516.50, 511.47, 515.25],
['4-Sep-07', 515.02, 528.00, 514.62, 525.15]
      ]);
      chart.candlestick([
['28-Aug-07', 522.95, 523.10, 522.50, 522.52],
['29-Aug-07', 522.60, 522.69, 522.27, 522.55],
['30-Aug-07', 522.49, 522.91, 522.38, 522.61],
['31-Aug-07', 522.81, 522.83, 522.51, 522.73],
['4-Sep-07', 523.30, 524.50, 523.20, 523.97]
      ]);
```
{sample}BCT\_Japaneese-Candlestick\_Chart\_02{sample}

<a name="axes"/>
## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and much more. In this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.
<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust **orientation()** method of **yAxis()** or **xAxis()** attributes.
```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```
And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_03{sample}

<a name="logarithmic"/>
### Logarithmic

AnyChart allows to make Y, X or any extra axis Logarithmic. This is controlled by **scale**:
```
  logScale = anychart.scales.log();
  logScale.minimum(0.1).maximum(100);
  chart.yScale(logScale);
```
And here is the demonstration of Logarithmic Y Axis on slightly modified the Single-series sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_04{sample}

<a name="min_max"/>
### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale positioning chart sample above: minimal value on the Y Axis is 500, and maximum is 535. You can control these values by setting maximum and minimum attributes of yScale method. As far as you want to adjusted the scale, it's desirable to set **.ticks().interval()** as well, in case default interval is twisted:
```
chart.yScale().minimum('505').maximum('530')ticks().interval(5)
```
And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_05{sample}

<a name="Visualization"/>
## Visualization

In this section we will describe main parts of candlestick chart visualization and ways to adjust it. Also you will see list of predefined styles.  Visual appearance of candlestick is defined using certain methods. The most important for candlestick methods are **fallingStroke()**, **risingStroke()**, **.risingFill()** and **.fallingFill()**.

<a name="basic_style"/>
### Basic Sample

Now, let's look how to adjust candlestick appearance:

```
 chart.candlestick(data)
    .fallingStroke('black', 1)
    .risingStroke('black', 1)
    .hoverFallingStroke('red', 3)
    .hoverRisingStroke('red', 3)
    .fallingFill('black')
    .risingFill('white');
```
Using these settings we've set red color for every falling candlestick point and green color for every rising candlestick point. Also, our rising candlestick points have dark green color, if mouse is over, as well as all falling points have dark red color, if mouse is over. Thickness of strokes was adjusted too. It's 3 px for all points and 5px if mouse over. 

{sample}BCT\_Japaneese-Candlestick\_Chart\_06{sample}

<a name="labels_and_tooltips"/>
## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.<!-- Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->

If you want to configure data labels and tooltips for all series - you should do that with **.labels()** and **.tooltip()** methods. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the top of the data points, also, we will format labels so they show only the value corresponding to the point and tooltip will show detailed description.

When formatting data labels text and tooltip we can use **.contentFormatter()** and **.textFormatter()**.

{sample}BCT\_Japaneese-Candlestick\_Chart\_07{sample}
<!--
Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->
<a name="colors"/>
## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can apply the color to exact data series or data point.

<a name="color_setting"/>
### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set **.color()**. In the sample below we have 5 series with sample data and we'll color each series into different color. Here is the sample:

{sample}BCT\_Japaneese-Candlestick\_Chart\_08{sample}

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set **"Rgb(180,77,77)"** color for minimum point and **"Rgb(77,180,77)"** for the maximal one. As you see it is very easy to do by setting **"fallingFill()"** and **"risingFill()"** attributes for point.

{sample}BCT\_Japaneese-Candlestick\_Chart\_09{sample}

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSV(?,?,?)" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

<a name="advanced-candlestick-stock-charting"/>
## Advanced Candlestick Chart Sample - Candlestick, Line and Range Area Combination

In the real world application Open-High-Low-Close rarely used alone, in technical analysis they are often combined with other chart types, such as Lines (to show **moving average**), Range Areas (to show **"Bollinger bands"**), and column charts (to show **trading volume**).

AnyChart provides most of features that developer needs to create a complex financial chart, this includes Combination charts, Dashboards and Interactivity features. The sample below shows a typical stock trading report and it can be used as a starting point in your integration of AnyChart into Financial/Trading/Reporting application.

{sample}BCT\_Japaneese-Candlestick\_Chart\_10{sample}
