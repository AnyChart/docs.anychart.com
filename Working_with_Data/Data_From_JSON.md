{:index 6}
# Getting Data from JSON

* [Overview](#overview)
 * [Create](#create)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)
 * [Insert](#insert)

## Overview

AnyChart provides variate of possibilities for translating data into Anychart JavaScript library. Constant usage of java scrtipt solutions may appear to be unproductive in some cases. Aiming to makes our component more comfortable our partners, Anychart provides opportunities to use data from JSON file. This article is divided to usage of JSONs as source of information and chart style setter.

For feeding JSON files to anychart, use {api:anychart#fromJson}**.fromJSON()**{api} parameter.

```
  var chart = anychart.fromJSON(/*put your JSON data in here*/);

  // set container and draw chart
  chart.container('container').draw();
```

Snippet above demonstrates getting data from JSON but avoid illuminating JSON structure itself. Snippet below represents simple structure of acceptable JSON.

```
  // JSON data
  var json = {
    // chart settings
    "chart": {
      // chart type
      "type": "column",
      // series settings
      "series": [{
        // series data
        "data": [
          {"x": "P1", "value": "128.14"},
          {"x": "P2", "value": "112.61"},
          {"x": "P3", "value": "163.21"},
          {"x": "P4", "value": "229.98"},
          {"x": "P5", "value": "90.54"}
        ]
      }],
      // chart container
      "container": "container"
    }
  };
```

{sample}WD\_Data\_from\_JSON\_01{sample}