{:index 2.3}
# Serializing and Deserializing

## Overview

If you want to save annotations drawn by a user or to load them to a chart, you can use the {api:anychart.core.annotations.PlotController#getAnnotationAt}getAnnotationAt(){api} and {api:anychart.core.annotations.PlotController#getAnnotationsCount}getAnnotationsCount(){api} methods to go through all annotations and gather the data you need. But there is an easier way: you can also use built-in methods for serializing and deserializing annotations, which allow to work with the data either in JSON or in XML format. To learn more, see this article.

## Methods

### JSON

To create a list of annotations in JSON format, use the {api:anychart.core.annotations.PlotController#toJson}toJson(){api} method. It has two optional parameters: **stringify** and **includeTheme**. The first parameter determines whether the JSON list is returned as a string or as an object, and the second determines whether the [Theme](../../Appearance_Settings/Themes) settings are included into the list. By default both values are false: the list is returned as an object and does not include the Theme settings.

To load the list of annotations, call the {api:anychart.core.annotations.PlotController#fromJson}fromJson(){api} method.

In the following sample, these two methods are used to serialize annotations drawn (as well as [hardcoded](General_Settings#hardcoding)) on the first plot and then deserialize them to the second plot:

```
// serialize annotations from the first plot
var json = chart.plot(0).annotations().toJson();

// deserialize the annotations to the second plot
chart.plot(1).annotations().fromJson(json);
```

{sample}STOCK\_Drawing\_Serializing\_01{sample}

### XML

To create a list of annotations in XML format, use the {api:anychart.core.annotations.PlotController#toXml}toXml(){api} method.  It has two optional parameters: **asXmlNode** and **includeTheme**. The first parameter determines whether the JSON list is returned as an XML node or as a string, and the second determines whether the [Theme](../../Appearance_Settings/Themes) settings are included into the list. By default both values are false: the list is returned as a string and does not include the Theme settings.

To load the list of annotations, call the {api:anychart.core.annotations.PlotController#fromXml}fromXml(){api} method.

In the sample below, these two methods are used to serialize annotations drawn (as well as [hardcoded](General_Settings#hardcoding)) on the first plot and then deserialize them to the second plot:

```
// serialize annotations from the first plot
var xml = chart.plot(0).annotations().toXml();

// deserialize the annotations to the second plot
chart.plot(1).annotations().fromXml(xml);
```

{sample}STOCK\_Drawing\_Serializing\_02{sample}