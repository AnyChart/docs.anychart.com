{:index 3}

# Technical Indicators Mathematical Description

## Overview

This document contains mathematical description of all technical indicators available in AnyChart Stock Component.

For all formulas and indicators below:
<ul>
	<li>**n** is a period for which calculations are done, it is usually set by the **period** parameter of the 
	method that creates an indicator.</li>
	<li>**X<sub>i</sub>** is the value passed by the data source.</li>
</ul>

## Accumulation Distribution Line

[Accumulation Distribution Line](Accumulation\_Distribution\_Line\_\(ADL\)) is calculated according to these formulas:

<center><img src="https://static.anychart.com/images/technical\_indicators/adl.png" width="550"></center>

## Adaptive Moving Average

Each point of the [Adaptive Moving Average](Adaptive\_Moving\_Average\_\(AMA\)) indicator is calculated by the following steps:

<ol>
<li>Calculate the ER:</li><br>
<center><img src="https://static.anychart.com/images/technical\_indicators/ama\_er.png" width="343"></center>
<li>Then, use the following formula to calculate the SSC value:</li><br>
<center><img src="https://static.anychart.com/images/technical\_indicators/ama\_ssc.png" width="650"></center>
<li>Now, use the results from the actions made before and calculate the indicator:</li><br>
<center><img src="https://static.anychart.com/images/technical\_indicators/ama\_ama.png" width="391"></center>
</ol>

## Aroon

[Aroon](Aroon) indicator is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/aroon.png" width="650"></center>

## Average True Range

[Average True Range](Average\_True\_Range\_(ATR\)) in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/atr.png" width="550"></center>

This formula is based on the True Range definition. ATR is defined as the greatest of the following:

- current High less than current Low
- current High less than previous Close (absolute value)
- current Low less than previous Close (absolute value)

## Awesome Oscillator

[Awesome Oscillator](Awsome_Oscillator) is calculated according to the following formula:

<center><img src="" width="500"></center>

## Bollinger Bands

[Bollinger Bands](Bollinger_Bands) indicator is calculated in three steps:

<ol>
<li>Calculate the SMA according to the SMA formula.</li><br>
<li>Use the next formula to calculate the standard deviation:</li><br>
<center><img src="https://static.anychart.com/images/technical_indicators/bbands-standart-deviation.png" width="300"></center><br>
<li>Bollinger Bands values are calculated according to this formula, where "d" is a deviation:</li><br>
<center><img src="https://static.anychart.com/images/technical_indicators/bbands.png" width="225"></center>
</ol>

## Bollinger Bands %B

The [Bollinger Bands %B](Bollinger_Bands_%25B) indicator is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical_indicators/bbandsb.png" width="650"></center>

## Bollinger Bands Width

The [Bollinger Bands Width article](Bollinger_Bands_Width) indicator is calculated according to the following formula:

```
bandwidth = (upperBB - lowerBB) / middleBB
```

## Commodity Channel Index

[Commodity Channel Index](Commodity\_Channel\_Index\_\(CCI\)) is calculated according to this formula:

<center><img src="https://static.anychart.com/images/technical_indicators/cci.png"></center>

Where TP is a Typical Price calculated as:

<center><img src="https://static.anychart.com/images/technical_indicators/tp.png"></center>

