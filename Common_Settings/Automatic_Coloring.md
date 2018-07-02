# Automatic Coloring

## Overview

AnyChart provide a lot of ways to color series and points. This article is dedicated to automatic ways to handle some specific cases for different chart and series type.

## Negative Positive Threshold

Coloring negative and positive parts of the chart in AnyChart can be easily done using  {api:anychart.core.StateSettings#negativeStroke}negativeStroke(){api}, {api:anychart.core.StateSettings#negativeFill}negativeFill(){api}, and {api:anychart.core.StateSettings#negativeHatchFill}negativeHatchFill(){api} methods.

For example, for line series you can define basic and negative stroke:

```
var chart = anychart.line();

// create line series
line = chart.line(data.mapAs({x: 0, value: 1}));
// set positive and negative stroke settings
line.stroke("#3ba158", 2, "2 2");
line.negativeStroke("2 #fa6b71");
```

In the next sample you can find area and line series with custom negative and positive colors:

{sample}CS\_Auto\_Color\_01{sample}

### Baseline

You can customize the thresholds where positive turns to negative using the {api:anychart.core.stock.Plot#baseline}baseline(){api} method. In the following sample baseline is set to custom value from the start and you can use slider to change it on-the-fly.

Notice that we are dealing with [AnyStock](../Stock_Charts/Overview) here and everything works just the same way.

{sample}CS\_Auto\_Color\_02{sample}

## Rising Falling

You can configure Rising and Falling colors for easier tracking the trend chart follows, it is done using {api:anychart.core.StateSettings#risingStroke}risingStroke(){api}, {api:anychart.core.StateSettings#risingFill}risingFill(){api}, {api:anychart.core.StateSettings#risingHatchFill}risingHatchFill(){api}, {api:anychart.core.StateSettings#fallingStroke}fallingStroke(){api}, {api:anychart.core.StateSettings#fallingFill}fallingFill(){api}, and {api:anychart.core.StateSettings#fallingHatchFill}fallingHatchFill(){api} methods.

These methods can be applied to [OHLC](../Basic_Charts/OHLC_Chart), [Candlestick](../Basic_Charts/Japanese_Candlestick_Chart), as well as [Lines](../Basic_Charts/Line_Chart), [Splines](../Basic_Charts/Spline_Chart), and others, even [Columns](../Basic_Charts/Column_Chart) or [Stick](../Basic_Charts/Stick_Chart).

Take a look at the sample and change the series type to see how it works:

{sample}CS\_Auto\_Color\_03{sample}

## Bubble

*Coming soon.*

## Color Scale

*Coming soon.*

## Manual

*Coming soon.*