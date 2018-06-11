{:index 1}

# AnyStock Series Overview

## Overview

AnyStock supports a lot of [different series types](Supported_Series), some of them compatible to be [switched during run time](Series_Type).

Here's a sample where we put three of them. 

```
// set the plots
var plot_line_ohlc = chart.plot(0);
var plot_column = chart.plot(1);

// create the column series
var rates = plot_column.column(mapping);
rates.name("Highest rate");

// create ohlc series
var prices = plot_line_ohlc.ohlc(ohlcMapping);
var pricesName = prices.name("ACME Corp.");

// create line series
var requests = plot_line_ohlc.line(lineMapping);
requests.name("Requests");
```

{sample}STOCK\_Series\_01{sample}

You can see that the whole chart is divided in parts, where one contains OHLC and Line series and the second one has column in it, both parts have identical X Axis and are scrolled simultaneously. This parts we call **plots**, you can read about them [Chart Plots](../Chart_Plots) article. 

### Adjustment

You can adjust the colors of the series, adjust the tooltips, etc. Let's now create a sample with adjusted colors.

```
// set the filling color for the rates series
rates.fill('#00838F');

// set stroke for the requests series
requests.stroke("#00796B");
```

{sample}STOCK\_Series\_02{sample}

### Scroller Series

Adding a background series of a column type to the scroll bar background and adjusting its "selected" state colors:

```
// create a thumbnail series in the scroller
var thSeries = chart.scroller().column(lineMapping);

// set the part of a chart to be selected
chart.selectRange('2014-02-01','2014-05-06');
    
// set the color for the selected columns in the thumbnail series
thSeries.selected().fill("#00796B");
```

{sample}STOCK\_Series\_03{sample}

### Individual Settings

By default stock series doesn't allow settings to be applied to individual points, all points have the same settings for the sake of performance. You can either allow all series to be able to have individual as described in [Data](../Data#individual_point_settings) tutorial or use the {api:?entry=allowPointSettings}allowPointSettings(){api} method to allow any particular series to color points differently.

## List of supported series

AnyStock supports series of different types, like Line Series, OHLC, Marker and many other - find them all in the [Supported Series list](Supported_Series). Compatible series types can be [switched during run time](Series_Type).