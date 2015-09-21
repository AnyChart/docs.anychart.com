{:index 3}

#Data

* [General information](#general_information)
* [Add](#add)
* [Mapping](#mapping)
* [Remove](#remove)

# General information
Stock chart can process only with the table-formatted data. The most appropriate way of doing this is using {api:anychart.data#mapAsTable}**mapAsTable()**{api} method. You can find more about table data model [here](../Working_with_Data/Using_Table_Data_Model).

First of all, we need to create a table for our data. It looks as the following:
<br>
```
	table = anychart.data.table();
```
<br>
Here you should decide which table column would contain the x-axis value. If it's not defined in the first table column, then you should set the number of the column with x-axis values to the .table() method, because it is set in 0 by default.

# Add

Now, we should add some data in our newly created table. Note, that the data for tree data model should be set as array of arrays or in CSV format. We use .addData() method for this.

```
	table = anychart.data.table(2);
	
	table.addData([
		['511.53', '514.98', '2015-12-24T12:00:00', '505.79', '506.40'],
		['512.53', '514.88', '2015-12-25T12:00:00', '505.69', '505.34'],
		['511.83', '514.98', '2015-12-26T12:00:00', '505.59', '506.23'],
		['511.22', '515.30', '2015-12-27T12:00:00', '505.49', '506.47'],
		['510.35', '515.72', '2015-12-28T12:00:00', '505.23', '505.80'],
		.....
	]);
```

<br>**Note!** Each data table has to have a "key" value (x-axis value), which should be unique for one series data. If there are some lines (data points) with the same x-axis value, stock will count only the last point with this X.

Note that the X value has to contain date in any format. It means that you may set data as a timestamp, Date Time String or UTC - but it definitely has to be a data, as the first meaning of stock charts is to show the change of something through the time.

# Mapping

After we have set the data, we need to map it properly. For that we should create a new mapping object using {api:anychart.data.Table#mapAs}**.mapAs()**{api} finction. 

```
	mapping = table.mapAs();
```

This object now will be responsible for the data mapping. Here we should add a plenty of fields (or simply lines) using {api:anychart.data.TableMapping#addField}**.addField()**{api} method. Each field has to get at least two parameters: the name of the field to add and the index of the column where the field should get values from. These will map the data correctly, but the grouping parameter by default is "close". It means that when you've got loads of data points and they are grouped to be shown all in one chart, the grouping type will be chosen "first" automatically as for OHLC chart, and all those values, which name we have defined as the first parameter, will group into one - the first one. If you want to change it to an average, last or any other, add this type as the third parameter to the {api:anychart.data.TableMapping#addField}**.addField()**{api} method.

That's how it would look:

```
	mapping.addField('open', 1, 'first');
	mapping.addField('high', 2, 'max');
```

That's how we map the data for AnyStocks. For more information look up the [Using Table Data Model](../Working_with_Data/Using_Table_Data_Model) article.

# Remove

We can remove datapoints using two methods: {api:anychart.data.Table#remove}**.remove()**{api} or {api:anychart.data.Table#removeFirst}**.removeFirst()**{api}. 
Which one to choose depends on what exactly do we need. As you may guess, the {api:anychart.data.Table#removeFirst}**.removeFirst()**{api} method removes the first data point from the table. It seems a bit more complicated with {api:anychart.data.Table#remove}**.remove()**{api}: we may remove one point or a range of them. Look at the following piece of code. This will remove a range of data points:
<br>
```
	table.remove('2015-12-24T12:00:00', '2015-12-27T12:00:00');
```
<br>
In case you need to remove the only point, set its X alone:
<br>
```
	table.remove('2015-12-25T12:00:00');
```
<br>
Using this method with no arguments will lead to removing the whole array of points, so be careful.
