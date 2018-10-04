{:index 6}
# Table Data Model

## Overview

The table data model represents data as a collection of rows and columns, which allows storing large ordered data sets.

It is required by [AnyChart Stock](../Stock_Charts/Quick_Start) charts. See also: [Stock Charts: Data](../Stock_Charts/Data).

This article explains how to set table data, access rows, and perform operations on data.

## Classes

Here is the - list of classes allowing you to work with table data in AnyChart:

* table - {api:anychart.data.Table}anychart.data.Table{api}
* mapping - {api:anychart.data.TableMapping}anychart.data.TableMapping{api}
* selection of rows - {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}
* table row - {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api}
* iterator - {api:anychart.data.TableIterator}anychart.data.TableIterator{api}
* computer - {api:anychart.data.TableComputer}anychart.data.TableComputer{api}
* computer row - {api:anychart.data.TableComputer.RowProxy}anychart.data.TableComputer.RowProxy{api}

You can learn how to use these classes in the sections below.

## Setting Data

Table data structures in Anychart are defined as instances of the {api:anychart.data.Table}anychart.data.Table{api} class. Table data can be organized as an [array of arrays](#array_of_arrays), [array of objects](#array_of_objects), or [CSV string](#csv_string) (see also: [Data from CSV](Data_From_CSV)).
To create a chart based on this type of data, you should create a data table, add data, and map the table. 

**1. Creating Data Table.** The first step is using the {api:anychart.data#table}anychart.data.table(){api} method to create a data table - an instance of {api:anychart.data.Table}anychart.data.Table{api}.

If you set data as an array of arrays or a CSV string, specify the **number of the column** containing table keys (dates) as a parameter (0 by default). If you data is organized as an array of objects, specify the **name of the field** containing table keys. You can also use optional parameters to set the date/time pattern of the key column, time offset, base date, and [locale](../Common_Settings/Localization).

```
var dataTable = anychart.data.table(0);
```

```
var dataTable = anychart.data.table("x");
```

**2. Adding Data.** The next step is calling the {api:anychart.data.Table#addData}addData(){api} method for passing the data to the table. Please note that this method is also used for [adding](#adding) and [updating](#updating) data.

```
dataTable.addData(data);
```

**3. Mapping Data & Creating Series.** Finally, call {api:anychart.data.Table#mapAs}mapAs(){api} to [map](#mapping) the table - link the names of data fields required by the type of series you are going to create to the numbers of columns or names of fields in your data. Then pass the mapping, which is defined as an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}, to the series constructor.

```
var mapping = dataTable.mapAs({open: 1, high: 2, low: 3, close: 4});
```

```
var mapping = dataTable.mapAs({open: "open", high: "high", low: "low", close: "close"});
```

```
var chart = anychart.stock();
var ohlcSeries = chart.plot(0).ohlc(mapping);
```

### Array of Arrays

This sample shows how to set data if it is organized as an **array of arrays**:

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

{sample}WD\_Table\_Data\_01{sample}

### Array of Objects

This sample shows how to set data if it is organized as an **array of objects**:

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

{sample}WD\_Table\_Data\_02{sample}

### CSV String

The sample below shows how to set data if it is organized as an a **CSV string**. See also: [Data from CSV](Data_From_CSV).

**Note:**  By default, AnyChart considers commas in CSV data to be column separators and line breaks to be row separators, but {api:anychart.data.Table#addData}addData(){api} can accept an object with alternative settings as the third parameter. Use the `columnsSeparator` and `rowsSeparator` fields to set separators and `ignoreFirstRow` to ignore the first row of the table if needed.

```
// create data
var data = "Dates;Open;High;Low;Close*" +
           "2015-12-25;512.53;514.88;505.69;507.34*" +
           "2015-12-26;511.83;514.98;505.59;506.23*" +
           "2015-12-27;511.22;515.30;505.49;506.47*" +
           "2015-12-28;510.35;515.72;505.23;505.80*" +
           "2015-12-29;510.53;515.86;505.38;508.25*" +
           "2015-12-30;511.43;515.98;505.66;507.45*" +
           "2015-12-31;511.50;515.33;505.99;507.98*" +
           "2016-01-01;511.32;514.29;505.99;506.37*" +
           "2016-01-02;511.70;514.87;506.18;506.75";

// create an object with csv settings
csvSettings = {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "*"};

// create a data table
var dataTable = anychart.data.table(0);

// add data
dataTable.addData(data, null, csvSettings);

// map the data
var mapping = dataTable.mapAs({open: 1, high: 2, low: 3, close: 4});

// create a stock chart
var chart = anychart.stock();

// create a plot and an ohlc series
var ohlcSeries = chart.plot(0).ohlc(mapping);
ohlcSeries.name("ACME Corp.");
```

{sample}WD\_Table\_Data\_03{sample}

### Mapping

Mappings are defined as instances of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}.

To map your data, call the {api:anychart.data.Table#mapAs}mapAs(){api} method on an instance of {api:anychart.data.Table}anychart.data.Table{api}. Specify the field names required by the type of series you are going to create and link them either to numbers of columns or to the names of fields in the data, depending on whether it is organized as an [array of arrays](#array_of_arrays), [array of objects](#array_of_objects) or a [CSV string](#csv_string):

```
dataTable.mapAs({open: 1, high: 2, low: 3, close: 4});
```

```
dataTable.mapAs({open: "open", high: "high", low: "low", close: "close"});
```

**Note:** The column with keys (dates) is specified when the table is created with the {api:anychart.data#table}anychart.data.table(){api} method. You cannot remap the key column with {api:anychart.data.Table#mapAs}mapAs(){api}.

You can also set the **approximation mode** for [grouping data](../Stock_Charts/Data_Grouping) - the available options are listed in {api:anychart.enums.AggregationType}anychart.enums.AggregationType{api}. For example, this is how you set the approximation mode of the first column to `"open"`:

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

{sample}WD\_Table\_Data\_04{sample}

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

{sample}WD\_Table\_Data\_05{sample}

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

{sample}WD\_Table\_Data\_06{sample}

## Accessing Rows

Rows are defined as instances of the {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api} class, and selections as instances of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}.

If you want access a row of a table, first you should create a selection of rows and then perform a [search](#searching) of the row in this selection. In other words, there is no direct access to rows.

Manipulating table data often requires accessing rows, so the methods described below are used in some samples in the in the [Data Manipulation](#data_manipulation) section - see [Searching](#searching) and [Iterating](#iterating).

**1. Creating Selections.** To access a selection of rows, create an instance of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api} by calling the {api:anychart.data.TableMapping#createSelectable}createSelectable(){api} method on an instance of {api:anychart.data.TableMapping}anychart.data.TableMapping{api}:

```
selectable = mapping.createSelectable();
```

This method creates a selection including all rows. You can narrow it down to a **range of dates** of your choice - call {api:anychart.data.TableSelectable#select}select(){api} with two keys (dates) as parameters, which can be passed as numbers, strings, or Date objects:

```
selectable.select("2002-01-01", "2006-01-01");
```

Also, sometimes the {api:anychart.data.TableSelectable#selectAll}selectAll(){api} method, allowing you to select all dates, might be helpful. Please note that both methods return instances of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}.

You can call {api:anychart.data.TableSelectable#select}select(){api} and {api:anychart.data.TableSelectable#selectAll}selectAll(){api} with two optional parameters for **grouping the selected data**, like in the second sample in the [Iterating](#iterating) section. One of these parameters sets the time interval, for example a day, a month, a year, etc. (see {api:anychart.enums.Interval}anychart.enums.Interval{api}), and the other sets the number of intervals:

```
selectable.select("2002-01-01", "2006-01-01", "year", 2);
```

**2. Accessing Rows.** To access a row of a table in a selection, perform a [search](#searching) on the key of the row - call the {api:anychart.data.TableSelectable#search}search(){api} method on the instance of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}:

```
selectable = mapping.createSelectable();
selectable.select("2002-01-01", "2006-01-01");
selectable.search("2004-01-01", "exact");
```

## Data Manipulation

You can perform the following data operations:

* [Reading](#reading)
* [Searching](#searching)
* [Adding](#adding)
* [Updating](#updating)
* [Removing](#removing)
* [Iterating](#iterating)

### Reading

To read the data, use methods of {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api}:

* {api:anychart.data.TableSelectable.RowProxy#get}get(){api} - accepts the name of a data field, returns its value
* {api:anychart.data.TableSelectable.RowProxy#getColumn}getColumn(){api} - accepts the number of a column, returns the value
* {api:anychart.data.TableSelectable.RowProxy#getIndex}getIndex(){api} - returns the index of a row
* {api:anychart.data.TableSelectable.RowProxy#getKey}getKey(){api} - returns the key (date) of a row

To call the methods listed above, you need to [access](#accessing_rows) a row of the table, which requires creating a selection of rows and performing a search - see the sample in the [Searching](#searching) section. 

### Searching

To find a row, [access](#accessing_rows) a selection of rows ({api:anychart.data.TableSelectable}anychart.data.TableSelectable{api}) and call {api:anychart.data.TableSelectable#search}search(){api} with the key (date) of the row as the first parameter. This method returns an instance of {api:anychart.data.TableSelectable.RowProxy}anychart.data.TableSelectable.RowProxy{api}.

The second parameter sets the **mode of search** - see {api:anychart.enums.TableSearchMode}anychart.enums.TableSearchMode{api}:

* `"exact"`
* `"exact-or-next"`
* `"exact-or-prev"`
* `"nearest"`

In the following sample, information about the first and last point of the shown range is displayed in the chart title, and when the range is changed, the description is updated. The {api:anychart.data.TableSelectable#search}search(){api} method is combined with the {api:anychart.data.TableSelectable.RowProxy#get}get(){api} and {api:anychart.data.TableSelectable.RowProxy#getColumn}getColumn(){api} methods allowing to [read](#reading) the data:

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

{sample}WD\_Table\_Data\_07{sample}

### Adding

The {api:anychart.data.Table#addData}addData{api} method of {api:anychart.data.Table}anychart.data.Table{api} is used not only for [setting](#setting_data) data, but also for adding new rows.

The first parameter is the array of new data rows. There is also an optional second parameter that is used for streaming data - it allows you to remove a number of already existing rows from the beginning of the storage. You can either specify the number of rows to be removed or pass `true` to remove as many rows as you add.

```
dataTable.addData([
  ["2016-01-01", 511.32, 514.29, 505.99, 506.37],
  ["2016-01-02", 511.70, 514.87, 506.18, 506.75]
]);
```

**Note:** Rows with any dates can be added. For example, a new row can be inserted between two old ones or rewrite an old row - see the section about [updating](#updating) data.

In this sample, when you push the button, random data is added to the table and shown on the chart:

{sample}WD\_Table\_Data\_08{sample}

### Updating

The {api:anychart.data.Table#addData}addData{api} method of {api:anychart.data.Table}anychart.data.Table{api} is used not only for [setting](#setting_data) and [adding](#adding) data, but also for updating it. It means that when you call this method, you can specify dates that are already included in your data and set new values for them.

**Note:** When the data in the table is updated, all mappings are updated automatically. Always make sure that you are updating the right columns.

```
// create a data table
dataTable = anychart.data.table(0);

// add data
dataTable.addData([
  ["2015-12-25", 506.69, 511.88],
  ["2015-12-26", 507.59, 514.98],
  ["2015-12-27", 505.49, 516.30],
  ["2015-12-28", 506.23, 514.72],
  ["2015-12-29", 505.38, 517.86],
  ["2015-12-30", 506.66, 516.98],
  ["2015-12-31", 505.99, 513.33],
  ["2016-01-01", 507.99, 515.29],
  ["2016-01-02", 506.18, 514.87]
]);

// map the data
mapping = dataTable.mapAs({low: 1, high: 2});

// create a stock chart
var chart = anychart.stock();
    
// create a plot and an ohlc series
var ohlcSeries = chart.plot(0).rangeColumn(mapping);

// update the first row
var newData = [["2015-12-25", 510.69, 516.88]];
dataTable.addData(newData);
```

In the following sample, the first row of the table is updated on-the-fly after you enter custom parameters. To learn more about coloring individual points in Stock charts, see [Stock Charts: Data](../Stock_Charts/Data#individual_point_settings).

{sample}WD\_Table\_Data\_09{sample}

### Removing

To remove a range of rows, call the {api:anychart.data.Table#remove}remove(){api} method of {api:anychart.data.Table}anychart.data.Table{api} with two keys (dates) as parameters - they can be passed as numbers, strings, or Date objects:

```
dataTable.remove("2015-12-28", "2015-12-31");  
```

The {api:anychart.data.Table#removeFirst}removeFirst(){api} method allows you to remove the first n rows (1 by default):

```
dataTable.removeFirst(1); 
```

{sample}WD\_Table\_Data\_10{sample}

### Iterating

Iterating is a process of going through all the items of a tree. You can [acess](#accessing_rows) them one by one by one, but AnyChart offers an easier and faster out-of-the-box solution.

To iterate over a table, first access a selection of rows - create an instance of {api:anychart.data.TableSelectable}anychart.data.TableSelectable{api} (see [Accessing Rows](#accessing_rows)). Then call {api:anychart.data.TableSelectable#getIterator}getIterator(){api} on it to obtain the {api:anychart.data.TableIterator}anychart.data.TableIterator{api} object.

Finally, call methods of the iterator:

* {api:anychart.data.TableIterator#advance}advance(){api} - advances the iterator to hte next data item
* {api:anychart.data.TableIterator#get}get(){api} - returns the value in a given field of the current row
* {api:anychart.data.TableIterator#getIndex}getIndex(){api} - returns the index of a current row
* {api:anychart.data.TableIterator#getKey}getKey(){api} - returns the key of a current row
* {api:anychart.data.TableIterator#reset}reset(){api} - resets the iterator to its default position before the first item

In the sample below the {api:anychart.data.TableIterator#advance}advance(){api}, {api:anychart.data.TableIterator#getKey}getKey(){api}, and {api:anychart.data.TableIterator#get}get(){api} methods are used to display information about all the points falling in the range shown on the chart. When the range is changed, the description is updated.

```
/* create the selectable object
and select rows corresponding to the shown points */
selectable = mapping.createSelectable();
selectable.select(range.firstSelected, range.lastSelected);

// get the iterator
var iterator = selectable.getIterator();

// display information about shown points in the table
while (iterator.advance()) {
  var key = iterator.getKey();
  var date =  anychart.format.dateTime(key, "dd.MM.yyyy");
  var low = iterator.get("low");
  var high = iterator.get("high");  
};
```

{sample}WD\_Table\_Data\_11{sample}

In the next sample the selected data is grouped by two years (see [Accessing Rows](#accessing_rows)): 

```
/* create the selectable object,
select rows corresponding to the shown points, and group them */
selectable = mapping.createSelectable();
selectable.select(range.firstSelected, range.lastSelected, "year", 2);
```

The iterator is used to display information about the grouped data falling into the range of points shown on the chart:

{sample}WD\_Table\_Data\_12{sample}

## Table Computer

Coming soon.

## Events

Coming soon.