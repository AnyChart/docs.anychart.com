# Heikin-Ashi

## Overview

## Adding indicator

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

## Visualization

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