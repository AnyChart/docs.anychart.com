# Heikin-Ashi

## Overview

Heikin-Ashi Candlesticks are an offshoot from Japanese candlesticks. Heikin-Ashi Candlesticks use the open-close data from the prior period and the open-high-low-close data from the current period to create a combo candlestick. The resulting candlestick filters out some noise in an effort to better capture the trend. In Japanese, Heikin means “average” and ashi means “pace” (EUDict.com). Taken together, Heikin-Ashi represents the average pace of prices. Heikin-Ashi Candlesticks are used to identify trending periods, potential reversal points and classic technical analysis patterns.

## Adding indicator

Heikin-Ashi indicator is added using {api:anychart.core.stock.Plot#ha}ha(){api} method. It requires a mapping with four fields: `"open"`, `"high"`, `"low"`, and `"close"`.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create a Heikin-Ashi indicator
var ha = plot_1.ha(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_HA\_1{sample}

## Indicator parameters

There are two parameters a Heikin-Ashi indicator has, one of them is necessary – the mapping. The second parameter sets the series type. The following code sample demonstrates a Heikin-Ashi indicator with parameters set as default:

```
var ha = plot.ha(mapping, "candlestick");
```

The series type can be easily changed any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Heikin-Ashi indicators with different parameters and settings are added to different plots:

```
// create and adjust a Heikin-Ashi indicator
var ha_1 = plot_1.ha(mapping).series();
ha_1.risingFill("#33ccff");
ha_1.fallingFill("#ff33cc");
ha_1.risingStroke(null);
ha_1.fallingStroke(null);

// create and adjust a Heikin-Ashi indicator
var ha_2 = plot_2.ha(mapping, "ohlc").series();
ha_2.risingStroke("#37474f");
ha_2.fallingStroke("#90a4ae");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_HA\_2{sample}