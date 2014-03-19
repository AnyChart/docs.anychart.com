# Позиционирование элементов визуализации и корректировака их положения #

* [Introduction](#intro)
* [Method position()](#m-position)
* [Method anchor()](#m-anchor)
* [Method offestX() or offsetY()](#m-offsets)

{sample}sample{sample}

## [Introduction](id:intro)
Позиционирование таких элементов как Маркер, Лейбл, Мультимаркер и Мультилейбл происходит при помощи трех методов: **position**, **anchor**, **offsetX**, **offsetY**.
Это обязательные методы для каждого из этих элементов.
  
Ниже мы рассмотрим принцип работы этих методов и их взаимосвязь на итоговом позиционировании элеметна.

## [Method position()](id:m-position)
Данный метод определяет текущее местоположение элемента на области чарта в целом.
То есть он определяет, так называемую, **точку позиционирования** элемента.

В качестве параметра метод **position** принимает либо координату, либо строковое значение.
Рассмотрим подробнее:

### Координаты/значения
**Для случая простого Маркера и простого Лейбла.**

Принимаемая кордината считается в относительных координатах контейнера, в котором находится текущий элемент.
  
Более того, можно предавать не только точные значения, но и относительные (в процентах).

<script>
  var bg = new anychart.elements.Label().background().fill('green .05').stroke('1 green');
  new anychart.elements.Label()
      .container(stage)
      .position(['30%', '20%'])
      .background(bg)
      .text('Label\nposition([30%,30%])')
      .fontSize(14)
      .padding(3)
    // берем только половину контейнера для красоты
      .parentBounds(new anychart.math.Rect(stage.width() / 2, 0, stage.width() / 2,     stage.height()))
      .draw();
  stage.path()
      .moveTo(stage.width() / 2, 0)
      .lineTo(stage.width() / 2, stage.height());
  new anychart.elements.Label()
      .container(stage)
      .position([stage.width()/2 + 50, 20])
      .background(bg)
      .padding(3)
      .text('Label\nposition([30,30])')
      .parentBounds(new anychart.math.Rect(stage.width() / 2, 0, stage.width() / 2, stage.height()))
      .fontSize(14)
      .draw();
</script>
![](../images/position_lbl_perc_val.png) 

### Произвольное строковое значение
**Для множественного Маркера и множественного Лейбла.**
В таком случае элементы привязываются к требуемым объектам (на которых Вы хотели бы их видеть, например, точки на серии или тики на оси).

Во фреймворке есть и продопределенные значения для определения положения, отвечающие за позиционирование элемента на привязанном объекте. 
Так, например, для прямоугольных объектов (допустим это точка Bar серии) значение **position** берется из Enum **anychart.utils.NinePositions**

<script>
var orange = '1 orange 1';
  var path = stage.star5(stage.width() / 2, stage.height() / 2, stage.height() / 3).fill('none').stroke('none');
  var pathBounds = path.getBounds();
  stage.path().fill('yellow 0.3').stroke(orange)
      .moveTo(pathBounds.left, pathBounds.top)
      .lineTo(pathBounds.left + pathBounds.width, pathBounds.top)
      .lineTo(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height)
      .lineTo(pathBounds.left, pathBounds.top + pathBounds.height)
      .close();
  stage.text(pathBounds.left - 55, pathBounds.top - 15, 'LEFT_TOP');
  stage.circle(pathBounds.left, pathBounds.top, 3).fill('blue');
  stage.text(pathBounds.left - 78, pathBounds.top + pathBounds.height / 2 - 8, 'LEFT_CENTER');
  stage.circle(pathBounds.left, pathBounds.top + pathBounds.height / 2, 3).fill('blue');
  stage.text(pathBounds.left - 80, pathBounds.top + pathBounds.height, 'LEFT_BOTTOM');
  stage.circle(pathBounds.left, pathBounds.top + pathBounds.height, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width / 2 - 10, pathBounds.top - 18, 'TOP');
  stage.circle(pathBounds.left + pathBounds.width / 2, pathBounds.top, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width / 2 - 20, pathBounds.top + pathBounds.height / 2 - 15, 'CENTER');
  stage.circle(pathBounds.left + pathBounds.width / 2, pathBounds.top + pathBounds.height / 2, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width / 2 - 23, pathBounds.top + pathBounds.height + 2, 'BOTTOM');
  stage.circle(pathBounds.left + pathBounds.width / 2, pathBounds.top + pathBounds.height, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width + 5, pathBounds.top - 15, 'RIGHT_TOP');
  stage.circle(pathBounds.left + pathBounds.width, pathBounds.top, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width + 5, pathBounds.top + pathBounds.height / 2 - 8, 'RIGHT_CENTER');
  stage.circle(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height / 2, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width + 5, pathBounds.top + pathBounds.height, 'RIGHT_BOTTOM');
  stage.circle(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height, 3).fill('blue');
</script>
![](../images/position_Enum9.png)

Для точек Pie-серии или же для лейблов оси используются Enum (to-do: outside/inside)

<script>
stage.pie(stage.width()/10, 2*stage.height()/3, stage.height()/2, -90, 60)
      .fill('yellow 0.3');
  stage.circle(stage.height()/3, 5*stage.height()/12, 3).fill('blue');
  stage.path()
      .moveTo(stage.height()/3, 5*stage.height()/12)
      .lineTo(stage.height()/2+2, 6*stage.height()/12+2)
      .stroke('blue')
  stage.text(stage.height()/2, 6*stage.height()/12, 'INSIDE');
  stage.circle(stage.height()/2, stage.height()/6, 3).fill('blue');
  stage.text(stage.height()/2+5, stage.height()/6, 'OUTSIDE');
  stage.path()
      .moveTo(stage.width()/2,0)
      .lineTo(stage.width()/2, stage.height());
  stage.path()
      .moveTo(3*stage.width()/4, 0)
      .lineTo(3*stage.width()/4, stage.height())
      .stroke('4 grey .5');
  stage.text(3*stage.width()/4+15, 0, 'Axis');
  var path = stage.path().stroke('grey .8');
  for(var i=0; i<stage.height()/15;i++){
    path.moveTo(3*stage.width()/4, i*15)
        .lineTo(3*stage.width()/4+15, i*15);
  }
  var bg = new anychart.elements.Label().background().fill('green .05').stroke('1 green');
  new anychart.elements.Label()
      .container(stage)
      .width(stage.width()/4 - 20)
      .position([stage.width()/2 + 15, stage.height()/3])
      .background(bg)
      .text('Label\nOutside')
      .fontSize(14)
      .padding(3)
      .draw();
  new anychart.elements.Label()
      .container(stage)
      .width(stage.width()/4 - 20)
      .position([3*stage.width()/4 + 15, stage.height()/3])
      .background(bg)
      .text('Label\nInside')
      .fontSize(14)
      .padding(3)
      .draw();
</script>
![](../images/position_pieAxis.png)

Произвольное строковое значение Вы можете сами обрабатывать на этапе формирования *positionProvider*. Например, Вы сами можете определить собственные значения для позиционирования, а затем использовать их при рассчетах.

<script>
  var star = stage.star4(stage.width()/2, stage.height()/2, stage.height()/2-10).fill('yellow', 0.5);
  var pathBounds = star.getBounds();
  stage.text(pathBounds.left + pathBounds.width/2 + 7, pathBounds.top, 'NORTH');
  stage.circle(pathBounds.left + pathBounds.width/2, pathBounds.top , 3).fill('blue');
  stage.text(pathBounds.left -37, pathBounds.top + pathBounds.height/2 -7, 'EAST');
  stage.circle(pathBounds.left, pathBounds.top + pathBounds.height/2, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width + 7, pathBounds.top + pathBounds.height/2 -7, 'WEST');
  stage.circle(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height/2, 3).fill('blue');
  stage.text(pathBounds.left + pathBounds.width/2 + 7, pathBounds.top + pathBounds.height -7, 'SOUTH');
  stage.circle(pathBounds.left + pathBounds.width/2, pathBounds.top + pathBounds.height, 3).fill('blue');
</script>
![](../images/position_custom.png)


## [Method anchor()](id:m-anchor)
После того, как элемент спозиционирован при помощи метода **position**, его положением вокруг точки позиционирования можно управлять с помощью метода **anchor**.

Метод принимает значения из Enum'a **anychart.utils.NinePositions**. Пример ниже показывает принцип его работы.

<script>
stage.rect(stage.width() / 12, stage.height() / 4, stage.width() / 6, 3 * stage.height() / 4)
      .fill('yellow .3');
  stage.circle(stage.width() / 12, stage.height() / 4, 3).fill('blue');
  stage.rect(5 * stage.width() / 12, stage.height() / 4, stage.width() / 6, 3 * stage.height() / 4)
      .fill('yellow .3');
  stage.circle(5 * stage.width() / 12, stage.height() / 4, 3).fill('blue');
  stage.rect(9 * stage.width() / 12, stage.height() / 4, stage.width() / 6, 3 * stage.height() / 4)
      .fill('yellow .3');
  stage.circle(9 * stage.width() / 12, stage.height() / 4, 3).fill('blue');
  stage.path()
      .moveTo(stage.width() / 3, 0)
      .lineTo(stage.width() / 3, stage.height())
      .moveTo(2 * stage.width() / 3, 0)
      .lineTo(2 * stage.width() / 3, stage.height());
  new anychart.elements.Marker()
      .position([stage.width() / 12, stage.height() / 4])
      .container(stage)
      .anchor(anychart.utils.NinePositions.LEFT_TOP)
      .type('star5')
      .fill('red .7')
      .draw();
  new anychart.elements.Marker()
      .position([5 * stage.width() / 12, stage.height() / 4])
      .container(stage)
      .anchor(anychart.utils.NinePositions.CENTER)
      .type('star5')
      .fill('red .7')
      .draw();
  new anychart.elements.Marker()
      .position([9 * stage.width() / 12, stage.height() / 4])
      .container(stage)
      .anchor(anychart.utils.NinePositions.RIGHT_BOTTOM)
      .type('star5')
      .fill('red .7')
      .draw();
</script>
![](../images/anchor.png)

На картинке синей точкой обозначена точка позиционирования маркера (красной звезды) на баре.
Слева направо значение **anchor**: LeftTop, Center, RightBottom.

## [Method offestX() or offsetY()](id:m-offsets)

 После того, как элемент был спозиционирован, его окончательное положение можно скорректировать при помощи методов **offsetX** и **offsetY**.
 Данные методы принимают значение на которое смещают элемент по одной из осей, но смещение происходит в зависимости от текущего значения **anchor**. Рассмотрим на картике зависимость смещения по оси от значения **anchor**.
 
 <script>
 var pathBounds = {
  left: stage.width() / 2 - stage.height() / 2,
  top: 20,
  width: stage.height(),
  height: stage.height()-40
};
stage.path().fill('none').stroke('1 grey .2')
    .moveTo(pathBounds.left, pathBounds.top)
    .lineTo(pathBounds.left + pathBounds.width, pathBounds.top)
    .lineTo(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height)
    .lineTo(pathBounds.left, pathBounds.top + pathBounds.height)
    .close();
stage.text(pathBounds.left - 55, pathBounds.top - 15, 'LEFT_TOP');
stage.circle(pathBounds.left, pathBounds.top, 3).fill('blue');
stage.triangleUp(pathBounds.left + 15, pathBounds.top + 15, 5)
    .rotateByAnchor(25, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + 15, pathBounds.top + 15)
    .lineTo(pathBounds.left, pathBounds.top);
stage.text(pathBounds.left - 78, pathBounds.top + pathBounds.height / 2 - 8, 'LEFT_CENTER');
stage.circle(pathBounds.left, pathBounds.top + pathBounds.height / 2, 3).fill('blue');
stage.triangleUp(pathBounds.left + 15, pathBounds.top + pathBounds.height / 2 + 15, 5)
    .rotateByAnchor(25, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + 15, pathBounds.top + pathBounds.height / 2 + 15)
    .lineTo(pathBounds.left, pathBounds.top + pathBounds.height / 2);
stage.text(pathBounds.left - 80, pathBounds.top + pathBounds.height, 'LEFT_BOTTOM');
stage.circle(pathBounds.left, pathBounds.top + pathBounds.height, 3).fill('blue');
stage.triangleUp(pathBounds.left + 15, pathBounds.top + pathBounds.height - 15, 5)
    .rotateByAnchor(35, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + 15, pathBounds.top + pathBounds.height - 15)
    .lineTo(pathBounds.left, pathBounds.top + pathBounds.height);
stage.text(pathBounds.left + pathBounds.width / 2 - 10, pathBounds.top - 18, 'TOP');
stage.circle(pathBounds.left + pathBounds.width / 2, pathBounds.top, 3).fill('blue');
stage.triangleUp(pathBounds.left + pathBounds.width / 2 + 15, pathBounds.top + 15, 5)
    .rotateByAnchor(25, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + pathBounds.width / 2 + 15, pathBounds.top + 15)
    .lineTo(pathBounds.left + pathBounds.width / 2, pathBounds.top);
stage.text(pathBounds.left + pathBounds.width / 2 - 20, pathBounds.top + pathBounds.height / 2 - 15, 'CENTER');
stage.circle(pathBounds.left + pathBounds.width / 2, pathBounds.top + pathBounds.height / 2, 3).fill('blue');
stage.triangleUp(pathBounds.left + pathBounds.width / 2 + 15, pathBounds.top + pathBounds.height / 2 + 15, 5)
    .rotateByAnchor(25, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + pathBounds.width / 2 + 15, pathBounds.top + pathBounds.height / 2 + 15)
    .lineTo(pathBounds.left + pathBounds.width / 2, pathBounds.top + pathBounds.height / 2);
stage.text(pathBounds.left + pathBounds.width / 2 - 23, pathBounds.top + pathBounds.height + 2, 'BOTTOM');
stage.circle(pathBounds.left + pathBounds.width / 2, pathBounds.top + pathBounds.height, 3).fill('blue');
stage.triangleUp(pathBounds.left + pathBounds.width / 2 + 15, pathBounds.top + pathBounds.height - 15, 5)
    .rotateByAnchor(35, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + pathBounds.width / 2 + 15, pathBounds.top + pathBounds.height - 15)
    .lineTo(pathBounds.left + pathBounds.width / 2, pathBounds.top + pathBounds.height);
stage.text(pathBounds.left + pathBounds.width + 5, pathBounds.top - 15, 'RIGHT_TOP');
stage.circle(pathBounds.left + pathBounds.width, pathBounds.top, 3).fill('blue');
stage.triangleUp(pathBounds.left + pathBounds.width - 15, pathBounds.top + 15, 5)
    .rotateByAnchor(-25, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + pathBounds.width - 15, pathBounds.top + 15)
    .lineTo(pathBounds.left + pathBounds.width, pathBounds.top);
stage.text(pathBounds.left + pathBounds.width + 5, pathBounds.top + pathBounds.height / 2 - 8, 'RIGHT_CENTER');
stage.circle(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height / 2, 3).fill('blue');
stage.triangleUp(pathBounds.left + pathBounds.width - 15, pathBounds.top + pathBounds.height / 2 + 15, 5)
    .rotateByAnchor(-25, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + pathBounds.width - 15, pathBounds.top + pathBounds.height / 2 + 15)
    .lineTo(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height / 2);
stage.text(pathBounds.left + pathBounds.width + 5, pathBounds.top + pathBounds.height, 'RIGHT_BOTTOM');
stage.circle(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height, 3).fill('blue');
stage.triangleUp(pathBounds.left + pathBounds.width - 15, pathBounds.top + pathBounds.height - 15, 5)
    .rotateByAnchor(85, acgraph.vector.Anchor.CENTER).fill('green');
stage.path().moveTo(pathBounds.left + pathBounds.width - 15, pathBounds.top + pathBounds.height - 15)
    .lineTo(pathBounds.left + pathBounds.width, pathBounds.top + pathBounds.height);
 </script>
 ![image](../images/offsetsXY.png)
 
 Стрелками обозначено направление смещение при положительно заданных значениях offsets.
 
 Ниже наглядно показано как считается отклонение 10 по X и 15 по Y для **anchor** LeftTop (слева) и RightBottom (справа):

<script>
stage.rect(stage.width() / 12, stage.height() / 4, stage.width() / 3, 3 * stage.height() / 4)
      .fill('yellow .3');
  stage.circle(stage.width() / 12, stage.height() / 4, 3).fill('blue');
  stage.rect(7 * stage.width() / 12, stage.height() / 4, stage.width() / 3, 3 * stage.height() / 4)
      .fill('yellow .3');
  stage.circle(7 * stage.width() / 12, stage.height() / 4, 3).fill('blue');
  stage.path()
      .moveTo(stage.width() / 2, 0)
      .lineTo(stage.width() / 2, stage.height())
  new anychart.elements.Marker()
      .position([stage.width() / 12, stage.height() / 4])
      .container(stage)
      .anchor(anychart.utils.NinePositions.LEFT_TOP)
      .type('star5')
      .offsetX(10)
      .offsetY(15)
      .fill('red .7')
      .draw();
  new anychart.elements.Marker()
      .position([7 * stage.width() / 12, stage.height() / 4])
      .container(stage)
      .anchor(anychart.utils.NinePositions.RIGHT_BOTTOM)
      .offsetX(10)
      .offsetY(15)
      .type('star5')
      .fill('red .7')
      .draw();
</script>
![](../images/offsets_positive.png)

