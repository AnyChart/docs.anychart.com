# Ratiocator (RAT)
## Overview

The Ratiocator Indicator (RAT) represents the relationship between two prices series. It allows you to examine performance developments between two securities. With the help of a base date, this indicator can be carried out over a defined period of time.

Mathematical description of the indicator: [Ratiocator (RAT) Mathematical Description](Mathematical_Description#ratiocator).

## Adding Indicator

The Ratiocator indicator is added using the {api:anychart.core.stock.Plot#rat}rat(){api} method. 

It requires a mapping with two fields for two stock prices: `"priceA"` and `"priceB"`:

```
// create data table on loaded data
var dataTable = anychart.data.table();

table.addData([
    ['2015-12-24', 511.53, 514.98],
    ['2015-12-25', 512.53, 514.88],
    ['2015-12-26', 511.83, 514.98],
    ['2015-12-27', 511.22, 515.30],
    ['2015-12-28', 511.53, 514.98],
    ['2015-12-29', 512.53, 513.88],
    ['2015-12-30', 511.83, 512.98],
    ['2015-12-31', 511.22, 515.30],
    ['2016-01-01', 510.35, 515.72]
]);


// map loaded data
var mapping_1 = dataTable.mapAs({"value": 1});
var mapping_2 = dataTable.mapAs({"value": 2});
var rat_mapping = dataTable.mapAs({"priceA": 1, "priceB": 2});

// create a stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create a stock series
plot_0.line(mapping_1);
plot_0.name('Stock 1');
plot_0.line(mapping_2);
plot_0.name('Stock 2');

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create a RAT indicator
var rat = plot_1.rat(rat_mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_RAT\_1{sample}

## Indicator Parameters

There are three parameters the RAT indicator has, one of them is necessary - the mapping.

Then you can set the base date and series types.

If base date is omitted (or zero is passed as the parameter) - the first date in the data is set as the base date.

The following code sample demonstrates a RAT indicator with parameters set as default:

```
var rat = plot.rat(mapping, 0, "line");
```

## Visualization

Vizualization of an indicator depends on the type of series you display it with. Here is a sample where a Ratiocator indicator is configured

```
// create and adjust a RAT indicator
var rat = plot_1.rat(mapping);
rat.baseDate('2015-12-27');
rat.series().stroke("0.5 Red");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_RAT\_2{sample}