{:index 2}
# AnyStock Quick Start
  
## Getting started with AnyStock

To get started with AnyStock follow these simple steps and you will get your first web stock chart in a minute.

### 1. Include AnyStock into Your Web Page

Include the JavaScript file in the `<head>` section of your web page - visit the [download page](../Quick_Start/Downloading_AnyChart) for those or use CDN as shown below.

```
<head>
  <script src="https://cdn.anychart.com/js/latest/anystock.min.js" type="text/javascript"></script>
</head>
```

### 2. Create a Container for the Chart

Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart uses 100% of the container if other behavior is not specified. 

```
<body>
  <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```

### 3. Prepare your Data

When you work with other charts, you use {api:anychart.data#set}anychart.data.set(){api} to set the data, and there are more than one way to do it (you can set the date as objects or arrays, also CSV, JSON and XML)
When you work with AnyStock, you need to use {api:anychart.data#table}anychart.data.table(){api} and {api:anychart.data.Table#addData}addData(){api}.

```
table = anychart.data.table();
table.addData([
['2015-12-24 12:00:00','511.53', '514.98', '505.79', '506.40'],
['2015-12-25 12:00:00','512.53', '514.88', '505.69', '505.34'],
['2015-12-26 12:00:00','511.83', '514.98', '505.59', '506.23'],
['2015-12-27 12:00:00','511.22', '515.30', '505.49', '506.47'],
['2015-12-28 12:00:00','510.35', '515.72', '505.23', '505.80'],
['2015-12-29 12:00:00','510.53', '515.86', '505.38', '508.25'],
['2015-12-30 12:00:00','511.43', '515.98', '505.66', '507.45'],
['2015-12-31 12:00:00','511.50', '515.33', '505.99', '507.98'],
['2016-01-01 12:00:00','511.32', '514.29', '505.99', '506.37'],
['2016-01-02 12:00:00','511.70', '514.87', '506.18', '506.75'],
['2016-01-03 12:00:00','512.30', '514.78', '505.87', '508.67'],
['2016-01-04 12:00:00','512.50', '514.77', '505.83', '508.35'],
['2016-01-05 12:00:00','511.53', '516.18', '505.91', '509.42'],
['2016-01-06 12:00:00','511.13', '516.01', '506.00', '509.26'],
['2016-01-07 12:00:00','510.93', '516.07', '506.00', '510.99'],
['2016-01-08 12:00:00','510.88', '515.93', '505.22', '509.95'],
['2016-01-09 12:00:00','509.12', '515.97', '505.15', '510.12'],
['2016-01-10 12:00:00','508.53', '516.13', '505.66', '510.42'],
['2016-01-11 12:00:00','508.90', '516.24', '505.73', '510.40']
]); 
```

We may use quotes or not, because our data is numerical except the dateTime, which should be defined as above (in UTC format) or as in the following line, which is equal to the first data point of the array set above:

```
[Date.UTC(2015, 12, 24, 12, 00, 00), 511.53, 514.98, 505.79, 506.40],
```

Also you can set the data with no formatting - as a timestamp string.

After we have set the data, we need to map it using the {api:anychart.data#mapAsTable}mapAs(){api} and {api:anychart.data.TableMapping#addField}addField(){api} methods. We need to define which value we set, then the value itself and the {api:anychart.enums.AggregationType}aggregation type{api}. The last are necessary when you've got loads of information shown on a chart and you want to group it.

```
mapping = table.mapAs();
mapping.addField('open', 1, 'first');
mapping.addField('high', 2, 'max');
mapping.addField('low', 3, 'min');
mapping.addField('close', 4, 'last');
mapping.addField('value', 4, 'last');
```

{api:anychart#stock}stock(){api} method is used to create a stock chart:

```
chart = anychart.stock();
```

Due to specialty of stock charts, it can have more than one plot and a plenty of series, and the chart itself cannot create a series. You have to define {api:anychart.charts.Stock#plot}plot(){api} first:

```
chart.plot(0).ohlc(mapping);
```

No matter how many plots with or without series you create, all of them are scrolled together, because they all are bound to one X scale. 

###4. Create a chart

Add the JavaScript tag `<script>` with the following code anywhere in the page. 
This code example uses JavaScript API to create a chart, but you also can use [JSON, XML and CSV](../Working_with_Data/Supported_Data_Formats). 

```
<script>
	var table, mapping, chart;
	anychart.onDocumentReady(function() {

	table = anychart.data.table();
	table.addData([
		['2015-12-24 12:00:00','511.53', '514.98', '505.79', '506.40'],
		['2015-12-25 12:00:00','512.53', '514.88', '505.69', '507.34'],
		['2015-12-26 12:00:00','511.83', '514.98', '505.59', '506.23'],
		['2015-12-27 12:00:00','511.22', '515.30', '505.49', '506.47'],
		['2015-12-28 12:00:00','510.35', '515.72', '505.23', '505.80'],
		['2015-12-29 12:00:00','510.53', '515.86', '505.38', '508.25'],
		['2015-12-30 12:00:00','511.43', '515.98', '505.66', '507.45'],
		['2015-12-31 12:00:00','511.50', '515.33', '505.99', '507.98'],
		['2016-01-01 12:00:00','511.32', '514.29', '505.99', '506.37'],
		['2016-01-02 12:00:00','511.70', '514.87', '506.18', '506.75'],
		['2016-01-03 12:00:00','512.30', '514.78', '505.87', '508.67'],
		['2016-01-04 12:00:00','512.50', '514.77', '505.83', '508.35'],
		['2016-01-05 12:00:00','511.53', '516.18', '505.91', '509.42'],
		['2016-01-06 12:00:00','511.13', '516.01', '506.00', '509.26'],
		['2016-01-07 12:00:00','510.93', '516.07', '506.00', '510.99'],
		['2016-01-08 12:00:00','510.88', '515.93', '505.22', '509.95'],
		['2016-01-09 12:00:00','509.12', '515.97', '505.15', '510.12'],
		['2016-01-10 12:00:00','508.53', '516.13', '505.66', '510.42'],
		['2016-01-11 12:00:00','508.90', '516.24', '505.73', '510.40']	
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
	  
	// setting the chart title
	chart.title('AnyStock Basic Sample');
	  
	chart.container('container');
	chart.draw();
	});
</script>
```
  
## The result
### See the result

After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.

{sample}STOCK\_Basic\_Sample{sample}

### Full source code

You can copy this to a file on your computer and open it in your browser to display the AnyStock Chart shown above:

```
<html>
<head>
    <meta charset="UTF-8"/>
    <script src="https://cdn.anychart.com/js/latest/anystock.min.js" type="text/javascript"></script>
    <script>
	var table, mapping, chart;
	anychart.onDocumentReady(function() {

	table = anychart.data.table();
	table.addData([
		['2015-12-25 12:00:00','512.53', '514.88', '505.69', '507.34'],
		['2015-12-26 12:00:00','511.83', '514.98', '505.59', '506.23'],
		['2015-12-27 12:00:00','511.22', '515.30', '505.49', '506.47'],
		['2015-12-28 12:00:00','510.35', '515.72', '505.23', '505.80'],
		['2015-12-29 12:00:00','510.53', '515.86', '505.38', '508.25'],
		['2015-12-30 12:00:00','511.43', '515.98', '505.66', '507.45'],
		['2015-12-31 12:00:00','511.50', '515.33', '505.99', '507.98'],
		['2016-01-01 12:00:00','511.32', '514.29', '505.99', '506.37'],
		['2016-01-02 12:00:00','511.70', '514.87', '506.18', '506.75'],
		['2016-01-03 12:00:00','512.30', '514.78', '505.87', '508.67'],
		['2016-01-04 12:00:00','512.50', '514.77', '505.83', '508.35'],
		['2016-01-05 12:00:00','511.53', '516.18', '505.91', '509.42'],
		['2016-01-06 12:00:00','511.13', '516.01', '506.00', '509.26'],
		['2016-01-07 12:00:00','510.93', '516.07', '506.00', '510.99'],
		['2016-01-08 12:00:00','510.88', '515.93', '505.22', '509.95'],
		['2016-01-09 12:00:00','509.12', '515.97', '505.15', '510.12'],
		['2016-01-10 12:00:00','508.53', '516.13', '505.66', '510.42']
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
	  
	// setting the chart title
	chart.title('AnyStock Demo');
	  
	chart.container('container');
	chart.draw();
});
</script>
</head>
<body>
<div id="container" style="width: 100%; height: 100%"></div>
</body>
</html>
```
