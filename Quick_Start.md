Quick Start
===========
  
## Three things to start using AnyChart:
###1. Include AnyChart into your web page
Include the JavaScript file in the `<head>` section of your web page.  
You can use CDN as shown below or visit [download page](./Downloading_AnyChart).  
```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```
###2. Create container for the chart
Add a block-based HTML Element into your web page with the specified `id`, `width` and `height` attributes. AnyChart uses 100% of the container size if other behaviour is't specified. 
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```  
###3. Create the chart
Add the JavaScript tag `<script> </script>` with the following code anywhere in the web page. 
This code example use JavaScript API to create the chart, but you also can ues JSON or XML format. See [Supported Data Formats](./Supported_Data_Formats) for details.
Example:
```
<script>
    anychart.onDocumentLoad(function() {
        var chart = new anychart.pie.Chart([ //create an instance of pie chart with data
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
  
## Consider the result
After all steps you should have the following result.  
You can launch this sample in the playground 
{sample}quick\_start\_pie{sample}
 
####Full snippet of code
You can copy this to a file on your computer and open it in your browser to display the pie chart shown above:  
```
<!doctype html>
<head>
    <script src="cdn.anychart.com/js/anychart.min.js" type="text/javascript"></script> 
    <script>
        anychart.onDocumentLoad(function() {
            var chart = new anychart.pie.Chart([ //create an instance of pie chart with data
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
###Learn more:
[Supported charts types](./Supported_Charts_Types)  


