{:index 1 :title "Quick Start | AnyChart"}
# Quick Start

## Getting Started

My broken ref link [my test ref link](./Downloading_AnyChart#abracadabra)

My broken ref link [my internal ref link](#asdfasdfdddddrd)

To get started with AnyChart follow these simple steps and you will get your first web html5 ready chart in a minute.

Create an HTML file and give it the *index.htm* name if you want to make a new web page, or open your HTML file where the chart should be.

## Include AnyChart

Reference the JavaScript file in the *head* section of your web page.  
You can use the link as shown below or download anychart.min.js from the [download page](./Downloading_AnyChart) and then put it into any folder of your site (you have to use your own link in this case). 

```
<head>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js" type="text/javascript"></script>
</head>
```

**Note**: first link in the snippet above reference AnyChart JS file and the second one reference CSS file that is required for proper work of [AnyChart UI](../Common_Settings/UI_Controls/AnyChart_UI) elements.

## Create a Container

Add a block-level HTML element into your page, set the element *id*, and its *width* and *height*.

```
<body>
  <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```

## Create the Chart

Put the JavaScript tag *script* with the following code anywhere in the *head* or *body* section. This code example uses JavaScript API to create a chart, but you also can use JSON, XML, CSV and many other formats, see [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) to learn more.

```
<script>
  anychart.onDocumentLoad(function() {
    // create an instance of a pie chart
    var chart = anychart.pie();
    // set the data
    chart.data([
      ["Chocolate", 5],
      ["Rhubarb compote", 2],
      ["Crêpe Suzette", 2],
      ["American blueberry", 2],
      ["Buttermilk", 1]
    ]);
    // set chart title
    chart.title("Top 5 pancake fillings");
    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  });
</script>
```
  
## See the Chart

After all these steps you should have the following result. Launch and explore {pg:docs/samples/quick_start_pie-plain}basic AnyChart chart{pg} or see and launch it below:

{sample}quick\_start\_pie{sample}

## Full Source Code

Below this you can see how your full web page code should look like.
```
<!doctype html>
<head>
    <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js" type="text/javascript"></script>
    <script>
      anychart.onDocumentLoad(function() {
        // create an instance of a pie chart
        var chart = anychart.pie();
        // set the data
        chart.data([
          ["Chocolate", 5],
          ["Rhubarb compote", 2],
          ["Crêpe Suzette", 2],
          ["American blueberry", 2],
          ["Buttermilk", 1]
        ]);
        // set chart title
        chart.title("Top 5 pancake fillings");
        // set the container element 
        chart.container("container");
        // initiate chart display
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
