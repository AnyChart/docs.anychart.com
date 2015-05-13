#Funnel Chart

* [Overview](#overview)
* [Chart](#chart)
* [Padding](#padding)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)

## Overview

Funnel charts are so-called Accumulation charts and they show percentage ratio. Funnel charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage. This type of chart can also be useful in identifying potential problem areas in an organization’s sales processes. A funnel chart is similar to a stacked percent bar chart.

## Chart

To create Funnel chart with AnyChart you have to set **.funnel()** method.

```
var chart = anychart.funnel();
```

Let's take a look at the sample data set that shows the number of different genres sold in local bookstore «Nerds Inc.» in 2005.


<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Genre</b></th>
<th width="88"><b>Quantity</b></th>
</tr>
<tr>
<td>Fantasy</td>
<td>637166</td>
</tr>
<tr>
<td>Science Fiction</td>
<td>721630</td>
</tr>
<tr>
<td>Detective</td>
<td>148662</td>
</tr>
<tr>
<td>Classics</td>
<td>78662</td>
</tr>
<tr>
<td>Textbooks</td>
<td>90000</td>
</tr>
</tbody></table>

Now we need to convert this data table into the format that can be used by AnyChart. Here is a snippet with the data in acceptable format.

```
  var chart = anychart.funnel([
    {name: 'Fantasy', value: 637166},
    {name: 'Science Fiction', value: 721630},
    {name: 'Detective', value: 148662},
    {name: 'Classics', value: 78662},
    {name: 'Textbooks', value: 90000}
  ]);
```

You can see the funnel chart with this configuration below.

{sample}BCT\_FunnelChart\_01{sample}

## Padding

As you can see, each part of a funnel is separated from another with some space. The space between each part of funnel chart is controlled by a **.pointPadding()** parameter. Next sample of funnel chart has no spacing.

```
  chart.pointSpacing(0);  // disable spacing between parts of the chart
```

Here is how the funnel chart without spacing looks like.

{sample}BCT\_FunnelChart\_02{sample}

## Visualization

In this section we will describe main parts of funnel chart visualization and ways to adjust it. Visual appearances of funnels are defined using certain methods. For funnels chart the main thing is the **.fill()** method.

### Basic Sample

Now, let's look how to change the look of an Area. Here is a basic sample:

```
  // define chart type and set data
  var chart = anychart.funnel(data);
  
  chart
    .fill('gold')
    .hoverFill('darkred')
    .stroke('darkred')
    .hoverStroke('gold')
    .hatchFill('diagonalbrick', 'darkred')
    .hoverHatchFill('diagonalbrick', 'gold');
```

Using such settings we've created a funnel colored in Gold, dark red border and set DiagonalBrick hatch fill. Also, we've defined that when the funnel is hovered it's hatch will be highlighted with gold and the chart will be filled with dark red. Now let's apply this style to the chart:

{sample}BCT\_FunnelChart\_03{sample}

## Labels and Tooltips

In this section we will explain how to add and configure funnel labels and tooltips.
Method **.labels()** is responsible for labels configuration and method **.tooltip()** controls tooltips of the funnel. With the following example let's make data labels appear to the right from the funnel using {api:anychart.enums.FunnelLabelsPosition}**position()**{api} method, format them to show name and value corresponding to the part of the funnel and force tooltips to show detailed description.

{sample}BCT\_FunnelChart\_04{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.
  
  
In the sample below we take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.
  
  
To make marker visually appealing we set its size to 12 pixels in normal state, and 15px while hovered.

```
  var chart = funnel([
    {name: 'Fantasy', value: 637166},
    {
      name: 'Science Fiction', 
      value: 721630,
      marker:{              // marker settings
        enabled: true,      // enable marker
        type:'star5',       // marker type
        fill:'gold',        // marker inner color
        size: 12,           // marker size
        position: 'center', // marker position
        anchor: 'center'},  // marker anchor
      hoverMarker: {
        size: 15            // marker size if mouse is over
      }
    },
    {name: 'Detective', value: 148662},
    {name: 'Classics', value: 78662},
    {name: 'Textbooks', value: 90000}
  ]);
```

And here is a result - it's easy to notice that Science Fiction is the most popular genre and we are showing this on the chart:

{sample}BCT\_FunnelChart\_05{sample}

## Colors

Let's demonstrate how to apply different colors to different parts of funnel. To apply the color to the exact point we need to set the fill parameter. In the sample below each point of the funnel chart has custom color.

{sample}BCT\_FunnelChart\_06{sample}

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see Hatch tutorial tutorial. To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have funnel chart with 10 points in it. For every point we've applied different hatch fills parameter. That’s how we did it in our code:

```
  var chart = anychart.pieChart([
    // point value   hatch fill type
    {value: 232,    hatchFill: 'diagonalcross'},
    {value: 224,    hatchFill: 'zigzag'},
    {value: 252,    hatchFill: 'horizontal'},
    {value: 219,    hatchFill: 'vertical'},
    {value: 169,    hatchFill: 'dashedbackwarddiagonal'},
    {value: 217,    hatchFill: 'grid'},
    {value: 175,    hatchFill: 'dashedforwarddiagonal'},
    {value: 199,    hatchFill: 'dashedhorizontal'},
    {value: 297,    hatchFill: 'plaid'},
    {value: 317,    hatchFill: 'weave'}
  ]);
```

{sample}BCT\_FunnelChart\_07{sample}