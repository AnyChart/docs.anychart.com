# Price Oscillator indicator (PPO)
## Overview

The Price Oscillator indicator (PPO) is a technical analysis tool, used for measuring momentum that is very similar to the MACD. The [MACD](Moving_Average_Convergence_Divergence_\(MACD\)) employs two Moving Averages of varying lengths (which are lagging indicators) to identify trend direction and duration. Then, MACD takes the difference in values between those two Moving Averages (MACD Line) and an [EMA](Exponential_Moving_Average_\(EMA\)) of those Moving Averages (Signal Line) and plots that difference between the two lines as a histogram which oscillates above and below a center Zero Line.

PPO is exactly the same, however it then takes the same values at the MACD and calculates them as a percentage. The purpose of this, is that it makes value comparisons much more simple and straightforward over longer durations of time.

Mathematical description of the indicator: [Price Oscillator Mathematical Description](Mathematical_Description#price_oscillator).

## Adding Indicator

The PPO indicator is added using the {api:anychart.core.stock.Plot#ppo}ppo(){api} method. It requires a mapping with one field: `"value"` (or `"close"`). This indicator is usually displayed on a separate plot.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create a stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create an ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name('CSCO');

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create a PPO indicator
var ppo = plot_1.ppo(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_PPO\_1{sample}

## Indicator parameters

There are seven parameters the PPO indicator has, one of them is necessary - the mapping.

Then you can set the long period, the short period, the smoothing period, and series types - for the PPO series, signal series, and histogram series.

The following code sample demonstrates a PPO indicator with parameters set as default:

```
var ppo = plot.ppo(mapping, 12, 26, 9, "line", "line", "column");
```

## Visualization

Vizualization of an indicator depends on the type of series you display it with. Here is a sample where Price Oscillator indicators with different parameters and settings are added to different plots:

```
// create and adjust an PPO indicator
var ppo_1 = plot_1.ppo(mapping);

// create and adjust an PPO indicator
var ppo_2 = plot_2.ppo(mapping);
ppo_2.ppoSeries().stroke("0.5 gray");
ppo_2.signalSeries().stroke("0.5 lightGray");
ppo_2.histogramSeries().type("line");
```

Live sample:

{sample :height 800}STOCK\_Technical\_Indicators\_PPO\_2{sample}