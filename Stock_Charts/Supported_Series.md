{:index 4}

# Supported Series

* [Overview](#overview)
* [OHLC](#ohlc)
* [Line](#line)
* [Column](#column)


## Overview 

List of series supported by OHLC chart is not so long. Actually, there are only three of them: line, column and ohlc. There's not much difference in using them, generally they all are the same as in Basic Charts; however, let's have a look at them used in AnyStocks.
Note that in this article we consider only the series and difference between them through the samples with the same data; to know more about setting the data, visit the {Data}(../Data) article.

## OHLC

Stocks are mostly used for showing some financial changes, so the Open-High-Low-Close series is used more than others. Open-High-Low-Close (OHLC) bars provide volatility information that other series lack, so it's quite important for them to be set correctly.

{sample}STOCK\_Series\_OHLC{sample}

When we set an OHLC series, it's necessary to define all values, otherwise the point with missing parameter will not be shown. Also, we need to map the data correctly. Read more about mapping and working with Table Data [here](../Working_With_Data/Using_Table_Data_Model).

```
 table.addData([
		['2015-12-24T12:00:00','511.53', '514.98', '505.79', '506.40'],
		['2015-12-25T12:00:00','512.53', '514.88', '505.69', '505.34'],
		['2015-12-26T12:00:00','511.83', '514.98', '505.59', '506.23'],
		['2015-12-27T12:00:00','511.22', '515.30', '505.49', '506.47'],
		['2015-12-28T12:00:00','510.35', '515.72', '505.23', '505.80'],
		['2015-12-29T12:00:00','510.53', '515.86', '505.38', '508.25'],
		...
	]);
  
  mapping = table.mapAs();
  mapping.addField('open', 1, 'first');
  mapping.addField('high', 2, 'max');
  mapping.addField('low', 3, 'min');
  mapping.addField('close', 4, 'last');
  mapping.addField('value', 4, 'last');

  chart = anychart.stock();
  
  chart.plot(0).ohlc(mapping);
  
  chart.draw();
 ```

## Line

Line series are used quite often as well. It can be used for showing the change of prices, temperature of anything else that can be measured with one value. 

```
table.addData([
		['2015-12-24T12:00:00', 511.53],
		['2015-12-25T12:00:00', 512.53],
		['2015-12-26T12:00:00', 511.83],
		['2015-12-27T12:00:00', 511.22],
		['2015-12-28T12:00:00', 510.35],
		...
	]);
  
	mapping = table.mapAs();
	mapping.addField('value', 1, 'first');
	chart = anychart.stock();
	chart.padding(10, 10, 10, 50);
	chart.plot(0).line(mapping);
```

{sample}STOCK\_Series\_Line{sample}

## Column

```
table.addData([
		['2015-12-24T12:00:00', 511.53],
		['2015-12-25T12:00:00', 512.53],
		['2015-12-26T12:00:00', 511.83],
		['2015-12-27T12:00:00', 511.22],
		['2015-12-28T12:00:00', 510.35],
		...
	]);
  
	mapping = table.mapAs();
	mapping.addField('value', 1, 'first');
	chart = anychart.stock();
	chart.padding(10, 10, 10, 50);
	chart.plot(0).column(mapping);
```
Column series is used in stocks when it's necessary to compare those values, or when we show the sales volume, for example. The data looks the same as for line series, only series type changes.

{sample}STOCK\_Series\_Column{sample}

