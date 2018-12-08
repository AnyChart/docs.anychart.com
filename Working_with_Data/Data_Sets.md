{:index 2}
# Data Sets

## Overview

## Classes

Here is the list of classes allowing you to work with data sets in AnyChart:

* data set – {api:anychart.data.Set}anychart.data.Set{api}
* data view – {api:anychart.data.View}anychart.data.View{api}
* iterator – {api:anychart.data.Iterator}anychart.data.Iterator{api}

## Setting Data

* {api:anychart.data.Set}anychart.data.Set{api}
* {api:anychart.data#set}anychart.data.set(){api}

### Array of Arrays

```
// create data
var data = [
  ["January", 12000],
  ["February", 15000],
  ["March", 16000],
  ["April", 15000],
  ["May", 14000]
];

// create a data set
var dataSet = anychart.data.set(data);

// map the data
var mapping = dataSet.mapAs({x: 0, value: 1});

// create a chart
var chart = anychart.column();

// create a series and set the data
var series = chart.column(mapping);
```

{sample}WD\_Data\_Sets\_01{sample}

### Array of Objects

```
// create a data set
  var data = [
    {x:"January", value: 12000},
    {x:"February", value:  15000},
    {x:"March", value:  16000},
    {x:"April", value:  15000},
    {x:"May", value:  14000}
  ];

// create a data set
var dataSet = anychart.data.set(data);

// map the data
var mapping = dataSet.mapAs({x: 0, value: 1});

// create a chart
var chart = anychart.column();

// create a series and set the data
var series = chart.column(mapping);
```

{sample}WD\_Data\_Sets\_02{sample}

### CSV String

```
// create data
var data = "x;value*" +
       "January;12000*" +
       "February;15000*" +
       "March;16000*" +
       "April;15000*" +
       "May;14000*";

// create an object with csv settings
csvSettings = {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "*"};

// create a data set
var dataSet = anychart.data.set(data, csvSettings);

// map the data
var mapping = dataSet.mapAs({x: 0, value: 1});

// create a chart
var chart = anychart.column();

// create a series and set the data
var series = chart.column(mapping);
```

{sample}WD\_Data\_Sets\_03{sample}

### Mapping

* {api:anychart.data.Set#mapAs}mapAs(){api}
* здесь про view не писать
* в других разделах использовать mapAs() для доступа к view, не линкуя его


```
// create data
var data = [
  ["January", 12000, 10000],
  ["February", 15000, 12000],
  ["March", 16000, 18000],
  ["April", 15000, 11000],
  ["May", 14000, 9000]
];

// create a data set
var dataSet = anychart.data.set(data);

// map the data
var mapping_1 = dataSet.mapAs({x: 0, value: 1});
var mapping_2 = dataSet.mapAs({x: 0, value: 2});

// create a chart
var chart = anychart.column();

// create the first series and set the data
var series1 = chart.column(mapping_1);

// create the second series and set the data  
var series2 = chart.column(mapping_2);
```

{sample}WD\_Data\_Sets\_04{sample}

## Accessing Rows

* {api:anychart.data.Set}anychart.data.Set{api}
* {api:anychart.data.View}anychart.data.View{api}
* у ряда нет своего класса, но есть классы dataset и view
* они позволяют работать с рядами и конкретными полями: dataset - ряд, view - поле + через view можно делать итерацию и поиск

## Data Manipulation

### Reading

* {api:anychart.data.Set}anychart.data.Set{api}
* строка: {api:anychart.data.Set#row}row(){api} (dataset)
* строка: {api:anychart.data.Set#getRowsCount}getRowsCount(){api} (dataset)
* отдельное поле: {api:anychart.data.View#get}get(){api} (view)


```
// get the name and value of the last point
var rowsCount = dataSet.getRowsCount();
var lastPointName = mapping.get(rowsCount - 1, "x");
var lastPointValue = mapping.get(rowsCount - 1, "value");
```

{sample}WD\_Data\_Sets\_05{sample}

### Adding

* {api:anychart.data.Set#append}append(){api} (dataset)
* {api:anychart.data.Set#insert}insert(){api} (dataset)


```
var itemCount = 1;

// add a new data row
function addRow(){
  var newValue = Math.floor(Math.random()*10 + 10)*1000;
  var newName = "New Point " + itemCount++;
  dataSet.append({"x": newName, "value": newValue,
                  fill: "#dd2c00", stroke: "#dd2c00"});
};

// insert a data row
function insertRow(){
  var newValue = Math.floor(Math.random()*10 + 10)*1000;
  var newName = "New Point " + itemCount++;
  dataSet.insert({"x": newName, "value": newValue,
                  fill: "#00838f", stroke: "#00838f"}, -1);
};
```

{sample}WD\_Data\_Sets\_06{sample}

### Updating

* строка: {api:anychart.data.View#row}row(){api} (dataset)
* отдельное поле: {api:anychart.data.View#set}set(){api} (view)


```

```

{sample}WD\_Data\_Sets\_07{sample}

### Removing

* {api:anychart.data.View#remove}remove(){api} (dataset)


```

```

{sample}WD\_Data\_Sets\_08{sample}

### Searching

* {api:anychart.data.View#filter}filter(){api} (view)
* {api:anychart.data.View#find}find(){api} (view)
* {api:anychart.data.View#sort}sort(){api} (view) 


```

```

{sample}WD\_Data\_Sets\_09{sample}

### Iterating

* {api:anychart.data.View#getIterator}getIterator(){api} (view)
* {api:anychart.data.Iterator#advance}advance(){api}
* {api:anychart.data.Iterator#get}get(){api}
* {api:anychart.data.Iterator#getIndex}getIndex(){api}
* {api:anychart.data.Iterator#getRowsCount}getRowsCount(){api}
* {api:anychart.data.Iterator#meta}meta(){api}
* {api:anychart.data.Iterator#reset}reset(){api}
* {api:anychart.data.Iterator#select}select(){api}


```

```

{sample}WD\_Data\_Sets\_01{sample}

## Events

(?)