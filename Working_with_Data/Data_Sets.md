{:index 2}
# Data Sets

## Overview

A data set is a representation of data as a collection of rows, similar to a database query result. This data model, used in most chart types, is especially helpful when setting data for multiple-series charts.

This article explains how to create a data set and perform operations on it.

## Classes

Here is the list of classes allowing you to work with data sets in AnyChart:

* data set - {api:anychart.data.Set}anychart.data.Set{api}
* data view - {api:anychart.data.View}anychart.data.View{api}
* iterator - {api:anychart.data.Iterator}anychart.data.Iterator{api}

## Setting Data

Data sets in AnyChart are defined as instances of the {api:anychart.data.Set}anychart.data.Set{api} class.

Data can be organized as an [array of arrays](#array_of_arrays), [array of objects](#array_of_objects), or [CSV string](#csv_string) (see also: [Data from CSV](Data_From_CSV)). The choice of data fields depends on the chart type.

**1. Creating Data Set.** To create a data set, pass the data to the {api:anychart.data#set}anychart.data.set(){api} method:

```
var dataSet = anychart.data.set(data);
```

**2. Mapping Data.** If you set data as an array of arrays or a CSV string, you need to [map](#mapping) the data set. For data organized as an array of objects, mapping is optional.

Call the {api:anychart.data.Set#mapAs}mapAs(){api} method and link the field names required by the type of the series you are going to create to indexes of columns or names of fields in your data:

```
var mapping = dataSet.mapAs({x: 0, value: 1});
```

```
var mapping = dataSet.mapAs({x: "x", value: "value"});
```

**3. Creating Series.** 

The final step is passing the mapping to the chart or series constructor:

```
var chart = anychart.column();
var series = chart.column(mapping);
```

If the data is organized as an array of objects, you can pass the data set directly to the chart or series constructor:

```
var chart = anychart.column();
var series = chart.column(dataSet);
```

**Note:** However, if you use custom data fields, you need to [remap](#remapping) them.

### Array of Arrays

The following sample shows how to set data if it is organized as an **array of arrays**:

```
// create data
data = [
  ["January", 12000],
  ["February", 15000],
  ["March", 16000],
  ["April", 14000],
  ["May", 10000]
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

This sample shows how to set data if it is organized as an **array of objects**:

```
// create data
  var data = [
    {x:"January", value: 12000},
    {x:"February", value:  15000},
    {x:"March", value:  16000},
    {x:"April", value:  14000},
    {x:"May", value:  10000}
  ];

// create a data set
var dataSet = anychart.data.set(data);

// create a chart
var chart = anychart.column();

// create a series and set the data
var series = chart.column(data);
```

{sample}WD\_Data\_Sets\_02{sample}

### CSV String

The sample below shows how to set data if it is organized as a **CSV string**. See also: [Data from CSV](Data_From_CSV).

By default, AnyChart considers commas in CSV data to be column separators and line breaks to be row separators, but {api:anychart.data#set}anychart.data.set(){api} can accept an object with alternative settings as the second parameter.

Use the `columnsSeparator` and `rowsSeparator` fields to set separators and `ignoreFirstRow` to ignore the first row of data if needed.

```
// create data
var data = "x;value*" +
       "January;12000*" +
       "February;15000*" +
       "March;16000*" +
       "April;14000*" +
       "May;10000*";

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

Mapping is required if you set the data as an  [array of arrays](#array_of_arrays) or a [CSV string](#csv_string).

To map a data set, call the {api:anychart.data.Set#mapAs}mapAs(){api} method on an instance of the {api:anychart.data.Set}anychart.data.Set{api}. Specify the field names required by the type of the series you are going to create and link them to the indexes of columns in the data:

```
var mapping = dataSet.mapAs({x: 0, value: 1});
```

If your data is organized as an [array of objects](#array_of_objects), you should to link the field names required by the series to the names of fields in the data:

```
var mapping = dataSet.mapAs({x: "x", value: "value"});
```

Please note that in this case mapping is optional. However, if your data contains custom fields, it needs to be [remapped](#remapping).

In the following sample, two mappings are created for two series of a multiple-series chart:

```
// create data
var data = [
  ["January", 12000, 10000],
  ["February", 15000, 12000],
  ["March", 16000, 18000],
  ["April", 14000, 11000],
  ["May", 10000, 9000]
];

// create a data set
var dataSet = anychart.data.set(data);

// map the data
var mapping1 = dataSet.mapAs({x: 0, value: 1});
var mapping2 = dataSet.mapAs({x: 0, value: 2});

// create a chart
var chart = anychart.column();

// create the first series and set the data
var series1 = chart.column(mapping1);

// create the second series and set the data  
var series2 = chart.column(mapping2);
```

{sample}WD\_Data\_Sets\_04{sample}

### Remapping

If your data is organized as an [array of objects](#array_of_objects) and contains custom fields, you need to remap it.

Call the {api:anychart.data.Set#mapAs}mapAs(){api} method on an instance of the {api:anychart.data.Set}anychart.data.Set{api}, specify the field names required by the type of the series you are going to create, and link them to the custom fields in the data.

In this sample, custom fields `month` and `sales` are mapped as the `x` and `value` fields required by the Column series:

```
// create data
var data = [
  {month:"January", sales: 12000},
  {month:"February", sales:  15000},
  {month:"March", sales:  16000},
  {month:"April", sales:  14000},
  {month:"May", sales:  10000}
];

// create a data set
var dataSet = anychart.data.set(data);

// map the data
var mapping = dataSet.mapAs({x: "month", value: "sales"});

// create a chart
var chart = anychart.column();

// create a series and set the data
var series = chart.column(mapping);
```

{sample}WD\_Data\_Sets\_05{sample}

## Accessing Rows

Rows of a data set do not have their own class, so there is no direct access to them. However, you can [read](#reading) a whole row or the value in a given data field. Also, you can [search](#searching) for rows and [iterate](#iterating) data.

## Data Manipulation

### Reading

To read the data, use the following methods:

* {api:anychart.data.Set#getRowsCount}getRowsCount(){api} - returns the number of rows in the data set
* {api:anychart.data.Set#row}row(){api} - accepts the index of a row, returns the row
* {api:anychart.data.View#get}get(){api} - accepts the index of a row and the name of a field, returns the value

In the sample below, {api:anychart.data.Set#getRowsCount}getRowsCount(){api} and {api:anychart.data.View#get}get(){api} are used to get the argument and value of the chart's last point:

```
// get the argument and value of the last point
var rowsCount = dataSet.getRowsCount();
var lastPointName = mapping.get(rowsCount - 1, "x");
var lastPointValue = mapping.get(rowsCount - 1, "value");
```

{sample}WD\_Data\_Sets\_06{sample}

### Adding

You can add or insert rows to your data. New rows can be organized as objects or arrays - the best practice is to use the same format of data as in the original data set.

**To add a row or several rows**, call the {api:anychart.data.Set#append}append(){api} method on the instance of {api:anychart.data.Set}anychart.data.Set{api} and pass rows as parameters. New rows are always added at the end of the data set.

```
dataSet.append(["New Point 1", 16000],
               ["New Point 2", 15000]);
```

```
dataSet.append({"x": "New Point 1", "value": 16000},
               {"x": "New Point 2", "value": 15000});
```

**To insert a row**, call {api:anychart.data.Set#insert}insert(){api} and pass two parameters: a row and the index indicating the position in the data set where you want to place the row.

The default index is 0: if the index is not specified, the row is inserted at the beginning of the data set. Negative indexes count backwards from the end of the data set.

```
dataSet.insert(["New Point", 16000], -1);
```

```
dataSet.insert({"x": "New Point", "value": 16000}, -1);
```

If you add or insert rows as arrays, the new data should correspond to the mapping. It is possible to pass rows with additional settings that do not appear in the original data set (for example, custom fill or stroke color), but it is necessary to include the corresponding fields in the mapping:

```
var mapping = dataSet.mapAs({x: 0, value: 1, fill: 2});
dataSet.append(["New Point 1", 16000, "#ef6c00"]);
dataSet.insert(["New Point 2", 15000, "#00bfa5"]);
```

In the following sample, there are two buttons allowing you to add or insert a  random data row. Before inserting a row, you can specify its position (index).

{sample}WD\_Data\_Sets\_07{sample}

### Updating

You can update a whole row or just a value in a certain field.

**To update a row**, use the {api:anychart.data.View#row}row(){api} method. Pass the index of the row as the first parameter and a new row as the second one.

A new row can be organized as an object or arrays - the best practice is to use the same format of data as in the original data set.

```
dataSet.row(0, ["New Name", 16000]);
```

```
dataSet.row(0, {"x": "New Name", "value": 16000});
```

If the new row is set as an array, it should correspond to the mapping. It is possible to pass a row with additional settings that do not appear in the original data set (for example, custom fill or stroke color), but it is necessary to include the corresponding fields in the mapping:

```
var mapping = dataSet.mapAs({x: 0, value: 1, fill: 2});
dataSet.row(0, ["New Name", 16000, "#ef6c00"]);
```

In this sample, the first row of the data set is updated on-the-fly after you enter custom parameters:

{sample}WD\_Data\_Sets\_08{sample}

**To update a value**, call the {api:anychart.data.View#set}set(){api} method with three parameters:

* the index of the row
* the name of the field
* the new value


```
mapping = dataSet.mapAs({x: 0, value: 1, fill: 2, stroke: 2});
mapping.set(0, "x", "New Name");
mapping.set(0, "value", 16000);
mapping.set(0, "fill", "#ef6c00");
mapping.set(0, "stroke", "#ef6c00");
```

The sample below allows updating the fill color of any point:

{sample}WD\_Data\_Sets\_09{sample}

### Removing

To remove a row, call the {api:anychart.data.Set#remove}remove(){api} method of {api:anychart.data.Set}anychart.data.Set{api} with the index of the row as a parameter.

The following sample shows how to remove the last row. Its index is calculated with the help of the {api:anychart.data.Set#getRowsCount}getRowsCount(){api} method, which is used to [get](#reading) the total number of rows:

```
dataSet.remove(dataSet.getRowsCount() - 1);
```

{sample}WD\_Data\_Sets\_10{sample}

### Searching

To search for data rows, use the following methods:

* {api:anychart.data.View#find}find(){api}
* {api:anychart.data.View#filter}filter(){api}

#### find()

The {api:anychart.data.View#find}find(){api} method returns the index of the row containing a given value. It accepts two parameters: the name of a data field and the value.

In the sample below this method is used to select points by their arguments:

```
// find a row
var index = mapping.find("x", "April");
// select a row
series.select(index);
```

{sample}WD\_Data\_Sets\_11{sample}

#### filter()

The {api:anychart.data.View#filter}filter(){api} methods finds data rows with values meeting a given condition. The first parameter is the name of a data field, and the second one is a filter function, which accepts a value and returns `true` or `false`.

Use this method to set advanced search conditions - for example, to find all rows with values greater or less than a given value, like in the following sample:

```
// remove points with values less than a given one
function filterValue() {
  var input = document.getElementById("valueInput").value;
  var newMapping = mapping.filter("value", function(value) {
    return value >= input;
  });
  series.data(newMapping);
}
```

{sample}WD\_Data\_Sets\_12{sample}

### Iterating

Iterating is a process of going through all the rows. You can access them one by one by one, but AnyChart offers an easier and faster out-of-the-box solution.

To iterate over a data set, obtain the {api:anychart.data.Iterator}anychart.data.Iterator{api} object by calling the {api:anychart.data.View#getIterator}getIterator(){api} method. Then us the methods of the iterator:

* {api:anychart.data.Iterator#advance}advance(){api} - advances the iterator to the next row
* {api:anychart.data.Iterator#get}get(){api} - returns the value of the current row in a given field
* {api:anychart.data.Iterator#getIndex}getIndex(){api} - returns the index of the current row
* {api:anychart.data.Iterator#getRowsCount}getRowsCount(){api} - returns the total number of rows
* {api:anychart.data.Iterator#meta}meta(){api} - sets / gets the meta value of the current row in a given field
* {api:anychart.data.Iterator#reset}reset(){api} - resets the iterator to its default position before the first row
* {api:anychart.data.Iterator#select}select(){api} - moves the iterator to a row with a given index

In this sample, iterator is used to select [filtered](#filter\(\)) points, [find](#find\(\)) their arguments, and display them in the chart title:

```
// search for points with values equal or greater than a given one
var input = document.getElementById("valueInput").value;
var newMapping = mapping.filter("value", function(value) {
  return value >= input;
});

// get the iterator
var iterator = newMapping.getIterator();

// select the points and get their arguments
var pointNames = [];
while (iterator.advance()) {
  var name = iterator.get("x");
  var index = mapping.find("x", name);
  series.select(index);
  pointNames.push(name);
}
```

{sample}WD\_Data\_Sets\_13{sample}