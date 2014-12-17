# Element stroke settings.
* [Line color](#line_color_settings)
* [Line thickness](#line_thickness)
* [Line dash](#line_dash_settings)
* [Line join and cap](#line_join_and_cap)

## Line color settings
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
Read more about color settings in [Elements Fill](Fill) article.

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

## Line thickness
Line thickness can in several ways:
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

## Line dash settings
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

## Line join and cap
Line {api:anychart.graphics.vector.SolidStroke}join and cap{api} settins are set in two ways:
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
