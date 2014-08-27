# Element stroke settings.
* [Line color](#line_color_setting)
* [Line thickness](#line_thickness)
* [Line dash](#line_dash_settings)
* [Line join and cap](#Line_join_and_cap)

<a name="line_color_setting"/>
## Line color settings
Настройки цвета линии можно задать несколькими способами:
* через отдельный параметр: 
 `stroke(colorSettings, otherParams...)`
* в строке (by one value): 
 `'thickness colorSetting'`
* в объекте (by one value):
```
 {
    color: value,
    opacity: value,
    otherParams ...
 }
```
Подробнее читайте в статье [Elements Fill](Elements_Fill)

Stroke color is set similar to fill procedure. 
The setting supports fill with:
* solid color
* linear gradient
* radial gradient

Image fill **not supported**.

E.g., stroke color fill:

{sample}GS\_E\_stroke_color{sample}

```
.stroke({
  keys: ['.1 red', 'white'],
  cx: .5,
  cy: .5,
  fx: .3,
  fy: .4
}, 4)
```

## Line thickness
Настройки толщины линии можно задать несколькими способами:
* через отдельный параметр: 
 `stroke(colorSettings, thickness, otherParams...)`
* в строке (by one value): 
 `'thickness colorSetting'`
* в объекте (by one value):
```
 {
    thickness: value,
    otherParams ...
 }
```

{sample}GS\_E\_stroke_thickness{sample}

## Line dash settings
Настройки dash можно задать думя способами:
* через отдельный параметр:
 `stroke(colorSettings, thickness, dashSetting, otherParams...)`
* в объекте (by one value):
```
 {
    dash: value,
    otherParams ...
 }
```

Dash settings are set by the string with figures separated by spaces.
 This string will be used as dash pattern. That means, if  string value is
 `5`, the resulting patternt will be `5 5 5 5 5 ...`, and if string value is 
 `5 5 10`, that will result with `5 5 10 5 5 10 5 5 10 ...`.
 
Every odd-numbered figure is a dash length, and every even-numbered figure is a
 space length.

E.g.,

{sample}GS\_E\_stroke_dashed{sample}

```
.stroke('yellow', 5, '5 5 10')
```

## Line join and cap
Настройки corners задаются через два пару (lineJoin, lineCap) и задать ее можно
думя способами:
* через отдельный параметр:
 `stroke(colorSettings, thickness, dashSetting, lineJoin, lineCap)`
* в объекте (by one value):
```
 {
    lineJoin: value,
    lineCap: value,
    otherParams ...
 }
```
{sample}GS\_E\_stroke\_cap\_join{sample}
