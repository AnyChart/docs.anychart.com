# Strokes and Lines

* [Overview](#overview)
* [Basics](#basics)
* [Solid Color](#solid_color)
* [Gradient Color](#gradient_color)
* [Line Thickness](#line_thickness)
* [Dashed Lines](#dashed_lines)
* [Line Opacity](#line_opacity)

## Overview

Knowledge about line and stroke configuration parameters is very important, because AnyChart allows to configure almost any line you can see on the chart: Lines in charts, grids, tooltips and labels, and even tickmark lines.

The name of the method is always **.line()** or **.stroke()**. In this tutorial all line parameters and features are described.

## Basics

Each line can be colored with a solid or gradient fill, you can set line thickness and opacity and use dashed strokes.

Typical line settings look like:

```
    chartSeries.stroke('2 red 0.8);
```

The sample line chart below shows you the different line settings:

{sample}GAS\_Strokes\_and\_Lines\_01{sample}


## Coloring

There are two types of line coloring "Solid" and "Gradient"

## Solid Color

Solid color type is default for any object of Anychart and you don't need to use any special settings to apply Solid
color. For more information see [Color Management](Color_Management) article.

```
    series.stroke('red');
```

## Gradient Color

To color a line with a gradient transition you should set color keys, opacity, angle of coloring and stroke thickness.

```
    series.stroke({
        keys: ['.1 red', '.5 blue', '.9 green'],
        thickness: 5
    })
```

## Line Thickness

To change the thickness of a line set thickness through string in pixels before the color and separate it from color with a space:

```
    series.stroke('3 red');
```

This way is not the only one to set stroke thickness. Here is the code with thickness, set through object:

```
    series.stroke({
        color: 'red',
        thickness: 5
    })
```

## Dashed Lines

You can make line or grid line dashed and tune dash properties:

```
    series.stroke({color: 'yellow', dash: '2 2'});
```

{sample}GAS\_Strokes\_and\_Lines\_02{sample}

## Line Opacity

To change the opacity of a line use **.opacity()** attribute. The value is set as a ratio: 1 stands for opaque, and 0 - for transparent line. Opacity may be set though line and through object:

Opacity through line:

```
    series.stroke('red 0.8');
```

Opacity through object:

```
    series.stroke({
        color: 'red', 
        opacity: 0.8
    });
```