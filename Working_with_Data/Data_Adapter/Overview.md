{:index 1}
# Data Adapter

## Overview

AnyChart JavaScript charting framework supports several ways of setting data. For the information about this see [Overview](../Overview), [Data Sets](../Data_Sets) and [Supported Data Formats](../Supported_Data_Formats) articles - these are things built-in into AnyChart core engine.

Data Adapter is an additional script that can do even more: load [CSV](#csv_file), [JSON](#json_file) and [XML](#xml_file) files, load [data from HTML Tables](#html_tables) and [Google Spreadsheets](#google_spreadsheet).

To work with the features Data Adapter provides you need to plug it in along with AnyChart Library:

```
<script src="https://cdn.anychart.com/releases/DVF-3692-table/js/anychart-data-adapter.min.js"></script>
```

## HTML Tables

Parsing HTML tables feature allows you to load data from HTML table into AnyChart, it is provided by the {api:anychart.data#parseHtmlTable}parseHtmlTable(){api} method: 

See detailed description and samples in [Parsing HTML Table](Parsing_HTML_Table) article.

## Loading Files

### CSV File

You can load [Data from CSV](../Data_From_CSV) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadCsvFile}loadCsvFile(){api} method:

See details in [Loading CSV File](Loading_CSV_File) article.

**NOTE:** you can load CSV files using any other AJAX method of your choice, be it jQuery or any other capable library, data adapter is just a helper script in this case.

### Google Spreadsheet

Data Adapter allows you to load data for AnyChart charts from spreadsheets created with [Google Sheets](https://www.google.com/sheets/about/) using the {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){} method:

See details in [Loading Google Spreadsheet](Loading_Google_Spreadsheet) article.

### JSON File

You can load [Data from JSON](../Data_From_JSON) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadJsonFile}loadJsonFile(){api} method, or deserialize chart from JSON file using the {api:anychart#fromJsonFile}fromJsonFile(){api} method:

See details in [Loading JSON File](Loading_JSON_File) article.

**NOTE:** you can load JSON files using any other AJAX method of your choice, be it jQuery or any other capable library, data adapter is just a helper script in this case.

### XML File

You can load [Data from XML](../Data_From_XML) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadXmlFile}loadXmlFile(){api} method, or deserialize chart from XML file using the {api:anychart#fromXmlFile}fromXmlFile(){api} method:

See details in [Loading XML File](Loading_XML_File) article.

**NOTE:** you can load XML files using any other AJAX method of your choice, be it jQuery or any other capable library, data adapter is just a helper script in this case.
