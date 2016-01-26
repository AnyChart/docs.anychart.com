{:index 4}

#Technical Indicators

* [Overview](#overview)
* [Accumulation Distribution Line (ADL)]
* [Adaptive Moving Average (AMA)]
* [Aroon]
* [Average True Range (ATR)]
* [Bollinger Bands (BBands)]	
* [BBands %B]
* [BBands Width]
* [Commodity Channel Index (CCI)]
* [Chaikin Money Flow (CMF)]
* [Chaikin Oscillator (CHO)]
* [Chaikin Volatility (CHV)]
* [Directional Movement Indicator (DMI)]
* [Exponential Moving Average (EMA)](#ema)
* [Keltner Channels]
* [Modified (Smoothed) Moving Average (MMA)]
* [Money Flow Index (MFI)]
* [Momentum]	
* [Moving Average Convergence Divergence (MACD)](#macd)
* [Moving Average Envelopes (MA Envelopes)]
* [On Balance Volume (OBV)]
* [Parabolic SAR (PSAR)]	
* [Price Channels]
* [Rate of Change (ROC)](#roc)
* [Relative Strength Index (RSI)](#rsi)
* [Simple Moving Average (SMA)](#sma)
* [Stochastic Oscillator (Fast,Slow)]
* [TRIX]
* [Volume + MA]
* [Williams %R]

## Overview

This document contains mathematical description of all technical indicators available in AnyChart Stock Component.

For all formulas and indicators below:
<ul>
	<li><strong>n</strong> is a period for which calculations are done, it is usually set by the <strong>period</strong> attribute in the 
	indicator settings.</li>
	<li><strong>X<sub>i</sub></strong> is the value passed by the data source.</li>
</ul>

A technical indicator is a type of analysis chart that indicates market direction. Indicators generally overlay on price chart data to indicate where the price is going, or whether the price is in an "overbought" condition or an "oversold" condition.

AnyChart Stock Chart Component supports automatic building of several types of technical indicators. Technical indicators are based on data from data providers and do not depend on series.

This document lists available indicator types and gives directions to the tutorials about each indicator type and general information about technical indicators in AnyChart Stock Component.

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

## <a name="ema"></a> Exponential Moving Average (EMA)

Exponential Moving Average in each point is calculated according to the following formula:</p>

<center><img src="http://static.anychart.com/images/technical_indicators/ema.png" width="680"></center>

## Keltner Channels

Coming soon.

## Modified (Smoothed) Moving Average (MMA)

Coming soon.

## Money Flow Index (MFI)

Coming soon.

## Momentum

Coming soon.

## <a name="macd"></a> Moving Average Convergence/Divergence (MACD)

Moving Average Convergence/Divergence indicator is calculated as follows:

<ol>
	<li class="main">EMA\[slow period\]<sub>i</sub> and EMA\[fast period\]<sub>i</sub> is calculated by [EMA formula](#ema)</a>. Slow period 
	and fast period are set by <strong>slowPeriod</strong> (default 26) and <strong>fastPeriod</strong> (default 12) parameters of {api:anychart.core.stock.indicators.MACD}.macd(){api} method.</li>
	<li>MACD series value is calculated:<br>
<img src="http://static.anychart.com/images/technical_indicators/macd-macd.png"/></li>
	<li>EMA[signal period]<sub>i</sub> of MACD series values is calculated by <a href="#EMA">EMA formula</a>, where signal period is set
	by <strong>signalPeriod</strong> parameter.</li>
	<li class="main">Signal series value is calculated:<br>
<img src="http://static.anychart.com/images/technical_indicators/macd-signal.png"/></li>
	<li class="main">Histogram series is calculated:<br>
<img src="http://static.anychart.com/images/technical_indicators/macd-histogram.png"/></li>
</ol>

## Moving Average Envelopes (MA Envelopes)

Coming soon.

## On Balance Volume (OBV)

Coming soon.

## Parabolic SAR (PSAR)

Coming soon.

## Price Channels

Coming soon.

## <a name="roc"></a> Rate of Change (ROC)

Rate of Change is calculated according to this formula:

<center><img src="http://static.anychart.com/images/technical_indicators//roc.png"/></center>

## <a name="rsi"></a> Relative Strength Index (RSI)

Relative Strength Index is calculated as follows:

<ol>
	<li class="main">Upward change (U) or downward change (D) sequences are calculated:<br>
<img src="img/rsi-u-d.png"></li>
	<li class="main">Then two averages are calculated:<br>
      <img src="img/rsi-mau.png"><br>
<img src="img/rsi-mad.png"></li>
	<li class="main">And final RSI formula is :<br>
<img src="img/rsi-rsi.png"></li>
</ol>

## <a name="sma"></a> Simple Moving Average (SMA)

Simple Moving Average in each point is calculated according to the following formula:

<center><img src="http://static.anychart.com/images/technical_indicators/sma.png"></center>

## Stochastic Oscillator (Full)

Coming soon.

## TRIX

Coming soon.

## Volume + MA

Coming soon.

## Williams %R

Coming soon.