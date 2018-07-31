{:index 4}
# Legend Items

## Overview

## Text Font

You can configure the font of legend items by using the following methods:

* {api:anychart.core.ui.Legend#fontColor}fontColor(){api} to set the font color
* {api:anychart.core.ui.Legend#fontFamily}fontFamily(){api} to set the font family - Verdana, Helvetica, Arial, etc.
* {api:anychart.core.ui.Legend#fontSize}fontSize(){api} to set the font size
* {api:anychart.core.ui.Legend#fontStyle}fontStyle(){api} to set the font style - normal, italic, oblique
* {api:anychart.core.ui.Legend#fontVariant}fontVariant(){api} to set the font variant - normal or small caps
* {api:anychart.core.ui.Legend#fontWeight}fontWeight(){api} to set the font weight
* other methods from {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api}


```
// configure the font of legend items
legend.fontColor("#96a6a6");
legend.fontSize(16);
legend.fontWeight(600);
```

{sample}CS\_Legend\_Items\_01{sample}

## Text Format

* {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api}

### Tokens

МНОГОСЕРИЙНЫЕ ЧАРТЫ

* всегда доступно: `"{%seriesName}"`
* + токены, связанные с данным типом серии
* в этом примере: `"{%seriesYSum}"`


```
// enable html for legend items
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(
    "<span style='color:#dd2c00;font-weight:600'>{%seriesName}:</span> ${%seriesYSum}"
);
```

{sample}CS\_Legend\_Items\_02{sample}

ОДНОСЕРИЙНЫЕ ЧАРТЫ

* в односерийной легенде каждый элемент = точка -> доступно ее значение
* в этом примере: `"{%x}"`, `"{%value}"`


```
(+)
```

{sample}CS\_Legend\_Items\_03{sample}

### Formatting Functions

МНОГОСЕРИЙНЫЕ ЧАРТЫ

* в односерийной легенде каждый элемент = точка -> доступно ее значение
* `series` + методы серии


```
отредактировать пример
```

{sample}CS\_Legend\_Items\_04{sample}

ОДНОСЕРИЙНЫЕ ЧАРТЫ

* в этом примере: `"x"`, `"value"`


```
(+)
```

{sample}CS\_Legend\_Items\_05{sample}

## Icon Size

* {api:anychart.core.ui.Legend#iconSize}iconSize(){api}
* пиксели / проценты ?


```

```

{sample}CS\_Legend\_Items\_06{sample}

## Spacing

* {api:anychart.core.ui.Legend#itemsSpacing}itemsSpacing(){api}
* {api:anychart.core.ui.Legend#iconTextSpacing}iconTextSpacing(){api}
* пиксели / ?


```
оба метода
```

{sample}CS\_Legend\_Items\_07{sample}

## Order

* {api:anychart.core.ui.Legend#inverted}inverted(){api}


```
кнопка
```

{sample}CS\_Legend\_Items\_08{sample}

## Individual Items

* **legendItem()**
* {api:anychart.core.cartesian.series.Line#legendItem}legendItem(){api}
* {api:}.{api}
* {api:}.{api}
* {api:}.{api}
* {api:}...{api}


```
отключение итема - метод enabled()
(?) скаттер, маркеры + линия, линию не показывать
```
{sample}CS\_Legend\_Items\_09{sample}

```
размер, виз настройки
```
{sample}CS\_Legend\_Items\_10{sample}

```
тип иконки, тип маркера
```
{sample}CS\_Legend\_Items\_11{sample}

```
текст (?), темы
```

{sample}CS\_Legend\_Items\_12{sample}

* {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api}


```
Total (?)
```

{sample}CS\_Legend\_Items\_13{sample}

* {api:anychart.core.ui.Legend#items}items(){api}


```
добавление итемов списком
```

{sample}CS\_Legend\_Items\_14{sample}