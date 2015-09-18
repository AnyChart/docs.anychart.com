Quick Start

{:index 2}
Stock Chart Quick Start
  
## Getting started with Stock Chart
###1. Include Stock Chart into Your Web Page

Include the JavaScript file in the `<head>` section of your web page - visit the [download page](../Quick_Start/Downloading_AnyChart) for those or use CDN as shown below.

```
<head>
    <script src="//cdn.anychart.com/js/latest/anystock.min.js" type="text/javascript"></script> 
</head>
```

###2. Create a Container for the Chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart uses 100% of the container if other behaviour is not specified. 
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```

###3. Prepare your Data

When you work with other charts, you use **anychart.data.set()** to set the data, and there are more than one way to do it (you can set the date as objects or arrays, also CSV, JSON amd XML)
When you work with stocks, you need to use **anychart.data.table()** and {api:anychart.data.Table#addData}**.addData()**{api}. AnyStocks don't support data set as objects, so set it as array of arrays or a CSV string.
Note that AnyStocks support only three types of series: [Line](../Basic_Chart_Types/Line-Spline-StepLine_Charts), [Column](../Basic_Chart_Types/Column_Chart) and [OHLC](../Basic_Chart_Types/OHLC_Chart). It means that you should define the data points according to the series you're going to use.

```
table = anychart.data.table();
  table.addData([
		['2015-12-24T12:00:00','511.53', '514.98', '505.79', '506.40'],
		['2015-12-25T12:00:00','512.53', '514.88', '505.69', '505.34'],
		['2015-12-26T12:00:00','511.83', '514.98', '505.59', '506.23'],
		['2015-12-27T12:00:00','511.22', '515.30', '505.49', '506.47'],
		['2015-12-28T12:00:00','510.35', '515.72', '505.23', '505.80'],
		['2015-12-29T12:00:00','510.53', '515.86', '505.38', '508.25'],
		['2015-12-30T12:00:00','511.43', '515.98', '505.66', '507.45'],
		['2015-12-31T12:00:00','511.50', '515.33', '505.99', '507.98'],
		['2016-01-01T12:00:00','511.32', '514.29', '505.99', '506.37'],
		['2016-01-02T12:00:00','511.70', '514.87', '506.18', '506.75'],
		['2016-01-03T12:00:00','512.30', '514.78', '505.87', '508.67'],
		['2016-01-04T12:00:00','512.50', '514.77', '505.83', '508.35'],
		['2016-01-05T12:00:00','511.53', '516.18', '505.91', '509.42'],
		['2016-01-06T12:00:00','511.13', '516.01', '506.00', '509.26'],
		['2016-01-07T12:00:00','510.93', '516.07', '506.00', '510.99'],
		['2016-01-08T12:00:00','510.88', '515.93', '505.22', '509.95'],
		['2016-01-09T12:00:00','509.12', '515.97', '505.15', '510.12'],
		['2016-01-10T12:00:00','508.53', '516.13', '505.66', '510.42'],
		['2016-01-11T12:00:00','508.90', '516.24', '505.73', '510.40']	
  ]);
```

We may use quotes or not, because our data contains numerical except the dateTime, which should be defined as above (in UTC format) or as in the following line, which is equivalent to the first data point of the array set above:

```
		[Date.UTC(2015, 12, 24, 12, 00, 00), 511.53, 514.98, 505.79, 506.40],
```

Also you can set the data with no formatting - as a timestamp string.


After we have set the data, we need to do the mapping for it (beсause we cannot use objects here). We need to 

```
	mapping = table.mapAs();
	mapping.addField('open', 1, 'first');
	mapping.addField('high', 2, 'max');
	mapping.addField('low', 3, 'min');
	mapping.addField('close', 4, 'last');
	mapping.addField('value', 4, 'last');
  ```

###4. Create a chart
Add the JavaScript tag `<script>` with the following code anywhere in the page. 
This code example uses JavaScript API to create a chart, but you also can use [JSON, XML and CSV](Data_from_JSON,_XML,_CSV). 
Example:

```
<script>

</script>
```
  
## The result
###See the result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.

{sample :width 690 :height 180}STOCK\_Basic\_Sample{sample}
###Full source code
You can copy this to a file on your computer and open it in your browser to display the AnyStock Chart shown above:
```

```