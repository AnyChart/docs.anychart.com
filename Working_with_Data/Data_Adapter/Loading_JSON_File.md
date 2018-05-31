{:index 3}
# Loading JSON File

## Overview

Ability to [load JSON files](#loading_file_with_loadjsonfile_method) and [deserialize directly from JSON files](#deserializing_from_json_file) are the features [Data Adapter](Overview) provides.

To work with the features Data Adapter provides you need to plug it in along with AnyChart Library:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/releases/DVF-3742-indicators/js/anychart-data-adapter.min.js"></script>
```

You can load [Data from JSON](../Data_From_JSON) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadJsonFile}loadJsonFile(){api} and create charts from files with {api:anychart#fromJsonFile}fromJsonFile(){api} method.

## Loading File with loadJsonFile method

Using {api:anychart.data#loadJsonFile}loadJsonFile(){api} method is as easy as this, you can put data in any of [supported formats](../Supported_Data_Formats) into JSON file:

```
[
  ["Eyeshadows", 249980],
  ["Eyeliner", 213210],
  ["Eyebrow pencil", 170670],
  ["Nail polish", 143760],
  ["Lipstick", 128000],
  ["Lip gloss", 110430],
  ["Mascara", 102610],
  ["Foundation", 94190],
  ["Rouge", 80540],
  ["Powder", 53540]
]
```

And the load and use such file:

```
anychart.data.loadJsonFile("https://cdn.anychart.com/charts-data/data_json.json", function (data) {
	// create a chart and set loaded data
    chart = anychart.bar(data);

    chart.title("Load JSON data and create a chart");
    chart.container("container");
    chart.draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_JSON\_01{sample}

This method also allows to handle loading errors, changing sending method, adding headers, setting timeout interval, and sending credentials, see all available parameters in {api:anychart.data#loadJsonFile}loadJsonFile(){api} API description.

You can use this method to load anything else too.

## Deserializing from JSON File

With {api:anychart#fromJsonFile}fromJsonFile(){api} method you can deserialize a chart directly from a file with chart settings and data in [AnyChart JSON format](../Data_From_JSON):

```
// Create a chart from JSON file
anychart.fromJsonFile("https://cdn.anychart.com/config-samples/line-chart.json", function (chart) {
	// set additional settings
    chart.title("Create a chart from JSON file");
    // display chart
    chart.container("container");
    chart.draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_JSON\_02{sample}

This method also allows to handle loading errors, changing sending method, adding headers, setting timeout interval, and sending credentials, see all available parameters in {api:anychart#fromJsonFile}fromJsonFile(){api} API description.
