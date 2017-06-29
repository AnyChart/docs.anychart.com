#Chart Editor

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Demo App](#demo_app)
* [Rendering](#rendering)
* [Data](#data)
* [Events](#events)
* [Getting Result](#getting_result)
* [Creating Charts](#creating_charts)
 * [JSON and XML](#json_xml)
 * [JavaScript](#javascript)

## Overview

Chart Editor is a dialog window that allows to create and set up various chart types. The result can be saved with fixed data in XML or JSON format or in a reusable format with a JavaScript code string.

## Prerequisites

Chart editor works only if `anychart.css` and `anychart-ui.min.css` are referenced in the page, you can find latest and versioned options at [AnyChart CDN](https://cdn.anychart.com/#ui):

```
<link rel="stylesheet" href="https://cdn.anychart.com/css/latest/anychart-ui.min.css">
<link rel="stylesheet" href="https://cdn.anychart.com/fonts/2.7.3/anychart.css">
```

## Demo App

You can see a live demo and a downloadble sample of the Chart editor at [https://www.anychart.com/products/anychart/chart_editor/](//www.anychart.com/products/anychart/chart_editor/).

Source code of this sample can be obtained from [https://github.com/AnyChart/chart-editor-demo](https://github.com/AnyChart/chart-editor-demo) repository.

## Rendering

Chart editor is created using {api:anychart.ui#chartEditorDialog}chartEditorDialog(){api} method that returns {api:anychart.ui.chartEditor.Dialog}anychart.ui.chartEditor.Dialog{api} instance. After initialization of editor you either need to create it in DOM using {api:anychart.ui.chartEditor.Dialog#render}render(){} method, or assign a container which will become the editor using {api:anychart.ui.chartEditor.Dialog#decorate}decorate(){} method. 

After that you need to make dialog visible in order to see it, use {api:anychart.ui.chartEditor.Dialog#visible}visible(){} method for that.

```
editor = anychart.ui.chartEditorDialog();
// render editor on the page
editor.render();
// optionally: editor.render(document.getElementById("container"));
// renders in the given element
// alternatively, render to the element on the page
// editor.decorate(document.getElementById("editor_container"));      

// show editor
editor.visible(true);
```

## Data

To pass the data to be used in an editor instance use {api:anychart.ui.chartEditor.Dialog#data}data(){api} method:

```
// data as array of arrays
data1 = [
  ['Category A', 12814, 3054, 4376, 4229],
  ['Category B', 13012, 5067, 3987, 3932],
];

// data as array of objects
data2 = [
  {x: 'Jan', value1: 22, value2: 43, value3: 75},
  {x: 'Feb', value1: 34, value2: 45, value3: 56},
];

var editor = anychart.ui.chartEditorDialog();

// passing data to an editor instance
editor.data(data1, data2);
```

## Events

To track the moment when editor closes you need to listen to events, this is done as with any other [Event listener in AnyChart](../Event_Listeners). `complete` event is dispatched when "Complete" button of the editor is clicked, `close` event is dispatched when the editor is closed by other means.

```
editor = anychart.ui.chartEditorDialog();

// listen for the 'complete' event
editor.listen('complete', function(){});
// listen for the 'close' event
editor.listen('close', function(){});
```

## Getting Result

The following three methods are used to get configuration result: {api:anychart.ui.chartEditor.Dialog#getResultJson}getResultJson(){api}, {api:anychart.ui.chartEditor.Dialog#getResultJson#getResultXml}getResultXml(){api} and {api:anychart.ui.chartEditor.Dialog#getResultJson#getResultCode}getResultCode(){api}.

```
editor = anychart.ui.chartEditorDialog();

editor.listen('complete', function(){
	// get result in Json
	resultJson = editor.getResultJson();
	// get result in Xml
	resultXml = editor.getResultXml();
	// get result as JavaScript code
	resultJavaScript = editor.getResultCode();
});
```

## Creating Charts

As soon as you have [obtained the result from a chart editor instance](#getting_result) you can create charts from configuration objects/strings you have. This is done either by using {api:anychart#fromJson}fromJson(){api} and {api:anychart#fromXml}fromXml(){api} methods or `eval` function.

### JSON and XML

```
editor = anychart.ui.chartEditorDialog();

editor.listen('complete', function(){
	resultJson = editor.getResultJson();
	resultXml = editor.getResultXml();
	resultJavaScript = editor.getResultCode();	

	// create chart from JSON
	chartFromJson = anychart.fromJson(resultJson);
	// create chart from XML
	chartFromXml = anychart.fromXml(resultJson);	

});
```

Sample with XML Configs:

{sample}CS\_Chart\_Editor\_01{sample}

Sample with JSON Configs:

{sample}CS\_Chart\_Editor\_02{sample}

### JavaScript

**NOTE:** when you create charts from XML or JSON the data is built in in these configs, but in case of JavaScript you need to pass data yourself:

```
data = [
  ['Category A', 12814, 3054, 4376, 4229],
  ['Category B', 13012, 5067, 3987, 3932],
];

editor = anychart.ui.chartEditorDialog();

editor.data(data);

editor.render();

editor.visible(true);

editor.listen('complete', function(){
	var chartFromJavaScript;
	// get result as JavaScript code
	var resultJavaScript = editor.getResultCode();  
	// get JavaScript code from editor and use it to create a constructor function
	var chartConstructorFunction = eval(resultJavaScript);
	// create chart using constructor function and data
	chartFromJavaScript = chartConstructorFunction(data);
})
```

Here is a basic sample that works with JavaScript code:

{sample}CS\_Chart\_Editor\_03{sample}

