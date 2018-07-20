{:index 2}
# Basic Settings

## Overview

## Default Legend

### Enabling

* {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api}
* {api:anychart.charts.Cartesian#legend}legend(){api} (Cartesian)
* {api:anychart.core.ui.Legend#enabled}enabled(){api}
* `true`

```
// create a chart
var chart = anychart.line();

// enable the legend
chart.legend().enabled(true);
```

```
// create a chart
var chart = anychart.line();

// enable the legend
chart.legend(true);
```

{sample}CS\_Legend\_Basic\_01{sample}

### Default Interactivity

```
// create a chart
var chart = anychart.line();

// create series and set the data
var series1 = chart.line(seriesData_1);
var series2 = chart.line(seriesData_2);
var series3 = chart.line(seriesData_3);
var series4 = chart.line(seriesData_4);

// hide the last series
series4.enabled(false);
```

{sample}CS\_Legend\_Basic\_02{sample}

## Source

* {api:anychart.core.ui.Legend#itemsSourceMode}itemsSourceMode(){api}

```
// set the legend source mode
chart.legend().itemsSourceMode("categories");
```

{sample}CS\_Legend\_Basic\_03{sample}

## Layout

* {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api}
* `horizontal` (default)
* `vertical`
* `horizontal-expandable`
* `vertical-expandable`

```
chart.legend().itemsLayout("vertical")
```

{sample}CS\_Legend\_Basic\_04{sample}

{sample :width 500 :height 500}CS\_Legend\_Basic\_05{sample}

## Position

### Position + Alignment

* {api:anychart.core.ui.Legend#position}position(){api}
* {api:anychart.core.ui.Legend#position}align(){api}

position:

* `top` (default)
* `bottom`
* `right`
* `left`

alignment:

* `center` (default)
* `top`
* `bottom`
* `right`
* `left`

```
// set the position of the legend
legend.position("right");

// set the alignment of the legend
legend.align("top");
```

{sample}CS\_Legend\_Basic\_06{sample}

### Outside / Inside

* {api:anychart.core.ui.Legend#positionMode}positionMode(){api}
* `outside` (default)
* `inside`

```
// set the position mode of the legend
legend.positionMode("inside");
```

{sample}CS\_Legend\_Basic\_07{sample}

### Drag and Drop

* {api:anychart.core.ui.Legend#drag}drag(){api}

```
// enable the drag and drop mode of the legend
legend.drag(true);
```

{sample}CS\_Legend\_Basic\_08{sample}

## Size

### Fixed

* {api:anychart.core.ui.Legend#height}height(){api}
* {api:anychart.core.ui.Legend#width}width(){api}
* {api:anychart.core.ui.Legend#padding}margin(){api}
* {api:anychart.core.ui.Legend#padding}margin(){api}

### Expandable

* {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api}
* {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api}

```
// set the max width and height of the legend
chart.legend().maxHeight("30%");
chart.legend().maxWidth("40%");
```

{sample :width 500 :height 500}CS\_Legend\_Basic\_09{sample}

## Background

* {api:anychart.core.ui.Legend#background}background(){api}
* (?) {api:anychart.core.ui.Background}background(){api}

```
// configure the background of the legend
var background = chart.legend().background();
background.enabled(true);
background.fill("#96a6a6 0.3");
background.stroke("#96a6a6");
background.cornerType("round");
background.corners(10);
```

{sample}CS\_Legend\_Basic\_10{sample}