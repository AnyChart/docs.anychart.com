#Pointers and Data

* [Overview](#overview)
* [Connecting Pointers with Data](#connecting_pointers_with_data)
 * [Binding Pointers to Data](#binding_pointers_to_data)
 * [Binding Pointers to Axes](#binding_pointers_to_axes)
* [Types of Pointers](#types_of_pointers)
 * [Bar](#bar)
 * [Marker](#marker)
 * [Needle](#needle)
 * [Knob](#knob)

##Overview

A pointer is an essential element of a gauge, used to indicate data. 

##Connecting Pointers with Data
(??? ВОПРОС О ЗАГОЛОВКЕ ОСТАЕТСЯ. Сейчас тут два подраздела Binding Pointers to Data и Binding Pointers to Axes. Они объединены заголовком про Data. Какая-то асимметрия получается: общий заголовок практически совпадает с первым подзаголовком. Если вдруг появятся идеи, как можно переформулировать, скажи. Я пока не понимаю, путаюсь из-за того, что указатели фактически подразумевают данные, а привязка к осям подразумевает и привязку данных к указателям, в общем все во все перетекает... Можно ли вообще разделить более логично?)

By default, when a pointer is added to a JavaSchipt gauge chart, it shows the first (or the only) value of the data set on the first (or the only) axis. If you need to show another value, to place a pointer to another axis, or to create a number of pointers, you should use the {api:anychart.core.gauge.pointers.Base#dataIndex}dataIndex(){api} and {api:anychart.core.gauge.pointers.Base#axisIndex}axisIndex{api} methods to connect your pointers with data and axes.

### Binding Pointers to Data

To show more than one value, the {api:anychart.core.gauge.pointers.Base#dataIndex}dataIndex(){api} method  is used: it should be applied  to (??? called on) each pointer showing any other than the first value. Note that the numeration of values starts from 0. 

(???) Или все-таки метод должен применяться ко всем указателям, а то вдруг возникнет путаница? В таком случае то, что после двоеточия, нужно вычеркнуть. В примере метод к указателю, показывающему первую точку, применяется, но индекс точки в нем не прописан (НА ВСЯКИЙ СЛУЧАЙ УТОЧНЯЮ: ПРАВИЛЬНО ЛИ Я ПОНЯЛА, ЧТО ИЗ ТВОЕГО КОММЕНТАРИЯ СЛЕДУЕТ НЕОБХОДИМОСТЬ СНЯТЬ КУСОК ПРЕДЛОЖЕНИЯ ПОСЛЕ ДВОЕТОЧИЯ, Т.К. ОН НЕВЕРНЫЙ, ВЕДЬ ЕСЛИ УКАЗАТЕЛЕЙ НЕСКОЛЬКО, ТО НАДО ДЛЯ ПОРЯДКА ПРОПИСАТЬ И САМОЕ ПЕРВОЕ ЗНАЧЕНИЕ?)

When you call the {api:anychart.core.gauge.pointers.Base#dataIndex}dataIndex(){api} method, you change the value represented by the pointer. However, using this makes sense only if you have more than one value in your data set and more than one axis, because the only axis shows the only (or the first) value from your dataSet by default. So, there is no need in this method if your chart has an only one axis and your data looks like this:

```
  var dataSet = anychart.data.set([60]);
```

Since the only axis shows the only value by default, using the {api:anychart.core.gauge.pointers.Base#dataIndex}dataIndex(){api} method makes no sense if your gauge has one axis and your data set looks like this:

```
  var dataSet = anychart.data.set([60]);
```

The following sample shows how to create a data set with two values, add two pointers (marker and bar), and bind the bar pointer to the second value:

```
  //add the second data point
  var dataSet = anychart.data.set([60,110]);

  //marker
  var marker = gauge.marker();
  marker.enabled(true);
  marker.dataIndex();
  marker.size(7);
       
  //bar
  var bar = gauge.bar(0);
  bar.width(3);
  bar.dataIndex(1);
```

{sample}BCT\_Pointers-and-Data\_16{sample} 

To add a number of pointers of the same type, you need to specify the numbers (??? indexes?) of the pointers by adding their values (the numberation starting with 0). In this sample, the numbers (??? indexes? ВОПРОС ОСТАЛСЯ) of the {api:anychart.core.gauge.pointers.Marker}marker(){api} pointers are specified:

(??? ВОПРОСЫ ОСТАЛИСЬ! ЭТО НЕ УДАЛИЛА, Т.К. ЭТО И ЕСТЬ НОВАЯ ИНФОРМАЦИЯ. НО ЕСЛИ НАСТАИВАЕШЬ И ЭТО ТИПА ОЧЕВИДНО - ОК, ВЫЧЕРКНУ)

```
// add the second data point
var dataSet = anychart.data.set([60,120,170]);

// marker_1
var marker = gauge.marker(0);
marker.enabled(true);
marker.dataIndex(0);
marker.axisIndex(0);
marker.size(5);

// marker_2
var marker_1 = gauge.marker(1);
marker_1.dataIndex(1);
marker_1.axisIndex(0);
marker_1.size(6);

// marker_3
var marker_2 = gauge.marker(2);
marker_2.dataIndex(2);
marker_2.axisIndex(0);
marker_2.size(7);
```

{sample}BCT\_Pointers-and-Data\_19{sample}

### Binding Pointers to Axes

To bind a pointer to an axis, the {api:anychart.core.gauge.pointers.Base#axisIndex}axisIndex(){api} method is used. However, there is no need in this method if your gauge contains only one axis. Also note that the numeration of axes starts from 0.

In the samle below, there is a gauge with two axis and two pointers, marker and bar, both indicating the same value. The bar pointer is bound to the second axis.

{sample}BCT\_Pointers-and-Data\_17{sample} 

```
  // second axis settings
  var axis_1 = gauge.axis(1);
  axis_1.radius(50);
  axis_1.width(3);
  
  // second scale settings
  var scale_1 = gauge.axis(1).scale();
  scale_1.minimum(0);
  scale_1.maximum(300);
  var ticks_1 = gauge.axis(1).scale().ticks();
  ticks_1.interval(30);
  var minorTicks_1 = gauge.axis(1).scale().minorTicks();
  minorTicks_1.interval(10);
  
  // second ticks settings
  var axisTicks_1 = gauge.axis(1).ticks();
  axisTicks_1.type("trapezoid");
  axisTicks_1.length("8");
  
  // second minor ticks settings
  var axisMinorTicks_1 = gauge.axis(1).minorTicks();
  axisMinorTicks_1.enabled(true);
  axisMinorTicks_1.length("3");

  // marker
  var marker = gauge.marker();
  marker.enabled(true);
  marker.dataIndex(0);
  marker.axisIndex(0);
  marker.size(7);
      
  // bar
  var bar = gauge.bar();
  bar.width(3);
  bar.dataIndex(0);
  bar.axisIndex(1);
```

The following code adds a second value to the data set and binds it with the bar pointer on the second axis:

```
  // add the second data point
  var dataSet = anychart.data.set([60,120]);

  // bar
  var bar = gauge.bar();
  bar.width(3);
  bar.dataIndex(1);
  bar.axisIndex(1);
```

{sample}BCT\_Pointers-and-Data\_18{sample} 

##Types of Pointers

There are four types of pointers avaliable for circular gauges: bar, marker, needle, and knob. They look different, but serve the same function: indicating values.

(??? Понимаю, что хочется сделать вступление подлиннее, но не уверена, что второе предложение нужно.)

###Bar

A bar is a pointer looking like a bold line colored rather brightly (??? НЕ ПОНЯЛА. НА КАРТИНКЕ ОНА СЕРАЯ). As a rule, it is placed right next to an axis and combined with a marker pointer.


In the sample below, you can see how to create a plain circular gauge with a bar pointer:

{sample}BCT\_Pointers-and-Data\_Bar\_01{sample} 

```
  //bar
  var bar = gauge.bar();
  bar.enabled(true);
```

To change the width and radius of a bar pointer, do the following:


```
//bar
var bar = gauge.bar(0);
//you can remove this if you add any parameters to the bar
bar.enabled(true);
bar.width(3);
bar.radius(100);
```
{sample}BCT\_Pointers-and-Data\_Bar\_02{sample} 

A lot more parameters can be set. For example, a bar pointer can be colored with a single color or a gradient. Also, you can set its position according to (??? это "относительно"?) the (??? a) defined radius, snap (??? чо?) the pointer to an exact (??? particular) data point and axis, and set the stroke. 

(??? set the stroke - что именно задается? вид штриха? можно заменить на configure, чтобы избежать повтора?) 

The following sample demonstrates how to set the position of a bar pointer according  to (??? это "относительно"?) its radius:

{sample}BCT\_Pointers-and-Data\_Bar\_03{sample}

If the width of the bar is more than 1px, it can be positioned outside, in the center, or inside of the circle of the (??? a) defined radius. To set the position, use {api:anychart.enums.GaugeSidePosition}position(){api} method and specify the value as "outside", "inside", or "center":

(??? If the width of the bar is more than 1px, so - не улавливаю причинно-следственную связь)
(??? Про радиус не догоняю - что за определенный радиус? В другом месте написано, что это радиус самого бара? Сложно как-то.)

```
  var bar = gauge.bar();
  bar.position("inside");
```

It is possible to use only the first letters of a position (??? name) as a value:

```
var bar = gauge.bar();
bar.position("i");
```

###Marker

There are many types of markers in AnyChart: you can read about them in the Marker tutorial. In circular gauges, marker pointers are usually combined with bar pointers. 

(??? Туториал существует? Что-то не нахожу.)

Let's first enable a marker:

```  
  //marker
  var marker = gauge.marker();
  marker.enabled(true);
```

By default, the marker size is rather small, and to make in visible, you should use the {api:anychart.core.gauge.pointers.Marker#size}size(){api} method:

```  
//marker
var marker = gauge.marker();
marker.enabled(true);
marker.size(7);
```

{sample}BCT\_Pointers-and-Data\_Marker\_04{sample} 

It's not the best view when the marker covers the value on the axis, so now let's adjust the position of the marker according to the circle of the default or defined radius. As with bars, the marker might be in its center, outside or inside it. Let's set the marker's position to outside and look how will it change the view: 

```
//marker
var marker = gauge.marker();
marker.position("outside");
marker.size(7);
```

{sample}BCT\_Pointers-and-Data\_Marker\_05{sample} 

Now our marker is outside the axis, but it doesn't point at the value. Let's change its type:

```
//marker
var marker = gauge.marker();
marker.position("outside");
marker.type("triangledown");
marker.size(7);
```

{sample}BCT\_Pointers-and-Data\_Marker\_06{sample} 

###Needle

Let's now look at the needles - the most common pointer used with Gauges. 

```
//needle
var needle = gauge.needle();
needle.enabled(true);
```

{sample}BCT\_Pointers-and-Data\_Needle\_07{sample} 

Needle can be a thin stick or a pointer of a complex form - you can regulate its width using three similar methods: {api:anychart.core.gauge.pointers.Needle#startWidth}startWidth(){api}, {api:anychart.core.gauge.pointers.Needle#middleWidth}middleWidth(){api} and {api:anychart.core.gauge.pointers.Needle#endWidth}endWidth(){api}.

Let's make our needle thiner to the end, wider to the center and a bit thiner to the start:

```
//needle
var needle = gauge.needle(8);
needle.startWidth(1);
needle.middleWidth(3);
needle.endWidth(0);
```

{sample}BCT\_Pointers-and-Data\_Needle\_08{sample} 

As we can see, the needle starts not from the gauge center. Let's adjust the start, the middle and the end of our needle with methods {api:anychart.core.gauge.pointers.Needle#startRadius}startRadius(){api}, {api:anychart.core.gauge.pointers.Needle#middleRadius}middleRadius(){api} and {api:anychart.core.gauge.pointers.Needle#endRadius}endRadius(){api}. The value transmitted to this method can be in pixels or percents.

```
//needle
var needle = gauge.needle(8);
needle.startRadius("0%");
needle.endRadius("80%");
needle.middleRadius("50%");
needle.startWidth(1);
needle.middleWidth(3);
needle.endWidth(0);
```

{sample}BCT\_Pointers-and-Data\_Needle\_09{sample} 

###Knob

Knob is a full-curcle pointer that is nice to use with a needle or marker pointer. It looks like a switcher on microwaves or the audio tuner. You can see the example of the default enabled knob pointer below.

{sample}BCT\_Pointers-and-Data\_Knob\_10{sample} 

As you can see, this pointer is completely different from others. The first thing we'll adjust will be the number of the knob's projections (vertices). For that we use the {api:anychart.core.gauge.pointers.Knob#verticesCount}verticesCount(){api} method. 

```
//knob
var knob = gauge.knob(0);
knob.verticesCount(15);
```

{sample}BCT\_Pointers-and-Data\_Knob\_11{sample} 

The curvature of vertices can be adjusted too. Use the {api:anychart.core.gauge.pointers.Knob#verticesCurvature}verticesCurvature(){api} method and set the value from 0 to 1 (0.5 is set by default). The less the value is the more convex the vertices are. The more the value the more concave they are.

```
//knob
var knob = gauge.knob();
knob.verticesCount(15);
knob.verticesCurvature(.1);
```

{sample}BCT\_Pointers-and-Data\_Knob\_12{sample} 

The next feature we can adjust is the ratio, which spilts into the {api:anychart.core.gauge.pointers.Knob#topRatio}topRatio(){api} and {api:anychart.core.gauge.pointers.Knob#bottomRatio}bottomRatio(){api} methods. The values for these methods might be from 0 to 1 as well.

```
//knob
var knob = gauge.knob(0);
knob.verticesCount(15);
knob.verticesCurvature(.1);
knob.topRatio(0);
knob.bottomRatio(1);
```

{sample}BCT\_Pointers-and-Data\_Knob\_13{sample} 

If you set the {api:anychart.core.gauge.pointers.Knob#verticesCurvature}verticesCurvature(){api} and the {api:anychart.core.gauge.pointers.Knob#bottomRatio}bottomRatio(){api} values to default (0.5), the vertices would look like triangles directed up from the knob:

```
//knob
var knob = gauge.knob(0)
knob.verticesCount(15)
knob.verticesCurvature(.5)
knob.topRatio(0)
knob.bottomRatio(.5);
```

{sample}BCT\_Pointers-and-Data\_Knob\_14{sample} 

If you set {api:anychart.core.gauge.pointers.Knob#verticesCurvature}verticesCurvature(){api} and the {api:anychart.core.gauge.pointers.Knob#bottomRatio}bottomRatio(){api} values to default (0.5), the vertices would look like triangles directed down to the knob. Try to do it yourself, using the playground.

The last feature available at the moment for only the knob pointers is radius, which is split the same way as ratio. Use the {api:anychart.core.gauge.pointers.Knob#topRadius}topRadius(){api} and the {api:anychart.core.gauge.pointers.Knob#bottomRadius}bottomRadius(){api} methods to set the radius for the outer side (height of the vertices) and the inner side (depth of dimples) accordingly. For clearer representation let's get rid of the ratio settings.

```
//knob
var knob = gauge.knob(0);
knob.verticesCount(15);
knob.verticesCurvature(.5);
knob.topRadius(80);
knob.bottomRadius(50);
```

{sample}BCT\_Pointers-and-Data\_Knob\_15{sample} 
