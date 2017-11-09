{:index 3}

#Technical Indicators

* [Overview](#overview)
* [Accumulation Distribution Line (ADL)](#)
* [Adaptive Moving Average (AMA)](#)
* [Aroon](#)
* [Average True Range (ATR)](#)
* [Bollinger Bands (BBands)](#)
* [BBands %B](#)
* [BBands Width](#)
* [Commodity Channel Index (CCI)](#)
* [Chaikin Money Flow (CMF)](#)
* [Chaikin Oscillator (CHO)](#)
* [Chaikin Volatility (CHV)](#)
* [Directional Movement Indicator (DMI)](#)
* [Exponential Moving Average (EMA)](#exponential_moving_average)
* [Keltner Channels](#)
* [Modified (Smoothed) Moving Average (MMA)](#)
* [Money Flow Index (MFI)](#)
* [Momentum](#)
* [Moving Average Convergence Divergence (MACD)](#moving_average_convergence_divergence)
* [Moving Average Envelopes (MA Envelopes)](#)
* [On Balance Volume (OBV)](#)
* [Parabolic SAR (PSAR)](#)
* [Price Channels](#)
* [Rate of Change (ROC)](#roc)
* [Relative Strength Index (RSI)](#relative_strength_index)
* [Simple Moving Average (SMA)](#simple_moving_average)
* [Stochastic Oscillator (Fast,Slow)](#)
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

## Accumulation Distribution Line (ADL)

Coming soon.

## Adaptive Moving Average (AMA)

Coming soon.

## Aroon

Coming soon.

## Average True Range (ATR)

Coming soon.

## Bollinger Bands (BBands)

Coming soon.

## BBands %B

Coming soon.

## BBands Width

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

Exponential Moving Average in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical_indicators/ema.png" width="680"></center>

## Keltner Channels

Coming soon.

## Modified (Smoothed) Moving Average (MMA)

Coming soon.

## Money Flow Index (MFI)

Coming soon.

## Momentum

Coming soon.

## Moving Average Convergence Divergence

Moving Average Convergence/Divergence indicator is calculated as follows:

<ol>
	<li>EMA\[slow period\]<sub>i</sub> and EMA\[fast period\]<sub>i</sub> is calculated by [EMA formula](#exponential_moving_average)</a>. Slow period 
	and fast period are set by <strong>slowPeriod</strong> (default 26) and <strong>fastPeriod</strong> (default 12) parameters of {api:anychart.core.stock.indicators.MACD}.macd(){api} method.</li>
	<li>MACD series value is calculated:<br>
<img src="https://static.anychart.com/images/technical_indicators/macd-macd.png"/></li>
	<li>EMA\[signal period\]<sub>i</sub> of MACD series values is calculated by [EMA formula](#exponential_moving_average), where signal period is set
	by <strong>signalPeriod</strong> parameter.</li>
	<li>Signal series value is calculated:<br>
<img src="https://static.anychart.com/images/technical_indicators/macd-signal.png"/></li>
	<li>Histogram series is calculated:<br>
<img src="https://static.anychart.com/images/technical_indicators/macd-histogram.png"/></li>
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

Rate of Change is calculated according to this formula:

<center><img src="https://static.anychart.com/images/technical_indicators/roc.png"/></center>

## Relative Strength Index

Relative Strength Index is calculated as follows:

<ol>
	<li>Upward change (U) or downward change (D) sequences are calculated:<br>
<img src="https://static.anychart.com/images/technical_indicators/rsi-u-d.png"/></li>
	<li>Then two averages are calculated:<br>
<img src="https://static.anychart.com/images/technical_indicators/rsi-mau.png"/><br>
<img src="https://static.anychart.com/images/technical_indicators/rsi-mad.png"/></li>
	<li>And final RSI formula is :<br>
<img src="https://static.anychart.com/images/technical_indicators/rsi-rsi.png"></li>
</ol>

## Simple Moving Average

Simple Moving Average in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical_indicators/sma.png"></center>

## Stochastic Oscillator (Full)

Coming soon.

## TRIX

Coming soon.

## Volume + MA

Coming soon.

## Williams %R

Coming soon.