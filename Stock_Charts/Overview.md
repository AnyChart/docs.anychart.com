{:index 1}
#AnyStock

* [Overview](#overview)
* [Useful Links](#useful_links)
* [Technical Indicators](#technical_indicators) 
* [Working with Data in AnyStock](#working_with_data_in_anystock)


## Overview

Stock Chart is a special type of charts that can effectively visualize great amount of date time based data. It has lots of special features such as zoom with Scroller UI, synchronized plots, data grouping and so on. Moreover, Stock Charts are very useful for real-time data visualization. Use them when you have a large amount of date time based data; so it's quite logical to use them, for example, not only for showing the company assets and earnings, but also such things as changes of gage height and water discharge in a Water Supply District for the last decade. That's what makes AnyStock are this popular: it can show large amounts of data and keep it clear to the audience.

AnyStock component provides a lot of different features. Besides being very fast and completely compatible with all other AnyChart products, having all basic stock features such as grouping, scrolling, etc., our stocks also have a special feature of [technical indicators](#technical_indicators). AnyChart JavaScript Stock Chart Component supports automatic building of several types of technical indicators and allows to add custom indicators as well. AnyStock is a native Javascript, which makes it very flexible and easy to use.

Stocks are so special because of three main features:

<b>Data grouping</b>

This feature is what lets showing those loads of information on one chart at a time. If your data contains more than certain points in the time interval shown on a chart, AnyStock Charts will automatically group them to avoid cluttering and allow chart to be displayed fast. 

For example, if you've got data that shows daily changes of anything for ten years, it means that you've got 3650 data points. To make this information understandable, our stock can group the data monthly, so we'll have only 120 points on a chart. But what to do if you need to see the values for a couple of days? That's where we go to the second AnyStock feature.

<b>Navigation through the data</b>

If you are not satisfied with having the generalized data shown on a data plot, you can use a scrollbar in the bottom of the chart to bring the data to more detailed form.

<b>Streaming</b> 

AnyStock allows to stream data efficiently, you can see this on our <a href="https://www.anychart.com/products/anystock/overview/#big-data" target="_blank">AnyStock Speed Test Page</a>.

## Useful links

* [Quick Start: How it works](Quick_Start) - description of AnyChart Stock Chart Component.
* [Playground Gallery](https://www.anychart.com/products/anystock/gallery/) - find, explore chart samples.
* [Supported Series](Series/Supported_Series) - here you can find information about available series types.
* [Chart Plots](Chart_Plots) - learn what are plots, what for are they needed, and how to use them properly.
* [Benchmarking](https://www.anychart.com/products/anystock/overview/#big-data) - you can see how fast and robust AnyStock is on this [AnyStock Benchmark Test Page](https://www.anychart.com/products/anystock/overview/#big-data).

## Indicators

A technical indicator is a type of analysis chart that indicates market direction. Indicators are mathematical calculation based on historic price, volume, or (in the case of futures contracts) open interest, used to indicate where the price is going, or whether the price is in an "overbought" condition or an "oversold" condition.

AnyChart Stock Chart Component supports automatic building of several types of technical indicators as well allows you to add custom indicators of your choice. Read more about technical indicators feature in [Technical Indicators](Technical_Indicators/Overview) article.

## Working with Data in AnyStock

When we start working with AnyStocks, firstly we should set the data as with any other chart type. Working with data in Stocks is slightly different from working with other basic charts. We can set the data for Stocks in all formats available for our basic charts, but we should consider that the data set must be a table, and this table later has to be mapped correctly. You can find more information and some samples in the [Working with Data in AnyStock](Data) article.