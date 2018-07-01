# Accumulation Distribution Line (ADL)

## Overview

Developed by Marc Chaikin, the Accumulation Distribution Line is a volume-based indicator designed to measure the cumulative flow of money into and out of a security. Chaikin originally referred to the indicator as the Cumulative Money Flow Line. As with cumulative indicators, the Accumulation Distribution Line is a running total of each period's Money Flow Volume. First, a multiplier is calculated based on the relationship of the close to the high-low range. Second, the Money Flow Multiplier is multiplied by the period's volume to come up with a Money Flow Volume. A running total of the Money Flow Volume forms the Accumulation Distribution Line. Chartists can use this indicator to affirm a security's underlying trend or anticipate reversals when the indicator diverges from the security price.

Find the mathematical description of the indicator on the [Accumulation Distribution Line (ADL) Mathematical Description](Mathematical_Description#accumulation_distribution_line) page.


## Adding indicator

ADL indicator is added through the {api:anychart.core.stock.Plot#adl}adl(){api} method. It requires a mapping with five fields in it: `"open"`, `"high"`, `"low"`, `"close"`, and `"volume"`.

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({"high": 1, "open": 2, "low": 3, "close": 4, "volume": 5});

// create stock chart
chart = anychart.stock();

// create plots on the chart
var plot0 = chart.plot(0);
var plot1 = chart.plot(1);

// create ADL indicator
var adl = plot1.adl(mapping).series();
```

Note that ADL indicator needs to be built on a separate plot due to rather huge difference between the indicator values and the data values.

Here is a live sample:

{sample :height 700}STOCK\_Technical\_Indicators\_ADL\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where ADL indicator is visually adjusted:

```
// adjust ADL indicator
var adl = plot1.adl(mapping).series();
adl.seriesType("area");
adl.fill("#E5BE01");
adl.stroke(null);
```

{sample :height 700}STOCK\_Technical\_Indicators\_ADL\_02{sample}