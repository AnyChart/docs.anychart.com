{:index 1}
DataGrid Column Presets
===========
  
Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## Column Formatting

DataGrid columns can contain different types of information. You can format each column according to your needs and desires. Use {api:anychart.core.ui.DataGrid.Column#setColumnFormat}**.setColumnFormat()**{api} to define information field in your data set and data type for the column. You can find all possible data formats in {api:anychart.enums.ColumnFormats}**API**{api}. 

```
  var chart = anychart.ganttProject();
  chart.data(data);

  var column = chart.column(3);
  column.setColumnFormat("actualStart", "dateIso8601");
  column.title("Start");
```

Let's take a closer look at each of these presets.

### Formatting Presets

As far as gantt chart visualize numeric values most formatting presets represent different numeric formats. **dateCommonLog**, **dateDmyDots**, **dateIso8601**, **shortText** and **dateUsShort** presets are useful for formatting dates in different ways. 
  
```
  var column = dataGrid().column(2);
  column.title("dateDmyDots");
  column.setColumnFormat("actualStart", "dateDmyDots");
```
  
Here is a sample with date formatted using **dateDmyDots** preset.

{sample :width 690 :height 200}GANTT\_Column\_Presets\_01{sample}

**directNumbering** is a formatting for simple numbers. This is default preset for the vary first column in the data grid.
  
  
**financial** preset formats fiscal values and **percent** preset format percentage values (assuming that for numeric values *1* stands for *100%* and for string values *1* stands for *1%*). Use **text** preset to show simple text values without any adjustment (**text** is default preset for second column).
  
  
Here is a sample with several presets in one data grid

{sample :width 690 :height 200}GANTT\_Column\_Presets\_03{sample}

### Custom Formatter

If your data requires more complex customization you can use your own object with custom settings for data formatting. Here is a sample of custom object data formatting: 

```
  var customColumn = dataGrid.column(8);
  customColumn.title("Custom");
  customColumn.setColumnFormat("custom", {
    "formatter": function(val) {
      if (typeof val == "number") {
        return val < 100 ? ("Small custom text for " + val) : ("Big data, big text for " + val);
      } else if (typeof val == "boolean") {
        return "Boolean is " + val;
      } else {
        return "Boring text is " + val;
      }
    },
    "textStyle": {
      "fontDecoration": "underline",
      "fontWeight": "bold",
      "fontColor": "green",
      "hAlign": "center"
    },
    "width": 250
  });
```

The object for column customization may contain three parameters: "formatter", "textStyle" and "width". **Formatter** is a function for adjusting the data in each cell of the column. **TextStyle** adjust visual appearance of the text in the cell and **width** set custom column width.

{sample :width 690 :height 200}GANTT\_Column\_Presets\_02{sample}