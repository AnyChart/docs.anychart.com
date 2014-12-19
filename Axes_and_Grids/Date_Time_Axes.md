{:index 6}
# Date/Time Axes

              
* [Overview](#overview)
* [Declare](#declare)
  * [Sample Range Bar With Y DateTime Axis](#sample_range_bar_with_y_datetime_axis)
* [Major and Minor Interval Ticks](#major_and_minor_interval_ticks)
  * [Sample Line Chart with Y DateTime Axis](#sample_line_chart_with_y_datetime_axis)

## Overview

You can use Date/Time values as input data for chart using Date Time Axes. In this tutorial we will show how to do this.

## Declare

You can make both X and/or Y axis a DateTime axis, to do that, set scale type to {api:anychart.scales.DateTime}DateTime{api}:

```
  chart.yScale(anychart.scales.dateTime());
```

### Sample Range Bar With Y DateTime Axis

Lets create a simple Range Bar chart with DateTime Y Axis. For the first we have to choose data to be shown:

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
    chart.yScale(anychart.scales.dateTime());
    chart.yScale().ticks().interval(1);
    chart.yScale().minorTicks().interval(0, 2);
```

Now we need to create data for range bars. Here it is:

```
  chart.rangeBar([
    {x: 'Development', low: Date.UTC(2000, 01, 01), high: Date.UTC(2002, 02, 15)},
    {x: 'Internal Testing', low: Date.UTC(2001, 06, 01), high: Date.UTC(2003, 07, 01)},
    {x: 'Field Tests', low: Date.UTC(2002, 02, 25), high: Date.UTC(2003, 07, 01)},
    {x: 'Licensing', low: Date.UTC(2003, 07, 01), high: Date.UTC(2004, 07, 01)}
  ]);
```

Now we will create DateTime Y Axis and set it to show process in years (explained later):

```
chart.yScale(anychart.scales.dateTime());
```

That's it - all we have to add are axes and chart titles and put all we've done together:

```
    chart.title().text('X113 Destroyer Development Plan');          // set chart title
    chart.yScale(anychart.scales.dateTime());                       // set yScale type
    chart.yScale().ticks().interval(1);                             // set interval for major ticks equal to one year
    chart.yScale().minorTicks().interval(0, 2);                     // set interval for minor ticks equal to two months
    
    //set data
    chart.rangeBar([
        {x: 'Development', low: Date.UTC(2000, 01, 01), high: Date.UTC(2002, 02, 15)},
        {x: 'Internal Testing', low: Date.UTC(2001, 06, 01), high: Date.UTC(2003, 07, 01)},
        {x: 'Field Tests', low: Date.UTC(2002, 02, 25), high: Date.UTC(2003, 07, 01)},
        {x: 'Licensing', low: Date.UTC(2003, 07, 01), high: Date.UTC(2004, 07, 01)}
    ]);
    
    chart.yAxis()
        .orientation('top')                                         // set y axis position
        .title()
            .text('Time Plan');                                     // set y axis title
    chart.xAxis().title().text('Tasks');                            // set x axis title
```
That's it - chart with DateTime Y Axis is ready:

{sample}AGST\_DateTime\_Axes\_01{sample}

## Major and Minor Interval Ticks

For datetime axes you can set Major and Minor Ticks using {api:anychart.scales.DateTime#ticks}**.ticks()**{api} and {api:anychart.scales.DateTime#minorTicks}**.minorTicks()**{api} methods of scale:

```
    chart.yScale().ticks().interval(1);
    chart.yScale().minorTicks().interval(0, 2);
```

Ticks can define years, months, days, hours, minutes and seconds. The order of defining ticks is: **years interval**, 
**months interval**, **days interval**, **hours interval**, **minutes interval**, **seconds interval**. The order is 
quite strict. You may not define following intervals of the one, you need, but you have to define previous ones as 0. 
If you want to define more, than one instance of intervals, just adjust the one, you need.

## Sample Line Chart with Y DateTime Axis

In this sample we will create a Line Chart with DateTime X Axis and set major and minor interval ticks and intervals. Y 
Axis will be Logarithmic - to show small values in the first years and big values in last year.

{sample}AGST\_DateTime\_Axes\_02{sample}
