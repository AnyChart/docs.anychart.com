# Aroon

## Overview

Developed by Tushar Chande in 1995, Aroon is an indicator system that determines whether a stock is trending or not and how strong the trend is. "Aroon" means "Dawn's Early Light" in Sanskrit. Chande chose this name because the indicators are designed to reveal the beginning of a new trend.

The Aroon indicators measure the number of periods since price recorded an x-day high or low. There are two separate indicators: Aroon-Up and Aroon-Down. A 25-day Aroon-Up measures the number of days since a 25-day high. A 25-day Aroon-Down measures the number of days since a 25-day low. In this sense, the Aroon indicators are quite different from typical momentum oscillators, which focus on price relative to time. Aroon is unique because it focuses on time relative to price. Chartists can use the Aroon indicators to spot emerging trends, identify consolidations, define correction periods and anticipate reversals.

Mathematical description of the indicator: [Aroon Mathematical Description](Mathematical_Description#aroon).

## Adding indicator

Aroon indicator is added using {api:anychart.core.stock.Plot#aroon}aroon(){api} method, it requires a mapping with the `"high"` and `"low"` fields in it:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({'high': 2; 'low': 3});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot_0 = chart.plot(0);

// Aroon is usually displayed on a separate plot
var plot_1 = chart.plot(1);

// create Aroon indicator with period 25
var aroon25 = plot_1.aroon(mapping, 25);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Aroon\_1{sample}

## Indicator parameters

Aroon indicator has only one type specific parameter - period: mapping with the `"value"` field in it, period and types of Up and Down series to be displayed as:

```
var aroon25 = plot.aroon(mapping, 25, "line", "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Aroon with different parameters and settings is added to different plots, {api:anychart.core.stock.indicators.Aroon#upSeries}upSeries(){api}, {api:anychart.core.stock.indicators.Aroon#downSeries}downSeries(){api}, and {api:anychart.core.stock.indicators.Aroon#rangeSeries}rangeSeries(){api} methods are used to configure the display, {api:anychart.core.stock.indicators.Aroon#period}period(){api} method can be used to change the period:

```
// create Aroon indicator with period 25 and shown as steplines on the second plot
aroon25 = plot_1.aroon(mapping, 25, "step-line", "step-line");
aroon25.upSeries().stroke('#bf360c');
aroon25.downSeries().stroke('#ff6d00');
aroon25.rangeSeries().fill('#ffd54f 0.2');

// create Aroon indicator with period 30 and shown as splines on the third plot
aroon30 = plot_2.aroon(mapping);
aroon30.period(30);
aroon30.upSeries().seriesType("spline");
aroon30.upSeries().stroke('#bf360c', 2, '5 5 10');
aroon30.downSeries().seriesType("spline");        
aroon30.downSeries().stroke('#ff6d00', 2, '5 5 10');   
aroon30.rangeSeries().fill("none");    
```

Live sample:

{sample :height 800}STOCK\_Technical\_Indicators\_Aroon\_2{sample}