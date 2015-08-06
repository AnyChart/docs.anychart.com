{:index 7}
DataGrid Column Presets
===========

* [Overview](#overview)
* [Column Formatting](#column_formatting)
 * [Presets](#presets)
* [Custom Formatter](#custom_formatter)

## Overview

Gantt chart consist of two parts - TimeLine contains visualized information and Data Grid displays string's number and name along with additional information. In this article we will describe how information in columns can be formatted with default presets or with your custom preset.

## Column Formatting

DataGrid columns can contain different types of information. You can format each column according to your needs and desires. Use {api:anychart.core.ui.DataGrid.Column#setColumnFormat}**.setColumnFormat()**{api} to define information field in your data set and data type for the column. You can find all possible data presets in {api:anychart.enums.ColumnFormats}**API**{api}. 

```
  var chart = anychart.ganttProject();
  chart.data(data);
  var dataGrid = chart.dataGrid();
  var column = dataGrid.column(3);
  column.setColumnFormat("actualStart", "dateIso8601");
  column.title("Start");
```

Let's take a closer look at each of these presets.

### Presets

As far as gantt chart visualize numeric values most formatting presets represent different numeric formats. **dateCommonLog**, **dateDmyDots**, **dateIso8601**, **dateUsShort** and **dateUsShort** presets are useful for formatting dates in different ways. 
  
```
  var column = dataGrid().column(2);
  column.title("dateDmyDots");
  column.setColumnFormat("actualStart", "dateDmyDots");
```
  
Here is a sample with date formatted using **dateDmyDots** preset.

{sample :width 690 :height 200}GANTT\_Column\_Presets\_01{sample}

**financial** preset formats fiscal values and **percent** preset format percentage values (assuming that for numeric values *1* stands for *100%* and for string values *1* stands for *1%*). **directNumbering** is a formatting for mere numbers. This is default preset for the very first column in the data grid. **shortText** preset is useful for adjusting text values and fitting it into small columns. Use **text** preset to show simple text values without any adjustment (**text** is default preset for second column).
  
  
Here is a sample with several presets in one data grid

{sample :width 690 :height 200}GANTT\_Column\_Presets\_02{sample}

### Custom Formatter

If your data requires more complex customization you can use your own object with custom settings for data formatting. Here is a sample of custom object data formatting: 

```
  // data grid getter
  var dataGrid = chart.dataGrid();

  // create custom column
  var customColumn = dataGrid.column(2);

  // set title for custom column
  customColumn.title("Duration");

  // set custom formatter
  customColumn.setColumnFormat(
    // get id of each string
    "id", 
    {
      // set formatting function
      "formatter": function(value){
        var number = value - 1;
        // get actual start time from each string
        var start = data[number].actualStart;
        // get actual end time from each string
        var end = data[number].actualEnd;
        // subtract start time from end time (in milliseconds)
        var duration = end - start;
        // transform milliseconds into hours
        var hours = duration/1000/60/60;
        // check if duration is more than 24 hours
        if (hours>24){
          // transform hours into days if the duration exceeds 24 hours
          return hours + " hours (" + (hours/24).toFixed(0) + " days)";
        }else{
          // display only hours if the duration doesn't exceed 24 hours
          return hours + " hours";
        }
      },
      // set custom column width
      "width": 150
    }
  );
```

The object for column customization may contain three parameters: "formatter", "textStyle" and "width". **Formatter** is a function for adjusting the data in each cell of the column. **TextStyle** adjust visual appearance of the text in the cell and **width** set custom column width.

{sample :width 690 :height 200}GANTT\_Column\_Presets\_03{sample}

**Note**: In some cases it is more appropriate to use {api:anychart.core.ui.DataGrid.Column#textFormatter}**textFormatter()**{api} method than {api:anychart.core.ui.DataGrid.Column#setColumnFormat}**.setColumnFormat()**{api} method. Please, see [DataGrid article](./DataGrid#content) for more information.