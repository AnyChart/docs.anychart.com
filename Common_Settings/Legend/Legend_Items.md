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
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(
    "<span style='color:#dd2c00;font-weight:600'>{%seriesName}:</span> ${%seriesYSum}"
);
```

{sample}CS\_Legend\_Items\_02{sample}

ОДНОСЕРИЙНЫЕ ЧАРТЫ

* в односерийной легенде каждый элемент = точка -> доступно ее значение
* в этом примере: `"{%x}"`, `"{%value}"`, также доступно `"{%percentValue}"`


```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(
    "<span style='color:#dd2c00;font-weight:600'>{%x}:</span> ${%value}"
);
```

{sample}CS\_Legend\_Items\_03{sample}

### Formatting Functions

МНОГОСЕРИЙНЫЕ ЧАРТЫ

* в односерийной легенде каждый элемент = точка -> доступно ее значение
* `series` + методы серии


```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(function() {
  return "<span style='color:" + this.series.color() + ";font-weight:600'>" +
         this.series.name() + "</span>: $" + this.series.getStat("sum");
});
```

{sample}CS\_Legend\_Items\_04{sample}

ОДНОСЕРИЙНЫЕ ЧАРТЫ

* в этом примере: `x`, `value`, `index` + обращение к точке по индексу


```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(function() {
  var point = chart.getPoint(this.index);
  var percent = point.getStat("percentValue").toFixed(1);
  if (percent >= 50) {
    return "<span style='color:#dd2c00;font-weight:600'>" +
           this.x + ": " + percent + "%</span>";
  } else {
    return this.x + "</span>: " + percent + "%";
  }
});
```

{sample}CS\_Legend\_Items\_05{sample}

## Icon Size

* {api:anychart.core.ui.Legend#iconSize}iconSize(){api}
* пиксели / проценты ?


```
// set the size of legend icons
chart.legend().iconSize (20);
```

{sample}CS\_Legend\_Items\_06{sample}

## Spacing

* {api:anychart.core.ui.Legend#itemsSpacing}itemsSpacing(){api}
* {api:anychart.core.ui.Legend#iconTextSpacing}iconTextSpacing(){api}
* пиксели / ?


```
// set the spacing between legend items
chart.legend().itemsSpacing(50);

// set the spacing between legend icons and text
chart.legend().iconTextSpacing(15);
```

{sample}CS\_Legend\_Items\_07{sample}

## Order

* {api:anychart.core.ui.Legend#inverted}inverted(){api}


```
// set the order of legend items
chart.legend().inverted(true);
```

{sample}CS\_Legend\_Items\_08{sample}

## Individual Items

* **legendItem()**
* {api:anychart.core.cartesian.series.Line#legendItem}legendItem(){api}
* {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api}
* упомянуть {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} и {api:anychart.core.ui.Legend#items}items(){api}?

### Disabling

* {api:anychart.core.utils.LegendItemSettings#enabled}enabled(){api}


```
// disable the last item
series3.legendItem().enabled(enabled);
```

{sample}CS\_Legend\_Items\_09{sample}

### Icons

* тип, визуальные настройки, размер
* {api:anychart.core.utils.LegendItemSettings#iconType}iconType(){api}
* {api:anychart.core.utils.LegendItemSettings#iconFill}iconFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconHatchFill}iconHatchFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconStroke}iconStroke(){api}
* {api:anychart.core.utils.LegendItemSettings#iconSize}iconSize(){api}
* {api:anychart.core.utils.LegendItemSettings#iconEnabled}iconEnabled(){api}
* {api:anychart.enums.LegendItemIconType}anychart.enums.LegendItemIconType{api}


```

```

{sample}CS\_Legend\_Items\_10{sample}

### Markers

* включение, тип, визуальные настройки
* включить маркеры на серии + тип иконки сделать `"line"` или `"spline"`
* маркер автоматически берется у серии, но можно настроить вручную
* {api:anychart.core.utils.LegendItemSettings#iconMarkerType}iconMarkerType(){api}
* {api:anychart.core.utils.LegendItemSettings#iconMarkerFill}iconMarkerFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconMarkerStroke}iconMarkerStroke(){api}
* {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}


```

```

{sample}CS\_Legend\_Items\_11{sample}

### Text Font

* {api:anychart.core.utils.LegendItemSettings#}(){api}
* {api:anychart.core.utils.LegendItemSettings#}(){api}
* ...


```

```

{sample}CS\_Legend\_Items\_12{sample}

### Text Format

* {api:anychart.core.utils.LegendItemSettings#format}format(){api}
* {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api}


```
format(): ?
```

{sample}CS\_Legend\_Items\_13{sample}

```
itemsFormatter: Total (?)
```

{sample}CS\_Legend\_Items\_14{sample}

### Themes

```

```

{sample}CS\_Legend\_Items\_15{sample}

### ???

* {api:anychart.core.ui.Legend#items}items(){api}


```
добавление итемов списком
```

{sample}CS\_Legend\_Items\_16{sample}