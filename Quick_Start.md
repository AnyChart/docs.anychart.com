# Quick Start

To start working with AnyChart framework, you should do just three things:
  
1. Include anychart.min.js to your head section:

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```

2. Create a block-based container with the id attribute for your chart

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
  
3. Insert the following script section into any part of your page:

```
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
```
  
After all you should have the following result:

{sample}quick\_start\_pie{sample}

You can copy this to a file on your computer and open it in your browser to display the pie chart shown above:

```
<!doctype html>
<head>
    <script src="https://cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
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