# Title

* [Overview](#overview)
* [Default Title](#default_title)
* [Settings Text](#settings_text)
* [Visualization](#visualization)
 * [Position](#position)
 * [Background](#background)
 * [Text Settings](#text_settings)
* [HTML in Title](#html_in_title)
* [Adding Events](#adding_events)

## Overview

Every chart in AnyChart can have one default title and unlimited number of additional custom titles. These text fields are used to create description for the chart data. By default, the {api:anychart.core.ui.Title}**.title()**{api} is placed on the top of the chart.

## Default Title

Every chart has default title and this title can be enabled or disabled using {api:anychart.core.ui.Title#enabled}**.enabled()**{api} parameter

```
  // chart type
  var chart = anychart.column();
  
  // enable title
  var title = chart.title();
  title.enabled(true);
```

{sample}AS\_Titles\_01{sample}

## Setting Text

Of course you can specify your own texts for a title using {api:anychart.core.ui.Title#text}**.text()**{api} parameter, just like that:

```
  // set chart type
  var chart = anychart.column();
  
  // set title text
  var title = chart.title();
  title.text('Sales Performance');
```

{sample}AS\_Titles\_02{sample}

*Note:* there is even more simple way to set custom text for a title. Text can be set using **chart.title('Sales Performance')** method without additional parameters.

## Visualization

This section describes title visual appearance and ways to adjust it.

### Position

Title can be placed anywhere on the chart plot. Parameter {api:anychart.core.ui.Title#orientation}**.orientation()**{api} sticks title to the side of the plot and parameter {api:anychart.core.ui.Title#align}**.align()**{api} controls alignment of the title. 

```
  // adjust title
  var title = chart.title();
  // place title at the bottom
  title.orientation('bottom');
  // stick title to the left
  title.align('left');
```

{sample}AS\_Titles\_03{sample}

### Background 

You can tune background of a title. Use {api:anychart.core.ui.Title#background}**.background()**{api} method to configure visual appearance of a background. Full information on adjusting background can be found in [Background](../Appearance_Settings/Background) article.

{sample}AS\_Titles\_04{sample}

### Text Settings

Text is the main part of a title. Visit {api:anychart.core.ui.Title}API{api} to find out all parameters for tuning visual appearance of a chart title.

```
  // tune text
  var title = chart.title();
  // title text
  title.text("Sales Performance");
  // set font size
  title.fontSize(12);
  // underline text
  title.fontDecoration('underline');
  // set font family
  title.fontFamily('Tahoma');
```

{sample}AS\_Titles\_05{sample}

## HTML in Title

You can use HTML formatted text of a title. Use {api:anychart.core.ui.Title#useHtml}**.useHtml()**{api} parameter an option to use HTML tags in title text.

```
  var title = chart.title();
  //enables HTML tags
  title.useHtml(true);
  title.text(
    'Sales Performance'+
    '<br><a style="color:#0000FF; font-size: 10px;">'+
    'according to annual report</a>'
  );
```

{sample}AS\_Titles\_06{sample}

**Note:** the list of all supported tags for HTML text formatting can be found in [Text Settings article](../Appearance_Settings/Text_Settings#supported_tags)

## Adding Events

You can make your chart title interactive by adding event listeners of a different types. Sample below represents {api:anychart.enums.EventType}pointClick{api} event, that triggers alert() function.

{sample}AS\_Titles\_08{sample}

Here is the advanced sample of using events in titles. In this sample we will show how chart footer can be used as "Back" button for self-drilldown charts. Click on bars to see detailed report on each sales manager and in detailed report click "Back to Sales Manager Report" button in the bottom left corner of line chart to load an initial chart.

{sample}AS\_Titles\_09{sample}