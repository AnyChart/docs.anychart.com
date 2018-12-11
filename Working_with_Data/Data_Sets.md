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

* {api:anychart.data.Set#mapAs}mapAs(){api}
* здесь про view не писать
* в других разделах использовать mapAs() для доступа к view, не линкуя его


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

* {api:anychart.data.Set}anychart.data.Set{api}
* строка: {api:anychart.data.Set#row}row(){api} (dataset)
* строка: {api:anychart.data.Set#getRowsCount}getRowsCount(){api} (dataset)
* отдельное поле: {api:anychart.data.View#get}get(){api} (view)


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
* пример, аналогичный примеру на фильтр + сослаться на него


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