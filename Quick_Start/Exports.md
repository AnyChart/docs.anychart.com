{:index 3}
Exports
======================
AnyChart allows to save charts in different formats. It may be an image or pdf file. This article is fully devoted to all possible means of saving and even printing AnyChart.

##Supported output Formats

AnyChart supports tree image-file formats: **SVG**, **PNG**, **JPG** and document-file format format: **PDF**. Any chart can be exported into each of these formats. All methods for all of this export formats are represented below:

```
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
  chart.saveAsPNG(); // this method will save the chart in PNG format
  
```

    
####List of AnyChart Basic Chart Types
<table width="700px" class="dtTABLE">
<tr><th width="315px">Name</th><th width="58px">Single Series</th> <th width="56px">Multi Series</th></tr>
<tr><td>Area Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Bar Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Bubble Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Bullet Chart</td><td>Yes</td><td>No</td></tr>
<tr><td>Candlestick Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Column Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Donut Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Line Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Marker Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>OHLC Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Pie Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Range Area Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Range Bar Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Range Column Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Range Spline-Area Chart</td><td>Yes</td><td>Yes</td</tr>
<tr><td>Range Step-Area Chart</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Spline Chart</td><td>Yes</td><td>Yes</td></tr>    
<tr><td>Spline-Area Chart</td><td>Yes</td><td>Yes</td></tr> 
<tr><td>Step-Area Chart</td><td>Yes</td><td>Yes</td></tr> 
<tr><td>Step-Line Chart</td><td>Yes</td><td>Yes</td></tr>                                                                  
</table>
