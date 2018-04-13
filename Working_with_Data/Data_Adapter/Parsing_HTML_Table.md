{:index 1.5}
# Parsing HTML Table

## Overview

Parsing HTML tables feature allows you to load data from HTML table into AnyChart, it is provided by the {api:anychart.data#parseHtmlTable}parseHtmlTable(){api} method. This method is a part of [Data Adapter](Overview) script and this script has to be plugged to make this method available:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/releases/RC-8.2.1/js/anychart-data-adapter.min.js"></script>
```

Data Adapter allows to parse both tables created with `<table>` tag and with a help of CSS. Please see samples and description below.

## Table Tag Table

To load data from a table created with `<table>` tag you need to use the {api:anychart.data#parseHtmlTable}parseHtmlTable(){api} method and table should have the following format: `<thead>` is considered as series names, the first column is considered to be an argument, and all other columns are considered to be series, `<caption>` tag is considered to be a chart title. Note: `<thead>` and `<caption>` are optional.

```
<table id="htmlTable" class="htmlTable">
  <caption>Exchange rates</caption>
  <thead>
    <tr>
      <th>Date</th>
      <th>EUR</th>
      <th>USD</th>
      <th>YEN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01/01</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>01/02</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>01/03</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
```

Here is a sample code that will parse an HTML table shown above into {api:anychart.data.DataSettings}anychart.data.DataSettings{api} format, which can be used to set data to charts:

```
// parse a table with 'htmlTable' id
var tableData = anychart.data.parseHtmlTable("#htmlTable");
```

To set the data obtained like that to a chart you need to use the {anychart.charts.Cartesian#data}data(){api} method:

```
// create a chart
var chart = anychart.column();

// parse a table with 'htmlTable' id
var tableData = anychart.data.parseHtmlTable("#htmlTable");

// set the data to a chart
chart.data(tableData);
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_HTML\_Table\_01{sample}

## CSS Table

To load data from a table created with CSS you need to use the {api:anychart.data#parseHtmlTable}parseHtmlTable(){api} method and provide proper CSS selectors. For example, if the table is created in CSS like this:

```
<div class="table">
  <div class="heading">
    <div class="cell">
      <p>Date</p>
    </div>
    <div class="cell">
      <p>ILS (₪)</p>
    </div>
    <div class="cell">
      <p>CNY (¥)</p>
    </div>
  </div>
  <div class="row">
    <div class="cell">
      <p>01/01</p>
    </div>
    <div class="cell">
      <p>2</p>
    </div>
    <div class="cell">
      <p>3</p>
    </div>
  </div>
</div>
```

Then you can load data from it like this, notice that you can dig into divs and obtain a proper element:

```
var tableData = anychart.data.parseHtmlTable(".table", ".row", ".cell p", ".heading .cell p", ".title");
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_HTML\_Table\_02{sample}