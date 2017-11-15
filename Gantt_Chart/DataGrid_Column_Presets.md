{:index 7}
# DataGrid Column Presets

## Overview

JavaScript Gantt chart consists of two parts: TimeLine, that contains visualized information, and DataGrid, that displays strings' numbers and names along with additional information. In this article we will describe how information in the dataGrid columns can be formatted using presets and how to create a custom column formatter.

## Column Formatting

DataGrid columns can contain different types of information. You can format each column according to your needs and preferences. Use {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api} to define an information field in your dataset or a preset for data formatting.

```
var column = dataGrid().column(2);
column.title("dateDmyDots");
column.setColumnFormat("actualStart", "dateDmyDots");
```

Let's take a closer look at the presets.

### Presets

There are several presets for the {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat()

{api} method. Some of them are useful for formatting dates, some can adjust simple text and some can process numeric values:

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th width="100" style="vertical-align: middle; text-align: center;"><b>Preset</b></th>
<th width="260" style="vertical-align: middle; text-align: center;"><b>Description</b></th>
<th style="vertical-align: middle; text-align: center;"><b>Result</b></th>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>dateCommonLog</b></td>
<td style="vertical-align: middle; text-align: center;">Display date as day/month/year. Day and year have numeric format while month presented in a form of text 3 letters long.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_01{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>dateDmyDots</b></td>
<td style="vertical-align: middle; text-align: center;">Display date as dd.mm.yy. Day, month and year have numeric format and all of them are 2 figures long.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_02{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>dateIso8601</b></td>
<td style="vertical-align: middle; text-align: center;">Display date as yyyy-mm-dd. Day, month and year have numeric format. Year is 4 figures long while month and day are 2 figures long</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_03{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>dateUsShort</b></td>
<td style="vertical-align: middle; text-align: center;">Display date as yyyy-mm-dd. Day, month and year have numeric format. Year is 4 figures long while month and day are 2 figures long.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_04{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>percent</b></td>
<td style="vertical-align: middle; text-align: center;">Format percentage values (assuming that for numeric values *1* stands for *100%* and for string values *"1"* stands for *1%*.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_05{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>directNumbering</b></td>
<td style="vertical-align: middle; text-align: center;">Format simple numbers.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_06{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>shortText</b></td>
<td style="vertical-align: middle; text-align: center;">Adjusting text values and fitting it into small columns.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_07{sample}</td>
</tr>
<tr>
<td style="vertical-align: middle; text-align: center;"><b>text</b></td>
<td style="vertical-align: middle; text-align: center;">Show simple text values without any adjustment.</td>
<td style="padding-top: 0;">{sample :width 290 :height 130}GANTT\_Column\_Presets\_08{sample}</td>
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
    "actualStart", 
    {
      // set formatting function
      "formatter": function(value){
        var date = new Date(value);
        // get minuts
        var minutes = date.getUTCMinutes();
        // get hours
        var hours = date.getUTCHours();
        // get month as a word 3 letters long
        var month = date.toLocaleDateString("en-US", {month: "short"});
        // if it is between 12.00 a.m. and 11.59 a.m.
        if (hours < 12) {
          // if 12.00 a.m.
          if (hours === 0 && minutes === 0)
          // display just month and day
            return month + " " + format(date.getUTCDate());
          // format and display hours, minutes, month and day
          return format(hours) + ":" + format(minutes) + " a.m. " + month + " " + format(date.getUTCDate());
          // if it is between 12.00 p.m. and 11.59 p.m
        }else{
          // format and display hours, minutes, month and day
          return format(hours) + ":" + format(minutes) + " p.m. " + month + " " + format(date.getUTCDate());
        }
        function format (number) {
          // if the number is less than 10
          if (number<10)
          // add zero before the digit
            return "0" + number;
          return number;
        }
      },
      // set text visual appearance
      "textStyle": {
        // set clue font color
        "fontColor": "blue"
      },
      // set custom column width
      "width": 150
    }
  );
```

The object for column customization may contain three parameters: **width**, **textStyle** and **formatter**. The **width** parameter sets custom column width, **textStyle** adjusts visual appearance of the text in the column and **formatter** is a function for adjusting the data in each cell of the column.  
**Note**: If you want to use same formatter for several columns you can create custom function beyond the chart dataGrid scope and use it wherever you want.

```
var dataGrid = chart.dataGrid();

var column2 = dataGrid.column(2);
// Sets column formats.
column2.setColumnFormat("actualStart", {
  "formatter": columnFormatter
});

var column3 = dataGrid.column(3);
// Sets column formats.
column3.setColumnFormat("actualEnd", {
  "formatter": columnFormatter
});

// custom formatting function
function columnFormatter (value){
  /* code of your function */
}
```

Here is a sample with custom formatting function applied to two columns:

{sample :width 690 :height 220}GANTT\_Column\_Presets\_09{sample}

**Note**: In some cases it is more appropriate to use {api:anychart.core.ui.DataGrid.Column#format}format(){api} method than {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api} method. For example, if you need to use information from two or more fields of your data it is better to use {api:anychart.core.ui.DataGrid.Column#format}format(){api} instead of {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api}. Please, see the [DataGrid article](DataGrid) for more information.
