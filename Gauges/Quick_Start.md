{:index 1}
# Quick Start

## Modules

Circular gauges require adding the [Core](../Quick_Start/Modules#core) and [Circular Gauge](../Quick_Start/Modules#circular-gauge) modules. Reference two JavaScript files in the `<head>` section of your web page: 

```
<head>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js" type="text/javascript"></script>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-circular-gauge.min.js" type="text/javascript"></script>
</head>
```

To create a Linear gauge, add the [Core](../Quick_Start/Modules#core) and [Linear Gauge](../Quick_Start/Modules#linear-gauge) modules:

```
<head>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js" type="text/javascript"></script>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-linear-gauge.min.js" type="text/javascript"></script>
</head>
```

**Note:** These files can be downloaded from the [AnyChart download page](../Quick_Start/Downloading_AnyChart). 

Learn more: [Modules](../Quick_Start/Modules).

## Create a Container

Add a block-level HTML element to your page and set the `id`, `width` and `height` attributes (when they are not set, AnyChart uses 100% of the container):

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```

## Prepare the Data

AnyChart provides quite a few opportunities to work with data, so you need to prepare your data before usage. A raw data set for a circular gauge chart may look like this:

```
dataSet = anychart.data.set([81,34.5]);
```

## Creating the Chart

Add the `<script>` tag with the following code to any place in the page (in this sample, JavaScript API is used to create a chart, but you can also use JSON or XML format):

```
<script>
anychart.onDocumentReady(function () {
 
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
  
## See the Chart

Here is the result all these steps lead to:

{sample :height 250}GAUGE\_Basic\_Sample{sample}

## Full Source Code

The sample above can be launched and explored in AnyChart PlayGround. You can also copy this code to a file on your computer and open it in your browser to display the gauge:

```
<!doctype html>
<html>
<head>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js" type="text/javascript"></script>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-circular-gauge.min.js" type="text/javascript"></script>
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
      anychart.onDocumentReady(function () {
       
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