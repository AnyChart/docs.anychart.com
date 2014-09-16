{:index 6}
# Date/Time Axes

              
* [Overview](#overview)
* [Creating DateTime Axes](#create)
  * [Sample Range Bar With Y DateTime Axis](#range)
* [Major and Minor Interval Ticks](#ticks)
  * [Sample Scatter Line Chart with Y DateTime Axis](#sample)

<a name="overview"/>
## Overview

You can use Date/Time values as input data for chart, moreover - you can localize input data format so you don't have to reformat it before setting it.<!-- Read more about it in [link in need datetime-input.html ]Date Time Input Tutorial[/link].-->
<br/><br/>
To utilize these input features you should use Date Time Axes. In this tutorial we will show how to do this.
<a name="create"/>
## Creating DateTime Axes

You can make both X and/or Y axis a DateTime axis, to do that, set scale type to DateTime:

```
    chart.yScale(anychart.scales.dateTime());
```
<!--Before starting to create chart based on datetime values, you should study [Link in need datetime-input]DateTime Input Tutorial[/link], in which this input data formatting is explained.-->

<a name="range"/>
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
Date is collected, and now we know what datetime input format should be used: yyyy/mm/dd (we've done that according too <!--[Link]-->DateTime Input<!--[/link]--> and <!--[Link]-->DateTime Formatting<!--[/Link]-->), so let's set it using range bars:

```
chart.yScale(anychart.scales.dateTime().minimum(new Date('1999-01-01')).maximum(new Date('2005-01-01')));
```

Now we need to create data XML for range bars, here it is:

```    
    chart.rangeBar([
        {x: 'Development', low: new Date('2000-01-01'), high: new Date('2002-02-15'), hoverFill: '#444444', stroke: 'gray 0.8'},
        {x: 'Internal Testing', low: new Date('2001-06-01'), high: new Date('2003-07-01'), fill: 'red', hoverFill: '#444444', stroke: 'gray 0.8'},
        {x: 'Field Tests', low: new Date('2002-02-25'), high: new Date('2003-07-01'), fill: 'green', hoverFill: '#444444', stroke: 'gray 0.8'},
        {x: 'Licensing', low: new Date('2003-07-01'), high: new Date('2004-07-01'), fill: 'yellow', hoverFill: '#444444', stroke: 'gray 0.8'}
    ]);
```
Now we will create DateTime Y Axis and set it to show process in years (explained later):

```
chart.yScale(anychart.scales.dateTime().minimum(new Date('1999-01-01')).maximum(new Date('2005-01-01')));
```
Thats it - all we have to add are axes and chart titles and put all we've done together:

```
    chart.title().text('X113 Destroyer Development Plan');
    chart.yScale(anychart.scales.dateTime().minimum(new Date('1999-01-01')).maximum(new Date('2005-01-01')));
    chart.rangeBar([
        {x: 'Development', low: new Date('2000-01-01'), high: new Date('2002-02-15'), hoverFill: '#444444', stroke: 'gray 0.8'},
        {x: 'Internal Testing', low: new Date('2001-06-01'), high: new Date('2003-07-01'), fill: 'red', hoverFill: '#444444', stroke: 'gray 0.8'},
        {x: 'Field Tests', low: new Date('2002-02-25'), high: new Date('2003-07-01'), fill: 'green', hoverFill: '#444444', stroke: 'gray 0.8'},
        {x: 'Licensing', low: new Date('2003-07-01'), high: new Date('2004-07-01'), fill: 'yellow', hoverFill: '#444444', stroke: 'gray 0.8'}
    ]);
    chart.yAxis().orientation('top').title().text('Time Plan');
    chart.xAxis().title().text('Tasks');
```
That's it - chart with DateTime Y Axis is ready:

{sample}AGST\_DateTime\_Axes\_01{sample}

<a name="ticks"/>
## Major and Minor Interval Ticks

For datetime axes you can set Major and Minor Ticks using **.ticks().interval()** and **.minorTicks().interval()** attributes of scale:
```
    chart.yScale().ticks().interval(1);
    chart.yScale().minorTicks().interval(0, 2);
```
Ticks can define years, months, days, hours, minutes and seconds. The order of defining ticks is: **years interval**, **months interval**, **days interval**, **hours interval**, **minutes interval**, **seconds interval**. The order is quite strict. You may not define following intervals of the one, you need, but you have to define previous ones as 0. If you want to define more, than one instance of intervals, just adjust the one, you need.

<a name="sample"/>
## Sample Scatter Line Chart with Y DateTime Axis

In this sample we will create a Line Chart with DateTime X Axis and set major and minor interval ticks and intervals. Y Axis will be Logarithmic - to show small values in the first years and big values in last year.

{sample}AGST\_DateTime\_Axes\_02{sample}

Live Sample:  Date Time Axes Scatter Line
