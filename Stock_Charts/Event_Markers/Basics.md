{:index 2}

# Event Markers Basics

## Overview

*Event Markers are very helpful elements of the chart, as they allow showing user explicitly an event that took place at a specific moment of time.*

*This article explains how to add event markers to a chart, how to create different markers groups, and how to configure the appearance.*

*Check out [Event Marker Tooltips](Tooltips) and [Event Marers Events](Events) to learn more.*

## Quick Start

```
// add event markers
plot.eventMarkers({ "groups": [
  {
    "data": [
      {
        "date": "2004-02-20",
        "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
      },
      {
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc."
      },
    ]
  }
]});  
```

{sample}STOCK\_Event\_Markers\_Basic\_01{sample}

## Data

поля для событий:
date - единств. обязательное поле
description - берется в тултипы по умолчанию
+ примечание custom field (ссылка на статью про тултипы)

поля для групп:
format
data

+ само поле group

### eventMarkers()

принимает JSON-объект, который содержит информацию о группах
написать здесь про поле format - работает только для группы

```
// add two groups of event markers
plot.eventMarkers({ "groups": [
  {
    "format": "A",
    "data": [
      {
        "date": "2004-02-20",
        "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
      },
      {
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc."
      },
    ]
  },
  {
    "format": "B",
    "data": [
      {
        "date": "2009-02-10",
        "description": "Cisco and Tata Consultancy Services announce strategic alliance."
      },
      {
        "date": "2009-02-12",
        "description": "Cisco unveils 'Intelligent Urbanisation' vision for Bengaluru."
      }
    ]
  }
]});
```

{sample}STOCK\_Event\_Markers\_Basic\_02{sample}

### group()

{api:anychart.core.stock.eventMarkers.Controller#group}group(){api}

groups() как геттер позволяет обратиться к группам по индексу
как сеттер - создать группу с определенным индексом
принимает индекс + массив объектов, содержащий информацию об отдельных событиях
тут используется метод format()
по умолчанию у все групп символ - A


```
var eventMarkers = plot.eventMarkers();

// add the first group of event markers
eventMarkers.group(0, [
  {
    "date": "2004-02-20",
    "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
  },
  {
    "date": "2008-04-27",
    "description": "Cisco announced its intent to acquire PostPath, Inc."
  }
]);

// set the symbol of the first group
eventMarkers.group(0).format("A");

// add the second group of event markers
eventMarkers.group(1, [
  {
    "date": "2009-02-10",
    "description": "Cisco and Tata Consultancy Services announce strategic alliance."
  },
  {
    "date": "2009-02-12",
    "description": "Cisco unveils 'Intelligent Urbanisation' vision for Bengaluru."
  }
]);

// set the symbol of the second group
eventMarkers.group(1).format("B");
```

{sample}STOCK\_Event\_Markers\_Basic\_03{sample}

### data()

написать про методы data() и groups()
создает одну группу с индексом 0
принимает тоже массив объектов

```
// add event markers
plot.eventMarkers().data([
  {
    "date": "2004-02-20",
    "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
  },
  {
    "date": "2008-04-27",
    "description": "Cisco announced its intent to acquire PostPath, Inc."
  }
]);
```

{sample}STOCK\_Event\_Markers\_Basic\_04{sample}

## Appearance

### Groups

```
var eventMarkers = plot.eventMarkers();

// configure the type and appearance of markers
eventMarkers.normal().type("rect");
eventMarkers.normal().fill("#00802b");
eventMarkers.hovered().fill("#a0d3b1");
eventMarkers.selected().fill("#00cc44"); 
```

{sample}STOCK\_Event\_Markers\_Basic\_05{sample}

### Individual Markers

```
// add event markers
plot.eventMarkers({ "groups": [
  {
    "data": [
      {
        "date": "2004-02-20",
        "description": "Cisco announced the acquisition of Andiamo Systems, Inc.",
        "normal":   {"fill": "#00802b", "type": "rect"},
        "hovered":  {"fill": "#a0d3b1"},
        "selected": {"fill": "#00cc44"}   
      },
      {
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc.",
        "normal":   {"fill": "#802b00", "type": "circle"},
        "hovered":  {"fill": "#d3b1a0"},
        "selected": {"fill": "#cc4400"}   
      }
    ]
  }
]});
```

{sample}STOCK\_Event\_Markers\_Basic\_06{sample}

## Position

*Event markers can be placed on the X axis, or be bound to any series on the plot. When bound to a series - you can define which value is used in case of multi-value series (e.g. OHLC). When there is only one series on the plot and position is set to `"series"` - chart will determine this automatically.*

```
// add event markers to the first plot
plot_1.eventMarkers(events);

// add event markers to the second plot
plot_2.eventMarkers(events);

// set the position of event markers on the first plot
plot_1.eventMarkers().position("series");
plot_1.eventMarkers().fieldName("high");

// set the position of event markers on the second plot
var eventMarkers_2 = plot_2.eventMarkers()
plot_2.eventMarkers().position("axis");
```

{sample}STOCK\_Event\_Markers\_Basic\_07{sample}

```
// bind event markers to the first series
plot.eventMarkers().position("series");
plot.eventMarkers().seriesId(0);
```

{sample}STOCK\_Event\_Markers\_Basic\_08{sample}