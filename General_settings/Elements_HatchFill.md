# Element hatch fill
* [Overview](#overview)
* [Hatch fill presets](#hatch_fill_presets)
    * [Color settings](#color_settings)
    * [Thickness settings](#thickness_settings)
    * [Size settings](#size_settings)
* [Pattern settings](#pattern_settings)

## Overview
Заливка штриховкой очень полезна в ситуациях, когда выделение цветом не работает, например, в ситуациях
затрудненного цветовосприятия, а именно:
 * черно-белые принты страниц (в печатных изданиях)
 * черно-белые усройства (e-books)
 * проблемы со зрением (дальтонизм)
 
Люди часто, вставляя визуализацию в свои книги, документы, сайты не задумываются о вышеописаных проблемах.
А у нас есть инструменты для того, чтобы это избежать.

## Hatch Fill presets
Hatch это заливка pattern по предустановкам. Полный список предустановок можно посмотреть 
[в документации.](http://api.anychart.com/7.1.0/anychart.graphics.vector.HatchFill.html#HatchFillType)

Что бы залить элемент hatch, надо просто указать строковое значение. 
```
    .hatchFill('percent60');
```

{sample}GS\_E\_hatch\_hatchFill{sample}


### Color settings

The most simple fill is solid color fill. 
Color can be set in the following formats:
* Hex
* RGB
* HSL
* HTML color name

Color opacity can be set in two ways:
* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call function with the parameters <code>fill(_color_, _**opacity**_);</code>
    * Single value <code>fill('color **opacity**')</code>
 (one string value separated by space).

```
    .hatchFill('diamiond', '#CC8800 0.8');
```

{sample}GS\_E\_hatch\_color{sample}

### Thickness settings
Так же можно задать толщину hatch числом через специальный параметр.

```
    .hatchFill(hatchType, color, thickness);
```

{sample}GS\_E\_hatch\_thickness{sample}

### Size settings
Так же можно задать размер hatch числом через специальный параметр, для того, что бы немного видоизменить hatch.

```
    .hatchFill(hatchType, color, thickness, size);
```

{sample}GS\_E\_hatch\_size{sample}

## Pattern settings
Для того, что бы сделать pattern заливку элемента, надо лишь определить pattern. 

```
  // инициализируем паттер в указаной области
  var pattern = stage.pattern(new acgraph.math.Rect(0,0,stage.width(),stage.height()));
  // задаем настройки для окружностей
  var circles = {
    cx: stage.width()/2,
    cy: stage.height()/2,
    step : 5
  };
  var max_circle_radius = Math.max(stage.width(), stage.height())/2;
  // рисуем окружности на всю область
  for (var i = 0; i < max_circle_radius; i++){
    pattern.circle(circles.cx, circles.cy, circles.step*i).fill('none').stroke('1 blue 0.9');
  }
```

{sample}GS\_E\_hatch\_pattern{sample}