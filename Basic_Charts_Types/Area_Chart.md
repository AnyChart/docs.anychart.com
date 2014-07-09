#Area Chart

* [Overview](#overview)
* [Chart Building](#how_to_create_chart)
  * [Single-Series Area chart](#single_series)
  * [Single-Series Spline Area chart](#single_series_spline)
  * [Multi-Series Area chart](#multi_categorized)
  * [Multi-Series Area chart grouped by series](#milti_by_series)
* [Axes management](#Axes)
  * [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum values control](#min_max)
* [Using styles](#using_style)
  * [Simple style sample](#simple_style)
  * [Application of different  an image as a chart color](#image_styles)
* [Working with data labels and tooltips](#working_with_labels_and_tooltips)
* [Using markers](#using_markers)
* [Working with colors and color palettes](#colors)
* [Working with hatch fills and hatch palettes](#hatches)
  * [Setting hatch fills to the elements](#hatch_setting)
  * [Hatch palettes](#hatch_palettes)

## [Overview](id:overview)
Data that is arranged in columns or rows on a worksheet can be plotted in an area chart. Area charts emphasize the magnitude of change over time, and can be used to draw attention to the total value across a trend. For example, data that represents profit over time can be plotted in an area chart to emphasize the total profit.

## [Chart Building](id:how_to_create_chart)

Depending on data model and the visualization purpose the area chart may contain single series or multi series.

### [Single-Series Line Area Chart](id:single_series)

Let's see single-series area chart created using the following data - sales of ACME Corp. through several monthes in one year:

Month	|Sales
----- |:-----
January	| $10000
February	| $12000
March	| $18000
April	| $11000 
May	| $9000

Now we need to convert this data table into JSON, this format will be accepted by AnyChart.
In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. Converted JSON Data looks like:

```
 new anychart.data.Set([
      ['January', 10000],
      ['February', 12000],
      ['March', 18000],
      ['April', 11000],
      ['May', 9000]
 ]);
  chart = anychart.areaChart(data);
 chart.area(data);
```
As you can see, we've created Data Sets. Every object is a point, which has some attributes.
This instance sets first column attribute as category and second column attribute as value.

Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on it to see Live Chart preview and full configured JSON.

{sample}BCT_AreaChart_1{sample}

## [Single-Series Spline Area Chart](id:single_special_spline)

For better look and feel of your charts you can use SplineArea chart type:

```
 new anychart.data.Set([
   {name: 'January', y: 10000},
   {name: 'February', y: 12000},
   {name: 'March', y: 18000},
   {name: 'April', y: 11000},
   {name: 'May', y: 9000}
 ]);
 chart = anychart.areaChart(data);
 chart.splineArea(data);
```
Here is the same chart as shown above, but in Spline mode:

{sample}BCT_AreaChart_2{sample}

## [Multi-Series area chart](id:multi_categorized)

To compare two or more data sets you have to use multi-series area charts as it shown in the sample below.

Let's compare 2003 sales to 2004 sales:

Month	|2003 Sales	|2004 Sales
--------|:----------|:---------
January	|$10000	|$12000
February	 |$12000	 |$15000
March	 |$18000	 |$16000
April	 |$11000	 |$15000
May	 |$9000	 |$14000
As we do in single series area sample above we need to convert this table into XML, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

```
  var dataSet = new anychart.data.Set([
    ['January', '10000', '12000'],
    ['February', '12000', '15000'],
    ['March', '18000', '16000'],
    ['April', '11000', '15000'],
    ['May', '9000', '14000'],
  ]);
  var Sales2003data = dataSet.mapAs({x: [0], value: [2]});
  var Sales2004data = dataSet.mapAs({x: [0], value: [1]});
```
As we now have multi-series chart we don't want to set **type** for each series individually (there can be much more than two series in multi-series chart), so we add **<data_plot_settings default_series_type="Area"/>** node to **<chart>**. Now all series in chart will be of Area type by default.

{sample}BCT_AreaChart_3{sample}

## [Multi-Series Area Chart grouped by series](id:milti_by_series)

Sometimes it is useful to visualize comparison in a different way - group values be series. In our sample it means that we want to compare sales in each year, not each sales in different monthes. You don't have to reformat your data to do this - all you need to do is to switch plot_type attribute to "CategorizedBySeriesVertical". Look at the resulting chart below:

Live Sample:  Sample Multi-Series Categorized By Series Area Chart

# [Axes management](id:Axes)

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Working with Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

## [Positioning](id:position)

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position with `orientation()` method of **yAxis** or **xAxis** instances.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning and Inverting Templates.

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```
And here is the demonstration of this feature on the Single-series sample:

{sample}BCT_AreaChart_5{sample}

## [Inversion](id:inversion)

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **<scale>**:

```
  chart.yScale().inverted(true);
```
And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT_AreaChart_6{sample}

## [Minimum and Maximum values control](id:min_max)

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 8.000, and maximum is 20.000. You can control these values by setting **maximum** and **minimum** attributes of **<scale>** node:

```
chart.yScale().minimum('0').maximum('50000');
```
And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT_AreaChart_7{sample}

# [Using styles](id:using_style)

In this section we will describe main parts of area chart style and demonstrate how style can be created and applied. Also you will see list of predefined styles.

The main idea of styles is to segregate visualization and data definition. Visual appearance of areas is defined using certain styles and then you just apply the style to the certain data elements. Style can be applied to data series, data category or single data point.

Area chart style can be configured in **<area_style>** and **<area_series>** nodes. On the image below you can see what area_style consists of: fill (including solid color fill, hatch fill, image fill and gradient fill), area line and effects applied to whole area.

![](http://www.anychart.com/products/anychart/docs/users-guide/img/area_styles_diagram.jpg)

Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc. More information about these features can be found in Interactivity tutorial.

## [Simple style](id:simple_style)

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an JSON structure:

```
chart.area(data)
  .fill('Gold')
  .stroke('#56561a', 4, 0.4)
  .hatchFill('diagonalbrick', 'gray')
  .hoverHatchFill('diagonalbrick', 'darkred');
```
Using such settings we've created a style that defines area of Gold color, rather thick area line, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it's hatch will be highlighted with a DarkRed.

Now we will take a sample single series chart described above, define style in JSON and apply it to all chart elements

{sample}BCT_AreaChart_8{sample}

## [Application of different  an image as a chart color](id:image_styles)

Color is not the only way to disign a chart. In this instance we will demonstrate how to use picture as a common color alternative.  
```
    chart.area(data).fill({
            src: 'http://static.anychart.com/kitty.png',
            mode: acgraph.vector.ImageFillMode.TILE
        })
```
{sample}BCT_AreaChart_9{sample}

# [Working with data labels and tooltips](id:working_with_labels_and_tooltips)

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in **.labels** and **.tooltip** methods. You can tune their visual appearance, positioning and format. 

When formatting data labels text we will use **.textFormatter** to show month name. Otherwise sales will be displayed here. 

```
    var series= chart.bar(data);
    series.labels().enabled(true).rotation(90).textFormatter(function(point){
        return point.x;
    });
    series.tooltip().enabled(true).title().enabled(true).text('Your Tooltip Title');
```
{sample}BCT_AreaChart_11{sample}

# [Using markers](id:using_markers)

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including areas.

In the sample below we will take single-series data described above and mark the highest point in series with a **"Star"** of the **"Gold"** color.

To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 16 pixels in normal state, and make it bigger (12 pixels) when user moves cursor over an element.

Marker style "myMarker":

```
chart.marker('March, 18000').type('star').size(12).fill('Gold');
```

And here is a result - March is the most successful month and we are showing this on the chart:

{sample}BCT_AreaChart_10{sample}

Related help topics:

Full reference of marker style can be found in XML Reference, particularly <area_series><marker_settings> and <marker_style> method.

# [Working with colors and color palettes](id:colors)

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

# [Working with hatch fills and hatch palettes](id:hatches)

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. To see whole range of available hatch types see Hatch tutorial.

## [Setting hatch fills to the elements](id:hatch_setting)

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting **hatch_type** for **".hatchFill"** method.
```
  chart.splineArea(seriesData_1).hatchFill('horizontalbrick');
  chart.splineArea(seriesData_2).hatchFill('zigzag');
```
{sample}BCT_AreaChart_10{sample}

List of posible Hatch Types
```
backwarddiagonal	
forwarddiagonal	
horizontal
vertical
dashedbackwarddiagonal	
grid
dashedFORWARD_DIAGONAL	
DASHED_HORIZONTAL	
DASHED_VERTICAL	
DIAGONAL_CROSS	
DIAGONAL_BRICK	
DIVOT	
HORIZONTAL_BRICK	
VERTICAL_BRICK	
CHECKER_BOARD	
CONFETTI	
PLAID	
SOLID_DIAMOND	
ZIG_ZAG	
WEAVE	
PERCENT_05	
PERCENT_10	
PERCENT_20	
PERCENT_25	
PERCENT_30	
PERCENT_40	
PERCENT_50	
PERCENT_60	
PERCENT_70	
PERCENT_75	
PERCENT_80	
PERCENT_90
```

## [Hatch palettes](id:hatch_palettes)

When you have a lot of points or series it is very useful to use hatch palettes. Methods of working with hatch palette is very similar to color palette. You can apply hatch palette to all series or to exact series. In the first case each next series will take each next hatch type from palette. If the number of hatch types in palette is less than number of series - palette will be looped. If you have only one series each point will take the first hatch type from the palette. To apply palette to all series we have to set **"hatch_palette"** attribute in **<data>** node. Here it is:

Live Sample:  Sample Area chart - Setting hatch fills to the series

When you have one series only you can can apply hatch palette to this series. To do it you should set **"hatch_palette"** attribute for *8<series>** node. See the sample below:

```
  chart.splineArea(seriesData_1).hatchFill('soliddiamond');
  chart.splineArea(seriesData_2).hatchFill('forwarddiagonal');
  splineArea.hatchFill('backwarddiagonal');
```
{sample}BCT_AreaChart_12{sample}



In the samples above we have shown usage of predefined hatch palettes only, but AnyChart allows to create your own custom hatch palettes. To learn more about it read Hatch and hatch palettes.

Current Page Online URL: Area Chart
