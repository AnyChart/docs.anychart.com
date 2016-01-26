#Supported Series in Stocks

* [Overview](#overview)
 * [AnyStock Series Adjusting](#anystock_series_adjusting)
 * [AnyStock Scroller Series Adjusting](#anystock_scroller_series_adjusting)
* [List of Supported Series](#list_of_supported_series)


## Overview

AnyStock supports a lot of different series types. Here's a sample where we have put three of them. 

```
    // create the column series
    var columnSeries = plot_column.column(mapping);
    columnSeries.name("Highest rates");

	// create ohlc series
    var ohlcSeries = plot_line_ohlc.ohlc(ohlcMapping);
    ohlcSeries.name("ACME Corp. Stock Prices");

	// create line series
    var lineSeries = plot_line_ohlc.line(lineMapping);
    lineSeries.yScale(extraYScale);
    lineSeries.name("Number of income requests worldwide");
```
{sample}STOCK\_Supported\_Series\_01{sample}

You can see that the whole chart is somewhat divided in two parts, where one contains ohlc and line series and the second one has column in it, while both parts have identical x-Axis and are being scrolled simultaneously. This can be done using plots. You can read about them [here](Chart_Plots). Also one of our plots has two axes. You can find information about managing axes [here](../Axes_and_Grids/Axis_Basics).

### AnyStock Series Adjusting


Series in AnyStock chart are much alike normal series of Basic charts, except for having "hovered" and "selected" state. So we can adjust the colors of the series in normal state, adjust the tooltips, etc. Let's now create a sample with adjusted colors and tooltips.

```
    // create column series
    var firstSeries = firstPlot.column(mapping);
    firstSeries.name("Highest rates");

    // create ohlc series on the second plot
    var secondSeries = secondPlot.ohlc(ohlcMapping);
    // set width for columns in percent
    secondSeries.pointWidth('50%');
    secondSeries.name("ACME Corp. Stock Prices");

    // create column series on the third plot
    var thirdSeries = thirdPlot.column(columnMapping);
    thirdSeries.name("Lowest rates");
    //set gradient fill for the series
    thirdSeries.fill(['#dd2c00', "#ffd54f", "#ef6c00"], 0, true, 0.8);
	
```
{sample}STOCK\_Supported\_Series\_02{sample}


### AnyStock Scroller Series Adjusting

In case of adding the thumbnail series to the scroller, you should know that those series have the "selected" state. Let's add a background series of a column type to the scroll bar background and adjust its "selected" state colors.

```
    // create a thumbnail series in the scroller
    var thSeries = chart.scroller().column(lineMapping);

    // define the shown part of a chart 
    chart.selectRange('2014-02-01','2014-05-06');
        
    // set the color for the selected columns in the thumbnail series
    thSeries.selectedFill("#4527A0");
```

{sample}STOCK\_Supported\_Series\_03{sample}


## List of supported series

<table width="750" border="1" class="dtTABLE">
<tbody><tr>
<th width="350"><b>Series Type</b></th>
<th width="350"><b>Links and info</b></th>
</tr>
<tr>
<td>Line</td>
<td></td>
</tr>
<tr>
<td>Column</td>
<td></td>
</tr>
<tr>
<td>OHLC</td>
<td></td>
</tr>
</tbody></table>


