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

{sample}CS\_Auto\_Color\_02{sample}

## High Low

*Coming soon.*

## Rising Falling

*Coming soon.*

## Bubble

*Coming soon.*

## Color Scale

*Coming soon.*

## Manual

*Coming soon.*