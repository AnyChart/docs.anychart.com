{:index 6}
# Date/Time Axes
          
## Overview

You can use Date/Time values as input data for chart using Date Time Axes. In this tutorial we will show how to do this.

## Declare

You can make both X- and/or Y-axis a DateTime axis, to do that, set scale type to {api:anychart.scales.DateTime}DateTime{api}:

```
var dateScale = anychart.scales.dateTime();
```

### Sample Range Bar With DateTime Y-Axis

Lets create a simple Range Bar chart with DateTime Y-axis. For the first we have to choose data to be shown:

<table class="dtTABLE" width="700">
<tbody>
<tr>
<th width="145">Task Name</th>
<th width="237">Task Start</th>
<th width="302">Task End</th>
</tr>
<tr>
<td>Development</td>
<td>01/01/2000</td>
<td>02/15/2002</td>
</tr>
<tr>
<td>Internal Testing</td>
<td>06/01/2001</td>
<td>07/01/2003</td>
</tr>
<tr>
<td>Field Test </td>
<td>02/25/2002</td>
<td>07/01/2003</td>
</tr>
<tr>
<td>Licensing</td>
<td>07/01/2003</td>
<td>07/01/2004</td>
</tr>
</tbody>
</table>

Data is collected, now we adjust settings for ticks on the scale:

```
var dateTicks = dateScale.ticks();
dateTicks.interval(1);
var dateMinorTicks = dateScale.minorTicks();
dateMinorTicks.interval(0, 2);
chart.yScale(dateScale);
```

Now we need to create data for range bars. Here it is:

```
chart.rangeBar([
  {x: "Development", low: Date.UTC(2000, 01, 01), high: Date.UTC(2002, 02, 15)},
  {x: "Internal Testing", low: Date.UTC(2001, 06, 01), high: Date.UTC(2003, 07, 01), fill: "red"},
  {x: "Field Tests", low: Date.UTC(2002, 02, 25), high: Date.UTC(2003, 07, 01), fill: "green"},
  {x: "Licensing", low: Date.UTC(2003, 07, 01), high: Date.UTC(2004, 07, 01), fill: "yellow"}
]);
```

Now we will set DateTime scale as the Y-scale of the chart:

```
chart.yScale(dateScale);
```

That's it - all we have to add are axes and chart titles and put all we've done together:

```
// set chart title
chart.title("X113 Destroyer Development Plan");

// create DateTime scale
var dateScale = anychart.scales.dateTime();
// set one year ticks interval
var dateTicks = dateScale.ticks();
dateTicks.interval(1);
// set two months minor ticks interval
var dateMinorTicks = dateScale.minorTicks();
dateMinorTicks.interval(0, 2);

// set DateTime Scale as y scale of the chart
chart.yScale(dateScale);
//set data
chart.rangeBar([
    {x: 'Development', low: Date.UTC(2000, 01, 01), high: Date.UTC(2002, 02, 15)},
    {x: 'Internal Testing', low: Date.UTC(2001, 06, 01), high: Date.UTC(2003, 07, 01)},
    {x: 'Field Tests', low: Date.UTC(2002, 02, 25), high: Date.UTC(2003, 07, 01)},
    {x: 'Licensing', low: Date.UTC(2003, 07, 01), high: Date.UTC(2004, 07, 01)}
]);

// y axis getter
var yAxis = chart.yAxis();
// place y axis at the top 
yAxis.orientation("top");
// set y axis title
yAxis.title("Time Plan");
// x axis title
var xAxis = chart.xAxis();
// set x axis title
xAxis.title("Tasks");
```

That's it - chart with DateTime Y-axis is ready:

{sample}AGST\_DateTime\_Axes\_01{sample}

## Major and Minor Interval Ticks

For datetime axes you can set Major and Minor Ticks using {api:anychart.scales.DateTime#ticks}ticks(){api} and {api:anychart.scales.DateTime#minorTicks}minorTicks(){api} methods of the scale:

```
var ticks = chart.yScale().ticks();
ticks.interval(1);
var minorTicks = chart.yScale().minorTicks();
minorTicks.interval(0, 2);
```

Ticks can define years, months, days, hours, minutes and seconds. The order of defining ticks is: **years interval**, **months interval**, **days interval**, **hours interval**, **minutes interval**, **seconds interval**. The order is quite strict. You may not define following intervals of the one, you need, but you have to define previous ones as 0. If you want to define more, than one instance of intervals, just adjust the one, you need.

## Sample Line Chart with DateTime X-Axis

In this sample we will create a Line Chart with DateTime X-axis and set major and minor interval ticks and intervals. The Y-axis will be Logarithmic - to show small values in the first years and big values in last year.

{sample}AGST\_DateTime\_Axes\_02{sample}
