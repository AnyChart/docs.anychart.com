{:index 1}

# AnyStock Series Overview

## Overview

AnyStock supports a lot of [different series types](Supported_Series), some of these series types are compatible and can be [switched during run time](Series_Type).

AnyStock series are created within [chart plots](Stock_Charts/Chart_Plots) using either specific series constructors like {api:anychart.core.stock.Plot#line}line(){api} or {api:anychart.core.stock.Plot#column}column(){api}, and using {api:anychart.core.stock.Plot#addSeries}addSeries(){api} method/

Configuring series in AnyStock is similar to [Basic Series Settings](Basic_Charts/General_Settings) with few minor differences.

## Basic Sample

Here's a basic sample with three different series on two plots: 

```
// create mapping objects
var mapping1 = dataTable.mapAs({'open': 1, 'high': 2, 'low': 3, 'close':4});
var mapping2 = dataTable.mapAs({'high': 2, 'low': 3});    
var mapping3 = dataTable.mapAs({'value': 4});

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

You can adjust the colors of the series, adjust the tooltips, etc. 

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

AnyStock series can't be selected and have only normal and hovered states, you can define how series look when legend item is hovered and turn on markers:

```
// create an and configure hovered state of a line series
var series1 = chart.plot(0).line(mapping1);
series1.name("Close");
series1.hovered().stroke("#aeb404", 1, "10 5", "round");
series1.hovered().markers(true);
series1.hovered().markers().type("star5");
```

{sample}STOCK\_Series\_03{sample}

## Scroller Series

You can add a background series of any type to the scrollbar and adjust its "selected" state colors:

```
// create the thumbnail series in the scroller
var scrollerSeries = chart.scroller().column(mapping2);

// set the color for the selected columns in the scroller series
scrollerSeries.selected().fill("#00796B");
```

{sample}STOCK\_Series\_04{sample}

## Individual Settings

By default stock series doesn't allow settings to be applied to individual points, all points have the same settings for the sake of performance. You can either allow all series to be able to have individual as described in [Data](../Data#individual_point_settings) tutorial or use the {api:?entry=allowPointSettings}allowPointSettings(){api} method to allow any particular series to color points differently.

## List of supported series

AnyStock supports series of different types, like Line Series, OHLC, Marker and many other - find them all in the [Supported Series list](Supported_Series). Compatible series types can be [switched during run time](Series_Type).