{:index 6}
# Table Data Model

## Overview

The table data model...

* [AnyStock](../Stock_Charts/Quick_Start)
* [AnyStock Data](../Stock_Charts/Data)

This article explains how to set table data, access data items, and perform operations on data.

## Classes

Here is the list of classes allowing you to work with table data in AnyChart:

* table – {api:anychart.data.Table}anychart.data.Table{api}
* mapping – {api:anychart.data.TableMapping}anychart.data.TableMapping{api}
* selection of rows – {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}
* table row – {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api}
* iterator – {api:anychart.data.TableIterator}anychart.data.TableIterator{api}
* computer – {api:anychart.data.TableComputer}anychart.data.TableComputer{api}
* computer row – {api:anychart.data.TableComputer.RowProxy}anychart.data.TableComputer.RowProxy{api}

You can learn how to use these classes in the sections below.

## Setting Data

Table data structures in Anychart are defined as instances of the {api:anychart.data.Table}anychart.data.Table{api} class. There are two ways to set this type of data: as an [array of arrays](#array_of_arrays) or as an [array of objects](#array_of_objects).

### Array of Arrays

If your data is organized as an **array of arrays**, use the {api:anychart.data#table}anychart.data.table(){api} method to create a data table – an instance of {api:anychart.data.Table}anychart.data.Table{api}. Specify the number of column containing table keys (dates) as a parameter (0 by default). You can also use optional parameters to set the date/time pattern of the key column, time offset, base date, and [locale](../Common_Settings/Localization).

The next step is passing the data table to the {api:anychart.data.Table#addData}addData{api} method, which creates another instance of {api:anychart.data.Table}anychart.data.Table{api}. Please note that this method is also used for [adding](#adding) and [updating](#updating) data.

Finally, call {api:anychart.data.Table#mapAs}mapAs(){api} to [map](#mapping) the table – link the numbers of columns to the names of data fields required by the type of series you are going to create. Then pass the mapping, which is defined as an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}, to the series constructor.

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

If your data is organized as an **array of objects**, use the {api:anychart.data#table}anychart.data.table(){api} method to create a data table – an instance of {api:anychart.data.Table}anychart.data.Table{api}. Specify the name of the field containing table keys (dates) as a parameter. You can also use optional parameters to set the date/time pattern of the key column, time offset, base date, and [locale](../Common_Settings/Localization).

The next step is passing the data table to the {api:anychart.data.Table#addData}addData{api} method, which creates another instance of {api:anychart.data.Table}anychart.data.Table{api}. Please note that this method is also used for [adding](#adding) and [updating](#updating) data.

Finally, call {api:anychart.data.Table#mapAs}mapAs(){api} to [map](#mapping) the table – link the names of fields in your data to the names required by the type of series you are going to create. Then pass the mapping, whis is defined as an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}, to the series constructor.

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

Mappings are defined as instances of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}.

To map your data, call the {api:anychart.data.Table#mapAs}mapAs(){api} method on an instance of {api:anychart.data.Table}anychart.data.Table{api}. Specify the field names required by the type of series you are going to create and link them either to numbers of columns or to the names of fields in the data, depending on whether it is organized as an [array of arrays](#array_of_arrays) or an [array of objects](#array_of_objects):

```
dataTable.mapAs({open: 1, high: 2, low: 3, close: 4});
```

```
dataTable.mapAs({open: "open", high: "high", low: "low", close: "close"});
```

You can also set the **grouping/approximation mode** – the available options are listed in {api:anychart.enums.AggregationType}anychart.enums.AggregationType{api}. For example, this is how you set the approximation mode of the first column to `"open"`:

```
dataTable.mapAs({open: {column: 1, type: "open"}, high: 2, low: 3, close: 4});
```

There is an alternative way to map the data: call {api:anychart.data.Table#mapAs}mapAs(){api} with no parameters, then call {api:anychart.data.TableMapping#addField}addField(){api} on the instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}. Use two parameters: the name of a field and the number of column / name of a field in the data. The third parameter (optional) allows you to set the approximation mode:

```
mapping.addField("open", 1, "open");
``` 

Please note that {api:anychart.data.TableMapping#addField}addField(){api} maps only one field at a time.

In the following sample there are two series based on the same data, but for the first one it is mapped with {api:anychart.data.Table#mapAs}mapAs(){api}, and for the second with {api:anychart.data.TableMapping#addField}addField(){api}:

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
var mapping_1 = dataTable.mapAs({open: {column: 1, type: "open"}, high: 2, low: 3, close: 4});

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

This sample show how to map the data for multiple series and [technical indicators](../Stock_Charts/Technical_Indicators):

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

You can also map multiple tables, which allows you, for example, to show odd and even days on different series: 

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

## Accessing Rows

If you want access a row of a table, first you should access a selection of rows and then perform a [search](#searching). Rows are defined as instances of the {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api} class, and selections as instances of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}.

To access a **selection of rows**, create an instance of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api} by calling the {api:anychart.data.TableMapping#createSelectable}createSelectable(){api} method on an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}:

```
selectable = mapping.createSelectable();
```

Then specify the **range of dates** the row falls into. To select all dates in the table, call {api:anychart.data.TableSelectable#selectAll}selectAll(){api}, and to select a smaller range, call {api:anychart.data.TableSelectable#select}select(){api} with two keys (dates) as parameters. Keys can be passed as numbers, strings, or Date objects. Also, please note that both methods return instances of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}. This is how selecting a range of dates looks like:

```
selectable.select("2002-01-01", "2006-01-01");
```

You can call {api:anychart.data.TableSelectable#selectAll}selectAll(){api} and {api:anychart.data.TableSelectable#select}select(){api} with two optional parameters for **grouping the selected data**, like in the second sample in the [Iterating](#iterating) subsection. One of these parameters sets the time interval, for example a day, a month, a year, etc. (see {api:anychart.enums.Interval}anychart.enums.Interval{api}), and the other sets the number of intervals:

```
selectable.select("2002-01-01", "2006-01-01", "year", 2);
```

To access a **row of a table**, perform a [search](#searching) on the key of the row – call the {api:anychart.data.TableSelectable#search}search(){api} method on the instance of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}:

```
selectable = mapping.createSelectable();
selectable.select("2002-01-01", "2006-01-01, "year", 2");
selectable.search("2004-01-01", "exact");
```

Manipulating table data often requires accessing rows or selections of rows, so the methods described here are used in some samples in the in the [Data Manipulation](#data_manipulation) section – see [Searching](#searching) and [Iterating](#iterating).

## Data Manipulation

You can perform the following data operations (including CRUD):

* [Reading](#reading)
* [Searching](#searching)
* [Adding](#adding)
* [Updating](#updating)
* [Removing](#removing)
* [Iterating](#iterating)

### Reading

To read the data, use the methods of {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api}:

* {api:anychart.data.TableSelectable.RowProxy#get}get(){api}
* {api:anychart.data.TableSelectable.RowProxy#getColumn}getColumn(){api}
* {api:anychart.data.TableSelectable.RowProxy#getIndex}getIndex(){api}
* {api:anychart.data.TableSelectable.RowProxy#getKey}getKey(){api}

**Note:** The {api:anychart.data.TableSelectable.RowProxy#get}get(){api} methods accepts the name of a data field and returns its value. The {api:anychart.data.TableSelectable.RowProxy#getColumn}getColumn(){api} method also returns the value, but accepts the number of a column.

To call the methods listed above, you need to [access](#accessing_rows) a row of the table, which requires creating a selection of rows and performing a search – see the sample in the [Searching](#searching) section. 

### Searching

To find a row, [access](#accessing_rows) a selection of rows ({api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}) and call {api:anychart.data.TableSelectable#search}search(){api} with the key (date) of the row as a parameter. This method returns an instance of {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api}.

An optional parameter allows you to set the **mode of search** – see {api:anychart.enums.TableSearchMode}anychart.enums.TableSearchMode{api}:

* `"exact"` (default)
* `"exact-or-next"`
* `"exact-or-prev"`
* `"nearest"`

In the following sample, the information about the first and last point of the shown range is displayed in the chart title, and when the range is changed, the description is updated. The {api:anychart.data.TableSelectable#search}search(){api} method is combined with the {api:anychart.data.TableSelectable.RowProxy#get}get(){api} and {api:anychart.data.TableSelectable.RowProxy#getColumn}getColumn(){api} methods allowing to [read](#reading) the data:

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

The {api:anychart.data.Table#addData}addData{api} method of {api:anychart.data.Table}anychart.data.Table{api} is used not only for [setting](#setting_data) data, but also for adding new rows.

The first parameter is the array of new data rows. There is also an optional second parameter that is used for streaming data – it allows you to remove a number of already existing rows from the beginning of the storage. You can either specify the number of rows to be removed or pass `true` to remove as many rows as you add.

**Note:** Rows with any dates can be added. For example, a new row can be inserted between two old ones or rewrite an old row – see the section about [updating](#updating) data.

In this sample, when you push the button, random data is added to the table and shown on the chart:

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
  var newData = [[newDate, newOpen, newHigh, newLow, newClose, "4 #00838f"]];
  // add new data
  dataTable.addData(newData);
};
```

{sample}WD\_Data\_Table\_07{sample}

### Updating

The {api:anychart.data.Table#addData}addData{api} method of {api:anychart.data.Table}anychart.data.Table{api} is used not only for [setting](#setting_data) and [adding](#adding) data, but also for updating it. It means that when you can call this method, you can specify dates that are already included in your data and set new values for them: 

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

## Events