# Statistics

## Overview 

AnyChart's engine calculates a great number of values, which can be obtained with the help of the {api:anychart.core.Chart#getStat}getStat(){api} method. Here is the list of available values: {api:anychart.enums.Statistics}anychart.enums.Statistics{api}. Which value you can get depends on the chart type and on the object you call the method on (see this article).

## Basics

To obtain statistical data from a chart, the {api:anychart.core.Chart#getStat}getStat(){api} method with a field name as a parameter is called. Available field names can be found in {api:anychart.enums.Statistics}anychart.enums.Statistics{api}:

```
var pointsCount = chart.getStat("dataPlotPointCount");
var bubbleMaxSize = chart.getStat("dataPlotBubbleMaxSize");
```

In the following sample, the {api:anychart.core.Chart#getStat}getStat(){api} method is used to obtain the maximum bubble size and number of points in the chart. The information is displayed in the title of the chart:

{sample}CS\_Statistics\_01{sample}

You can call {api:anychart.core.Chart#getStat}getStat(){api} on instances of three types of classes: charts, series, and points. Further we will consider the basics of how the method works with each type.

## Chart

You should call the {api:anychart.core.Chart#getStat}getStat(){api} method of a chart object if you need to get overall statistics on all the series of a multi-series chart or if the chart type does not suggest that there are more than one series.

The sample you see below demonstrates how the method allows to obtain the average Y-value of all the points in all the series of a chart (see the title):

```
totalAverage = chart.getStat("dataPlotYAverage");
```

{sample}CS\_Statistics\_02{sample}

In the next sample, the sum of all values in a pie chart is displayed (charts of this type always have only one series):

```
numberOfTrees = chart.getStat("sum");
```

{sample}CS\_Statistics\_03{sample}

## Series

Sometimes it is necessary to call the {api:anychart.charts.Cartesian#getStat}getStat(){api} method of an instance of the series class. Firstly, you may be interested only in one of all the data sets, secondly, the kind of statistics you can obtain depends on the type of a series.

The following sample is based on one of the samples from the previous section. Here, the average is obtained for each series separately, and two numbers are displayed in the title: 

{sample}CS\_Statistics\_04{sample}

Please note that there are two ways to get a link to a series object instance: a link can be returned either by series constructor methods or by the {api:anychart.charts.Cartesian#getSeries}getSeries(){api} and {api:anychart.charts.Cartesian#getSeriesAt}getSeriesAt(){api} methods of a chart:

```
maleAverage = maleMartians.getStat("seriesYAverage");
femaleAverage = chart.getSeriesAt(1).getStat("seriesYAverage");
```

## Point

As a rule, to call {api:anychart.core.Point#getStat}getStat(){api} on a point, one needs to use the so-called [event listeners](../Common_Settings/Event_Listeners) and [text formatters](../Common_Settings/Text_Formatters). However, in some cases you can use the {api:anychart.core.cartesian.series.Line#getPoint}getPoint(){api} method to get a link to a Point object, and invoke the {api:anychart.core.Point#getStat}getStat(){api} method on it. We will demonstrate the both ways.

In the sample below, the title of the chart shows values of the latest points in both series. In addition, when a user selects a pair of points, a subtitle with information on these points appears:

{sample}CS\_Statistics\_05{sample}

The {api:anychart.core.cartesian.series.Line#getPoint}getPoint(){api} method is used to get links to the latest points in two series, and then the {api:anychart.core.Point#getStat}getStat(){api} method is called on them to get their values and create the title:

```
// get links to the latest points in both series
latestPointMaleMartians = maleMartians.getPoint(numberOfPoints - 1);
latestPointFemaleMartians = femaleMartians.getPoint(numberOfPoints - 1);

// get the values of the latest points from both series and use them in the title
mainTitleText = "The Height of Martians Today: Males — " +
latestPointMaleMartians.getStat("value") + ", Females — " +
latestPointFemaleMartians.getStat("value")
```

An event listener is used to listen to the pointsSelect event and get links to the selected points. The {api:anychart.core.Point#getStat}getStat(){api} method is called on them to get their category name and values and to create the subtitle.

```
// listen to the pointsSelect event
chart.listen("pointsSelect", function(e){
  // get categoryName of the selected points
  selectedPointYear = e.point.getStat("categoryName");
  // begin creating a subtitle with the information on the selected points
  subtitleText = "<span style='font-size:12'>" + selectedPointYear + ": ";
  // loop through the array of the selected points
  for (var i = 0; i < e.points.length; i++) {
    // get the name of the series a selected point belongs to and the value of the point
    subtitleText += e.points[i].getSeries().name() + " — " + e.points[i].getStat("value") + ", ";
  }
  // remove the extra comma at the end of the subtitle and close the <span> tag
  subtitleText = subtitleText.slice(0, subtitleText.length - 2) + "</span>";
  // update the title with the subtitle
  chart.title(mainTitleText + "<br>" + subtitleText);
});
```