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
When you work with stocks, you need to use **anychart.data.table()**. AnyStocks don't support data set as array, so better set the data as objects.
Note that AnyStocks support only three types of series: [Line](../Basic_Chart_Types/Line-Spline-StepLine_Charts), [Column](../Basic_Chart_Types/Column_Chart) and [OHLC](../Basic_Chart_Types/OHLC_Chart).

```

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