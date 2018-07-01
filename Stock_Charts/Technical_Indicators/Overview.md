{:index 1}

# Technical Indicators

## Overview

A technical indicator is a type of analysis chart that indicates market direction. Indicators are mathematical calculation based on historic price, volume, or (in the case of futures contracts) open interest, used to indicate where the price is going, or whether the price is in an "overbought" condition or an "oversold" condition.

AnyChart JavaScript Stock Chart Component supports automatic building of several types of technical indicators. Technical indicators are based on data from data providers and do not depend on series.

This document lists available indicator types and gives directions to the tutorials about each indicator type and general information about technical indicators in AnyChart Stock Component.

## Adding indicators

To understand how technical indicator gets data and what it depends on please study [Data](../Data) article first, because any indicator is based on a data set and can't exist without it. It doesn't depend on any [Series](../Series/Overview) you've added on the plot directly, but to make any sense indicators need to be based on the data that correlates to series displayed on a chart.

Let's now add one of the most common and basic indicators to a chart (we will take one from [Quick Start](../Quick_Start) article as a basis). To add Simple Moving Average (SMA) indicator to the first (and only in this case) plot you just need to add the following line when chart and [mapping](../Data) are ready:

```
chart.plot(0).sma(mapping, 10, "line");
```

Full code goes as follows:

```
anychart.onDocumentReady(function () {
var table, mapping, chart;

table = anychart.data.table();
table.addData([
	['2015-12-24','511.53', '514.98', '505.79', '506.40'],
	['2015-12-25','512.53', '514.88', '505.69', '507.34'],
	['2015-12-26','511.83', '514.98', '505.59', '506.23'],
	['2015-12-27','511.22', '515.30', '505.49', '506.47'],
	['2015-12-28','510.35', '515.72', '505.23', '505.80'],
	['2015-12-29','510.53', '515.86', '505.38', '508.25'],
	['2015-12-30','511.43', '515.98', '505.66', '507.45'],
	['2015-12-31','511.50', '515.33', '505.99', '507.98'],
	['2016-01-01','511.32', '514.29', '505.99', '506.37'],
	['2016-01-02','511.70', '514.87', '506.18', '506.75'],
	['2016-01-03','512.30', '514.78', '505.87', '508.67'],
	['2016-01-04','512.50', '514.77', '505.83', '508.35'],
	['2016-01-05','511.53', '516.18', '505.91', '509.42'],
	['2016-01-06','511.13', '516.01', '506.00', '509.26'],
	['2016-01-07','510.93', '516.07', '506.00', '510.99'],
	['2016-01-08','510.88', '515.93', '505.22', '509.95'],
	['2016-01-09','509.12', '515.97', '505.15', '510.12'],
	['2016-01-10','508.53', '516.13', '505.66', '510.42'],
	['2016-01-11','508.90', '516.24', '505.73', '510.40']	
]);
  
// mapping the data  
mapping = table.mapAs();
mapping.addField('open', 1, 'first');
mapping.addField('high', 2, 'max');
mapping.addField('low', 3, 'min');
mapping.addField('close', 4, 'last');
mapping.addField('value', 4, 'last');

// defining the chart type
chart = anychart.stock();
	  
// set the series type
chart.plot(0).ohlc(mapping).name('ACME Corp.');

// add sma indicator
chart.plot(0).sma(mapping, 10, "line");

// setting the chart title
chart.title('AnyStock Basic Sample with SMA indicator');
	  
chart.container('container');
chart.draw();
});
```

And here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Basic\_Sample\_SMA{sample}

It is that simple! One line that invokes {api:anychart.core.stock.Plot#sma}sma(){api} method with correct parameters: mapping of dataset with correct fields, indicator parameters (period in case of SMA), type of the series you want indicator to be displayed as, and here it is - shown on the chart and automatically recalculated when needed.

## Supported Types

AnyStock supports several technical indicators out of the box, to see full list and navigate to the articles that describe them in details please see [Supported Technical Indicators](Supported_Technical_Indicators) article.

## Custom Indicators

A unique feature that distinguishes AnyStock JavaScript Stock Chart among other solutions is the ability to create your own indicators, we provide an API to do that and you can use it to add known indicators that are not in the [supported](Supported_Technical_Indicators) set yet or your own proprietary indicators. Please see [Custom Indicators](Custom_Indicators) to learn more.

## Mathematical Description

Mathematical formulas we use to calculate all out of the box technical indicators can be found in [Mathematical Description](Mathematical_Description) article.
