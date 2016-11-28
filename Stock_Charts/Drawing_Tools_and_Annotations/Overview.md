{:index 1}
#Drawing Tools and Annotations

* [Overview](#overview)
* [Sample Application](#sample_application)
* [General Settings](#general_settings)
* [Annotation Types](#annotation_types)
 * [Fibonacci Tools](#fibonacci_tools)
 * [Lines, Trend Lines, Rays](#lines)
 * [Geometric Shapes](#geometric_shapes)
 * [Labels, Buy/Sell Signals, Markers](#signals)
 * [Other Tools](#other_tools)


(???) Посмотри на индексы в статьях. Все нормально?

## Overview

AnyChart Stock offers a large set of features that allow you to build your online financial portal. One of the most exciting features is the ability to draw/display on the chart custom objects (drawing tools) or, as they are called in our documentation and settings, annotations.

(???) Мой вариант: [AnyStock](../Overview) offers a large set of features for creating online financial charts, and one of the most exciting features are drawing tools: they provide you with the ability to draw/display custom objects on a chart. In our documentation they are usually called annotations.

(???) Ссылка на продукт точно нужна? Раньше она была в разделе "типы аннотаций", но я ее перенесла сюда - здесь же первое упоминание.

In this section you can find all important information about working with annotations in general and with certain types of them.

## Sample Application

To make the integration process easier and give you the general idea how [AnyStock Drawing Tools](Overview) can be implemented, we created a sample web application with open source.

(???) Зачем в овервью ссылка на овервью и об интеграции чего идет речь?

Мой вариант: To demonstrate how AnyStock drawing tools can be implemented, we created a sample web application with open source.

To see the application live, visit [http://www.anychart.com/products/anystock/drawing_tools/](http://www.anychart.com/products/anystock/drawing_tools/).

You can also download its source or simply fork it here: [GitHub: AnyStock - Drawing Tools and Annotations Demo](https://github.com/AnyChart/anystock-drawing-tools-and-annotations-demo).

## General Settings

A number of settings can be applied to any annotation regardless its type. For example, all annotation types share some visual settings as well as methods used for binding to axes, forbidding editing, and so on. General settings also include managing the drawing process and serializing/deserializing drawings. See the following articles:

* [General Settings](General_Settings)
* [Drawing](Drawing)
* [Serializing and Deserializing](Serializing_Deserializing)

## Annotation Types

Here is a full list of annotations available in AnyStock (with links to the articles explaining how to configure them):

### Fibonacci Tools

* [Fibonacci Arc](Fibonacci_Arc)
* [Fibonacci Fan](Fibonacci_Fan)
* [Fibonacci Retracement](Fibonacci_Retracement)
* [Fibonacci Time Zones](Fibonacci_Time_Zones)

<a name="lines"></a>
### Lines, Trend Lines, Rays

(???) а что из этого относится к Trend Lines? может просто назвать раздел Lines? Ну или Trend Lines, если это просто другой способ обозначить то же самое.

* [Line Segment](Line_Segment)
* [Infinite Line](Infinite_Line)
* [Horizontal Line](Horizontal_Line)
* [Vertical Line](Vertical_Line)
* [Ray](Ray)

### Geometric Shapes

* [Ellipse](Ellipse)
* [Rectangle](Rectangle)
* [Triangle](Triangle)

<a name="signals"></a>
### Labels, Buy/Sell Signals

* [Buy/Sell Signals, Markers](Marker)
* [Label](Label)

(???) не назвать ли ссылку просто "Markers" (а не "Buy/Sell Signals, Markers"), а раздел - Labels and Markers?

### Other Tools

* [Andrew's Pitchfork](Andrews_Pitchfork)
* [Trend Channel](Trend_Channel)
