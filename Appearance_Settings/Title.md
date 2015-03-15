# Title

* [Overview](#overview)
* [Default Title](#default_title)
* [Settings Text](#settings_text)
* [Visualization](#visualization)
 * [Position](#position)
 * [Background](#background)
 * [Text Settings](#text_settings)
* [HTML in Title](#html_in_title)
* [Additional Titles](#additional_titles)
* [Adding Events](#adding_events)

## Overview

Every chart in AnyChart can have one default title and unlimited number of additional custom titles. These text fields are used to create description for the chart data. By default, {api:anychart.core.ui.Title}**.title()**{api} is placed on the top of the chart.

## Default Title

Every chart has default title and this title can be enabled or disable using {api:anychart.core.ui.Title#enabled}**.enabled()**{api} parameter

```
  // chart type
  var chart = anychart.column();
  
  // enable title
  chart.title().enabled(true);
```

{sample}AS\_Titles\_01{sample}

## Setting Text

Of course you can specify your own texts for titles using {api:anychart.core.ui.Title#text}**.text()**{api} parameter, just like that:

```
  // set chart type
  var chart = anychart.column();
  
  // set title text
  chart.title().text('Sales Performance');
```

{sample}AS\_Titles\_02{sample}

## Visualization

This section describes title visual appearance and ways to adjust it.

### Position

Title can be placed anywhere on the chart plot. Parameter {api:anychart.core.ui.Title#orientation}**.orientation()**{api} sticks title to the side of the plot and parameter {api:anychart.core.ui.Title#align}**.align()**{api} controls alignment of the title. 

```
  // adjust title
  chart.title()
    .orientation('bottom')  // place title at the bottom
    .align('left');         // stick title to the left
```

{sample}AS\_Titles\_03{sample}

### Background 

You can tune background of a title. Use {api:anychart.core.ui.Title#background}**.background()**{api} method to configure visual appearance of a background. Full information on adjusting background can be found in [Background](./Background) article.

{sample}AS\_Titles\_04{sample}

### Text Settings

Text is the main part of title itself. Visit {api:anychart.core.ui.Title}API{api} to find out all parameters for tuning visual appearance of a chart title.

```
  // tune text
  chart.title()
    .text('Sales Performance')    // title text
    .fontSize(12)                 // set font size
    .fontDecoration('underline')  // underline text
    .fontFamily('Tahoma');        // set font family
```

{sample}AS\_Titles\_05{sample}

## HTML in Title

You can use HTML formatted text of a title. Use {api:anychart.core.ui.Title#useHtml}**.useHtml()**{api} parameter to enable HTML tags in title.

```
  chart.title()
      .useHtml(true)      //enables HTML tags
      .text(
      'Sales Performance'+
      '<br><a style="color:#0000FF; font-size: 10px;">'+
      'according to annual report</a>'
    );
```

{sample}AS\_Titles\_06{sample}

## Additional Titles

Chart can contain any number of additional titles. These titles can be placed anywhere on the plot.

```
  // create additional title
  var customTitle = anychart.ui.title();
  customTitle
    .text('according to annual report') // set title text
    .orientation('bottom')              // place title at the bottom
    .align('right')                     // stick text to the right side
    .fontSize(11)                       // set text size
    .fontFamily('Tahoma')               // set font family
    .fontWeight(400)                    // unbold title
    .background()                       // background settings
      .enabled(true)                    // enable background
      .fill(null)                       // disable fill
      .stroke('#000000');               // set black border to title
  
  // set container and draw title
  customTitle.container(stage).draw();
```

{sample}AS\_Titles\_07{sample}

**Note:** chart elements draw in prescribed oder and we recommend to use **.draw()** method fo a custom title after drawing main chart.

## Adding Events

You can make your chart title interactive by adding event listeners of a different types. Sample below represents {api:anychart.enums.EventType}pointClick{api} event, that triggers alert() function.

{sample}AS\_Titles\_08{sample}

Here is advanced sample of using events in titles. In this sample we will show how chart footer can be used as "Back" button for self-drilldown charts. Click on bars to see detailed report on each sales manager and in detailed report click on "Back to Sales Manager Report" button in the bottom right corner of line chart to load initial chart.

{sample}AS\_Titles\_09{sample}