# Drilldown Chart

## Overview

Creating a chart with drilldown in AnyChart is very easy and can be implemented using so-called [event listeners](../Common_Settings/Event_Listeners) and amazingly {api:anychart}flexible API{api} and [data model](../Working_with_Data/Overview). The very minimum you need is to create a chart, feed it proper data and then tell chart what to do when the point is clicked.

## Step by Step Guide

Here is a sample we will be creating in this step by step tutorial, if you have some experience with AnyChart you can simply launch it and dig into the comments in the code:

{sample}CS\_Drilldown\_Chart\_03{sample}

For those who never worked with AnyChart and those who want to dig deeper, let's go through the creation of drill-down chart step by step.

### Prepare Data

The first thing we need to have for a chart with drill-down is the data. There [a lot of ways to load, organize and use data in AnyChart](../Working_with_Data/Overview) we will use one of the simpliest one for this basic sample.

The data for the drilldown chart can be organized in a tree-like structure, each row has `x` and `value`, and a field where the drilldown data set set is stored which can have any name, in our sample it is `drillDown`: 

```
var data = [
    {"x": 2015, "value": 2195081, "drillDown": [
        {"x": "Q1", "value": 792026},
        {"x": "Q2", "value": 610501},
        {"x": "Q3", "value": 441843},
        {"x": "Q4", "value": 350711}
    ]},
    {"x": 2016, "value": 3257447, "drillDown": [
        {"x": "Q1", "value": 1378786},
        {"x": "Q2", "value": 571063},
        {"x": "Q3", "value": 510493},
        {"x": "Q4", "value": 797105}
    ]},
    {"x": 2017, "value": 1963407, "drillDown": [
        {"x": "Q1", "value": 499299},
        {"x": "Q2", "value": 649963},
        {"x": "Q3", "value": 571176},
        {"x": "Q4", "value": 242969}
    ]}
];
```

Note: `x` and `value` are reserved names for AnyChart and it is the easiest way to go but you can use any names or even simple arrays using our data set mapping option, see more at [Data Set Article](../Working_with_Data/Using_Data_Sets).

### Create a Chart

Now we have our data, now we simply feed this data set to a constructor that creates a chart and displays a chart on the page in some block-based element. You may be familiar with the basics, if not - please see [AnyChart Quick Start](../Quick_Start/Quick_Start).

Here is how you create a chart, set data and display it:

```
// create a chart
var chart = anychart.column(data);

// display chart in a div named 'container'
chart.container('container').draw();
```

### Implement Drilldown

When chart has the data all that is left to do for us is to tell chart what to do when a point (single chart element, a column in this case) is clicked:

```
// when a 'pointClick' event happens
chart.listen('pointClick', function (e) {
  // check if there is drillDown data available
  if (e.point.get('drillDown')) {
    // if so, assign to the only data series we have
    chart.getSeries(0).data(e.point.get('drillDown'));
  }
  else {
    // otherwise assign this series the initial
    // dataset and return to the initial state
    chart.getSeries(0).data(data);
  }
});
```

That’s it, you can see it for yourself: 

{sample}CS\_Drilldown\_Chart\_01{sample}

Basically the work is done, this foundation provides us with all we need and we will now [tune the chart](#tune-the-chart), add [a drill-up button](#drillup-button), and show that [multi-level drill-down](#multilevel-drilldown) is also possible.

## Tune the Chart

The basic chart is nice but we obviously need to tune it so it looks nice in this particular case. We will add three easy settings:
- Format [Axis Labels](../Axes_and_Grids/Axes_Labels_Formatting) so they show 'k' or 'm' for thousands and millions;
- Tune [tooltips](../Common_Settings/Tooltip) to show '$' sign;
- Change [interactivity](../Common_Settings/Interactivity) settings so the elements can't be selected.

We can do all this using this simple code:

```
// configure axis labels
chart.yAxis().labels().format('${%Value}{scale:(1000)(1000)|(k)(m)}');
// tune tooltips format
chart.tooltip().format('${%Value}');
// tune interactivity selection mode
chart.interactivity().selectionMode('none');
```

And now the chart looks and feels better:

{sample}CS\_Drilldown\_Chart\_02{sample}

## Drill Up Button

One thing you may want is to have a button on a chart that will take an end user a level up, this button may be implemented in several ways, we will show three of them.

First, you can create an interactive label with AnyChart and add it to a chart. To do so we need to add a label, configure how it looks and behaves, and modify drilldown behavior so the button appears when needed:

```
// configire drilldown on point click
chart.listen('pointClick', function (e) {
  if (e.point.get('drillDown')) {
        chart.getSeries(0).data(e.point.get('drillDown'));
        chart.label(0).enabled(true);            
  }
});

// add chart label, set placement, color and text
chart.label(0, {enabled: false, position: 'rightTop', anchor: 'rightTop', padding: 5, offsetX: 5, offsetY: 5, text: "Back", background: {stroke: "1 black", enabled: true}});

// load initial data on label click
chart.label(0).listen('click', function() {
  chart.getSeries(0).data(data);
  chart.label(0).enabled(false);
}); 
```

That's it, with a miniscule amount of coding you have a drilldown column chart:

{sample}CS\_Drilldown\_Chart\_03{sample}

### jQuery Button

With jQuery you need to create an element, assign proper styles and code reactions.

Here is the same sample as above but with a button created using jQuery: [AnyChart Drilldown Chart sample with jQuery Button](https://jsfiddle.net/rnug0bxb/).

### Pure HTML Button

You can go and create a button without use of anything, just pure HTML and JavaScript:

Here is the same sample as above but with a button created using pure HTML and JavaScript: [AnyChart Drilldown Chart sample with HTML Button](https://jsfiddle.net/1jum7L4j/).

## Improvements

The sample shown above is an illustration of idea and you can make tons of improvements depending on the nature of your task. We will showcase several of them below.

### Multilevel Drilldown

The first modification is not a modification at all, it is a demonstration of the flexibility of concept shown in the basic sample: without changing anything in the code you can have multilevel drilldown chart. All you need to do is actually add multilevel data. Here is how the data will look like:

```
var data = [
{"x": "2015", "value": 2195081, "drillDown": [
  {"x": "Q1", "value": 792026, "drillDown": [
    {"x": "Jan", "value": 302000},
    {"x": "Feb", "value": 190000},
    {"x": "Mar", "value": 300026}]
  },
  {"x": "Q2", "value": 610501, "drillDown": [
    {"x": "Apr", "value": 305000},
    {"x": "May", "value": 100501},
    {"x": "Jun", "value": 205000}]
  },
  {"x": "Q3", "value": 441843, "drillDown": [
    {"x": "Jul", "value": 240000},
    {"x": "Aug", "value":  51000},
    {"x": "Sep", "value": 150843}]
  },
  {"x": "Q4", "value": 350711, "drillDown": [
    {"x": "Oct", "value": 150000},
    {"x": "Nov", "value": 100700},
    {"x": "Dec", "value": 100011}
  ]}]}];
```

And if you feed such data to the code you'll be able to drill one more level down. And there is no limit, you can add more and more levels and it will still work.

{sample}CS\_Drilldown\_Chart\_04{sample}
