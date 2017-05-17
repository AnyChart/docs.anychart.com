# Chaikin Volatility	

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Visualization](#visualization)

## Overview

Chaikin's volatility indicator calculates the spread between the maximum and minimum prices. It judges the value of volatility basing on the amplitude between the maximum and the minimum. Unlike Average True Range, Chaikin's indicator doesn't take gaps into account.

According to Chaikin's interpretation, a growth of volume indicator in a relatively short space of time means that the prices approach their minimum (like when the securities are sold in panic), while a decrease of volatility in a longer period of time indicates that the prices are on the peak (for example, in the conditions of a mature bull market).

AnyChart Stock allows you to add Chaikin Volatility with desired period to any of your charts.

Find the mathematical description of the indicator on the [Chaikin Volatility Mathematical Description](Mathematical_Description#chaikin_volatility) page.


## Adding indicator

Chaikin Volatility indicator is added through the {api:anychart.core.stock.Plot#chv}chv(){api} method. It requires a mapping with four fields: "high", "low", "close" and "volume". The following sample demonstrates the Chaikin Volatility indicator applied to a spline series which data values are equal to "close" values.

```

```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_ChV\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where Chaikin Volatililty with different parameters and settings is added to different plots:

```

```

{sample}STOCK\_Technical\_Indicators\_ChV\_02{sample}
