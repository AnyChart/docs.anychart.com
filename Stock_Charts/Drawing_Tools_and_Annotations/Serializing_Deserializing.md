{:index 2.6}
#Serializing and Deserializing

* [Overview](#overview)
* [Methods](#methods)
 * [JSON](#json)
 * [XML](#xml)

## Overview

If you want to save the drawings made my user or load them to a chart you can either use {api:anychart.core.annotations.PlotController#getAnnotationAt}getAnnotationAt(){api} and {api:anychart.core.annotations.PlotController#getAnnotationsCount}getAnnotationsCount(){api} to go through all annotations on the plot and gather the data you want to save or you can use built-in serialization and deserialization methods.

## JSON

To create a list of all created annotations in JSON format use  {api:anychart.core.annotations.PlotController#toJson}toJson(){api} method.

To load this list use {api:anychart.core.annotations.PlotController#fromJson}fromJson(){api} method.

## XML

To create a list of all created annotations in XML format use {api:anychart.core.annotations.PlotController#toXml}toXml(){api}

To load this list use {api:anychart.core.annotations.PlotController#fromXml}fromXml(){api} method.
