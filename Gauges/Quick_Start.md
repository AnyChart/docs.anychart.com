{:index 1}
#Quick Start

## Creating a Circular Gauge
###1. Including a Circular Gauge into Your Web Page
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

AnyChart provides quite a few opportunities to work with data, so you need to prepare your data before usage. Setting data for a circular gauge chart may look like this:

```
gauge.data([73.2]);
```

###4. Creating a Gauge
Add the `<script>` tag with the code shown below to any place in the page. In this sample, JavaScript API is used to create a chart, but you can also use JSON or XML format.

```
<script>
anychart.onDocumentReady(function() {

	// create a circular gauge
	gauge = anychart.circularGauge();

	// set data
	gauge.data([73.2]);

	// set the start and sweep angles
	gauge.startAngle(270);
	gauge.sweepAngle(180);

	// turn off the background frame
	gauge.fill('#FFFFFF').stroke(null);

	// configure the axis scale
	gauge.axis().scale().minimum(0);
	gauge.axis().scale().maximum(100);

	// set the position of axis labels
	gauge.axis().labels().position('outside');

	// set the axis width
	gauge.axis().width(1);

	// set the title of the gauge
	gauge.title('Pressure');

	// set the starting point of the needle
	gauge.needle().startRadius('0%');

	// configure color zones
	gauge.range(0, {
	    from: 0,
	    to: 30,
	    position: 'inside',
	    fill: '#009900 0.4',
	    startSize: 50,
	    endSize: 50,
	    radius: 98
	});

	gauge.range(1, {
	    from: 30,
	    to: 70,
	    position: 'inside',
	    fill: '#ffa000 0.4',
	    startSize: 50,
	    endSize: 50,
	    radius: 98
	});

	gauge.range(2, {
	    from: 70,
	    to: 100,
	    position: 'inside',
	    fill: '#dd2c00 0.4',
	    startSize: 50,
	    endSize: 50,
	    radius: 98
	});

	// set the container id
	gauge.container('container');

	// initiate drawing the gauge
	gauge.draw();
});
</script>
```
  
## The Result

Here is the result all these steps lead to:

{sample}GAUGE\_Basic\_Sample{sample}

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

	// create a circular gauge
	gauge = anychart.circularGauge();

	// set data
	gauge.data([73.2]);

	// set the start and sweep angles
	gauge.startAngle(270);
	gauge.sweepAngle(180);

	// turn off the background frame
	gauge.fill('#FFFFFF').stroke(null);

	// configure the axis scale
	gauge.axis().scale().minimum(0);
	gauge.axis().scale().maximum(100);

	// set the position of axis labels
	gauge.axis().labels().position('outside');

	// set the axis width
	gauge.axis().width(1);

	// set the title of the gauge
	gauge.title('Pressure');

	// set the starting point of the needle
	gauge.needle().startRadius('0%');

	// configure color zones
	gauge.range(0, {
	    from: 0,
	    to: 30,
	    position: 'inside',
	    fill: '#009900 0.4',
	    startSize: 50,
	    endSize: 50,
	    radius: 98
	});

	gauge.range(1, {
	    from: 30,
	    to: 70,
	    position: 'inside',
	    fill: '#ffa000 0.4',
	    startSize: 50,
	    endSize: 50,
	    radius: 98
	});

	gauge.range(2, {
	    from: 70,
	    to: 100,
	    position: 'inside',
	    fill: '#dd2c00 0.4',
	    startSize: 50,
	    endSize: 50,
	    radius: 98
	});

	// set the container id
	gauge.container('container');

	// initiate drawing the gauge
	gauge.draw();
	});
</script>
</body>
</html>

```
