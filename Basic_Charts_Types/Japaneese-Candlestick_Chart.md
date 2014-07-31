# Japanese Candlestick Chart
                                                                                                              
* [Overview](#overview)                                                                                                   
* [Chart Building](#create)                                                                                               
  * [Single Series](#single)                                                                                              
  * [Multi-series](#multi)                                                                                                
* [Axes management](#axes)                                                                                                	
  * [Positioning](#position)                                                                                              
  * [Logarithmic Scale](#logarithmic)                                                                                     
  * [Minimum and Maximum values control](#min_max)                                                                        
* [Visualization](#visualization)                                                                                         
  * [Simple style sample](#simple_style)                                                                                  
* [Labels and Tooltips](#labels_and_tooltips)                                                                                                                                                                                                                                                                                   	
* [Colors](#colors)                                                                                                       	
  * [Setting colors to the elements](#color_setting)                                                                                                                                                                                                                         
* [Advanced Candlestick Chart sample - Candlestick, Line and Range Area Combination](#advanced-candlestick-stock-charting)                                                                                                                                                                                                                                

<a name="overview"/>
## Overview

Overview

The Japanese candlestick chart a style of bar-chart used primarily to describe price movements of an equity over time. It is a combination of a line-chart and a bar-chart, in that each bar represents the range of price movement over a given time interval. It is most often used in technical analysis of equity and currency price patterns.

Candlesticks are usually composed of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock, and the body the opening and closing trades. If the stock went up, the body is white, with the opening price at the bottom of the body and the closing price at the top. If the stock went down, the body is black, with the opening price at the top and the closing price at the bottom. A candlestick need not have either a body or a wick.

Some traders find the candlestick chart easier to read, than Open-High-Low-Close charts.
<a name="create"/>
## Chart building

Candlestick chart uses four values, so we need to pass opening, high, low and closing price values to chart, this should be done using open, high, low, close attributes of <point> node:

```
   ['White', 507, 511, 506, 510]
```
<a name="single"/>
### Single-Series

Let's see single-series candlestick chart created using an imaginable price ranges that will show candlestick's basic patterns:

<table width="319" border="1" class="dtTABLE">
<tbody><tr>
<th width="133">Pattern</th>
<th width="38">Open</th>
<th width="38">High</th>	
<th width="38">Low</th>		
<th width="38">Close</th>			
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
### Multi-Series

To compare two or more data rows you have to use multi-series candlestick charts as it shown in the sample below.

Let's compare ACME Corp. and Duff Brewing Corp. stock prices sales:

Let's compare ACME Corp. and Duff Brewing Corp. stock prices sales:
<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="75">Company</th>
<th colspan="4">ACME Corp.</th>
<th colspan="4">Duff Brewery Corp.</th>
</tr>
<tr>
<th width="75">Day</th>
<th width="46">Open</th>
<th width="46">High</th>	
<th width="46">Low</th>		
<th width="46">Close</th>			
<th width="46">Open</th>
<th width="46">High</th>	
<th width="46">Low</th>		
<th width="46">Close</th>			
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
As we do in single series sample above we need to convert this table into XML, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

XML Syntax
XML Code
Plain code
01
<data>
02
  <series name="ACME">
03
    <point name="28-Aug-07" open="511.53" high="514.98" low="505.79" close="506.40" />
04
    <point name="29-Aug-07" open="507.84" high="513.30" low="507.23" close="512.88" />
05
    <point name="30-Aug-07" open="512.36" high="515.40" low="510.58" close="511.40" />
06
    <point name="31-Aug-07" open="513.10" high="516.50" low="511.47" close="515.25" />
07
    <point name="4-Sep-07" open="515.02" high="528.00" low="514.62" close="525.15" />
08
  </series>
09
  <series name="Duff">
10
    <point name="28-Aug-07" open="522.95" high="523.10" low="522.50" close="522.52" />
11
    <point name="29-Aug-07" open="522.60" high="522.69" low="522.27" close="522.55" />
12
    <point name="30-Aug-07" open="522.49" high="522.91" low="522.38" close="522.61" />
13
    <point name="31-Aug-07" open="522.81" high="522.83" low="522.51" close="522.73" />
14
    <point name="4-Sep-07" open="523.30" high="524.50" low="523.20" close="523.97" />
15
  </series>
16
</data>
As we now have multi-series chart we don't want to set type for each series individually (there can be much more than two series in multi-series chart), so we add <data_plot_settings default_series_type="Candlestick"/> node to <chart>. Now all series in chart will be of Candlestick type by default.

Live Sample:  Sample Multi-Series Candlestick Chart
<a name="axes"/>
## Axes management

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Working with Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.
<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of <y_axis> or <x_axis> nodes.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning and Inverting Templates.

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis position="Opposite" />
03
  <x_axis position="Opposite" />
04
</axes>
And here is the demonstration of this feature on the Single-series sample:

Live Sample:  Axes Position Sample Single-Series Candlestick Chart
<a name="logarithmic"/>
### Logarithmic

AnyChart allows to make Y, X or any extra axis Logarithmic. This is controlled by axis <scale>:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale type="Logarithmic" />
03
</y_axis>
And here is the demonstration of Logarithmic Y Axis on slightly modified the Single-series sample:

Live Sample:  Axis Logarithmic Sample Single-Series Japaneese Candlestick Chart
<a name="min_max"/>
### Minimum and Maximum values control

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale positioning chart sample above: minimal value on the Y Axis is 500, and maximum is 535. You can control these values by setting maximum and minimum attributes of <scale> node:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale minimum="505" maximum="530" />
03
</y_axis>
And here is the demonstration of maximum and minimum values on the Single-series sample:

Live Sample:  Scale Maximum and Minimum Values Sample Single-Series Candlestick Chart

<a name="visualization"/>
## Visualization

In this section we will describe main parts of Candlestick chart style and demonstrate how style can be created and applied. Also you will see list of predefined styles.

The main idea of styles is to segregate visualization and data definition. Visual appearance of lines is defined using certain styles and then you just apply the style to the certain data elements. Style can be applied to data series, data category or single data point.

Candlestick chart style can be configured in <candlestick_style> and <candlestick_series> nodes.
Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc. More information about these features can be found in Interactivity tutorial.

<a name="simple_style"/>
### Simple style

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an XML structure:

XML Syntax
XML Code
Plain code
01
<candlestick_style name="style1">
02
  <line caps="none" />
03
  <up>
04
    <fill type="Solid" color="White" />
05
  </up>
06
  <down>
07
    <fill type="Solid" color="Black" />
08
  </down>
09
  <effects>
10
    <bevel enabled="true" highlight_opacity="0.4" shadow_opacity="0.4" distance="2" />
11
    <drop_shadow enabled="true" opacity="0.3" />
12
  </effects>
13
  <states>
14
    <hover>
15
      <border enabled="true" thickness="3" color="Red" />
16
    </hover>
17
  </states>
18
</candlestick_style>
Using such settings we've created a style that defines how candlestick will be colored when price goes up (<up> node and how when it goes down (<down> node), and a couple of effects applied. Also, we've defined that when user will move cursor over an element border will become rather thick and their color will turn to Red.

Now we will take a sample single series chart described above, define style in XML and apply it to all chart elements, using <candlestick_series style="style1"/>

Live Sample:  Sample Simple Style for Candlestick chart
<a name="labels_and_tooltips"/>
## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in <label> and <tooltip> sub-nodes of <candlestick_series> node. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the top of the data points, also, we will format labels so they show only the value corresponding to the point and tooltip will show detailed description.

When formatting data labels text and tooltip we will use formatting keywords: 
{%Open} - to show opening price,
{%High} - to show highest price,
{%Low} - to show lowest price,
{%Close} - to show closing price.

Live Sample:  Sample Japaneese Candlestick chart - Working with data labels and tooltips

Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
<a name="colors"/>
## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

<a name="color_setting"/>
### Setting colors to the elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set "color" attribute in the <series> node. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

Live Sample:  Sample Candlestick chart - Setting colors to the elements

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting "color" attribute for <point> node.

Live Sample:  Sample Candlestick chart - Setting colors to the series

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSV(?,?,?)" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

Different ways of setting colors of elements
Advanced coloring techniques in Styles tutorial
to top

Color palettes

AnyChart allows to apply color palettes to all series or to the exact series. In the first case each next series will take each next color from palette. If the number of the colors in palette is less than the number of series - palette will be looped. If you have only one series it will be colored by the first color in the palette. To apply palette to all series we have to set "palette" attribute in <data> node. Here it is:

Live Sample:  Sample Candlestick chart - Setting Palette to all series

When you have one series only, sometimes it is useful to color each point in series. You can do it by setting color of each point individually or you can apply a palette. For sure the second method is easier and more useful. To apply palette to the exact series you should set "palette" attribute for exact <series> node.

Live Sample:  Sample Candlestick chart - Working with palettes - Setting Palettes to the certain series

In the samples above we have shown usage of predefined palettes only, but AnyChart allows to create your own custom palettes. To learn more about it read Palettes tutorial.

Advanced Candlestick Chart sample - Japanese Candlestick, Line and Range Area Combination

In the real world application Candlestick rarely used alone, in technical analysis they are often combined with other chart types, such as Lines (to show moving average), Range Areas (to show "Bollinger bands"), and column charts (to show trading volume).

AnyChart provides most of features that developer needs to create a complex financial chart, this includes Combination charts, Dashboards and Interactivity features. The sample below shows a typical stock trading report and it can be used as a starting point in your integration of AnyChart into Financial/Trading/Reporting application.

 

Live Sample:  Sample Candlestick chart - Advanced usage - Candlestick Area Line Combination Report Dashboard

 

to top

Current Page Online URL: Japanese Candlestick Chart