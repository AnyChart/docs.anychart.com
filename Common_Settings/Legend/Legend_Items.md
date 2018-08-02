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
legend.fontSize(16);
legend.fontWeight(600);
legend.fontColor("#96a6a6");
```

{sample}CS\_Legend\_Items\_01{sample}

## Text Format

* {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api}
* сослаться на [Individual Legend Items: Text Format](Individual_Legend_Items#text_format) ({api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api}) (?)

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

## Icons

* большая часть настроек задается только индивидуально, см. [Icons](Individual_Legend_Items#icons), [Markers](Individual_Legend_Items#markers) (?)

### Size

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