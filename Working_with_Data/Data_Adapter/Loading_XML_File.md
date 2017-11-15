{:index 4}
# Loading XML File

* [Overview](#overview)
* [Loading File with loadXmlFile method](#loading_file_with_loadxmlfile_method)
* [Deserializing from XML File](#deserializing_from_xml_file)

## Overview

Ability to [load XML files](#loading_file_with_loadxmlfile_method) and [deserialize directly from XML files](#deserializing_from_xml_file) are the features [Data Adapter](Overview) provides.

To work with the features Data Adapter provides you need to plug it in along with AnyChart Library:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/js/{{branch-name}}/data-adapter.min.js"></script>
```

You can load [Data from XML](../Data_From_XML) into AnyChart without the help of Data Adapter but **if you want to load a file** you can do it using the data adapter and the {api:anychart.data#loadXmlFile}loadXmlFile(){api} and create charts from files with {api:anychart#fromXmlFile}fromXmlFile(){api} method.

## Loading File with loadXmlFile method

Using {api:anychart.data#loadXmlFile}loadXmlFile(){api} method is as easy as this, you can put data in [AnyChart XML data format](../Data_From_XML) into XML file:

```
<?xml version="1.0" encoding="utf-8"?>
<anychart>
    <data>
        <point name="Eyeshadows" value="249980"/>
        <point name="Eyeliner" value="213210"/>
        <point name="Eyebrow pencil" value="170670"/>
        <point name="Nail polish" value="143760"/>
        <point name="Pomade" value="128000"/>
        <point name="Lip gloss" value="110430"/>
        <point name="Mascara" value="102610"/>
        <point name="Foundation" value="94190"/>
        <point name="Rouge" value="80540"/>
        <point name="Powder" value="53540"/>
    </data>
</anychart>
```

And the load and use such file:

```
anychart.data.loadXmlFile("https://cdn.anychart.com/charts-data/data_xml.xml", function (data) {
	// create a chart and set loaded data
    chart = anychart.bar(data);

    chart.title("Load XML data and create a chart");
    chart.container("container");
    chart.draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_XML\_01{sample}

This method also allows to handle loading errors, changing sending method, adding headers, setting timeout interval, and sending credentials, see all available parameters in {api:anychart.data#loadXmlFile}loadXmlFile(){api} API description.

You can use this method to load anything else too.

## Deserializing from XML File

With {api:anychart#fromXmlFile}fromXmlFile(){api} method you can deserialize a chart directly from a file with chart settings and data in [AnyChart XML format](../Data_From_XML):

```
// Create a chart from XML file
anychart.fromXmlFile("https://cdn.anychart.com/config-samples/line-chart.xml", function (chart) {
	// set additional settings
    chart.title("Create a chart from XML config");

    // display a chart
    chart.container("container");
    chart.draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_XML\_02{sample}

This method also allows to handle loading errors, changing sending method, adding headers, setting timeout interval, and sending credentials, see all available parameters in {api:anychart#fromXmlFile}fromXmlFile(){api} API description.