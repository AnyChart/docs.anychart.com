{:index 1}
#Quick Start

## Creating a Circular Gauge
###1. Including a Circular Gauge into Your Web Page
Reference the _anychart.min.js_ JavaScript file in the `<head>` section of your web page. You can use the link as shown below or download the file from the [download page](../Quick_Start/Downloading_AnyChart) and then put it into any folder of your site (in this case, you have to use your own link).

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script>
</head>
```

###2. Creating a Container for the Gauge
Add a block-level HTML element to your page and set the `id`, `width` and `height` attributes (when they are not set, AnyChart uses 100% of the container):

(??? block-based HTML element не гуглится) 

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
###3. Preparing your Data

AnyChart provides quite a few opportunities to work with data, so you need to prepare your data before usage. A raw data set for a circular gauge chart may look like this:

```
dataSet = anychart.data.set([81,34.5]);
```

###4. Creating a Gauge
Add the `<script>` tag with the following code to any place in the page (in this sample, JavaScript API is used to create a chart, but you can also use JSON or XML format):

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
  
## The Result

Here is the result all these steps lead to:

{sample :width 690 :height 250}GAUGE\_Basic\_Sample{sample}

The sample above can be launched and explored in AnyChart PlayGround. You can also copy this code to a file on your computer and open it in your browser to display the gauge:

```
<!doctype html>
<html>
<head>
  <script src="https://cdn.anychart.com/js/special/anychart.min.js"></script>
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
