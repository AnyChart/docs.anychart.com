{:index 4}
# Buttons

## Overview

misc:

* {api:anychart.core.gantt.DataGridButton}anychart.core.gantt.DataGridButton{api}
* {api:anychart.enums.Cursor}anychart.enums.Cursor{api}
* [Columns: Enabling / Disabling Buttons](Columns#enabling_/_disabling_buttons)
* [Basic Settings: Navigation](../Basic_Settings#navigation)

methods:

* {api:anychart.core.gantt.DataGridButton#content}content(){api} to set the content
* {api:anychart.core.gantt.DataGridButton#useHtml}useHtml(){api} to enable HTML
* {api:anychart.core.gantt.DataGridButton#fontColor}fontColor(){api}, {api:anychart.core.gantt.DataGridButton#fontWeight}fontWeight(){api}, {api:anychart.core.gantt.DataGridButton#fontSize}fontSize(){api}, {api:anychart.core.gantt.DataGridButton#fontFamily}fontFamily(){api}, etc. to configure the font
* {api:anychart.core.gantt.DataGridButton#background}background(){api} to set the [background](../../Appearance_Settings/Background)
* {api:anychart.core.gantt.DataGridButton#height}height(){api} and {api:anychart.core.gantt.DataGridButton#width}width(){api} to set the height and width
* {api:anychart.core.gantt.DataGridButton#cursor}cursor(){api} to adjust the cursor
* {api:anychart.core.gantt.DataGridButton#normal}normal(){api}, {api:anychart.core.gantt.DataGridButton#hovered}hovered(){api}, and {api:anychart.core.gantt.DataGridButton#selected}selected(){api} to access [states](../../Common_Settings/Interactivity/States)

## Basic Settings

{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_01{sample}

## Background Images

{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_02{sample}

## Custom Drawing

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

// set the content of data grid buttons in the selected state
buttons.selected().content(contentFunction);
```

{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_03{sample}

## Full Customization

misc:

* all button-related settings include...
* [Basic Settings](#basic_settings)
* [Basic Settings: Navigation](../Basic_Settings#navigation)
* [Columns: Hierarchical Indentation](Columns#hierarchical_indentation)
* [Columns: Enabling / Disabling Buttons](Columns#enabling_/_disabling_buttons)


```
// collapse the task with the id "2"
chart.collapseTask("2");
```

```
// set the indent for nested labels in the first column
chart.dataGrid().column(0).depthPaddingMultiplier(35);

// set the indent for nested labels in the second column
chart.dataGrid().column(1).depthPaddingMultiplier(0);
```

```
// enable buttons on the first column
chart.dataGrid().column(0).collapseExpandButtons(true);

// disable buttons on the second column
chart.dataGrid().column(1).collapseExpandButtons(false);
```

{sample :height 280}GANTT\_NEW\_Data\_Grid\_Buttons\_04{sample}