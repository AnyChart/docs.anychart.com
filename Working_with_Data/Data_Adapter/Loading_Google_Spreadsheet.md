{:index 5}
# Loading Google Spreadsheet

* [Overview](#overview)
* [Loading Spreadsheet](#loading_spreadsheet)
 * [Key](#key)
 * [Sheet](#sheet)
* [Setting Data](#setting_data)


## Overview

Ability to [load data from Google Spreadsheet](#loading_spreadsheet) is one of the features [Data Adapter](Overview) provides.

To work with the features Data Adapter provides you need to plug it in along with AnyChart Library:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/js/latest/data-adapter.min.js"></script>
```

When the Data Adapter is plugged in, you can use the {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api} method.

## Spreadsheet format and Access

AnyChart Data Adapter can be used to load only Google Spreadsheets that are:

- Published to the Web: File > Publish to the web
!(how to publish google spreadsheet to web to use in anychart data adapter)[https://static.anychart.com/images/docs/data-adapter-google-spreadsheet-publish.png]

- Follow the certain format, where the first row **must** contain series names and first column - arguments
!(format for google spreadsheet to be used in anychart data adapter)[https://static.anychart.com/images/docs/data-adapter-google-spreadsheet-format.png]

## Loading Spreadsheet

With {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api}

```
anychart.data.loadGoogleSpreadsheet('1cLyzQ9hBFpumKp-xqV9dHI7RHFTwCzDD64M3H0j2tsA', function(data) {
	// the default sheet is loaded
});
```

### Key

### Sheet

## Setting Data