And SMA is calculated as stated in [SMA part](#simple_moving_average) of this article.


## Chaikin Money Flow

[Chaikin Money Flow](Chaikin\_Money\_Flow\_\(CMF\)) is calculated in three steps.

<ol>
	<li>First a MFM(i) is calculated for all points according to this formula:</li><br>
<center><img src="https://static.anychart.com/images/technical_indicators/cmf\_mfm.png"></center><br>
	<li>Next an MFV(i) value is calculated for all points like this:</li><br>
<center><img src="https://static.anychart.com/images/technical_indicators/cmf\_mfv.png"></center><br>
	<li>And finally the CMF(i) value is calculated according to this formula:</li><br>
<center><img src="https://static.anychart.com/images/technical_indicators/cmf.png"></center><br>
</ol>


## Chaikin Oscillator

[Chaikin Oscillator](Chaikin\_Oscillator\_\(CHO\)) is calculated according to this formula:

<center><img src="https://static.anychart.com/images/technical_indicators/cho.png"></center>

You can see how the ADL indicator is calculated in the [ADL part](#accumulation_distribution_line) of this article</a>.

## Chaikin Volatility

Coming soon.

Chaikin Volatility indicator in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical_indicators/chv.png"></center>

## Directional Movement Indicator

[Directional Movement Indicator](Directional\_Movement\_Index\_\(DMI\)) is calculated in three steps: 
<ol>
<li>First the True Range (TR), Plus Directional Movement (+DM) and Minus Directional Movement (-DM) are calculated for each period:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/dmi\_tr.png"></center> <br>

<li>Next they are smoothed using [EMA](#exponential_moving_average) or Wilder's method, calculated as:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/dmi\_smoothing.png"></center><br>

<li>And finally the +DI and -DI values are calculated according to these formulas:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/dmi\_pdi.png"></center><br>
</ol>

## Exponential Moving Average

[Exponential Moving Average](Exponential\_Moving\_Average\_\(EMA\)) in each point is calculated according to the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/ema.png" width="500"></center>

## Heikin-Ashi

[Heikin-Ashi](Heikin-Ashi) indicator is based on price data from the current open-high-low-close, the current Heikin-Ashi values, and the prior Heikin-Ashi values. In the following formula, a (0) refers to the current period, (-1) to the prior period, and HA  to Heikin-Ashi:

<center><img src=""></center>

## KDJ

[KDJ](KDJ) is calculated quite alike [Stochastic](#stochastic_oscillator) indicator, but the difference is in having a J line, which Stochastic does not have.

<ol>
	<li>The %K line is calculated the following way:</li><br>
<center><img src="https://static.anychart.com/images/technical\_indicators/kdj1.png"></center>
	<li>To create the %D line, use the next formula:</li><br>
<center><img src="https://static.anychart.com/images/technical\_indicators/kdj2.png"></center>
	<li>This is how the %J line is calculated:</li><br>
<center><img src="https://static.anychart.com/images/technical\_indicators/kdj3.png"></center>
</ol>

## Keltner Channels

[Keltner Channels](Keltner_Channels) bands in each point are calculated according to the following formulas:

<center><img src="https://static.anychart.com/images/technical_indicators/keltnerchannels.png"></center>

You can see how [EMA (Exponential Moving Average)](#exponential_moving_average) and [ATR (Average True Range)](#average_true_range) indicators are calculated in corresponding sections of this article.

## Modified Moving Average

[Modified Moving Average](Modified\_Moving\_Average\_\(MMA\)) indicator points are calculated by the following formula:

<center><img src="https://static.anychart.com/images/technical\_indicators/mma.png" width="400"></center>

## Money Flow Index

[Money Flow Index](Money_Flow_Index_\(MFI\))  is calculated as follows:

<ol>
<li>The typical price for each day is the average of high, low and close:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/mfi-typical-price.png"></center><br>

<li>Money flow is the product of typical price and the volume on that day:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/mfi-money-flow.png"></center><br>

<li>Totals of the money flow amounts over the given N days are then formed. Positive money flow is the total for those days where the typical price is higher than the previous day's typical price, and negative money flow where below. If typical price is unchanged then that day is discarded.</li><br>

<li>A money ratio is then formed:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/mfi-money-ratio.png"></center><br>

<li>From which a money flow index ranging from 0 to 100 is formed:</li><br>

<center><img src="https://static.anychart.com/images/technical_indicators/mfi-mfi.png"></center><br>
</ol>

## Momentum

[Momentum](Momentum) indicator in each point is calculated in accordance to the folowing formula:

<center><img src="https://static.anychart.com/images/technical_indicators/momentum.png" width="400"></center>

## Moving Average Convergence Divergence

[Moving Average Convergence Divergence](Moving\_Average\_Convergence\_Divergence\_\(MACD\)) indicator is calculated as follows:

<ol>
	<li>EMA\[slow period\]<sub>i</sub> and EMA\[fast period\]<sub>i</sub> is calculated by [EMA formula](#exponential_moving_average)</a>. Slow period 
	and fast period are set by **slowPeriod** (default 26) and **fastPeriod** (default 12) parameters of {api:anychart.core.stock.indicators.MACD}macd(){api} method.</li>
	<li>MACD series value is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/macd-macd.png"/></li></center>
	<li>EMA\[signal period\]<sub>i</sub> of MACD series values is calculated by [EMA formula](#exponential_moving_average), where signal period is set
	by **signalPeriod** parameter.</li>
	<li>Signal series value is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/macd-signal.png"/></li></center>
	<li>Histogram series is calculated:<br>
<center><img src="https://static.anychart.com/images/technical\_indicators/macd-histogram.png"/></li></center>
</ol>

## Moving Average Envelopes

Coming soon.

## On Balance Volume

[On Balance Volume](On_Balance_Volume_\(OBV\)) indicator is calculated according to the following rules:

* If the closing price is above the prior close price, then:

<center><img src="https://static.anychart.com/images/technical_indicators/obv-positive.png"></center>

* If the closing price is below the prior close price, then:

<center><img src="https://static.anychart.com/images/technical_indicators/obv-negative.png"></center>

* If the closing prices equals yesterday's closing price, then:

<center><img src="https://static.anychart.com/images/technical_indicators/obv-zero.png"></center>

## Parabolic SAR

[Parabolic SAR](Parabolic_SAR_\(PSAR\)) is created according to the following algorithm.

At each step within a trend, the SAR is calculated ahead of time. That is, tomorrow's SAR value is built using data available today. The general formula used for this is:

<center><img src="https://static.anychart.com/images/technical_indicators/psar.png" width="400"></center>

Where SARi and SARi - 1 represent today's and tomorrow's SAR values, respectively.

The extreme point, EP, is a record kept during each trend that represents the highest value reached by the price during the current up trend - or lowest value during a downtrend. On each period, if a new maximum (or minimum) is observed, the EP is updated with that value.

The &alpha; value represents the acceleration factor. Usually, this is set to a value of 0.02 initially. This factor is increased by 0.02 each time a new EP is recorded.

To keep it from getting too large, a maximum value for the acceleration factor is normally set at 0.20, so that it never goes beyond that.

The SAR is recursively calculated in this manner for each new period. There are, however, two special cases that will modify the SAR value:

* If tomorrow's SAR value lies within (or beyond) today's or yesterday's price range, the SAR must be set to the closest price bound. For example, if in an up trend, the new SAR value is calculated and it results to be greater than today's or yesterday's lowest price, the SAR must be set equal to that lower boundary.
* If tomorrow's SAR value lies within (or beyond) tomorrow's price range, a new trend direction is then signaled, and the SAR must "switch sides." Upon a trend switch, several things happen. The first SAR value for this new trend is set to the last EP recorded on the previous trend. The EP is then reset accordingly to this period's maximum. The acceleration factor is reset to its initial value.

## Price Channels

[Price Channels](Price_Channels) bands are calculated according to the following formulas:

<center><img src="https://static.anychart.com/images/technical_indicators/pricechannels.png"></center>

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

[Simple Moving Average](Simple\_Moving\_Average\_\(SMA\)) in each point is calculated according to the following formula:

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

<center><img src="https://static.anychart.com/images/technical\_indicators/trix.png"></center>

where p3 is the third period that is set through the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method, which is a period for the %D value.

## Triple Exponential Moving Average
[Triple Exponential Moving Average (TRIX)](Triple_Exponential_Moving_Average_\(TRIX\)) and its signal line are calculated in accordance to the following calculation flow:

<center><img src="https://static.anychart.com/images/technical_indicators/trix.png"></center>

## Volume + MA

[Volume + Moving Average](Volume_+_Moving_Average) does no calculations with Volume and adds moving average of either [SMA](#simple_moving_average) or [EMA](#exponential_moving_average) type calculated from Volume series.

## Williams %R

[Williams %R](Williams_%25R) is calculated according to this formula:

<center><img src="https://static.anychart.com/images/technical_indicators/williams-r.png"></center>