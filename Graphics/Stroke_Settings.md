{:index 8.5}

# Stroke Settings

## Overview

Stroke settings define how a path (line), or a border of a shape is drawn. All [Shapes](Shapes) and [Paths](Paths) have a stroke method.

## Color

Stroke color can be set in several ways:

* using a parameter:  `stroke(colorSettings, otherParams...)`
* as a String: `'thickness colorSetting'`
* using an Object:
```
 {
    color: value,
    opacity: value,
    otherParams ...
 }
```

Stroke color is set similar to [fill](Fill_Settings). The setting supports {api:anychart.graphics.vector.Fill}fill{api} with:

* {api:anychart.graphics.vector.SolidFill}Solid color{api},
* {api:anychart.graphics.vector.LinearGradientFill}Linear gradient{api},
* {api:anychart.graphics.vector.RadialGradientFill}Radial gradient{api}.

Image and pattern fill are **not supported** for a stroke.

For example, that's how you do stroke color fill:

```
// Solid color strok
.stroke('5 orange .7')

// Linear gradient stroke
.stroke(['red', 'blue'], 15)

// Radial gradient stroke
.stroke({
  keys: ['.1 red', 'white'],
  cx: .5,
  cy: .5,
  fx: .3,
  fy: .4
}, 4)
```

{sample}GFX\_stroke_color{sample}

## Thickness

Stroke thickness can be set in several ways:

* using a parameter:  `stroke(colorSettings, thickness, otherParams...)`
* as a String:  `'thickness colorSetting'`
* as an Object:
```
{
  thickness: value,
  otherParams ...
}
```

{sample}GFX\_stroke_thickness{sample}

## Dash

Dash settings can be set in two ways:

* using a parameter: `stroke(colorSettings, thickness, dashSetting, otherParams...)`
* as an Object:
```
{
  dash: value,
  otherParams ...
}
```

Dash settings are set by a string with numbers separated by spaces. This string is used as the dash pattern. For example, if string value is `5` – the resulting pattern will be `5 5 5 5 5 ...`, and if string value is  `5 5 10`, that will result in `5 5 10 5 5 10 5 5 10 ...`.
 
Every number in an odd position is a dash length, and every number in an even position is a space length.

```
.stroke('yellow', 5, '5 5 10')
```

{sample}GFX\_stroke_dashed{sample}

## Join and Cap

{api:anychart.graphics.vector.SolidStroke}Join and cap{api} settings are set in two ways:
* using a parameter: `stroke(colorSettings, thickness, dashSetting, lineJoin, lineCap)`
* as an Object:
```
{
  lineJoin: value,
  lineCap: value,
  otherParams ...
}
```

Sample cap and join settings:

```
.stroke({
  color: 'blue',
  thickness: 15,
  lineJoin: 'bevel',
  lineCap: 'round'
})
```

{sample}GFX\_stroke\_cap\_join{sample}

