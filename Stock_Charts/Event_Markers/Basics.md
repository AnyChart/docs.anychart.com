{:index 2}

# Event Markers Basics

## Overview

Event Markers are very helpful elements of the chart, as they allow showing user explicitly an event that took place at a specific moment of time.

This article explains how to add event markers to a chart, how to create different markers groups, and how to configure the appearance.

Check out [Event Marker Tooltips](Tooltips) and [Event Marers Events](Events) to learn more.

## Quick Start

This is a basic sample that shows how to add single marker group to a chart:

{sample}STOCK\_Event\_Markers\_Basic\_01{sample}

## Data

The only required field in an event marker is date, all other fields can be choosen by you. By default the description field is shown in built-in tooltip and format field is used as the source of the symbol.

Event markers can be loaded into the chart or plot from a single JSON object of the following format:

{sample}STOCK\_Event\_Markers\_Basic\_02{sample}

Or you can pass array to group method and create groups like this:

### Groups

You can create as many event marker groups as you need and use the same or different symbols:

{sample}STOCK\_Event\_Markers\_Basic\_03{sample}

## Appearance

Configuring appearance is as easy as with any other element of AnyChart. Choose a shape, color and configure a connector of event markers like this:

{sample}STOCK\_Event\_Markers\_Basic\_04{sample}

## Position

Event markers can be placed on the X axis, or be bound to any series on the plot. When bound to a series - you can define which value is used in case of multi-value series (e.g. OHLC).

{sample}STOCK\_Event\_Markers\_Basic\_05{sample}