{:index 6.6}

# Price Indicator

## Overview

Price Indicator is an addition to [Crosshair](Crosshair) that allows to create a label on any axis to show price from a certain date, it may last price, current price or any other value.

## Enable

```
// enable price indicator for the first plot
var chart = anychart.stock();
var indicator = chart.plot(0).priceIndicator();
```

{sample}STOCK\_Price\_Indicator\_01{sample}

## Settings

### Appearance

Configure indicator appearance:

```
var indicator = chart.plot(0).priceIndicator();

indicator.stroke();
indicator.fallingStroke();
indicator.risingStroke();
indicator.label();
indicator.fallingLabel();
indicator.risingLabel();
```

Choose axis where to show indicator:

```
indicator.axis(axis|number);
```
 
### Binding

#### Series and Value

Set series and value in this series to bind to:

```
// set the data
table = anychart.data.table();
table.addData([        
  ['2016-04-01', 18.23, 19.36, 18.18, 19.31],
  ['2016-04-02', 19.50, 19.89, 19.00, 19.29],
  ['2016-04-03', 19.13, 19.15, 18.43, 18.75],
  ['2016-04-06', 18.54, 18.76, 18.27, 18.76],
  ['2016-04-07', 18.76, 19.14, 18.63, 18.76]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('open', 1);
mapping.addField('high', 2);
mapping.addField('low', 3);
mapping.addField('close', 4);

chart = anychart.stock();

ohlcSeries = chart.ohlc(mapping);

var indicator = chart.plot(0).priceIndicator();

indicator.series(ohlc);
indicator.valueField('high');
```

### Source Value

Choose which value to show:

- 'series-start'
- 'first-visible'
- 'series-end'
- 'last-visible'
- Date

```
// enable price indicator for the first plot
var chart = anychart.stock();
var indicator = chart.plot(0).priceIndicator();
indicator.value('first-visible');
```

{sample}STOCK\_Price\_Indicator\_02{sample}