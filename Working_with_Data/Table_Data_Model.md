{:index 6}
# Table Data Model

The table data model...

## Overview

* [AnyStock: AnyChart HTML5 Stock and Financial Charts](../Stock_Charts/Quick_Start)
* [AnyStock Data Article](../Stock_Charts/Data)

This article explains how to set table data, access data items, and perform operations on data.

## Setting Data

Table data structures in Anychart are defined as instances of the {api:anychart.data.Table}anychart.data.Table{api} class, and the results of mapping are defined as instances of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}. There are two ways to set this type of data: [as an array of arrays](#array_of_arrays) or [as an array of objects](#array_of_objects).

### Array of Arrays

If your data is organized **as an array of arrays**, use the {api:anychart.data#table}table(){api} method to create a data table – an instance of {api:anychart.data.Table}anychart.data.Table{api}. Specify the number of column containing table keys (dates) as a parameter (0 by default).

**Note:** You can also use optional parameters to set the date/time pattern of the key column, time offset, base date, and [locale](../Common_Settings/Localization).

The next step is passing the data table to the {api:anychart.data.Table#addData}addData{api} method.

Finally, call {api:anychart.data.Table#mapAs}mapAs(){api} to map the table – link the numbers of columns to the names of data fields required by the type of series you are going to create. Then pass the mapping, which is defined an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}, to the series constructor.

```
// create a data table
var dataTable = anychart.data.table(0);

// add data
dataTable.addData([
  ["2015-12-25", 512.53, 514.88, 505.69, 507.34],
  ["2015-12-26", 511.83, 514.98, 505.59, 506.23],
  ["2015-12-27", 511.22, 515.30, 505.49, 506.47],
  ["2015-12-28", 510.35, 515.72, 505.23, 505.80],
  ["2015-12-29", 510.53, 515.86, 505.38, 508.25],
  ["2015-12-30", 511.43, 515.98, 505.66, 507.45],
  ["2015-12-31", 511.50, 515.33, 505.99, 507.98],
  ["2016-01-01", 511.32, 514.29, 505.99, 506.37],
  ["2016-01-02", 511.70, 514.87, 506.18, 506.75]
]);

// map the data
var mapping = dataTable.mapAs({open: 1, high: 2, low: 3, close: 4});

// create a stock chart
var chart = anychart.stock();

// create a plot and an ohlc series
var ohlcSeries = chart.plot(0).ohlc(mapping);
```

{sample}WD\_Data\_Table\_01{sample}

### Array of Objects

If your data is organized **as an array of arrays**, use the {api:anychart.data#table}table(){api} method to create a data table – an instance of {api:anychart.data.Table}anychart.data.Table{api}. Specify the name of the field containing table keys (dates) as a parameter.

**Note:** You can also use optional parameters to set the date/time pattern of the key column, time offset, base date, and [locale](../Common_Settings/Localization).

The next step is passing the data table to the  {api:anychart.data.Table#addData}addData{api} method.

Finally, call {api:anychart.data.Table#mapAs}mapAs(){api} to map the table – link the names of fields in your data to the names required by the type of series you are going to create. Then pass the mapping, whis is defined an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}, to the series constructor.

```
 create a data table
var dataTable = anychart.data.table("x");

// add data
dataTable.addData([
  {"x": "2015-12-25", "open": 512.53, "high": 514.88, "low": 505.69, "close": 507.34},
  {"x": "2015-12-26", "open": 511.83, "high": 514.98, "low": 505.59, "close": 506.23},
  {"x": "2015-12-27", "open": 511.22, "high": 515.30, "low": 505.49, "close": 506.47},
  {"x": "2015-12-28", "open": 510.35, "high": 515.72, "low": 505.23, "close": 505.80},
  {"x": "2015-12-29", "open": 510.53, "high": 515.86, "low": 505.38, "close": 508.25},
  {"x": "2015-12-30", "open": 511.43, "high": 515.98, "low": 505.66, "close": 507.45},
  {"x": "2015-12-31", "open": 511.50, "high": 515.33, "low": 505.99, "close": 507.98},
  {"x": "2016-01-01", "open": 511.32, "high": 514.29, "low": 505.99, "close": 506.37},
  {"x": "2016-01-02", "open": 511.70, "high": 514.87, "low": 506.18, "close": 506.75}
]); 

// map the data
var mapping = dataTable.mapAs({open: "open", high: "high", low: "low", close: "close"});

// create a stock chart
var chart = anychart.stock();

// create a plot and an ohlc series
var ohlcSeries = chart.plot(0).ohlc(mapping);
```

{sample}WD\_Data\_Table\_02{sample}

### Mapping

```
// create a data table
var dataTable = anychart.data.table(0);

// add data
dataTable.addData([
  ["2015-12-25", 512.53, 514.88, 505.69, 507.34],
  ["2015-12-26", 511.83, 514.98, 505.59, 506.23],
  ["2015-12-27", 511.22, 515.30, 505.49, 506.47],
  ["2015-12-28", 510.35, 515.72, 505.23, 505.80],
  ["2015-12-29", 510.53, 515.86, 505.38, 508.25],
  ["2015-12-30", 511.43, 515.98, 505.66, 507.45],
  ["2015-12-31", 511.50, 515.33, 505.99, 507.98],
  ["2016-01-01", 511.32, 514.29, 505.99, 506.37],
  ["2016-01-02", 511.70, 514.87, 506.18, 506.75]
]);

// map the data for the first series
var mapping_1 = dataTable.mapAs({open: {column: 1, type: "open"},
                                 high: 2, low: 3, close: 4});

// map the data for the second series
var mapping_2 = dataTable.mapAs();
mapping_2.addField("open", 1, "open");
mapping_2.addField("high", 2);
mapping_2.addField("low", 3);
mapping_2.addField("close", 4);

// create a stock chart
var chart = anychart.stock();

// create the first plot and ohlc series
var ohlc_1 = chart.plot(0).ohlc(mapping_1);

// create the second plot and ohlc series
var ohlc_2 = chart.plot(1).ohlc(mapping_2);
```

{sample}WD\_Data\_Table\_03{sample}

```
// create a data table
var dataTable = anychart.data.table(0);

// add data
dataTable.addData([
  ["2015-12-25", 512.53, 514.88, 505.69, 507.34],
  ["2015-12-26", 511.83, 514.98, 505.59, 506.23],
  ["2015-12-27", 511.22, 515.30, 505.49, 506.47],
  ["2015-12-28", 510.35, 515.72, 505.23, 505.80],
  ["2015-12-29", 510.53, 515.86, 505.38, 508.25],
  ["2015-12-30", 511.43, 515.98, 505.66, 507.45],
  ["2015-12-31", 511.50, 515.33, 505.99, 507.98],
  ["2016-01-01", 511.32, 514.29, 505.99, 506.37],
  ["2016-01-02", 511.70, 514.87, 506.18, 506.75]
]);

// map the data for the frist series
var mapping_1 = dataTable.mapAs({value: 1});

// map the data for the second series
var mapping_2 = dataTable.mapAs({value: 4});

// map the data for the tecnical indicator
var mapping_3 = dataTable.mapAs({open: 1, high: 2, low: 3, close: 4});

// create a stock chart
var chart = anychart.stock();

// create the first plot and and two line series
var line_1 = chart.plot(0).line(mapping_1);
var line_2 = chart.plot(0).line(mapping_2);

// create the second plot and a williams %r indicator
chart.plot(1).yScale().minimum(-100);
chart.plot(1).yScale().maximum(0);
chart.plot(1).williamsR(mapping_3, 4, "marker");
```

{sample}WD\_Data\_Table\_04{sample}

```
// create two data tables
var dataTable_1 = anychart.data.table(0);
var dataTable_2 = anychart.data.table(0);

// add data to the first table
dataTable_1.addData([
  ["2018-01-01", 512.53],
  ["2018-01-03", 511.22],
  ["2018-01-05", 510.53],
  ["2018-01-07", 511.50],
  ["2018-01-09", 511.70]
]);

// add data to the second table
dataTable_2.addData([
  ["2018-01-02", 511.83],
  ["2018-01-04", 510.35],
  ["2018-01-06", 511.43],
  ["2018-01-08", 511.32]
]);

// map the first table
var mapping_1 = dataTable_1.mapAs({value: 1});

// map the second table
var mapping_2 = dataTable_2.mapAs({value: 1});

// create a stock chart
var chart = anychart.stock();

// create a plot and an two column series
var column_1 = chart.plot(0).column(mapping_1);
var column_2 = chart.plot(0).column(mapping_2);
```

{sample}WD\_Data\_Table\_05{sample}

## Accessing Items

* anychart.data.TableSelectable
* anychart.data.TableSelectable.RowProxy
* описать тонкости работы с selectable

## Data Manipulation

* [Reading](#reading)
* [Searching](#searching)
* [Adding](#adding)
* [Updating](#updating)
* [Removing](#removing)
* [Iterating](#iterating)

### Reading

### Searching

```
// get the shown range of points
var range = chart.getSelectedRange();

// get the values of the first and last point of the range
var firstPoint = selectable.search(range.firstSelected, "nearest");
var lastPoint = selectable.search(range.lastSelected, "nearest");
var firstDate = firstPoint.getColumn(0);
var firstLow = firstPoint.get("low");
var firstHigh = firstPoint.get("high");
var lastDate = lastPoint.getColumn(0);
var lastLow = lastPoint.get("low");
var lastHigh = lastPoint.get("high");
```

{sample}WD\_Data\_Table\_06{sample}

### Adding

```
lastDate = new Date(2016, 1, 2);
  
// add a new data row
function addRow(){
  var newOpen = (Math.random() * 6) + 507;
  var newHigh = (Math.random() * 3) + 513;
  var newLow = (Math.random() * 2) + 505;
  var newClose = (Math.random() * 6) + 507;
  var newDate = new Date();
  newDate.setDate(lastDate.getDate() + 1);
  lastDate = newDate;
  //create new data
  var newData = [[newDate, newOpen, newHigh,
                  newLow, newClose, "4 #00838f"]];
  // add new data
  dataTable.addData(newData);
};
```

{sample}WD\_Data\_Table\_07{sample}

### Updating

```
// update the first row
function updateRow(){
  var newLow = document.getElementById("inputLow").value;
  var newHigh = document.getElementById("inputHigh").value;
  var color = document.getElementById("inputColor").value
  var newData = [["2015-12-25", newLow, newHigh, color]];
  dataTable.addData(newData);
};
```

{sample}WD\_Data\_Table\_08{sample}

### Removing

```
dataTable.removeFirst(1); 
dataTable.remove("2015-12-28", "2015-12-31");  
```

{sample}WD\_Data\_Table\_09{sample}

### Iterating

* anychart.data.TableIterator
* еще подумать про название

```
// get the shown range of points
var range = chart.getSelectedRange();

/* create the selectable object
and select rows corresponding to the shown points */
selectable = mapping.createSelectable();
selectable.select(range.firstSelected, range.lastSelected);

// get the iterator
var iterator = selectable.getIterator();

// get the table for displaying information
var tableInfo = document.getElementById("tableInfo");

// display the information about shown points in the table
while (iterator.advance()) {
  var key = iterator.getKey();
  var date =  anychart.format.dateTime(key, "dd.MM.yyyy");
  var low = iterator.get("low");
  var high = iterator.get("high");
  var newRow = document.createElement("tr");
  var newColumnDate = document.createElement("td");
  var newColumnLow = document.createElement("td");
  var newColumnHigh = document.createElement("td");
  newColumnDate.innerText = date;
  newColumnLow.innerText = low;
  newColumnHigh.innerText = high;
  newRow.appendChild(newColumnDate);
  newRow.appendChild(newColumnLow);
  newRow.appendChild(newColumnHigh);
  tableInfo.appendChild(newRow);
};
```

{sample}WD\_Data\_Table\_10{sample}

```
// get the shown range of points
var range = chart.getSelectedRange();

/* create the selectable object,
select rows corresponding to the shown points,
and group them */
selectable = mapping.createSelectable();
selectable.select(range.firstSelected, range.lastSelected, "year", 2);

// get the iterator
var iterator = selectable.getIterator();

// get the table for displaying information
var tableInfo = document.getElementById("tableInfo");

// display the information about shown points in the table
while (iterator.advance()) {
  var key = iterator.getKey();
  var date =  anychart.format.dateTime(key, "dd.MM.yyyy");
  var low = iterator.get("low");
  var high = iterator.get("high");
  var newRow = document.createElement("tr");
  var newColumnDate = document.createElement("td");
  var newColumnLow = document.createElement("td");
  var newColumnHigh = document.createElement("td");
  newColumnDate.innerText = date;
  newColumnLow.innerText = low;
  newColumnHigh.innerText = high;
  newRow.appendChild(newColumnDate);
  newRow.appendChild(newColumnLow);
  newRow.appendChild(newColumnHigh);
  tableInfo.appendChild(newRow);
};
```

{sample}WD\_Data\_Table\_11{sample}

## Table Computer

* anychart.data.TableComputer.RowProxy

## Events