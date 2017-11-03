{:index 4}

# Custom Technical Indicators

## Overview

A technical indicator is a type of analysis chart that indicates market direction. AnyChart JavaScript Stock Charting Library supports automatic adding of [several types of technical indicators](Supported_Technical_Indicators), but it also allows you to create your own.

## Creating a custom technical indicator

Creating custom indicator consists of three main steps: the first one is to have a data set to build an indicator upon, most likely (but not necessarily) it is the same data set series are built upon. For the sake of clarity we add data in code, but you can load it from an external file or script. When data is added to a table, we need to map the value we will use in indicator calculation.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData([
    ['1990-03-26', 0.0825, 0.0842, 0.0816, 0.0842, 41702400],
    ['1990-03-27', 0.0833, 0.0859, 0.0825, 0.0859, 15926400],
    ['1990-03-28', 0.0859, 0.0859, 0.0851, 0.0851, 9792000],
    ['1990-03-29', 0.0851, 0.0851, 0.0833, 0.0851, 16272000],
    ['1990-03-30', 0.0833, 0.0833, 0.0799, 0.0816, 28742400],
    ['1990-04-02', 0.079, 0.0807, 0.0773, 0.0799, 15868800],
    ['1990-04-03', 0.079, 0.0816, 0.079, 0.0807, 8352000],
    ['1990-04-04', 0.0807, 0.0816, 0.0807, 0.0807, 14284800],
    ['1990-04-05', 0.0816, 0.0816, 0.0799, 0.0803, 8323200],
    ['1990-04-06', 0.0799, 0.0807, 0.079, 0.079, 10771200],
    ['1990-04-09', 0.0799, 0.0799, 0.0781, 0.0781, 6681600],
    ['1990-04-10', 0.0781, 0.0799, 0.0746, 0.0764, 34790400],
    ['1990-04-11', 0.0764, 0.0773, 0.0755, 0.0764, 24796800],
    ['1990-04-12', 0.0773, 0.0773, 0.0755, 0.0773, 13161600],
    ['1990-04-16', 0.0773, 0.0781, 0.0764, 0.0773, 5616000],
    ['1990-04-17', 0.0764, 0.0781, 0.0755, 0.0781, 6566400],
    ['1990-04-18', 0.0781, 0.0799, 0.0773, 0.079, 24480000],
    ['1990-04-19', 0.0781, 0.0799, 0.0781, 0.0799, 25142400],
    ['1990-04-20', 0.0799, 0.0799, 0.0773, 0.0773, 8755200],
    ['1990-04-23', 0.0773, 0.079, 0.0764, 0.0781, 5356800],
    ['1990-04-24', 0.0799, 0.0799, 0.079, 0.0794, 10281600],
    ['1990-04-25', 0.0799, 0.0807, 0.0799, 0.0799, 6768000],
    ['1990-04-26', 0.0799, 0.0816, 0.0799, 0.0799, 10713600],
    ['1990-04-27', 0.0799, 0.0807, 0.079, 0.079, 4204800],
    ['1990-04-30', 0.0807, 0.0842, 0.0799, 0.0825, 34329600]
]);

// map loaded data
var mapping = dataTable.mapAs({'value': 4});
```

When mapping is ready, we create a {api:anychart.data.TableComputer}computer{api} object using {api:anychart.data.Table#createComputer}createComputer(){api} method. They are called this way because basically indicator is a *computed* series. After that we define calculation function using {api:anychart.data.TableComputer#setCalculationFunction}setCalculationfunction (){api} method and set the name of the output column(s) in it.

```
// create computer
var computer = dataTable.createComputer(mapping);

// set computer output field
computer.addOutputField('myValue', 'myColumn');

// set calculation function to produce values with random increment
computer.setCalculationFunction(function(row) {
    var value = row.get('value');
    var myValue = value + Math.floor((Math.random() * 100) + 1);
    row.set('myValue', myValue);
});
```

When computer is set up - the indicator is already calculated, but we need to show it somehow: for this we simply map a column and create a series, just as we do with [all other series](../Data), set the name, stroke and any other series properties:

```
// map computed column 'myColumn' as value
var computedMapping = dataTable.mapAs({'value': 'myColumn'});

// create line series with mapping
var computedLine = plot.line(computedMapping);
computedLine.name('Custom Indicator');
computedLine.stroke('#ffa000 0.6');
```

That's it! In this sample we've created a very simple "indicator" that can't tell much about the data, but you can do whatever you want in calculation function and create any indicator of your choice. Please take a look at the live sample to see how the code shown above works:

{sample}STOCK\_Technical\_Indicators\_Custom\_Indicator{sample}

## Advanced Options

Coming soon: {api:anychart.data.TableComputer#setContext}setContext(){api} and {api:anychart.data.TableComputer#setStartFunction}setStartfunction (){api} description and building complex multi-series custom indicators description.