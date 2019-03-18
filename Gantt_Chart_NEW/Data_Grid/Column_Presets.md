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
* `"text"` = value of the data field
* пресеты влияют на ширину колонки

default presets:

* `"text"` – to display text [values](#values)
* `"direct-numbering"` – to display numeric [values](#values)
* `"date-common-log"` – to format [dates](#dates)
* `"date-dmy-dots"` – to format [dates](#dates)
* `"date-iso-8601"` – to format [dates](#dates)
* `"date-us-short"` – to format [dates](#dates)
* `"percent"` – to format [percents](#percents)
* `"financial"` – to format [financial data](#financial_data)
* `"percent"` – to format [short text](#short_text)


```
chart.dataGrid().column(0).setColumnFormat("actualStart", "date-common-log");
```

### Values

text & numeric values:

* `"text"`
* `"direct-numbering"`

sample:

* `"id"`


{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_01{sample}

### Dates

dates:

* `"date-common-log"`
* `"date-dmy-dots"`
* `"date-iso-8601"`
* `"date-us-short"`

sample:

* `"actualStart"`


{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_02{sample}

### Percents

percents:

* `"percent"`

sample:

* `"progressValue"`

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_03{sample}

### Financial Data

financial:

* `"financial"`

sample:

* custom field `"budget"`


{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_04{sample}

### Short Text

short text:

* `"short text"`

sample:

* (?) `"name"`


{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_05{sample}

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

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_06{sample}
