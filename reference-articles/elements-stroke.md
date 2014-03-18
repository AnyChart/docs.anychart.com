# Настройки бордера элемнтов.
* [1. Сплошной цвет](#solid-color)
* [2. Линейный градиент](#linear-gradient)
* [3. Радиальный градиент](#radial-gradient)
* [4. Заливка изображением](#image-fill)

## [1. Сплошной цвет](id:solid-color)
Простейшей заливкой является заливка сплошным цветом. 
Цвет можно задать в форматах:
* Hex
* RGB
* HSL
* HTML color name

Рассмотрим как можно задать прозрачность цвета:
* c помощью модификаторов: RGBA, HSLA.
* либо отдельным параметром:
    * вызов метода с параметрами <code>fill(_color_, _**opacity**_);</code>
    * одним значением <code>fill('color **opacity**')</code>
 (то есть значения одной строкой разделенные пробелом).

<script>
stage.path()
      .moveTo(stage.width() / 2, 0)
      .lineTo(stage.width() / 2, stage.height());
  var bg = new anychart.elements.Label().background();
  new anychart.elements.Label()
      .position([stage.width() / 12, 10])
      .width(stage.width() / 3)
      .height(stage.height() - 20)
      .background(bg.fill('yellow'))
      .text('fill: yellow\nopacity: 1')
      .padding(10)
      .container(stage)
      .draw();
  new anychart.elements.Label()
      .position([7 * stage.width() / 12, 10])
      .width(stage.width() / 3)
      .height(stage.height() - 20)
      .background(bg.fill('yellow 0.2'))
      .text('fill: yellow\nopacity: 0.2')
      .padding(10)
      .container(stage)
      .draw();
</script>
![](../images/fill_solid.png)

## [2. Линейный градиент](id:linear-gradient)

### 2.1. Обязательным параметром
для заливки линейным градиентом являются **ключи градиента**.
 Ключ градиента представляет собой пару: настройка цвета (сам цвет и 
 прозрачность) и его положение. Таких ключей должно быть более двух, иначе заливка
 будет сплошной.

Пример двустопного градиента:

<script>
stage
  .rect(0,0,stage.width(), stage.height())
  .fill(['red', 'yellow']);
</script>
![](../images/fill_linearGradient.png)

Пример многостопного градиента:

<script>
stage
  .rect(0,0,stage.width(), stage.height())
  .fill(['0.1 red', '.3 yellow', '.6 white', '.9 orange']);
</script>
![](../images/fill_linearGradient_m.png)

### 2.2. Дополнитьельные параметры
* **прозрачность** - задает прозрачность всему градиенту
* **угол** - задает угол наклона градиента (зависит от режима)
* **режим заливки** читай ниже

### 2.3. Режимы заливки

#### 2.3.1 ObjectBoundingBox без сохранения угла
Режим заливки, при котором вектор градиента расчитывается под заданным углом, 
 но в фигуре с соотношением сторон не 1:1 он будет измнен браузером (сжат 
 пропорционально соотношению сторон) и визуально угол наклона вектора градиента 
 **не будет соответствовать** заданному.

#### 2.3.2. ObjectBoundingBox с сохранением угла
При этом режиме в любой фигуре угол наклона градиента визуально **будет 
 соответствовать** заданному. То есть, в отличие от предыдущего режима для фигур 
 с соотношением не 1:1, градиент в итоге визуально будет соответствовать
 заданному углу, при помощи дополнительных внутренних вычислений.

Рассмотрим их отличия на примере:

<script>
stage.text(stage.width() / 12, 3, 'без сохранения угла (45\u00b0)');
  new anychart.elements.Background()
      .fill(['0.4 black', '.6 white'], 45)
      .bounds(new anychart.math.Rect(stage.width() /12 , 20, stage.width() / 4, stage.height() - 40))
      .container(stage).draw();
  stage.text(7 * stage.width() / 12 , 3, 'с сохранением угла (45\u00b0)');
  new anychart.elements.Background()
      .fill(['0.4 black', '.6 white'], 45, true)
      .bounds(new anychart.math.Rect(7 * stage.width() / 12 , 20, stage.width() / 4, stage.height() - 40))
      .container(stage).draw();
</script>
![alt](../images/fill_linearG_angle.png)

#### 2.3.3. UserSpaceOnUse
Режим заливки, при котором градиенту указываются собственные размеры и координаты
 внутри которых и производится рассчет (с учетом угла, аналогично режиму 2).
 Затем, данная заливка применяется к необходимому элементу, учитывая координаты 
 его контейнера.

Продемонстрируем принцип работы данного режима:

<script>
var fillSettings = {
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: new anychart.math.Rect(150, 70, 100, 50),
    opacity: .2
  };
  stage
      .rect(0, 0, stage.width(), stage.height())
      .fill(fillSettings);
  fillSettings.opacity = 1;
  stage.text(20, 3, 'figure 1');
  new anychart.elements.Background()
      .fill(fillSettings)
      .bounds(new anychart.math.Rect(20, 20, 100, 70))
      .container(stage).draw();
  stage.text(20, 3, 'figure 2');
  new anychart.elements.Background()
      .fill(fillSettings)
      .bounds(new anychart.math.Rect(60, 140, 70, 50))
      .container(stage).draw();
  stage.text(270, 73, 'figure 3');
  new anychart.elements.Background()
      .fill(fillSettings)
      .bounds(new anychart.math.Rect(270, 93, 100, 100))
      .container(stage).draw();
  stage.text(150, 53, 'fill settings');
  stage
      .rect(150, 70, 100, 50).stroke('3 black')
      .fill(fillSettings);
</script>
![alt](../images/fill_linearG_userspace.png)

Как видно на изображении, настройки градиента обозначены **fill settings **, и
 при помощи даннго градиента закрашены области **figure 1-3**.

Стоит заметить, что если размеры контейнера в настройках градиента будут больше
 закрашиваемой области элемента, то будет иной эффект:

<script>
var fillSettings = {
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: new anychart.math.Rect(5, 0, 395, 200),
    opacity: .2
  };
  stage
      .rect(5, 0, 395, 200)
      .fill(fillSettings);
  fillSettings.opacity = 1;
  stage.text(20, 3, 'figure 1');
  new anychart.elements.Background()
      .fill(fillSettings)
      .bounds(new anychart.math.Rect(20, 20, 100, 70))
      .container(stage).draw();
  stage.text(60, 120, 'figure 2');
  new anychart.elements.Background()
      .fill(fillSettings)
      .bounds(new anychart.math.Rect(60, 140, 70, 50))
      .container(stage).draw();
  stage.text(270, 73, 'figure 3');
  new anychart.elements.Background()
      .fill(fillSettings)
      .bounds(new anychart.math.Rect(270, 93, 100, 100))
      .container(stage).draw();
</script>
![alt](../images/fill_linearG_userspace2.png)

## [3. Радиальный градиент](id:radial-gradient)

### 3.1. Обязательными параметроми
для радиального градиента являются:
1. _ключей градиента_, как и в случае линейного градиента, не менее двух. 
2. _положение центра_, которые задаются **не в пикселях**, а в процентных 
 соотношениях от размеров контейнера (числом от 0 до 1).

Простая заливка радиальным градиентом c центром в точке (0.5, 0.5):
<script>
var bg = new anychart.elements.Background()
    .fill(['black', 'white'], .5, .5)
    .container(stage)
    .draw();
</script>
![alt](../images/fill_radialG.png)

### 3.2. Дополнительные параметры
Расширенные настройки градиента:
* **прозрачность** - задает прозрачность всему градиенту.
* **область заливки** - тоже что и 1.2.3.3 (UserSpaceOnUse) в линейном градиенте.
 Если область заливки не задана, то заливается весь контейнер элемента, а также,
 если соотношение сторон области заливки не 1:1, то заливка растягивается до 
 эллипса.
* **положение фокальной точки** - как и положение центральной точки задается
 в соотношении сторон области заливки (числом от 0 до 1). **Заметка:** стоит
 помнить, что положение фокальной точки не должно выходить за рамки эллипса.

Пример с фокальной точкой. Именно за радиусы этого эллипса и не должно
 выходить положение фокальной точки.

<script>
var bg = new anychart.elements.Background()
    .fill(['black','white'], .5, .5, null, 1, 0.23, 0.81)
    .container(stage)
    .draw();
  stage.ellipse(stage.width()/2, stage.height()/2,stage.width()/2-2, stage.height()/2-2)
    .stroke('1 green')
    .fill('green .2');
</script>
![alt](../images/fill_radialG_m.png)

Пример с заданой областью заливки

<script>
var bg = new anychart.elements.Background()
    .fill(['black','white'], .5, .5, new anychart.math.Rect(0, 0, 400, 400), 1,.5,.7)
    .container(stage)
    .draw();
</script>
![alt](../images/fill_radialG_usos.png)

## [4. Заливка изображением](id:image-fill)
Для того, чтобы залить элемент изображением, в метод **fill** необходимо 
 передать объект, который содержит информацию об адресе до изображения (_src_) и
 режим заливки (растянуть/сжать картинку, сохранять пропорции или нет,
 использовать в качестве шаблона заливки).

<script>
  stage.path()
      .moveTo(stage.width() / 2, 0)
      .lineTo(stage.width() / 2, stage.height());
  stage.text(20, 0, 'Stretch image');
  new anychart.elements.Background()
      .fill({
        src: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/128/TV-Kitty-icon.png',
        mode: acgraph.vector.ImageFillMode.STRETCH
      })
      .stroke('1 #000')
      .bounds(new anychart.math.Rect(2, 18, stage.width() / 2 - 4, stage.height() - 22))
      .container(stage)
      .draw();
  stage.text(stage.width() / 2 + 20, 0, 'Pattern image');
  new anychart.elements.Background()
      .fill({
        src: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/128/TV-Kitty-icon.png',
        mode: acgraph.vector.ImageFillMode.TILE
      })
      .stroke('1 #000')
      .bounds(new anychart.math.Rect(stage.width()/2 + 2, 18, stage.width() / 2 - 4, stage.height() - 22))
      .container(stage)
      .draw();
</script>
![alt](../images/fill_image.png)