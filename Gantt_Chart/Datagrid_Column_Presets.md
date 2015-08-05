{:index 1}
DataGrid Column Presets
===========
  
Data Grid - is one of the main parts of Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## Column Formatting

DataGrid columns can contain different types of information. You can format each column according to your needs and desires. Use **.setColumnFormat()** to define information field in your data set and data type for the column. You can find all possible data formats in {api:anychart.enums.ColumnFormats}**API**{api}. 

```
  var chart = anychart.ganttProject();
  chart.data(data);
  
  var column = chart.column(3);
  column.setColumnFormat("actualStart", "dateIso8601");
  column.title("Start");
```

Let's take a closer look at each of these presets.

### Formatting Presets

As far as gantt chart visualize numeric values most formatting presets represent different numeric formats. **dateCommonLog**, **dateDmyDots**, **dateIso8601**, **shortText** and **dateUsShort** presets are useful for formatting dates in different ways. **directNumbering** is a formatting for simple numbers, **financial** formats fiscal values and **percent** option format percentage values (assuming that *1* stands for *100%*). Use **text** option to show simple text values without any adjustment. 

## Custom Formatter

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

{sample}GANTT\_Column\_Presets\_02{sample}