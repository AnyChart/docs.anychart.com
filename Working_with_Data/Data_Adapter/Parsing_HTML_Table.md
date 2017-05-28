{:index 1.5}
# Parsing HTML Table

* [Overview](#overview)
* [Table Tag Table](#table_tag_table)
* [CSS Table](#css_table)

## Overview

Parsing HTML tables feature allows you to load data from HTML table into AnyChart, it is provided by the {api:anychart.data#parseHtmlTable}parseHtmlTable(){api} method. This method is a part of [Data Adapter](Overview) script and this script has to be plugged to make this method available:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/js/latest/data-adapter.min.js"></script>
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

<p data-height="265" data-theme-id="0" data-slug-hash="eWymYg" data-default-tab="html,result" data-user="SitePoint" data-embed-version="2" data-pen-title="AnyChart HTML Table Parsing" class="codepen">See the Pen <a href="https://codepen.io/SitePoint/pen/eWymYg/">AnyChart HTML Table Parsing</a> by SitePoint (<a href="https://codepen.io/SitePoint">@SitePoint</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## CSS Table

text

<iframe height='265' scrolling='no' title='AnyChart HTML Table Parsing' src='//codepen.io/SitePoint/embed/eWymYg/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/SitePoint/pen/eWymYg/'>AnyChart HTML Table Parsing</a> by SitePoint (<a href='https://codepen.io/SitePoint'>@SitePoint</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
