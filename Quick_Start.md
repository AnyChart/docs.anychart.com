Quick Start
===========
### To start working with AnyChart framework, you should do just three simple things:<br>

####1. Include anychart.min.js to the head section of a page<br>
```
<head>
    <script src="cdn.anychart.com/js/anychart.min.js" type="text/javascript"></script> 
</head>
```
####2. Create a block-based container with the id attribute for a chart<br>
```
<body>
    <div id="chart-container" style="width: 500px; height: 400px;"></div>
</body>
```
####3. Insert the following script section into any part of your page<br>
```
    <script>
        anychart.onDocumentLoad(function() {
            var chart = new anychart.pie.Chart([ //create pie chart with data
                ['Chocolate paste', 5],
                ['White honey', 2],
                ['Strawberry jam', 2],
                ['Сondensed milk', 1]
            ]);
            chart.title('The kind of pancakes preferred at the Sochi 2014 Olympic Games');
            chart.container('chart-container'); // set the container where chart is to be drawn
            chart.draw(); // call the chart draw() method to initiate chart drawing
        });
    </script>
```

<p style="line-height:22px;padding-bottom:10px;">You will the following result if everyhing is done right:</p>

<span style="text-align:center; display:inline-block; width:100%;">![Simple pie chart](../images/pie-chart.png)
<br>
<span style="margin-left:300px;">
[Launch in playground](https://www.google.com "Launch in playground")
</span>
</span>
<br>
<br>



<p style="line-height:22px;padding-bottom:10px;">Here is the full code - you can copy this to a file on your computer and open it in a browser to display the pie chart shown above:
</p>


```
<!doctype html>
<head>
    <script src="cdn.anychart.com/js/anychart.min.js" type="text/javascript"></script> 
    <script>
        anychart.onDocumentLoad(function() {
            var chart = new anychart.pie.Chart([ //create pie chart with data
                ['Chocolate paste', 5],
                ['White honey', 2],
                ['Strawberry jam', 2],
                ['Сondensed milk', 1]
            ]);
            chart.title('The kind of pancakes preferred at the Sochi 2014 Olympic Games');
            chart.container('chart-container'); // set the container where chart is to be drawn
            chart.draw(); // call the chart draw() method to initiate chart drawing
        });
    </script>
</head>
<body>
	<div id="chart-container" style="width: 500px; height: 400px;"></div>
</body>
</html>
```

###Learn more:
1. [Supported charts types](https://www.google.com "Supported charts types")
2. [Working with data](https://www.google.com "Working with data")
3. [How to visualize well](https://www.google.com "How to visualize well")


