# Stroke Settings.
* [Stroke Color](#stroke_color)
* [Stroke Thickness](#stroke_thickness)
* [Dash](#dash)
* [Join and Cap](#join_and_cap)

## Stroke color
Stoke color can be set in several ways:
* using a parameter: 
 `stroke(colorSettings, otherParams...)`
* as a String: 
 `'thickness colorSetting'`
* in an Object:
```
 {
    color: value,
    opacity: value,
    otherParams ...
 }
```
Read more about color settings in [Fill Settings](Fill_Settings) article.

Stroke color is set similar to fill procedure. The setting supports {api:anychart.graphics.vector.Fill}fill{api} with:
* {api:anychart.graphics.vector.SolidFill}Solid color{api},
* {api:anychart.graphics.vector.LinearGradientFill}Linear gradient{api},
* {api:anychart.graphics.vector.RadialGradientFill}Radial gradient{api}.

Image fill **not supported**.

For example, that's how you do stroke color fill:

{sample}GS\_E\_stroke_color{sample}

```
// Solid color
.stroke('5 orange .7')

// Linear gradient
.stroke(['red', 'blue'], 15)

// Radial gradient
.stroke({
  keys: ['.1 red', 'white'],
  cx: .5,
  cy: .5,
  fx: .3,
  fy: .4
}, 4)
```

## Stroke Thickness
Stroke thickness can be set in several ways:
* using a parameter: 
 `stroke(colorSettings, thickness, otherParams...)`
* as a String: 
 `'thickness colorSetting'`
* as an Object:
```
 {
    thickness: value,
    otherParams ...
 }
```

{sample}GS\_E\_stroke_thickness{sample}

## Dash
Dash settings can be set in two ways:
* using a parameter:
 `stroke(colorSettings, thickness, dashSetting, otherParams...)`
* as an Object:
```
 {
    dash: value,
    otherParams ...
 }
```

Dash settings are set by a string with numbers separated by spaces. This string is used as the dash pattern. For example, if string value is `5` – the resulting pattern will be `5 5 5 5 5 ...`, and if string value is  `5 5 10`, that will result with `5 5 10 5 5 10 5 5 10 ...`.
 
Every number in an odd position is a dash length, and every number in an even position is a space length.

{sample}GS\_E\_stroke_dashed{sample}

```
.stroke('yellow', 5, '5 5 10')
```

## Join and Cap
{api:anychart.graphics.vector.SolidStroke}Join and cap{api} settings are set in two ways:
* using a parameter:
 `stroke(colorSettings, thickness, dashSetting, lineJoin, lineCap)`
* as an Object:
```
 {
    lineJoin: value,
    lineCap: value,
    otherParams ...
 }
```
{sample}GS\_E\_stroke\_cap\_join{sample}
```
.stroke({
  color: 'blue',
  thickness: 15,
  lineJoin: 'bevel',
  lineCap: 'round'
})
```
