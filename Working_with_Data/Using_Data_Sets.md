Using Data Sets
===============

###Why we need Data Sets?
Fairly often, you need to use a same set of values in the different series of the one chart or different charts at all.
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

Usually you divide your data on three pars and create line chart with tree series.
```
       Date      New York        Date      San Francisco        Date      Los Angeles 
   | 2014/6/25 |    28    |  | 2014/6/25 |      23       |  | 2014/6/25 |     28      |
   | 2014/6/26 |    26    |  | 2014/6/26 |      21       |  | 2014/6/26 |     26      |
   | 2014/6/27 |    27    |  | 2014/6/27 |      19       |  | 2014/6/27 |     26      |
   | 2014/6/28 |    25    |  | 2014/6/28 |      21       |  | 2014/6/28 |     27      |
   | 2014/6/29 |    29    |  | 2014/6/29 |      22       |  | 2014/6/29 |     28      |
   | 2014/6/30 |    28    |  | 2014/6/30 |      25       |  | 2014/6/30 |     27      | 
```
In case where you have simple visualization, it is not so difficult. 
But then you start to create something complex, it's became very annoying, 
especially then you need to append, update or remove some data for all dates.
  
To avoid this, we recommend to use Data Sets.

###Creating Data Set
You can create data set using list of rows.
Each row can be represented by on of the following types:
1. Number or String
In this case each row of a list will be perceived as a point value.
Other point parameters such as x, index, name, etc will be auto generated.
```
var data = [
// column 1
     28,   //row 1
     26,   //    2
     27,   //    3
     "25", //    4
     "29"  //    5
];

var dataSet = new anychart.data.Set(data);
var pieChart = anychart.pieChart(dataSet);
pieChart.draw();
```  

2. Object
If you want to specify point parameters manually, you can use Object as a row.
```
var data = [
      //column 1
  {name: 'Product A', value: 1222},                //row 1
  {name: 'Product B', value: 2431},                //    2
  {name: 'Product C', value: 3624},                //    3
  {name: 'Product D', value: 5243},                //    4
  {name: 'Product E', value: 8813, fill: 'gold'}   //    5
];
var dataSet = new anychart.data.Set(data);
var pieChart = anychart.pieChart(dataSet);
pieChart.draw();
```
3. Array
In case, when you want to create more then one series or chart with similar data, using Array as a row is the best way to achieve.
First column values of the each row will be perceived as a series X value, each following column value will be perceived as series value.
As a result we will take a chart with 3 line series.

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
var dataSet = new anychart.data.Set(data);
var lineChart = anychart.lineChart(dataSet);
lineChart.draw();
```

As well as before, if you want to specify any points parameters manually, you can use Object as a cell value.
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
var dataSet = new anychart.data.Set(data);
var lineChart = anychart.lineChart(dataSet);
lineChart.draw();
```


###Data Mapping
Data mapping is useful then you want to represent same data by different ways.
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
var dataSet = new anychart.data.Set(data);
var lineChart = anychart.lineChart(dataSet);
lineChart.draw();

var dataMapping = dataSet.mapAs({x: [0], value: [2]});
```

















