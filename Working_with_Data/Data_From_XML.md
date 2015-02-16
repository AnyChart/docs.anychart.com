{:index 6}
# Getting Data from XML

* [Overview](#overview)
* [JSON vs JavaScript](#json_vs_javascript)
* [Data Sets](#data_sets)
* [Settings](#settings)
 * [Axes](#axes)
 * [Visualisation](#visualisation)
 * [Complex](#complex)

## Overview

AnyChart supports several ways of setting data. This article quickly demonstrates main aspects of using XML format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Using Data Sets](Using_Data_Sets) and [Data From JSON](Data_From_JSON) articles.

## XML vs JavaScript

AnyChart provides {api:anychart#fromXml}**.fromXML()**{api} parameter for using data in XML format. Snippet below represent simple instance of setting data in XML format

```
  var chart = anychart.fromXML(/*put your XML data in here*/);

  // draw chart
  chart.draw();
```

Setting data using XML format is very similar to the way of setting data in JavaScript. The name of each tag in XML config corresponds to the name of a method and names of parameters for tags correspond to parameter in JS.

```
  // xml data
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<anychart xmlns="http://anychart.com/products/anychart7/schemas/7.3.0/schema.xsd">' +
      // set chart type and chart container
      '<chart type="column" container="container">' +
        // series for this chart
        '<series_list>'+
          // series settings
          '<series>' +
            // data set
            '<data>' +
              '<point x="P1" value="128.14"/>'+
              '<point x="P2" value="112.61"/>'+
              '<point x="P3" value="163.21"/>'+
              '<point x="P4" value="229.98"/>'+
              '<point x="P5" value="90.54"/>'+
            '</data>'+
          '</series>'+
        '</series_list>'+
      '</chart>'+
    '</anychart>';
```

<!-- Set scatter chart with single series here-->

**Note:** Use {api:anychart}AnyChart API{api} to adjust any parameter of a chart. XML config uses the same names as methods and parameters do and it is quite easy to set any required parameter with XML data set. Also, XML uses snakeCase for names of tags and parameters and names of methods and parameters have to be transformed from camelCase to snakeCase. It requires to replace every capital letter with small letter and set underscore before this letter (e.g. hatch fill can be set with JS using "hatchFill" parameter and with XML using "hatch_fill" parameter).

## Data Sets

XML data set can contain one or several series. Sample below demonstrates chart with several series from XML.

```
  // list of series for this chart
  '<series_list>'+
    // series settings
    '<series>' +
      // data for first series
      '<data>' +
        '<point x="P1" value="128.14"/>'+
        '<point x="P2" value="112.61"/>'+
        '<point x="P3" value="163.21"/>'+
        '<point x="P4" value="229.98"/>'+
        '<point x="P5" value="90.54"/>'+
      '</data>'+
    '</series>'+
    '<series>' +
      // data for second series
      '<data>' +
        '<point x="P1" value="90.54"/>'+
        '<point x="P2" value="104.19"/>'+
        '<point x="P3" value="150.67"/>'+
        '<point x="P4" value="120.43"/>'+
        '<point x="P5" value="200.34"/>'+
      '</data>'+
    '</series>'+
  '</series_list>'
```

{sample}WD\_Data\_from\_XML\_01{sample}<!--replace with polar chart-->

## Settings

### Axes

Data from XML can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

{sample}WD\_Data\_from\_XML\_02{sample}<!--replace with -->

### Visualisation

Visual settings can be vital for a chart. XML can contain almost any method and parameter for adjusting visual settings.

```
  // series settings
  '<series fill="gold" stroke="gray" hover_stroke="darkred" hatch_fill="diagonalbrick">' +

    // customize hover hatch fill
    '<hover_hatch_fill type="diagonalbrick" color="darkred"/>'+

  '</series>'
```

{sample}WD\_Data\_from\_XML\_04{sample}<!--replace with radar chart-->

### Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several different series and customized chart elements.

{sample}WD\_Data\_from\_XML\_05{sample}