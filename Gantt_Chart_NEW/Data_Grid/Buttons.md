{:index 5}
# Buttons

## Overview

If there are hierarchical relationships between data items, special buttons are shown in the second [data grid column](Columns). They allow expanding or collapsing parent [tasks](../Project_Chart#tasks_\(actual\)) or [resources](../Resource_Chart#periods_and_resources) on the [timeline](../Timeline) as well as their labels on the data grid.

Buttons are defined as instances of the {api:anychart.core.gantt.DataGridButton}anychart.core.gantt.DataGridButton{api} class.

To access buttons, combine {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with {api:anychart.core.ui.DataGrid#buttons}buttons(){api}.

This article explains how to configure the [basic settings](#basic_settings) of buttons: content, font, background, etc. The [advanced settings](#advanced_settings) include background images and custom drawing.

Also, you can find button-relating settings in the following sections:

* [Columns: Buttons](Columns#buttons) – enabling / disabling buttons on a column
* [Columns: Indentation](Columns#indentation) – setting the hierarchical indentation for data grid labels
* [Basic Settings: Navigation](../Basic_Settings#navigation) – expanding / collapsing elements by default

## Basic Settings

To configure buttons, use these methods:

* {api:anychart.core.gantt.DataGridButton#content}content(){api} to set the content
* {api:anychart.core.gantt.DataGridButton#useHtml}useHtml(){api} to enable HTML
* {api:anychart.core.gantt.DataGridButton#fontColor}fontColor(){api}, {api:anychart.core.gantt.DataGridButton#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.DataGridButton#fontSize}fontSize(){api}, {api:anychart.core.gantt.DataGridButton#fontFamily}fontFamily(){api}, etc. to configure the font
* {api:anychart.core.gantt.DataGridButton#background}background(){api} to set the [background](../../Appearance_Settings/Background)
* {api:anychart.core.gantt.DataGridButton#height}height(){api} and {api:anychart.core.gantt.DataGridButton#width}width(){api} to set the height and width
* {api:anychart.core.gantt.DataGridButton#cursor}cursor(){api} + enums from {api:anychart.enums.Cursor}anychart.enums.Cursor{api}
 to adjust the cursor

With the help of the following methods, buttons can be configured in three states:

* {api:anychart.core.gantt.DataGridButton#normal}normal(){api} – collapsed
* {api:anychart.core.gantt.DataGridButton#hovered}hovered(){api} – collapsed and hovered over 
* {api:anychart.core.gantt.DataGridButton#selected}selected(){api} – expanded

The sample below shows how to adjust buttons. Please note that they have different content and color in different states.

```
// access data grid buttons
var buttons = chart.dataGrid().buttons();

// configure data grid buttons
buttons.fontWeight(600);
buttons.fontSize(16);
buttons.fontFamily("Courier");
buttons.background().fill(null);
buttons.background().stroke(null);
buttons.width(30);
buttons.cursor("default");

// configure data grid buttons in the normal state
buttons.normal().content("[+]");
buttons.normal().fontColor("#ef6c00");

// configure data grid buttons in the hover state
buttons.hovered().content("[+]");
buttons.hovered().fontColor(anychart.color.lighten("#ef6c00"));

// configure data grid buttons in the selected state
buttons.selected().content("[-]");
buttons.selected().fontColor("#64b5f6");
```

{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_01{sample}

## Advanced Settins

### Background Images

The {api:anychart.core.gantt.DataGridButton#background}background(){api} method, combined with {api:anychart.core.ui.Background#fill}fill(){api}, allows you to set a custom image as a background fill of data grid buttons. 

In the following sample, different background images are used in different states. The default content and background stroke are disabled.

```
// disable the default settings of data grid buttons
buttons.normal().content(null);
buttons.hovered().content(null);
buttons.selected().content(null);
buttons.background().stroke(null);

// set the background fill of data grid buttons in the normal state
buttons.normal().background().fill({
   src: "https://cdn.anychart.com/samples/gantt-general-features/data-grid-buttons/close.png",
   mode: "stretch"
});

// set the background fill of data grid buttons in the selected state
buttons.selected().background().fill({
   src: "https://cdn.anychart.com/samples/gantt-general-features/data-grid-buttons/open.png",
   mode: "stretch"
});   
```



{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_02{sample}

### Custom Drawing

You can replace the default content of data grid buttons with a custom drawing by passing a function to the {api:anychart.core.gantt.DataGridButton#content}content(){api} method. To learn more, read [Graphics](../../Graphics).

In the sample below, a function is used to draw different images in different states. The default background fill and stroke are disabled.

```
// access data grid buttons
var buttons = chart.dataGrid().buttons();

// disable the default settings of data grid buttons
buttons.background().fill(null);
buttons.background().stroke(null);

// a function for drawing custom content for buttons
var contentFunction = function () {
  var half = this.width / 2;
  switch (this.state) {
    case "normal":
      var shape = anychart.graphics.vector.primitives.cross(this.path.clear(), half, half, half);
      shape.fill("#ef6c00");
      break;
    case "hovered":
      var shape = anychart.graphics.vector.primitives.cross(this.path.clear(), half, half, half);
      shape.fill(anychart.color.lighten("#ef6c00"));
      break;
    case "selected":
      var shape = anychart.graphics.vector.primitives.hLine(this.path.clear(), half, half, half);
      shape.fill("#64b5f6");
      break;
  }
}

// set the content of data grid buttons in the normal state
buttons.normal().content(contentFunction);

// set the content of data grid buttons in the hover state
buttons.hovered().content(contentFunction);

// set the content of data grid buttons in the selected state
buttons.selected().content(contentFunction);
```

{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_03{sample}

## Enabling / Disabling

To learn how to enable or disable buttons and set the hierarchical indentation for data grid labels, see the following sections:

* [Columns: Buttons](Columns#buttons)
* [Columns: Indentation](Columns#indentation)

## Expanding / Collapsing

By default, the chart is drawn with all elements expanded. To learn how to change this setting, read [Basic Settings: Navigation](../Basic_Settings#navigation).