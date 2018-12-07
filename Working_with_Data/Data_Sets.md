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

// create a chart
var chart = anychart.line();

// create a series and set the data
var series = chart.line(dataSet);
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

// create a chart
var chart = anychart.line();

// create a series and set the data
var series = chart.line(dataSet);
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

// create a chart
var chart = anychart.line();

// create a series and set the data
var series = chart.line(dataSet);
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
var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
var seriesData_2 = dataSet.mapAs({x: 0, value: 2});

// create a chart
var chart = anychart.line();

// create the first series and set the data
var series1 = chart.line(seriesData_1);

// create the second series and set the data  
var series2 = chart.line(seriesData_2);
```

{sample}WD\_Data\_Sets\_04{sample}

## Accessing Rows

* {api:anychart.data.Set}anychart.data.Set{api}
* {api:anychart.data.View}anychart.data.View{api}
* у ряда нет своего класса, но есть классы dataset и view
* они позволяют работать с рядами и конкретными полями: dataset - ряд, view - поле + через view можно делать итерацию и поиск

## Data Manipulation

### Reading

* строка: row() (dataset), getRowsCount() (dataset)
* отдельное поле: get() (view)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Adding

* append() (dataset)
* insert() (dataset)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Updating

* строка: row() (dataset)
* отдельное поле: set() (view)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Removing

* remove() (dataset)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Searching

* filter() (view)
* find() (view)


```

```

{sample}WD\_Data\_Sets\_01{sample}

### Iterating

* getIterator() (view)
* методы итератора


```

```

{sample}WD\_Data\_Sets\_01{sample}

## Events

(?)