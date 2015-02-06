{:index 6}
# Getting Data from JSON

## Overview

AnyChart provides a variety of ways for transforming data into Anychart JavaScript library. Using javascript solutions may be unproductive in some cases. Aiming to make our component more user-friendly, Anychart provides an opportunity to use JSON files. This article is dedicated to usage of JSONs as sources of information and chart style setters.

For feeding JSON files to anychart, use {api:anychart#fromJson}**.fromJSON()**{api} parameter.

```
  var chart = anychart.fromJSON(/*put your JSON data in here*/);

  // set container and draw chart
  chart.container('container').draw();
```

The snippet above demonstrates getting data from JSON without illuminating JSON structure itself. The code below represents simple structure of acceptable JSON.

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

