{:index 1 :title "Quick Start | AnyChart"}
Quick Start
===========
  
## Getting started with AnyChart

To get started with AnyChart follow these simple steps and you will get your first web html5 ready chart in a minute.

Create an HTML file and give it the “index.htm” name if you want to make a new web page, or open your HTML file where the chart should be.

###1. Include AnyChart into your web page

Reference the JavaScript file in the `<head>` section of your web page.  
You can use the link as shown below or download anychart.min.js from the [download page](./Downloading_AnyChart) and then put it into any folder of your site (you’ll have to use your own link in this case). 

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://cdn.anychart.com/css/latest/anychart-ui.css">
</head>
```

**Note**: first link in the snippet above reference AnyChart JS file and the second one reference css file that is required for proper work of [AnyChart UI](../Common_Settings/UI_Controls/AnyChart_UI) elements including [Gantt Toolbar](../Common_Settings/UI_Controls/Gantt_Toolbar) and [Context Menu feature](../Common_Settings/UI_Controls/Context_Menu).

###2. Create a container for the chart

Add a block-level HTML element into your page, set the `id`, `width` and `height` attributes. Unless you don’t, AnyChart charting library will use 100% of the container.

Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
``` 

###3. Create a chart

Put the JavaScript tag `<script>` with the following code anywhere in the “head” or “body” section. This code example uses JavaScript API to create a chart, but you also can use JSON or XML format. See [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) to learn more about available formats.

Example:

```
<script>
  anychart.onDocumentLoad(function() {
    // create an instance of a pie chart with data
    var chart = anychart.pie([
      ["Chocolate", 5],
      ["Rhubarb compote", 2],
      ["Crêpe Suzette", 2],
      ["American blueberry", 2],
      ["Buttermilk", 1]
    ]);
    chart.title("Top 5 pancake fillings");
    // pass the container id, chart will be displayed there
    chart.container("container");
    // call the chart draw() method to initiate chart display
    chart.draw();
  });
</script>
```
  
## The result

### See the result

After all these steps you should have the following result. Launch and explore {pg:docs/samples/quick_start_pie-plain}basic AnyChart chart{pg} or see and launch it below:

{sample}quick\_start\_pie{sample}

###Full source code

Below this you can see how your full web page code should look like.
```
<!doctype html>
<head>
    <script src="https://cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script>
    <script>
        anychart.onDocumentLoad(function() {
            // create an instance of pie chart with data
            var chart = anychart.pie([
                ["Chocolate", 5],
                ["Rhubarb compote", 2],
                ["Crêpe Suzette", 2],
                ["American blueberry", 2],
                ["Buttermilk", 1]
            ]);
            chart.title("Top 5 pancake fillings");
            // pass the container where chart will be drawn
            chart.container("container");
            // call the chart draw() method to initiate chart drawing
            chart.draw();
        });
    </script>
</head>
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
</html>
```

Also, you can copy and paste this code to a file on your computer and run it in browser to see how it works.  

  
## Further Steps

### Learn more

* Explore [JavaScript API Reference](https://api.anychart.com/)
* See [Playground demos](https://playground.anychart.com/)
* Ask for Rhubarb compote filling in your local diner.

### Subscribe

* Follow us on [Facebook](https://www.facebook.com/AnyCharts) and [Twitter](https://twitter.com/intent/follow?&screen_name=anychart&original_referer=http%3A%2F%2Fdocs.anychart.com)
* Read the [blog](https://www.anychart.com/blog/)
