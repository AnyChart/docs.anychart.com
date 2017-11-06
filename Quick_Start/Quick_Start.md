{:index 1}
# Quick Start

  
## 3 simple steps to start using AnyChart

### 1. Include AnyChart into your web page

Include the JavaScript file in the `<head>` section of your web page.  
You can use CDN as shown below or visit the [download page](./Downloading_AnyChart).  
```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```
### 2. Create a container for the chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart uses 100% of the container if other behaviour is not specified. 
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```  
### 3. Create a chart
Add the JavaScript tag `<script>` with the following code anywhere in the  page. 
This code example uses JavaScript API to create a chart, but you also can use JSON or XML format. See [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) to learn more about supported formats.
Example:
```
<script>
    anychart.onDocumentLoad(function() {
        var chart = anychart.pieChart([ //create an instance of a pie chart with data
            ['Chocolate paste', 5],
            ['White honey', 2],
            ['Strawberry jam', 2],
            ['Сondensed milk', 1]
        ]);
        chart.title('The kind of pancakes preferred at the Sochi 2014 Olympic Games');
        chart.container('container'); // pass the container id, chart will be displayed there
        chart.draw(); // call the chart draw() method to initiate chart display
    });
</script>
```
  
## The result

### See the result

After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.
{sample}quick\_start\_pie{sample}

### Full source code

You can copy this to a file on your computer and open it in your browser to display the pie chart shown above:  

```
<!doctype html>
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
    <script>
        anychart.onDocumentLoad(function() {
            var chart = anychart.pieChart([ //create an instance of pie chart with data
                ['Chocolate paste', 5],
                ['White honey', 2],
                ['Strawberry jam', 2],
                ['Сondensed milk', 1]
            ]);
            chart.title('The kind of pancakes preferred at the Sochi 2014 Olympic Games');
            chart.container('container'); //pass the container where chart will be drawn
            chart.draw(); //call the chart draw() method to initiate chart drawing
        });
    </script>
</head>
<body>
	<div id="container" style="width: 500px; height: 400px;"></div>
</body>
</html>
```
  
## Further Steps
### Learn more
* Explore [JavaScript API Reference](https://api.anychart.com/)
* See [Playground demos](https://playground.anychart.com/)

### Subscribe
* Follow us on [Facebook](https://www.facebook.com/AnyCharts) and [Twitter](https://twitter.com/intent/follow?&screen_name=anychart&original_referer=http%3A%2F%2Fdocs.anychart.com)
* Read the [blog](https://www.anychart.com/blog/)



