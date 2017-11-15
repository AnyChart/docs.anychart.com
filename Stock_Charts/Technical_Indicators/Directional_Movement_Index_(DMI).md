# Directional Movement Index (DMI)

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)

## Overview

Developed by Marc Chaikin, the DMI measures the momentum of the Accumulation Distribution Line using the MACD formula. This makes it an indicator of an indicator. The DMI is the difference between the 3-day EMA of the Accumulation Distribution Line and the 10-day EMA of the Accumulation Distribution Line. Like other momentum indicators, this indicator is designed to anticipate directional changes in the Accumulation Distribution Line by measuring the momentum behind the movements. A momentum change is the first step to a trend change. Anticipating trend changes in the Accumulation Distribution Line can help chartists anticipate trend changes in the underlying security. The Chaikin Oscillator generates signals with crosses above/below the zero line or with bullish/bearish divergences.

Find the mathematical description of the indicator on the [DMI Mathematical Description](Mathematical_Description#directional_movement_indicator) page.

## Adding indicator

DMI indicator is added through the {api:anychart.core.stock.Plot#dmi}dmi(){api} method. It requires a mapping with four fields: "high", "low", "close" and "volume". The following sample demonstrates the DMI indicator applied to a spline series which data values are equal to "close" values.

The indicator values differ too much from the series values, so it is reasonable to build the indicator on a separate plot.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// create stock chart
chart = anychart.stock();

// create plots on the chart
var plot_0 = chart.plot(0);
var plot_1 = chart.plot(1);

// create line series on both of them
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name("CSCO OHLC");
ohlcSeries.stroke("2px #64b5f6");

// create a DMI indicator of column series
var dmi = plot_1.dmi(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_DMI\_01{sample}

## Indicator parameters

DMI indicator needs seven parameters: mapping with value field in it (required), two periods: period and a period for ADX, a smoothing mode for whilders ad three series types (for +DI, -DI and ADX series of the indicator). The following code sample demonstrates a DMI indicator with all parameters set as default.

```
var dmi = plot.dmi(mapping, 14, 14, "true, "line", "line", "line");
```

## Visualization

Visualization of an indicator depends on series type. It is possible to change some settings for separate series through the special methdos: {api:anychart.core.stock.indicators.DMI#adxSeries}adxSeries(){api}, {api:anychart.core.stock.indicators.DMI#ndiSeries}ndiSeries(){api} and {api:anychart.core.stock.indicators.DMI#pdiSeries}pdiSeries(){api}. Here is a sample where DMI with different parameters and settings is added to different plots:

```
// create a DMI indicator with default parameters
var dmi1 = plot_1.dmi(mapping);

// create a DMI indicator with parameters adjusted
var dmi2 = plot_2.dmi(mapping, 30, 30, "false", "spline", "spline", "spline");
dmi2.adxSeries().stroke("red");
dmi2.ndiSeries().stroke("navy");
dmi2.pdiSeries().stroke("green");
```

{sample}STOCK\_Technical\_Indicators\_DMI\_02{sample}
