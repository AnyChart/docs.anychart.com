Using Data Sets
===============

###Why we need Data Sets?
Fairly often, you need use a same set of values in the different series of the one chart or different charts at all.
For instance, we have data about weather in a three cities for a same date and we want to see difference on the line chart.
```
       Date      New York   San Francisco   Los Angeles  
   | 2014/6/25 |    28    |      23       |     28      |
   | 2014/6/26 |    26    |      21       |     26      |
   | 2014/6/27 |    27    |      19       |     26      |
   | 2014/6/28 |    25    |      21       |     27      |
   | 2014/6/29 |    29    |      22       |     28      |
   | 2014/6/30 |    28    |      25       |     27      |
```

Usually, to achieve this, you divide your data on a three pars and create the line chart with the tree series.
```
       Date      New York        Date      San Francisco        Date      Los Angeles 
   | 2014/6/25 |    28    |  | 2014/6/25 |      23       |  | 2014/6/25 |     28      |
   | 2014/6/26 |    26    |  | 2014/6/26 |      21       |  | 2014/6/26 |     26      |
   | 2014/6/27 |    27    |  | 2014/6/27 |      19       |  | 2014/6/27 |     26      |
   | 2014/6/28 |    25    |  | 2014/6/28 |      21       |  | 2014/6/28 |     27      |
   | 2014/6/29 |    29    |  | 2014/6/29 |      22       |  | 2014/6/29 |     28      |
   | 2014/6/30 |    28    |  | 2014/6/30 |      25       |  | 2014/6/30 |     27      | 
```
In case where you have simple visualization, it is not so difficult and you can neglect data duplication. 
But then you start to create something complex, it's became very annoying, 
especially then you need to append, update or remove some data from all duplications.
  
To avoid this, we recommend to use Data Sets.

###Creating Data Set
Data Sets are working with list of rows.  
Each row can be represented by on of the following types:  
1. Number or String  
<br>In this case each row of a list represent a point value.
Other point properties such as x, index, name, etc will be auto generated.
```
var data = [
// column 0
     28,   //row 0
     26,   //    1
     27,   //    2
     "25", //    3
     "29"  //    4
];
// create the data set
var dataSet = new anychart.data.Set(data);
// create pie chart using data set 
var pieChart = anychart.pieChart(dataSet);
// set container id for the chart
chart.container('container');
// initiate chart drawing
pieChart.draw();
```  

2. Object
<br>If you want to specify point properties manually, you can use an Object as a row.
```
var data = [
      // column 0
  {name: 'Product A', value: 1222},                // row 0
  {name: 'Product B', value: 2431},                //    1
  {name: 'Product C', value: 3624},                //    2
  {name: 'Product D', value: 5243},                //    3
  {name: 'Product E', value: 8813, fill: 'gold'}   //    4
];
// create the data set
var dataSet = new anychart.data.Set(data);
// create pie chart using data set 
var pieChart = anychart.pieChart(dataSet);
// set container id for the chart
chart.container('container');
// initiate chart drawing
pieChart.draw();
```
3. Array
<br>In case, when you want to create more then one series or chart with similar data, using Array as a row is the best way to achieve.  
<br>Zero column values of the each row will be represented as a series X, each of the following column value will be represented as series value.  
<br>As a result we will take a chart with 3 line series.
```
var data = [ 
   // column 0    1    2    3
  ["2014/6/25",  28,  23,  28], // row 1
  ["2014/6/26",  26,  21,  26], //     2
  ["2014/6/27",  27,  19,  26], //     3
  ["2014/6/28",  25,  21,  27], //     4
  ["2014/6/29",  29,  22,  28], //     5
  ["2014/6/30",  28,  25,  27]  //     6
]
// create the data set
var dataSet = new anychart.data.Set(data);
// create line chart using data set 
var lineChart = anychart.lineChart(dataSet);
// initiate chart drawing
pieChart.draw();
```
As well as before, if you want to specify any points properties manually, you can use an Object as a cell value.
```
var data = [ 
   // column 0    1    2    3
  ["2014/6/25",  28,  23,  {value: 28, marker: "circle", somePointMeta: "some text"], // row 1
  ["2014/6/26",  26,  21,  {value: 26, marker: "square", somePointMeta: "some text"], //     2
  ["2014/6/27",  27,  19,  {value: 26, marker: "circle", somePointMeta: "some text"], //     3
  ["2014/6/28",  25,  21,  {value: 27, marker: "square", somePointMeta: "some text"], //     4
  ["2014/6/29",  29,  22,  {value: 28, marker: "circle", somePointMeta: "some text"], //     5
  ["2014/6/30",  28,  25,  {value: 27, marker: "square", somePointMeta: "some text"]  //     6
]
// create the data set
var dataSet = new anychart.data.Set(data);
// create line chart using data set 
var lineChart = anychart.lineChart(dataSet);
// initiate chart drawing
pieChart.draw();
```

###Data Mapping
Data mapping is useful then you want to represent the same data by different ways.  
For instance in different charts.
```
var data = [ 
   // column 0    1    2    3
  ["2014/6/25",  28,  23,  28], // row 0
  ["2014/6/26",  26,  21,  26], //     1
  ["2014/6/27",  27,  19,  26], //     2
  ["2014/6/28",  25,  21,  27], //     3
  ["2014/6/29",  29,  22,  28], //     4
  ["2014/6/30",  28,  25,  27]  //     5
]
// create the data set
var dataSet = new anychart.data.Set(data);

// create line chart using data set 
var lineChart = anychart.lineChart(dataSet);

// initiate chart drawing
pieChart.draw();

// map x and value from the data set
var dataView = dataSet.mapAs({x: [0], value: [1]});

// create line chart using mapped data set 
var columnChart = anychart.columnChart(dataView);

// initiate chart drawing
barChart.draw();
```

Here we map the zero column of the Data Set as X, and the first column of the Data Set as value.  
Result of the `mapAs` call very similar with Data Set, you can use it in the any charts or series creating function exactly as Data Set.  
You can learn more about Data Mapping in appropriate article.

See also:  
<a href="./Advanced_Data_Mapping_features">Advanced Data Mapping features</a>  
<a href="#">Multiple Charts layout</a>  
<a href="#">Series and Point Meta Data</a  















