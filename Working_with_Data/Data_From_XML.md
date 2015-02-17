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

AnyChart provides {api:anychart#fromXml}**.fromXML()**{api} parameter for using data in XML format. Setting data using XML format is very similar to the way of setting data in JavaScript. The name of each tag in XML config corresponds to the name of a method and names of parameters for tags correspond to parameter in JS. Snippet below shows a samepl of setting data in XML format

```
  // xml data
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<anychart xmlns="http://anychart.com/products/anychart7/schemas/7.3.0/schema.xsd">' +
      '<chart type="pie" container="container" title="XML Sample Pie">' +
         '<data>' +
              '<point name="Apples" value="128.14" fill="Green"/>'+
              '<point name="Oranges" value="128.14" fill="Orange"/>'+
        '</data>'+
      '</chart>'+
    '</anychart>';

  // set XML data to the chart
  var chart = anychart.fromXml(xml);

  // draw chart
  chart.draw();
```

{sample}WD\_Data\_from\_XML\_01{sample}

**Note:** Use {api:anychart}AnyChart API{api} to adjust any parameter of a chart. XML config uses the same names as methods and parameters do and it is quite easy to set any required parameter with XML data set. Also, XML uses snakeCase for names of tags and parameters and names of methods and parameters have to be transformed from camelCase to snakeCase. It requires to replace every capital letter with small letter and set underscore before this letter (e.g. hatch fill can be set with JS using "hatchFill" parameter and with XML using "hatch_fill" parameter).

## Data Sets

XML data set can contain one or several series. Sample below demonstrates chart with several series from XML.

```
  <!-- series for this chart -->
  <series_list>
    <!-- series settings -->
    <series series_type="line">
      <!-- data set -->
      <data>
        <point x="0" value="0"/>
        <point x="50" value="100"/>
        <point x="100" value="0"/>
      </data>
    </series>
  <!-- second series set -->
    <series series_type="line" stroke="red">
      <!-- data set -->
      <data>
        <point x="50" value="0"/>
        <point x="100" value="100"/>
        <point x="50" value="0"/>
      </data>
    </series>
  </series_list>
```

{sample}WD\_Data\_from\_XML\_02{sample}

## Settings

### Axes

Data from XML can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

{sample}WD\_Data\_from\_XML\_03{sample}

### Visualisation

Visual settings can be vital for a chart. XML can contain almost any method and parameter for adjusting visual settings.

```
  // series settings
  '<series fill="gold" stroke="gray" hover_stroke="darkred" hatch_fill="diagonalbrick">' +

    // customize hover hatch fill
    '<hover_hatch_fill type="diagonalbrick" color="darkred"/>'+

  '</series>'
```

{sample}WD\_Data\_from\_XML\_04{sample}

### Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several different series and customized chart elements.

{sample}WD\_Data\_from\_XML\_05{sample}
