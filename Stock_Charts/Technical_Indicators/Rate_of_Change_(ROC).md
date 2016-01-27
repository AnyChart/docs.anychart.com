# Rate of change

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)

## Overview

Rate of change (ROC) is a simple technical analysis indicator showing the difference between today's closing price and the close N days ago.

AnyChart Stock allows you to add ROC with desired period to any of your charts.

Mathematical description of the indicator please see at: [Mathematical Description of Technical Indicators](Mathematical_Description).

## Adding indicator

ROC indicator is added using {api:anychart.core.stock.Plot#roc}.roc(){api} method, it requires a mapping with value field in it:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot_0 = chart.plot(0);

// ROC is usually displayed on a separate plot
var plot_1 = chart.plot(1);

// create ROC indicator with period 14
var roc14 = plot_1.roc(mapping, 14).series();
roc14.name('ROC(14)');
roc14.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_ROC\_1{sample}

## Indicator parameters

ROC indicator needs three parameters: mapping with value field in it, period and a type of series to be displayed as:

```
var roc30 = plot.roc(mapping, 30, "column");
```

## Visualization

Indicator visualization depends on the series you chose to display it with, here is a sample where ROC with different parameters and settings is added to different plots:

```
// create ROC indicator with period 14 and shown as column on the second plot
roc14 = plot_1.roc(mapping, 14).series();
roc14.name('ROC(14)');
roc14.stroke('#bf360c');

// create ROC indicator with period 30 and shown as column on the third plot
var roc30 = plot_2.roc(mapping, 30, "column").series();
roc30.name('ROC(30)');
roc30.fill('#ff6d00');
```

Live sample:

{sample :width 825 :height 800}STOCK\_Technical\_Indicators\_ROC\_2{sample}