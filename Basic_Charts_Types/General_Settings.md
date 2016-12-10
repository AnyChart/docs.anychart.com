{:index 0.5}
#General Settings

* [Overview](#overview)
* [Data](#data)
* [Visual Settings](#visual_settings)
* [Markers](#markers)
* [Labels](#labels)
* [Tooltips](#tooltips)
* [Legend](#legend)
* [Axes and Scales](#axes_and_scales)
  * [Stacking](#stacking)
* [Interactivity](#interactivity)
* [Events](#events)
* [Vertical Charts](#vertical_charts)
* [3D Charts](#3d_charts)
* [Custom Drawing](#custom_drawing)

## Overview

## Data

To learn how to prepare your data for using it in AnyChart, see this article: [Working with Data](../Working_with_Data).

## Visual Settings

You can configure some visual settings of your chart: for example, stroke and fill color, fill or hatch fill pattern, and so on. For different chart types different settings are available.

For more information, read the [Appearance Settings](../Appearance_Settings) article and articles about chart types you are interested in.

In the following sample, there is a chart with an Area series and two Line series. In all series stroke, hover stroke, and select stroke are configured, and in the Area series, in addition to that, fill, hover fill, and select fill are set:

```
// configure the visual settings of the first series
series1.fill("#04B4AE", 0.3);
series1.hoverFill("#04B4AE", 0.5);
series1.selectFill("#04B4AE", 0.5);
series1.stroke("#04B4AE");
series1.hoverStroke("#04B4AE", 4);
series1.selectStroke("#04B4AE", 4);

// configure the visual settings of the second series
series2.stroke("#04B404");
series2.hoverStroke("#04B404", 4);
series2.selectStroke("#04B404", 4);

// configure the visual settings of the third series
series3.stroke("#AEB404", 1, "10 5", "round");
series3.hoverStroke("#AEB404", 4, "10 5", "round");
series3.selectStroke("#AEB404", 4, "10 5",  "round");
```

{sample}BCT\_General\_Settings\_01{sample}

## Markers

Markers are... (???)

Markers can be configured both for on whole series and in a single point. Available settings include type, size, the fill color, and others (see the (???) [Marker_Chart](Marker_Chart) article).

In the following sample, there are two Line series. On one of them you can see how markers look by default (in the case of Line series, they can be seen only on hover and select), and on the other a few custom settings are configured:

```
// enable and configure markers on the first series
series1.markers(true);
series1.markers().type("star5");
series1.markers().fill("gold");
series1.markers().size(10);
```

This sample shows how you can configure a marker in a single point:

{sample}BCT\_General\_Settings\_02{sample}

```
// create data, enable and configure markers
var data = [
  {x: "January", value:10000},
  {x: "February", value:12000, marker:{enabled:true, type:"star5", fill:"gold", size:10}},
  {x: "March", value:13000, marker:{enabled:true, type:"star5", fill:"red", size:15}},
  {x: "April", value:10000},
  {x: "May", value:9000}
];
```
{sample}BCT\_General\_Settings\_03{sample}

## Labels

Labels are text or image elements that can be placed anywhere on your chart...

[Labels](../Common_Settings/Labels)

```
// enable and configure labels on the series
series.labels(true);
series.labels().fontColor("green");
series.labels().fontWeight(900);
series.labels().textFormatter("${%value}");
```

{sample}BCT\_General\_Settings\_04{sample}

```
// create data, enable and configure labels
var data = [
  {x: "John", value:10000},
  {x: "Jake", value:12000, label:{enabled:true, fontColor:"green", fontWeight:900, textFormatter:"${%value}"}},
  {x: "Peter", value:13000, label:{enabled:true, fontColor:"red", fontWeight:900, textFormatter:"${%value}"}},
  {x: "James", value:10000},
  {x: "Mary", value:9000}
];
```

{sample}BCT\_General\_Settings\_05{sample}

## Tooltips

[Tooltips](../Common_Settings/Tooltip)

```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_06{sample}

```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_07{sample}

## Legend

[Legend](../Common_Settings/Legend)

```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_08{sample}

```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_09{sample}

## Axes and Scales

[Axes and Grids](../Axes_and_Grids)


```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_10{sample}

### Stacking

???

## Interactivity

[Interactivity](../Common_Settings/Interactivity)


## Events

[Event Listeners](../Common_Settings/Event_Listeners)

```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_11{sample}

## Vertical Charts

[Vertical Charts](../Basic_Charts_Types/Vertical_Charts)

```
    // sample comment
    sample.code();
```

{sample}BCT\_General\_Settings\_12{sample}

## 3D Charts

[3D Charts](../Basic_Charts_Types/3D_Charts)

## Custom Drawing

???