{:index 1}

# AnyStock Series Overview

## Overview

AnyStock supports a lot of different [series types](Supported_Series). Some of them share some or all data fields and can be [switched during the run time](Series_Type).

Series are created within [chart plots](../Chart_Plots) by using either the {api:anychart.core.stock.Plot#addSeries}addSeries(){api} method or specific series constructors, such as {api:anychart.core.stock.Plot#line}line(){api}, {api:anychart.core.stock.Plot#column}column(){api}, and so on. Except for a few minor differences, settings of AnyStock series are similar to that of basic charts – see [Basic Charts: General Settings](../../Basic_Charts/General_Settings).

## Basic Sample

Here's a basic sample with three different series on two plots: 

```
// map the data
var mapping1 = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close":4});
var mapping2 = dataTable.mapAs({"high": 2, "low": 3});    
var mapping3 = dataTable.mapAs({"value": 4});

// create an ohlc series
var series1 = chart.plot(0).candlestick(mapping1);
series1.name("OHLC");

// create a range area series
var series2 = chart.plot(1).rangeArea(mapping2);
series2.name("Range Area");

// create a line series
var series3 = chart.plot(1).line(mapping3);
series3.name("Line");
```

{sample}STOCK\_Series\_01{sample}

## Adjustment

You can adjust tooltips, the colors of series, etc.:

```
// create an ohlc series
var series1 = chart.plot(0).candlestick(mapping1);
series1.name("Price");
series1.fallingFill("Black").fallingStroke("Black");
series1.risingFill("White").risingStroke("Black");

// create a range area series
var series2 = chart.plot(1).rangeArea(mapping2);
series2.name("Range Area");
series2.fill("Red 0.1");
series2.highStroke(null).lowStroke(null);

// create a line series
var series3 = chart.plot(1).line(mapping3);
series3.name("Line");
series3.stroke("#aeb404", 1, "10 5", "round");
```

{sample}STOCK\_Series\_02{sample}

### States

AnyStock series cannot be selected and have only the normal and hover states. You can specify how series look when legend item is hovered and enable markers:

```
// create a line series
var series1 = chart.plot(0).line(mapping1);
series1.name("Close");

// configure the series in the hover state
series1.hovered().stroke("#aeb404", 1, "10 5", "round");
series1.hovered().markers(true);
series1.hovered().markers().type("star5");
```

{sample}STOCK\_Series\_03{sample}

## Scroller Series

You can add a background series of any type to the scrollbar and adjust its colors in the selected state:

```
// create a thumbnail series in the scroller
var scrollerSeries = chart.scroller().column(mapping2);

// set the color for the selected columns in the scroller series
scrollerSeries.selected().fill("#00796B");
```

{sample}STOCK\_Series\_04{sample}

## Individual Settings

By default stock series do not allow settings to be applied to individual points – all points have the same settings for the sake of performance. You can allow configuring individual points for all series as described in the [Data](../Data#individual_point_settings) tutorial. Also, you can use the {api:?entry=allowPointSettings}allowPointSettings(){api} method to enable this option for a particular series.

## Supported Series

AnyStock supports series of different types, such as Line, OHLC, Marker, and many others. You can find them all in the [Supported Series](Supported_Series) list. Series types that share some or all data fields can be [switched during the run time](Series_Type).