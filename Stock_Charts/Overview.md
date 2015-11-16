{:index 1}
#AnyStock

* [Overview](#overview)
* [Useful links](#useful_links)
* [Indicators](#indicators) 
* [Working with Data in AnyStock](#working_with_data_in_anystock)


## Overview

Stock Chart is a widely spread type of charts that can quite effectively visualize great amount of data. They has lots of interesting features such as series zooming, using date scale, etc. Moreover, Stock Charts are very useful for real-time data visualization. They are usually used in cases with enormous amount of data spreads along the time; so it's quite logical to use them, for example, for showing the company assets and earnings for its whole working period. That's why stocks are this popular: it can show large amounts of data and keep it clear to the audience.

AnyStock component provides a lot of different features. Besides being very fast and completely compatible with all other our products, having all basic stock features such as grouping, scrolling, etc., our stocks also have a special feature of [technical indicators](#Technical_Indicators), which are a type of analysis charts that indicate market direction. AnyChart Stock Chart Component supports automatic building of several types of technical indicators. Also, AnyStock is fully built on javascript, which makes them rather flexible and easy to use.

<br>
Stocks are so special because of two main features:
<ul>1. Data grouping</ul>
	<p style="text-indent: 25px;">This feature is what lets showing those loads of information on one chart at a time. If your data contains more than 500 points in the time interval shown on a chart, AnyStock Charts will automatically group them in a plenty of structures by some parameter. 
	For example, if you've got data which shows daily changing of something for ten years, it means that you've got 3650 data points. To make this information understandable, our stock can group the data monthly, so we'll have only 120 points on a chart. But what to do if you need to see the values for a couple of days? That's where we go to the second AnyStock feature.</p>
<ul>2. Navigation through the data</ul> 
	<p style="text-indent: 25px;">If you are not satisfied with having the generalized data shown on a chart, you can use a scrollbar in the bottom of the chart to bring the data to more detailed form. That's how it works.</p>
<ul>3. Streaming</ul> 
	<p style="text-indent: 25px;">Showing and analyzing your real-time data is much easier and evident when using a chart that streams the data.</p>

<br>
Note that Stock charts have an only X-axis of datetime type. 

If you are a newcomer to AnyChart Stock and didn't use any Flash Charting Solution before here are the recommended short tutorials that give you a general idea of what AnyChart is, and how to start using and implementing it:

## Useful links

[Quick Start: How it works](Quick_Start) - description of AnyChart Stock Chart Component.
[Playground Gallery](http://playground.anychart.com/gallery/7.8.0/Stock_Chart_Types/Column_Chart) - find, explore chart samples and make use of them.
[Supported Series](Supported_Series) - here you can find information about available series types.
[Chart Plots](Chart_Plots) - learn what are plots, what for are they needed, and how to use them properly.
[Benchmarking] - you can see how fast and robust AnyStock is on this [AnyStock benchmarking test page](http://www.anychart.com/products/anystock/benchmark/).

## Indicators

Тут пока не известно что писать

## Working with Data in AnyStock

When we start working with AnyStocks, firstly we should set the data as with any other chart type. Working with data in Stocks is slightly different from working with other basic charts' data. We still can set the data for Stocks in all formats available for our basic charts, but we should consider that the dataSet must be a table, and this table later has to be mapped correctly. Take it into account when you create a new Stock Chart. You can find more information and some samples in the [Data](Data) article.