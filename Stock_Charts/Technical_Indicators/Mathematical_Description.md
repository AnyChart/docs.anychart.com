{:index 3}

#Technical Indicators Mathematical Decsription

* [Overview](#overview)
* [Accumulation Distribution Line (ADL)](#)
* [Adaptive Moving Average (AMA)](#adaptive_moving_average)
* [Aroon](#aroon)
* [Average True Range (ATR)](#average_true_range)
* [Bollinger Bands (BBands)](#bollinger_bands)
* [Bollinger Bands %B](#bollinger&#95;bands&#95;%b)
* [Bollinger Bands Width (BBW)](#bollinger_bands_width)
* [Commodity Channel Index (CCI)](#)
* [Chaikin Money Flow (CMF)](#)
* [Chaikin Oscillator (CHO)](#)
* [Chaikin Volatility (CHV)](#)
* [Directional Movement Indicator (DMI)](#)
* [Exponential Moving Average (EMA)](#exponential\_moving\_average)
* [KDJ](#kdj)
* [Keltner Channels](#)
* [Modified (Smoothed) Moving Average (MMA)](#modified_moving_average)
* [Money Flow Index (MFI)](#)
* [Momentum](#)
* [Moving Average Convergence Divergence (MACD)](#moving_average_convergence_divergence)
* [Moving Average Envelopes (MA Envelopes)](#)
* [On Balance Volume (OBV)](#)
* [Parabolic SAR (PSAR)](#)
* [Price Channels](#)
* [Rate of Change (ROC)](#rate_of_change)
* [Relative Strength Index (RSI)](#relative_strength_index)
* [Simple Moving Average (SMA)](#simple_moving_average)
* [Stochastic Oscillator (Fast, Slow)](#stochastic_oscillator)
* [TRIX](#)
* [Volume + MA](#)
* [Williams %R](#)

## Overview

This document contains mathematical description of all technical indicators available in AnyChart Stock Component.

For all formulas and indicators below:
<ul>
	<li><strong>n</strong> is a period for which calculations are done, it is usually set by the <strong>period</strong> parameter of the 
	method that creates an indicator.</li>
	<li><strong>X<sub>i</sub></strong> is the value passed by the data source.</li>
</ul>

## Accumulation Distribution Line

Coming soon.

## Adaptive Moving Average

Each point of the [Adaptive Moving Average](Adaptive\_Moving\_Average\_(AMA)) indicator is calculated by the following steps:

1. Calculate the ER:
<center><img src="https://static.anychart.com/images/technical\_indicators/ama\_er.png" width="343"></center>
2. Then, use the following formula to calculate the SSC value:
<center><img src="https://static.anychart.com/images/technical\_indicators/ama\_ssc.png" width="650"></center>
3. Now, use the results from the actions made before and calcuate the indicator:
<center><img src="https://static.anychart.com/images/technical\_indicators/ama\_ama.png" width="391"></center>

## Aroon

[Aroon](Aroon) indicator is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/aroon.png" width="650"></center>

## Average True Range

[Average True Range](Average\_True\_Range\_(ATR\)) in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/atr.png" width="550"></center>

This formula is based on the True Range definition. ATR is defined as the greatest of the following:

- current High less than current Low;
- current High less than previous Close (absolute value)
- current Low less than previous Close (absolute value)

## Bollinger Bands

[Bollinger Bands](Bollinger_Bands) indicator is calculated in three steps:

1. Calculate the SMA according to the SMA formula.

2. Use the next formula to calculate the standard deviation:

<center><img src="https://static.anychart.com/images/technical_indicators/bbands-standart-deviation.png" width="300"></center>

3. Bollinger Bands values are calculated according to this formula, where "d" is set using deviation attribute in <bbands_indicator> node:

<center><img src="https://static.anychart.com/images/technical_indicators/bbands.png" width="225"></center>

## Bollinger Bands %B

The [Bollinger Bands %B](Bollinger_Bands_%25B) indicator is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical_indicators/bbandsb.png" width="650"></center>

## Bollinger Bands Width

The [Bollinger Bands Width article](Bollinger_Bands_Width) indicator is calculated according to the following formula:

```
bandwidth = (upperBB − lowerBB) / middleBB
```

Coming soon.

## Commodity Channel Index (CCI)

Coming soon.

## Chaikin Money Flow (CMF)

Coming soon.

## Chaikin Oscillator (CHO)

Coming soon.

## Chaikin Volatility (CHV)

Coming soon.

## Directional Movement Indicator (DMI)

Coming soon.

## Exponential Moving Average

[Exponential Moving Average](Exponential\_Moving\_Average\_(EMA)) in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/ema.png" width="500"></center>

## KDJ

[KDJ](KDJ) is calculated quite alike [Stochastic](#stochastic_oscillator) indicator, but the difference is in having a J line, which Stochastic does not have.

<ol>
	<li>The %K line is calculated the following way:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/kdj1.png"></center>
	<li>To create the %D line, use the next formula:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/kdj2.png"></center>
	<li>This is how the %J line is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/kdj3.png"></center>
</ol>

## Keltner Channels

Coming soon.

## Modified Moving Average

[Modified Moving Average](Modified\_Moving\_Average\_(MMA)) indicator points are calculated by the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/mma.png" width="400"></center>

## Money Flow Index

Coming soon.

## Momentum

Coming soon.

## Moving Average Convergence Divergence

[Moving Average Convergence Divergence](Moving\_Average\_Convergence\_Divergence\_\(MACD\)) indicator is calculated as follows:

<ol>
	<li>EMA\[slow period\]<sub>i</sub> and EMA\[fast period\]<sub>i</sub> is calculated by [EMA formula](#exponential_moving_average)</a>. Slow period 
	and fast period are set by <strong>slowPeriod</strong> (default 26) and <strong>fastPeriod</strong> (default 12) parameters of {api:anychart.core.stock.indicators.MACD}macd(){api} method.</li>
	<li>MACD series value is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/macd-macd.png"/></li></center>
	<li>EMA\[signal period\]<sub>i</sub> of MACD series values is calculated by [EMA formula](#exponential_moving_average), where signal period is set
	by <strong>signalPeriod</strong> parameter.</li>
	<li>Signal series value is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/macd-signal.png"/></li></center>
	<li>Histogram series is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/macd-histogram.png"/></li></center>
</ol>

## Moving Average Envelopes

Coming soon.

## On Balance Volume

Coming soon.

## Parabolic SAR

Coming soon.

## Price Channels

Coming soon.

## Rate of Change

[Rate of Change](Rate\_of\_Change\_\(ROC\)) is calculated according to this formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/roc.png"/></center>

## Relative Strength Index

[Relative Strength Index](Relative\_Strength\_Index\_\(RSI\)) is calculated as follows:

<ol>
	<li>Upward change (U) or downward change (D) sequences are calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/rsi-u-d.png"/></li></center>
	<li>Then two averages are calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/rsi-mau.png"/><br></center>
<center><img src="https://static.anychart.com/images/technical\_indicators/rsi-mad.png"/></li></center>
	<li>And final RSI formula is :<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/rsi-rsi.png"></li></center>
</ol>

## Simple Moving Average

[Simple Moving Average](Simple\_Moving\_Average\_(SMA)) in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/sma.png"></center>

## Stochastic Oscillator

[Stochastic Oscillator](Stochastic_Oscillator) indicator has two series, both being calculated with the help of other indicators (EMA or SMA). Also it has 3 types: Fast Stochastic Oscillator, Slow Stochastic Oscillator and Full Stochastic Oscillator.

The defaults create a Fast Stochastic Oscillator indicator.

<center><img src="https://static.anychart.com/images/technical\_indicators/fastK.png"></center>

where pK is the first period that is set through the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method, which is a period for the %K value.

<center><img src="https://static.anychart.com/images/technical\_indicators/fastD.png"></center>

where p3 is the third period that is set through the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method, which is a period for the %D value.

While Fast Stochastic Oscillator is used for signals, the Slow Stochastic Oscillator is supposed to reflect this emphasis. 

<center><img src="https://static.anychart.com/images/technical\_indicators/slowK.png"></center>

where 3 is a default period for getting slow K.

<center><img src="https://static.anychart.com/images/technical\_indicators/slowD.png"></center>

where 3 is a default period for getting slow D.

The Full Stochastic Oscillator is a fully customizable version of the Slow Stochastic Oscillator. Users can set the look-back period, the number of periods to slow %K and the number of periods for the %D moving average. 

<center><img src="https://static.anychart.com/images/technical\_indicators/fullK.png"></center>

where p2 is the second period that is set through the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method, which is a period for the smoothed %K value.

<center><img src="https://static.anychart.com/images/technical\_indicators/fullD.png"></center>

where p3 is the third period that is set through the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method, which is a period for the %D value.

## TRIX

Coming soon.

## Volume + MA

Coming soon.

## Williams %R

Coming soon.
