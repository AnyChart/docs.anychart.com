# Настройки stroke элементов.
* [1. Толщина и пунктир](#thickness-dashed)
* [2. Заливка цветом: сплошной цвет, линейный/радиальный градиент](#color)
* [3. Обработка углов](#line-join-cap)

## [1. Толщина и пунктир](id:thickness-dashed)
Толщина обводки просто задается числом в пикселях, аналогично позиции в ключе
 градиента ``

## [2. Заливка цветом: сплошной цвет, линейный/радиальный градиент](id:color)
Цвет у stroke задается аналогично fill. Только не поддерживается заливка
 картинкой.

Примеры с заливкой stroke:

<script>
  new anychart.elements.Background()
      .fill('none')
      .stroke('5 orange .7')
      .bounds(new anychart.math.Rect(22, 18, stage.width() - 44, stage.height() /3 - 22))
      .container(stage)
      .draw();
  new anychart.elements.Background()
      .fill('none')
      .stroke(['red', 'blue'], 15)
      .bounds(new anychart.math.Rect(22, stage.height() /3 + 18 , stage.width() - 44, stage.height() /3 - 22))
      .container(stage)
      .draw();
  new anychart.elements.Background()
      .fill('none')
      .stroke({
        keys: ['.1 red', 'white'],
        cx: .5,
        cy: .5,
        fx: .3,
        fy: .4
      }, 4)
      .bounds(new anychart.math.Rect(22 , 3* stage.height() /3 - 35, stage.width() - 44 , 5))
      .container(stage)
      .draw();
</script>
![alt](../images/stroke_color.png)

