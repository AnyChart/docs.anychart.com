# KDJ

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)

## Overview

KDJ is a momentum indicator, using a divergence line. It is a derived form of the [Stochastic indicatior](Stochastic_Oscillator) with the only difference of having an extra line called the J line. Values of %K and %D lines show if the security is overbought (over 80) or oversold (below 20). The moments of %K crossing %D are the moments for selling or buying. The J line represents the divergence of the %D value from the %K. The value of J can go beyond [0, 100] for %K and %D lines on the chart.

Find the mathematical description of the indicator on the [KDJ Mathematical Description](Mathematical_Description#kdj) page.

## Adding indicator

KDJ indicator is added through the {api:anychart.core.stock.Plot#kdj}kdj(){api} method. It requires three data fields: High, Low and Close:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs();
mapping.addField('high', 2, 'max');
mapping.addField('low', 3, 'min');
mapping.addField('close', 4, 'last');

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create KDJ indicator
var kdj = plot.kdj(mapping, 10, "EMA", 10, "SMA", 20);
kdj.kSeries().stroke("#bf360c");
kdj.dSeries().stroke("#02660c");
kdj.jSeries().stroke("#0228b2");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_KDJ\_01{sample}

## Indicator parameters

KDJ indicator has a lot of optional parameters: 
- a period for the %K value 
- the moving average type of the indicator for the %K value
- a period for the smoothed %K value
- the moving average type of the indicator for the %D value
- a period for the %D value
- multipliers of the %K and %D values for %J value calculating 
- series types of the %K, %D and %J values. 

None of these parameters are necessary, as all have default values, but can be set. The following code sample will lead to the KDJ indicator which %K value is calculated with a period of 10 and through the EMA type and %D value is calculated with the period of 20 and through the SMA type.

```
var kdj = plot.kdj(mapping, 10, EMA, 10, SMA, 20);
```

There are three series that form the KDJ indicator, so there is a methods for each of them: {api:anychart.core.stock.indicators.KDJ#kSeries}kSeries(){api} for drawing the %K series, {api:anychart.core.stock.indicators.KDJ#dSeries}dSeries(){api} for drawing the %D series and the {api:anychart.core.stock.indicators.KDJ#jSeries}jSeries(){api} for drawing the %J series.

The series type defining is not necessary, as it is possible to change the series type any time using the {api:anychart.core.stock.series.Column#seriesType}seriesType(){api} method. 


## Visualization

KDJ indicator visualization can be adjusted the same way as the others. It depends on which series type was chosen. The sample below demonstrates two plots with KDJ indicators with different parameters and visualisation settings.

```
// create first KDJ indicator of default series type
var kdj_1 = plot_0.kdj(mapping, 10, "EMA", 10, "SMA", 20);
kdj_1.kSeries().stroke("#bf360c");
kdj_1.dSeries().stroke("#02660c");
kdj_1.jSeries().stroke("#0228b2");

// create second KDJ indicator of column series
var kdj_2 = plot_1.kdj(mapping, 14, "EMA", 5, "EMA", 5, -2, 3, "spline", "spline", "spline");
kdj_2.kSeries().stroke("#bf360c");
kdj_2.dSeries().stroke("#02660c");
kdj_2.jSeries().stroke("#0228b2");
```

{sample}STOCK\_Technical\_Indicators\_KDJ\_02{sample}
