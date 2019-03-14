{:index 4}
# Buttons

## Overview

misc:

* {api:anychart.core.gantt.DataGridButton}anychart.core.gantt.DataGridButton{api}
* {api:anychart.enums.Cursor}anychart.enums.Cursor{api}
* other button-related settings: [sample](#sample)
* [Basic Settings: Navigation](../Basic_Settings#navigation)
* [Columns: Hierarchical Indentation](Columns#indentation)
* [Columns: Enabling / Disabling Buttons](Columns#enabling_/_disabling_buttons)
* [Full Customization](#full_customization)

methods:

* {api:anychart.core.gantt.DataGridButton#content}content(){api} to set the content
* {api:anychart.core.gantt.DataGridButton#useHtml}useHtml(){api} to enable HTML
* {api:anychart.core.gantt.DataGridButton#fontColor}fontColor(){api}, {api:anychart.core.gantt.DataGridButton#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.DataGridButton#fontSize}fontSize(){api}, {api:anychart.core.gantt.DataGridButton#fontFamily}fontFamily(){api}, etc. to configure the font
* {api:anychart.core.gantt.DataGridButton#background}background(){api} to set the [background](../../Appearance_Settings/Background)
* {api:anychart.core.gantt.DataGridButton#height}height(){api} and {api:anychart.core.gantt.DataGridButton#width}width(){api} to set the height and width
* {api:anychart.core.gantt.DataGridButton#cursor}cursor(){api} to adjust the cursor
* {api:anychart.core.gantt.DataGridButton#normal}normal(){api}, {api:anychart.core.gantt.DataGridButton#hovered}hovered(){api}, and {api:anychart.core.gantt.DataGridButton#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)

## Basic Settings

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

```
// configure data grid buttons
buttons.background().stroke(null);
buttons.normal().content(null);
buttons.hovered().content(null);
buttons.selected().content(null);

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

misc:

* [Graphics](../../Graphics)


```
// access data grid buttons
var buttons = chart.dataGrid().buttons();

// configure data grid buttons
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

misc:

* [Columns: Enabling / Disabling Buttons](Columns#enabling_/_disabling_buttons)
* [Columns: Indentation](Columns#indentation)

## Expanding / Collapsing

misc:

* [Basic Settings: Navigation](../Basic_Settings#navigation)