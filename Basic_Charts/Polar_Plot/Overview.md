{:index 1}
# Overview

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Start Angle](#start_angle)
* [Omitting points](#omitting_points)
* [Axes](#axes)
* [Scales](#scales)
* [Grid](#grid)
* [Supported Types](#supported_types)

## Overview

A polar chart...

This article explains how to create and configure polar charts. To find out which series can be drawn on a polar chart in AnyChart, see the [Supported Types](#supported_types) section.

## Quick Start

To create a polar chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor.

Then create one of the supported series types from this enum: {api:anychart.enums.PolarSeriesType}anychart.enums.PolarSeriesType{api}.


In the sample below, there is a polar chart with two series, Line and Area:

```

```

{sample}BCT\_Polar\_Chart\_01{sample}

## Start Angle

You can set the start angle of a polar chart by using the {api:anychart.charts.Polar#startAngle}startAngle(){api} method. The angle is 0° by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90°:

```
// set the start angle
polar2.startAngle(90);
```

{sample}BCT\_Polar\_Chart\_02{sample}

## Omitting Points

```

```

{sample}BCT\_Polar\_Chart\_03{sample}

#Axes

[Axis Basicss](../../Axes_and_Grids/Axis_Basics)

{api:anychart.core.axes.Radar#stroke}stroke(){api}

```

```

{sample}BCT\_Polar\_Chart\_04{sample}

#Scales

```

```

{sample}BCT\_Polar\_Chart\_05{sample}

## Grid

```

```

{sample}BCT\_Polar\_Chart\_06{sample}

```

```

{sample}BCT\_Polar\_Chart\_07{sample}

```

```

{sample}BCT\_Polar\_Chart\_08{sample}



## Supported Types

Here is the list of supported polar charts:

* [Polar Area](Area_Chart)
* [Polar Column](Column_Chart)
* [Polar Line](Line_Chart)
* [Radar Marker](Marker_Chart)
* [Polar Polygon](Polygon_Chart)
* [Polar Polyline](Polyline_Chart)
* [Polar Range Column](Range_Column_Chart)