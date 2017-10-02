{:index 2}
# Loading CSV File

## Overview

Ability to load CSV files is one of the things [Data Adapter](Overview) provides.

To work with the features Data Adapter provides you need to plug it in along with AnyChart Library:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/releases/js/{{branch-name}}/anychart-data-adapter.min.js"></script>
```

You can load [Data from CSV](../Data_From_CSV) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadCsvFile}loadCsvFile(){api} method as described below.

## loadCsvFile() method

Using {api:anychart.data#loadCsvFile}loadCsvFile(){api} method is as easy as this:

```
anychart.data.loadCsvFile("https://cdn.anychart.com/charts-data/data_csv.csv", function (data) {
	// create chart from loaded data
	chart = anychart.bar(data);
	// set title
	chart.title("AnyChart from CSV File");
	// draw chart
	chart.container("container").draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_CSV\_01{sample}

This method also allows to handle loading errors, changing sending method, adding headers, setting timeout interval, and sending credentials, see all available parameters in {api:anychart.data#loadCsvFile}loadCsvFile(){api} API description.

## CSV Settings

To learn about availale CSV Data settings please refer to the [Data from CSV](../Data_From_CSV) article.