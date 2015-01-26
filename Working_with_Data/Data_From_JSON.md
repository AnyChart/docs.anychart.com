{:index 6}
# Getting Data from JSON

* [Overview](#overview)
 * [Create](#create)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)
 * [Insert](#insert)

## Overview

AnyChart provides variate of possibilities for translating data into Anychart JavaScript library. Constant usage of javascrtipt solutions may appear to be unproductive in some cases. Aiming to makes our component more comfortable our parness, Anychart provides opportunities to use data from JSOM file. This article is divided to usage of JSONs as source of information and chart style setter.

For feeding JSON files to anychart, use {api:anychart#fromJson}**.fromJSON()**{api} parameter.

```
  var chart = anychart.fromJSON({/*put your JSON data in here*/});

  // set container and draw chart
  chart.container('container').draw();
```


