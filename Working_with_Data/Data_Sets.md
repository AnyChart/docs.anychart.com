{:index 2}
# Data Sets

## Overview

A data set...

It is used in the following chart types: (?)

## Classes

Here is the list of classes allowing you to work with data sets in AnyChart:

* data set – {api:anychart.data.Set}anychart.data.Set{api}
* data view – {api:anychart.data.View}anychart.data.View{api}
* iterator – {api:anychart.data.Iterator}anychart.data.Iterator{api}

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
var series = chart.column(mapping);
```

{sample}WD\_Data\_Sets\_02{sample}

### CSV String

The sample below shows how to set data if it is organized as a **CSV string**. See also: [Data from CSV](Data_From_CSV).

By default, AnyChart considers commas in CSV data to be column separators and line breaks to be row separators, but {api:anychart.data#set}anychart.data.set(){api} can accept an object with alternative settings as the second parameter.

Use the `columnsSeparator` and `rowsSeparator` fields to set separators and `ignoreFirstRow` to ignore the first row of data if needed. Other CSV settings are listed here: {api:anychart.data.TextParsingSettings}anychart.data.TextParsingSettings{api}.

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

* {api:anychart.data.Set}anychart.data.Set{api}
* {api:anychart.data.View}anychart.data.View{api}
* у ряда нет своего класса, но есть классы dataset и view
* они позволяют работать с рядами и конкретными полями: dataset - ряд, view - поле + через view можно делать итерацию и поиск

## Data Manipulation

### Reading

To read the data, use the following methods:

* {api:anychart.data.Set#row}row(){api} – accepts the index of a row, returns the row
* {api:anychart.data.Set#getRowsCount}getRowsCount(){api} returns the number of rows in the data set
* {api:anychart.data.View#get}get(){api} accepts the index of a row and the name of a field, returns the value of the field

In the sample below, some of these methods are used to get the argument and value of the chart's last point:

```
// get the argument and value of the last point
var rowsCount = dataSet.getRowsCount();
var lastPointName = mapping.get(rowsCount - 1, "x");
var lastPointValue = mapping.get(rowsCount - 1, "value");
```

{sample}WD\_Data\_Sets\_06{sample}

### Adding

* {api:anychart.data.Set#append}append(){api} (dataset)
* {api:anychart.data.Set#insert}insert(){api} (dataset)
* данные можно добавлять как объектом, так и массивом
* какой формат у начальных данных, в таком формате и добавляйте
* при добавлении массивом доп. поля надо включить в маппинг
* то же примечание про маппинг к примерам 8 и 9 в table + маппинг в цитатах
* пояснить про отрицательный индекс


```
var mapping = dataSet.mapAs({x: 0, value: 1, fill: 2});
dataSet.append(["New Point", 16000, "#ef6c00"]);
```

```
dataSet.append({"x": "New Point", "value": 16000, "fill": "#ef6c00"});
```

```
var mapping = dataSet.mapAs({x: 0, value: 1, fill: 2});
dataSet.insert(["New Point", 16000, "#00bfa5"], -1);
```

```
dataSet.insert({"x": "New Point", "value": 16000, "fill": "#00bfa5"}, -1);
```

{sample}WD\_Data\_Sets\_07{sample}

### Updating

* строка: {api:anychart.data.View#row}row(){api} (dataset)
* отдельное поле: {api:anychart.data.View#set}set(){api} (view)
* данные можно добавлять как объектом, так и массивом
* какой формат у начальных данных, в таком формате и добавляйте
* при добавлении массивом доп. поля надо включить в маппинг


```
var mapping = dataSet.mapAs({x: 0, value: 1, fill: 2});
dataSet.row(0, ["New Name", 16000, "#ef6c00"]);
```

```
dataSet.row(0, {"x": "New Name", "value": 16000, "fill": "#ef6c00"});
```

{sample}WD\_Data\_Sets\_08{sample}

```
mapping = dataSet.mapAs({x: 0, value: 1, fill: 2, stroke: 2});
mapping.set(0, "x", "New Name");
mapping.set(0, "value", 16000);
mapping.set(0, "fill", "#ef6c00");
mapping.set(0, "stroke", "#ef6c00");
```

{sample}WD\_Data\_Sets\_09{sample}

### Removing

* {api:anychart.data.View#remove}remove(){api} (dataset)


```
dataSet.remove(dataSet.getRowsCount() - 1);
```

{sample}WD\_Data\_Sets\_10{sample}

### Searching

#### find()

* {api:anychart.data.View#find}find(){api} (view)


```
// find a row
var index = mapping.find("x", "April");
// select a row
series.select(index);
```

{sample}WD\_Data\_Sets\_11{sample}

#### filter()

* {api:anychart.data.View#filter}filter(){api} (view)


```
// remove points with values less than a given one
function filterValue() {
  var minValue = document.getElementById("inputValue").value;
  var newMapping = mapping.filter("value", function(value) {
    return value >= minValue;
  });
  series.data(newMapping);
};
```

{sample}WD\_Data\_Sets\_12{sample}

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
// search for points with values equal or greater than a given one
var minValue = document.getElementById("inputValue").value;
var newMapping = mapping.filter("value", function(value) {
  return value >= minValue;
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

## Events

* (?)