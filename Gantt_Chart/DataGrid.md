# Data Grid

## Overview

Data Grid is one of the main parts of JavaScript Gantt Chart. It usually contains main data about tasks and resources of the project, it displays nesting (for a hierarchical model configuration).

## Editing

Data Grid cells can be made editable, see [Live Edit UI and API: Data Grid](Live_Edit_UI_and_API#data_grid).

## Columns

### Columns Set

By default, JS Gantt Chart displays two columns: rows counts and names of Gantt elements (tasks or resources).

{sample :width 690 :height 190}GANTT\_Basic\_Sample{sample}

The **set of columns** is set and defined using the {api:anychart.core.ui.DataGrid#column}column(){api} method:

```
var thirdColumn = dataGrid.column(2);
thirdColumn.title("Actual Start");
thirdColumn.width(100);
thirdColumn.labels().format("{%actualStart}{dateTimeFormat:MM/dd/yyyy}");
```

For more information about the {api:anychart.core.ui.DataGrid.Column#format}format(){api} method see the [Text](#text) topic.

The sample below shows Resource Gantt Chart:

{sample :width 690 :height 190}GANTT\_Chart\_10{sample}

The same for Project Gantt Chart. The next sample shows the data grid with the actual start and actual end values.

{sample :width 690 :height 200}GANTT\_Chart\_11{sample}

You can create and display custom fields in data items:

```
'id': '1',
'name': 'Task 1',
'owner': 'Anthony Quayle',
'actualStart': '2008-07-09',
'actualEnd': '2008-07-20'
```

{sample :width 690 :height 170}GANTT\_Chart\_12{sample}

### Title

Each column has its own title, so it is possible to tune the visual appearance of data grid headers, e.g., set the custom title value:

```
// set title values
title.text("new column");
title.fontWeight("bold").fontStyle("italic");
title.hAlign("left");
```

### Text

Column content can be tuned as well as its title. The easiest way to manage column content is [using presets](./DataGrid_Column_Presets). The advanced one is {api:anychart.core.ui.DataGrid.Column#format}format(){api} method. It used to define a cell text value formatter, so you can pass your own formatting string or custom function as an argument.

```
// format with formatting string
chart.dataGrid().column(1).format("{%name}");

// format with function
chart.dataGrid().column(0).format(function(item) {
    return item.get('id') + '';
});
```

Here is a sample with the complex {api:anychart.core.ui.DataGrid.Column#format}format(){api}.

{sample :width 690 :height 220}GANTT\_Chart\_17{sample}

### Width

You should use the {api:anychart.core.ui.DataGrid.Column#width}width(){api} method for customizing the column width.

```
// set column width to 30
dataGrid.column(0).width(30);
```

## Visual Settings

These methods can be used to change the background color:

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#backgroundFill}backgroundFill(){api}</td>
<td>Allows to set background fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowFill}rowFill(){api}</td>
<td>Used to collapse all tasks.</td>
</tr>
</tbody>
</table>

```
var dataGrid = chart.dataGrid();
dataGrid.backgroundFill('blue .4');
dataGrid.rowFill('green .2');
```

### Interlaced mode

By default, the odd and the even fields are differentiated by their fill. To change them you have to use the corresponding methods.

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowOddFill}rowOddFill(){api}</td>
<td>Used to set row odd fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.DataGrid#rowEvenFill}rowEvenFill(){api}</td>
<td>Used to set row even fill.</td>
</tr>
</tbody>
</table>

```
var dataGrid = chart.dataGrid();

dataGrid.rowOddFill('#8a2be2 .2');
dataGrid.rowEvenFill('#8a2be2 .4');
```

Use these methods to change the rows fill color of the main chart plot:

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api}</td>
<td>Used to set row odd fill.</td>
</tr>
<tr>
<td>{api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api}</td>
<td>Used to set row even fill.</td>
</tr>
</tbody>
</table>

```
//get chart timeline link to change color
var timeline = chart.getTimeline();

timeline.rowEvenFill('green .4');
timeline.rowOddFill("#add8e6");
```

In the sample below the odd rows are colored with a solid fill as well as the even rows.
{sample :width 690 :height 190}GANTT\_Chart\_09{sample}

## Turning On/Off

By default Data Grid is turned on. If you need to show only timeline and timeline plot - you can turn Data Grid off using the {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with <b>false</b> as the argument:

```
//disable data grid
chart.dataGrid(false);
```

And here is a simple illustration of this idea:

{sample :width 690 :height 190}GANTT\_Chart\_15{sample}

## Width

It is possible to configure your html5 Gantt Charts by simply dragging and dropping data grid splitter. Also you can define the width of Data Grid with {api:anychart.charts.Gantt#splitterPosition}splitterPosition(){api} method:

```
//set width to 100
chart.splitterPosition(100);
```

## Expand/Collapse

Data Grid supports hierarchical data representation, so when the data structure has several levels, expand and collapse buttons appear:

{sample :width 690 :height 210}GANTT\_Chart\_08{sample}

You can place expand/collapse buttons on any column using the {api:anychart.core.ui.DataGrid.Column#collapseExpandButtons}collapseExpandButtons(){api} method:

```
column.collapseExpandButtons(false);
```

You can set the left padding in a cell depending on a tree data item's depth with {api:anychart.core.ui.DataGrid.Column#depthPaddingMultiplier}depthPaddingMultiplier(){api} method to to customize the data view.

```
column.depthPaddingMultiplier(8);
```

In the example below we have disabled the default appearance of the expand/collapse buttons in the second column and put them into the first.

{sample :width 690 :height 200}GANTT\_Chart\_14{sample}

### Buttons

To customize how expand/collapse buttons look, use the {api:anychart.core.ui.DataGrid#buttons}buttons(){api} method. Their settings are configured using the {api:anychart.core.gantt.DataGridButton}anychart.core.gantt.DataGridButton{api} class.

Here is a sample of a data grid with customized expand/collapse buttons. The text is altered, the background is disabled in the *normal* (collapsed) and *selected* (expanded) states, and buttons are made more distinct when hovered:

```
// access the object with button settings
var buttons = chart.dataGrid().buttons();

// configure the font of buttons
buttons.fontColor('Black');
buttons.fontFamily('Courier');

/* change the width of buttons
to make it match the custom font */
buttons.width(22);

// change the text of buttons
buttons.normal().content('[+]');
buttons.selected().content('[-]');

/* disable the background of buttons
in the expanded and collapsed states */
buttons.normal().background(false);
buttons.selected().background(false);

/* change the background and font of buttons
in the hover state */
buttons.hovered().background().fill(null);
buttons.hovered().background().stroke("1 red");
buttons.hovered().fontColor('red');
```

{sample :width 690 :height 200}GANTT\_Chart\_18{sample}

You can also use images in background 

{sample :width 690 :height 200}GANTT\_Chart\_19{sample}

You can also override the drawing of buttons completely by passing the drawing function to the {api:anychart.core.gantt.DataGridButton#content}content{api} method:

```
var buttons = chart.dataGrid().buttons();

// create custom drawing functions
var contentFunction = function (path) {
    /* draw different primitives
    or anything else depending on the state */
    var half = this.width / 2;
    switch (this.state) {
      case 'normal':
        fill = '#dd2c00';
        anychart.graphics.vector.primitives.diagonalCross(path.clear(), half, half, half).fill(fill);
        break;
      case 'hovered':
        fill = anychart.color.lighten('#dd2c00');
        anychart.graphics.vector.primitives.diagonalCross(path.clear(), half, half, half).fill(fill);
        break;
      case 'selected':
        fill = '#00bfa5';
        anychart.graphics.vector.primitives.cross(path.clear(), half, half, half).fill(fill);
        break;
    }      
};

    // set content functions for buttons
buttons.normal().content(contentFunction);
buttons.selected().content(contentFunction);
```

See a live sample with customized buttons below:

{sample :width 690 :height 200}GANTT\_Chart\_20{sample}

You can also use images in fully customized buttons as well. Customization code can look like this:

```
var buttons = chart.dataGrid().buttons();

// create custom drawing functions
var contentFunction = function (path) {
    // draw different primitives or anything else depending on the state
    var half = this.width / 2;
    switch (this.state) {
      case 'normal':
      case 'hovered':
        path
          .clear()
          .moveTo(0, 0)
          .lineTo(this.width, 0)
          .lineTo(this.width, this.height)
          .lineTo(0, this.height)
          .lineTo(0, 0)
          .fill({
            src: 'https://cdn.anychart.com/samples/gantt-general-features/data-grid-buttons/close.png',
            mode: 'fit'
        });
        break;
      case 'selected':
        path
          .clear()
          .moveTo(0, 0)
          .lineTo(this.width, 0)
          .lineTo(this.width, this.height)
          .lineTo(0, this.height)
          .lineTo(0, 0)
          .fill({
            src: 'https://cdn.anychart.com/samples/gantt-general-features/data-grid-buttons/open.png',
            mode: 'fit'
        });
        break;
    }      
};

// Set content functions
buttons.normal().content(contentFunction);
buttons.selected().content(contentFunction);

// disable standard backgrounds
buttons.normal().background(false);
buttons.selected().background(false)
buttons.hovered().background(false);
```

A live sample follows:

{sample :width 690 :height 200}GANTT\_Chart\_21{sample}