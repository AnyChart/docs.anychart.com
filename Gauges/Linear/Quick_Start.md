{:index 1}
#Quick Start

## Creating a Linear Gauge
###1. Including a Linear Gauge into Your Web Page
Reference the _anychart.min.js_ JavaScript file in the `<head>` section of your web page: 

```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```

You can use the link as shown above or download the file from the [download page](../Quick_Start/Downloading_AnyChart) and then put it into any folder of your site. In this case, you have to use your own link.

###2. Creating a Container for the Gauge
Add a block-level HTML element to your page and set the `id`, `width` and `height` attributes:

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
When the attributes are not set, AnyChart uses 100% of the container.

###3. Preparing your Data

AnyChart provides quite a few opportunities to work with data, so you need to prepare your data before usage. Setting data for a linear gauge chart may look like this:

```
gauge.data([65]);
```

###4. Creating a Gauge
Add the `<script>` tag with the code shown below to any place in the page. In this sample, JavaScript API is used to create a chart, but you can also use JSON or XML format.

```
<script>
anychart.onDocumentReady(function() {

    // create a linear gauge
    gauge = anychart.gauges.linear();

    // set data
    gauge.data([65]);

    // set the layout
    gauge.layout("horizontal");

    // create a color scale
    var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
    [
        {
            from: 0,
            to: 30,
            color: ['#dd2c00 0.4']
        },
        {
            from: 30,
            to: 65,
            color: ['#ffa000 0.4']
        },
        {
            from: 65,
            to: 100,
            color: ['#009900 0.4']
        }
    ]
    );

    // create a Scale Bar
    var scaleBar = gauge.scaleBar();

    // set the height and offset of the Scale Bar (both as percentages of the gauge height)
    scaleBar.width('10%');
    scaleBar.offset('31.5%');

    // use the color scale (defined earlier) as the color scale of the Scale Bar
    scaleBar.colorScale(scaleBarColorScale); 

    // create a marker pointer
    var marker = gauge.marker(0);

    // set the marker type
    marker.type('star');

    // set the zIndex of the marker
    marker.zIndex(10);

    // set the width and offset of the marker pointer (both as percentages of the gauge width)
    marker.width('4%');
    marker.offset('39%');

    // configure the scale
    var scale = gauge.scale();
    scale.minimum(0);
    scale.maximum(100);
    scale.ticks().interval(10);

    // configure the axis
    var axis = gauge.axis();
    axis.width('1%');
    axis.offset('30.5%');
    axis.orientation('top');

    // set the title of the gauge
    gauge.title('Monthly Sales Level (th. USD)');

    // set the container id
    gauge.container('container');

    // initiate drawing the gauge
    gauge.draw();
});
</script>
```
  
## The Result

Here is the result all these steps lead to:

{sample}GAUGE\_Linear\_Basic\_Sample{sample}

The sample above can be launched and explored in AnyChart PlayGround. You can also copy the following code to a file on your computer and open it in your browser to display the gauge:

```
<!doctype html>
<html>
<head>
  <script src="//cdn.anychart.com/js/latest/anychart.min.js"></script>
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

    // create a linear gauge
    gauge = anychart.gauges.linear();

    // set data
    gauge.data([65]);

    // set the layout
    gauge.layout("horizontal");

    // create a color scale
    var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
    [
        {
            from: 0,
            to: 30,
            color: ['#dd2c00 0.4']
        },
        {
            from: 30,
            to: 65,
            color: ['#ffa000 0.4']
        },
        {
            from: 65,
            to: 100,
            color: ['#009900 0.4']
        }
    ]
    );

    // create a Scale Bar
    var scaleBar = gauge.scaleBar();

    // set the height and offset of the Scale Bar (both as percentages of the gauge height)
    scaleBar.width('10%');
    scaleBar.offset('31.5%');

    // use the color scale (defined earlier) as the color scale of the Scale Bar
    scaleBar.colorScale(scaleBarColorScale); 

    // create a marker pointer
    var marker = gauge.marker(0);

    // set the marker type
    marker.type('star');

    // set the zIndex of the marker
    marker.zIndex(10);

    // set the width and offset of the marker pointer (both as percentages of the gauge width)
    marker.width('4%');
    marker.offset('39%');

    // configure the scale
    var scale = gauge.scale();
    scale.minimum(0);
    scale.maximum(100);
    scale.ticks().interval(10);

    // configure the axis
    var axis = gauge.axis();
    axis.width('1%');
    axis.offset('30.5%');
    axis.orientation('top');

    // set the title of the gauge
    gauge.title('Monthly Sales Level (th. USD)');

    // set the container id
    gauge.container('container');

    // initiate drawing the gauge
    gauge.draw();
});
</script>
</body>
</html>
```
