#Supported Series in Stocks

* [Overview](#overview)
 * [Stock series adjusting](#stock_series_adjusting)
 * [Stock scroller series adjusting](#stock_scroller_series_adjusting)
* [List of supported series](#list_of_supported_series)


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

You can see that the whole stock is somewhat divided in two parts, where one contains ohlc and line series and the second one has column in it, while both parts have identical x-Axis and are being scrolled simultaneously. This can be done using plots. You can read about them [here](#Chart_Plots). Also one of our plots has two axes. You can find information about managing axes [here](../Axes_and_Grids/Axes).

### Stock series adjusting

Stock series are much alike normal series of Basic charts, except for having "hovered" and "selected" state. So we can adjust the colors of the series in normal state, adjust the tooltips, etc. Let's now create a sample with adjusted colors and tooltips.

```
		
```
{sample}STOCK\_Supported\_Series\_02{sample}


### Stock scroller series adjusting

In case of adding the thumbnail series to the scroller, you should know that those series have the "selected" state. Let's add a background series of column type to the scroll bar background and adjust its "selected" state colors.

```
```


серии настраиваются также как и серии в anychart, например вот так мы меняем их цвета

ПРИМЕР С ПЕРЕКРАШЕНЫМ БАРОМ И ЛИНИИЕЙ У КОТОРОЙ НАСТРОЕН ИНДИВИДУАЛЬНО ТУЛТИП

{sample}STOCK\_Supported\_Series\_03{sample}


## List of supported series

We now support the following series:
 - Line
 - OHLC
 - Column



