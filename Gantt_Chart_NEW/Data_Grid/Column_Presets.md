{:index 4}
# Column Presets

## Overview

misc:

* {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api}
* {api:anychart.enums.ColumnFormats}anychart.enums.ColumnFormats{api}
* {api:anychart.core.ui.DataGrid.Column#labels}labels(){api} + {api:anychart.core.ui.LabelsFactory#format}format(){api}
* [Columns: Tokens](Columns#tokens)
* [Columns: Formatting Functions](Columns#formatting_functions)

## Default Presets

misc:

* {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api}
* {api:anychart.enums.ColumnFormats}anychart.enums.ColumnFormats{api}
* [dates](#dates), [percents](#percents)

default presets:

* `"text"`
* `"date-common-log"`
* `"date-dmy-dots"`
* `"date-iso-8601"`
* `"date-us-short"`
* `"percent"`


```
chart.dataGrid().column(0).setColumnFormat("actualStart", "date-common-log");
```

### Dates

dates:

* `"date-common-log"`
* `"date-dmy-dots"`
* `"date-iso-8601"`
* `"date-us-short"`


{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_01{sample}

### Percents

percents:

* `"percent"`


{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_02{sample}

## Custom Presets

```
// configure the second data grid column
chart.dataGrid().column(1).setColumnFormat(
    "name",
    {
      formatter: function(value) {
        return value.toUpperCase();
      },
      textStyle: {fontColor: "#64b5f6"},
      width: 130
    }
);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_03{sample}
