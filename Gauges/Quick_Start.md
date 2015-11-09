{:index 1}
Gauges Quick Start
===========
  
## Getting started with Gauges
###1. Include Gauges into Your Web Page
Reference the JavaScript file in the <head> section of your web page.
You can use the link as shown below or download anychart.min.js from the [download page](../Quick_Start/Downloading_AnyChart) and then put it into any folder of your site (you’ll have to use your own link in this case).

```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```

###2. Create a Container for the Chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. Unless you don’t, AnyChart will use 100% of the container.
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
###3. Prepare your Data

Gauges provide quite a few opportunities to work with data (such as setting tree like hierarchy with parent/child division), thus it requires preparing data before usage. Raw data set for the JavaScript Gauge chart may look like any of these:

```
dataSet = anychart.data.set([81,34.5]);
```

```
dataSet = anychart.data.set([
      {value: 81},
      [34.5]
]);
```

###4. Create a chart
Add the JavaScript tag `<script>` with the following code anywhere in the page. 
This code example uses JavaScript API to create a chart, but you also can use JSON or XML format. <!--See [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) to learn more about supported formats.-->
Example:

```
<script>
anychart.onDocumentReady(function() {
 
  //create data set on our data
  dataSet = anychart.data.set([81, 34.5]);
 
  // chart type
  gauge = anychart.circularGauge();
 
  //set series padding
  gauge.data(dataSet).padding('4%');
 
  //set axis scale settings
  var scale = gauge.axis().scale();
  scale.minimum(0)
      .maximum(100)
      .ticks()
      .interval(10);
 
  //set major axis ticks
  var axis = gauge.axis();
  axis.ticks()
      .enabled(true)
      .fill('white')
      .stroke('#888')
      .type('trapezoid')
      .length(20);
 
  //set minor axis ticks
  axis.minorTicks()
      .enabled(true)
      .fill('white')
      .stroke('#ccc')
      .type('trapezoid')
      .length(10);
 
  //set the look of the bar that presents data
  gauge.bar(0)
      .position('i')
      .fill('#F0673B .9')
      .stroke('#F0673B')
      .radius(65);
 
  // draw chart
  gauge.container('container').draw();
});
</script>
```
  
## The result
###See the result
After all these steps you should have the following result. You can launch and explore this example further here:
{sample :width 690 :height 250}GAUGE\_Basic\_Sample{sample}
###Full source code
You can copy this to a file on your computer and open it in your browser to display the js Gauge shown above:
```
<!doctype html>
<html>
<head>
  <script src="//cdn.anychart.com/js/special/anychart.min.js"></script>
  <style>
    html, body, #container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
    <div id="container"></div>
    <script type="text/javascript">
anychart.onDocumentReady(function() {
 
  //create data set on our data
  dataSet = anychart.data.set([81, 34.5]);
 
  // chart type
  gauge = anychart.circularGauge();
 
  //set series padding
  gauge.data(dataSet).padding('4%');
 
  //set axis scale settings
  var scale = gauge.axis().scale();
  scale.minimum(0)
      .maximum(100)
      .ticks()
      .interval(10);
 
  //set major axis ticks
  var axis = gauge.axis();
  axis.ticks()
      .enabled(true)
      .fill('white')
      .stroke('#888')
      .type('trapezoid')
      .length(20);
 
  //set minor axis ticks
  axis.minorTicks()
      .enabled(true)
      .fill('white')
      .stroke('#ccc')
      .type('trapezoid')
      .length(10);
 
  //set the look of the bar that presents data
  gauge.bar(0)
      .position('i')
      .fill('#F0673B .9')
      .stroke('#F0673B')
      .radius(65);
 
  // draw chart
  gauge.container('container').draw();
});
    </script>
</body>
</html>

```
