---
sidebar_position: 1
---
# Data Adapter

## Overview

AnyChart JavaScript charting framework supports several ways of setting data. For the information about this see [Overview](../overview), [Data Sets](../data-sets) and [Supported Data Formats](../supported-data-formats) articles - these are things built-in into AnyChart core engine.

Data Adapter is an additional script that can do even more: load [CSV](#csv-file), [JSON](#json-file) and [XML](#xml-file) files, load [data from HTML Tables](#html-tables) and [Google Spreadsheets](#google-spreadsheet).

## Modules

Data Adapter requires adding the [Data Adapter](../../quick-start/modules#data-adapter) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-adapter.min.js"></script>
```

Learn more: [Modules](../../quick-start/modules).

## HTML Tables

Parsing HTML tables feature allows you to load data from HTML table into AnyChart, it is provided by the {api:anychart.data#parseHtmlTable}parseHtmlTable(){api} method: 

See detailed description and samples in [Parsing HTML Table](parsing-html-table) article.

## Loading Files

### CSV File

You can load [Data from CSV](../data-from-csv) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadCsvFile}loadCsvFile(){api} method:

See details in [Loading CSV File](loading-csv-file) article.

**NOTE:** you can load CSV files using any other AJAX method of your choice, be it jQuery or any other capable library, data adapter is just a helper script in this case.

### Google Spreadsheet

Data Adapter allows you to load data for AnyChart charts from spreadsheets created with [Google Sheets](https://www.google.com/sheets/about/) using the {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){} method:

See details in [Loading Google Spreadsheet](loading-google-spreadsheet) article.

### JSON File

You can load [Data from JSON](../data-from-json) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadJsonFile}loadJsonFile(){api} method, or deserialize chart from JSON file using the {api:anychart#fromJsonFile}fromJsonFile(){api} method:

See details in [Loading JSON File](loading-json-file) article.

**NOTE:** you can load JSON files using any other AJAX method of your choice, be it jQuery or any other capable library, data adapter is just a helper script in this case.

### XML File

You can load [Data from XML](../data-from-xml) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadXmlFile}loadXmlFile(){api} method, or deserialize chart from XML file using the {api:anychart#fromXmlFile}fromXmlFile(){api} method:

See details in [Loading XML File](loading-xml-file) article.

**NOTE:** you can load XML files using any other AJAX method of your choice, be it jQuery or any other capable library, data adapter is just a helper script in this case.
