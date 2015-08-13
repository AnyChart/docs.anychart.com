{:index 7}
DataGrid Column Presets
===========

* [Overview](#overview)
* [Column Formatting](#column_formatting)
 * [Presets](#presets)
 * [Custom Formatter](#custom_formatter)

## Overview

Gantt chart consist of two parts - TimeLine that contains visualized information and DataGrid that displays strings' numbers and names along with additional information. In this article we will describe how information in the dataGrid columns can be formatted using presets and how to create a custom column formatter.

## Column Formatting

DataGrid columns can contain different types of information. You can format each column according to your needs and desires. Use {api:anychart.core.ui.DataGrid.Column#setColumnFormat}**.setColumnFormat()**{api} to define information field in your data set and preset for data formatting.

```
  var column = dataGrid().column(2);
  column.title("dateDmyDots");
  column.setColumnFormat("actualStart", "dateDmyDots");
```

Let's take a closer look at the presets.

### Presets

There are several types of presets for {api:anychart.core.ui.DataGrid.Column#setColumnFormat}**.setColumnFormat()**{api} method: some of them are useful for formatting dates, some can adjust simple text and some can process numeric values. Here is a table with all possible presets with a small description for each of them.

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th width="100"><b>Preset</b></th>
<th width="252"><b>Description</b></th>
<th><b>Result</b></th>
</tr>
<tr>
<td><b>dateCommonLog</b></td>
<td>Display date as day/month/year. Day and year have numeric format while month presented in a form of text 3 letters long</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_01{sample}</td>
</tr>
<tr>
<td><b>dateDmyDots</b></td>
<td>Display date as dd.mm.yy. Day, month and year have numeric format and all of them are 2 figures long</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_02{sample}</td>
</tr>
<tr>
<td><b>dateIso8601</b></td>
<td>Display date as yyyy-mm-dd. Day, month and year have numeric format. Year is 4 figures long while month and day are 2 figures long</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_03{sample}</td>
</tr>
<tr>
<td><b>dateUsShort</b></td>
<td>Display date as yyyy-mm-dd. Day, month and year have numeric format. Year is 4 figures long while month and day are 2 figures long</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_04{sample}</td>
</tr>
<tr>
<td><b>percent</b></td>
<td>Format percentage values (assuming that for numeric values *1* stands for *100%* and for string values *"1"* stands for *1%*</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_05{sample}</td>
</tr>
<tr>
<td><b>directNumbering</b></td>
<td>Format simple numbers</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_06{sample}</td>
</tr>
<tr>
<td><b>shortText</b></td>
<td>adjusting text values and fitting it into small columns</td>
<td>{sample :width 250 :height 150}GANTT\_Column\_Presets\_07{sample}</td>
</tr>
<tr>
<td><b>text</b></td>
<td>Show simple text values without any adjustment</td>
<td style="padding-left: 5px;">{sample :width 250 :height 150}GANTT\_Column\_Presets\_08{sample}</td>
</tr>
</tbody>
</table>

### Custom Formatter

If your data requires more complex customization you can use your own object with custom settings for data formatting and visual settings. Here is a sample of custom column content formatting: 

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
          return hours + " hours <a style='color: #7c868e;'>(" + (hours/24).toFixed(0) + " days)<a>";
        }else{
          // display only hours if the duration doesn't exceed 24 hours
          return hours + " hours";
        }
      },
      // set text visual appearance
      "textStyle": {
        // set clue font color
        "fontColor": "blue",
        // enable html in column content 
        "useHtml": true
      },
      // set custom column width
      "width": 150
    }
  );
```

The object for column customization may contain three parameters: **formatter**, **textStyle** and **width**. **Formatter** is a function for adjusting the data in each cell of the column. **TextStyle** adjust visual appearance of the text in the cell and **width** set custom column width.

{sample :width 690 :height 200}GANTT\_Column\_Presets\_09{sample}

**Note**: In some cases it is more appropriate to use {api:anychart.core.ui.DataGrid.Column#textFormatter}**textFormatter()**{api} method than {api:anychart.core.ui.DataGrid.Column#setColumnFormat}**.setColumnFormat()**{api} method. Please, see [DataGrid article](./DataGrid#content) for more information.