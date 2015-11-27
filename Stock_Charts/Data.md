{:index 3}

#Data

* [General information](#general_information)
* [Add](#add)
 * [Data as array of arrays](#data_as_array_of_arrays)
 * [Data as array of objects](#data_as_array_of_objects)
* [Mapping](#mapping)
* [Remove](#remove)

## General information
AnyStock Charts can process table-formatted data. The most appropriate way of doing this is using {api:anychart.data#mapAsTable}**mapAsTable()**{api} method. You can find more about table data model [here](../Working_with_Data/Using_Table_Data_Model).

First of all, we need to create a table for our data. It looks like this:
<br>
```
	table = anychart.data.table();
```
<br>
Here you should set which table column contain the x-axis value. If it is not defined in the first table column, then you should set the index of the column with x-axis values to the .table() method, because it is set to 0 by default.

## Add

### Data as array of arrays

Now, we should add some data in our newly created table. We use .addData() method for this.

```
	table = anychart.data.table();
	
	table.addData([
		['511.53', '514.98', '2015-12-24T12:00:00', '505.79', '506.40'],
        ['512.53', '514.88', '2015-12-25T12:00:00', '505.69', '505.34'],
        ['511.83', '514.98', '2015-12-26T12:00:00', '505.59', '507.23'],
        ['511.22', '515.30', '2015-12-27T12:00:00', '505.49', '506.47'],
        ['511.53', '514.98', '2015-12-28T12:00:00', '505.79', '506.40'],
        ['512.53', '513.88', '2015-12-29T12:00:00', '505.69', '505.34'],
        ['511.83', '512.98', '2015-12-30T12:00:00', '502.59', '503.23'],
        ['511.22', '515.30', '2015-12-31T12:00:00', '505.49', '506.47'],
        ['510.35', '515.72', '2016-01-01T12:00:00', '505.23', '508.80']
	]);
```

{sample}STOCK\_Data\_01{sample}

<br>**Note!** Each data table has to have a "key" value (x-axis value), which should be unique for one series of data. If there are rows (data points) with the same x-axis value, AnyStock will count only the last point with the given X.

Note that the X value has to contain date in any format. It means that you can set data as a timestamp, Date Time String or UTC - but it has to be a date.


### Data as array of objects

Now it's posiible to set the Data not only as array of arrays, but as array of objects. It's being done completely the same way as setting the Data though objects in Basic Charts. Look at the following piece of code:

```
		// create data table on loaded data
        var table = anychart.data.table("x");

        table.addData([
            {"open":'511.53', "high":'514.98', "x":'2015-12-24T12:00:00', "low":'505.79', "close":'506.40'},
            {"open":'512.53', "high":'514.88', "x":'2015-12-25T12:00:00', "low":'505.69', "close":'505.34'},
            {"open":'511.83', "high":'514.98', "x":'2015-12-26T12:00:00', "low":'505.59', "close":'507.23'},
            {"open":'511.22', "high":'515.30', "x":'2015-12-27T12:00:00', "low":'505.49', "close":'506.47'},
            {"open":'511.53', "high":'514.98', "x":'2015-12-28T12:00:00', "low":'505.79', "close":'506.40'},
            {"open":'512.53', "high":'513.88', "x":'2015-12-29T12:00:00', "low":'505.69', "close":'505.34'},
            {"open":'511.83', "high":'512.98', "x":'2015-12-30T12:00:00', "low":'502.59', "close":'503.23'},
            {"open":'511.22', "high":'515.30', "x":'2015-12-31T12:00:00', "low":'505.49', "close":'506.47'},
            {"open":'510.35', "high":'515.72', "x":'2016-01-01T12:00:00', "low":'505.23', "close":'508.80'}
        ]);

```

{sample}STOCK\_Data\_02{sample}


## Mapping

After we have set the data, we need to map it properly. For that we should create a new mapping object using {api:anychart.data.Table#mapAs}**.mapAs()**{api} function. 

```
	var mapping = table.mapAs();
```

This object now will be responsible for the data mapping. Here we should add fields (or simply lines) using {api:anychart.data.TableMapping#addField}**.addField()**{api} method. Each field has to get at least two parameters: the name of the field to add and the index of the column where the field should get values from. These will map the data correctly.

The third parameter is an grouping/approximation mode: when you've got too many data points and they are grouped to be shown on a small plot, the grouping type is chosen according to the field name (so, "first" will be for "open", "last" for close, "average" for "value", etc.). If you want to change it, add the aggregation type you want to use as the third parameter to the {api:anychart.data.TableMapping#addField}**.addField()**{api} method.

That's how it should look like:

```
	mapping.addField('open', 1, 'first');
	mapping.addField('high', 2, 'max');
```

You can also map the data in a line as usual:

```
	var mapping = table.mapAs({'open': 0, 'high': 1, 'low': 3, 'close': 4});
```

In case of defining the data as array of objects, we need to set the field names instead of numbers:

```
	var mapping = table.mapAs({'open':"open", 'high': "high", 'low': "low", 'close': "close"});
```

That's how we map the data for AnyStock. For more information see the [Using Table Data Model](../Working_with_Data/Using_Table_Data_Model) article.

## Remove

We can remove data points using two methods: {api:anychart.data.Table#remove}**.remove()**{api} or {api:anychart.data.Table#removeFirst}**.removeFirst()**{api}. 
Which one to choose depends on what exactly do we need.

 {api:anychart.data.Table#removeFirst}**.removeFirst()**{api} method removes the given number of data points from the beginning of a table. This removes the first ten rows from the table:
<br>
```
	table.removeFirst(10);
```
<br>
  {api:anychart.data.Table#remove}**.remove()**{api} method can remove any point or a range of them. Look at the following code sample, it will remove a range of data points:
<br>
```
	table.remove('2015-12-24T12:00:00', '2015-12-27T12:00:00');
```
<br>
In case you need to remove only one point, provide only one parameter:
<br>
```
	table.remove('2015-12-25T12:00:00');
```
<br>
Using this method with no arguments  removing the whole table (all points), so be careful.
