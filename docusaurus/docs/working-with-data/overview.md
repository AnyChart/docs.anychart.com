---
sidebar_position: 0.4
---
# Working with Data in AnyChart

## Overview

This section is dedicated to the ways AnyChart gets, processes and treats data that is visualized by the charts.

It is recommended that you read [Quick Start](../quick-start) article before you read any article in this section.

## Single Series and Multi Series Charts

There are single-series charts, like [Pie Chart](../basic-charts/pie-chart) or [Funnel Chart](../basic-charts/funnel-chart) and multiple-series charts, like [Column Chart](../basic-charts/column-chart) or [Line Chart](../basic-charts/line-chart), with the latter you may encounter a number of tasks when you need to list, access, remove or add series. Please see:
- [Series Manipulation](series-manipulation) article to learn how you can add, remove and list series in multiple-series charts in AnyChart.

## Mapping Data Sets

AnyChart [Data Sets](data-sets) mechanism allows you to solve a number of tasks, like being able to plug in data from external CSV or JSON formatted sources without having to adapt format or being able to show different or same columns from the raw data source in different ways. Please see:
- [Data Sets](data-sets) article to learn more about this.

## Data Models

AnyChart Data engine is very flexible and it has several data models inside, these models are used in different chart types for the purpose of being as robust and comfortable to use as possible, please see:
- [Tree Data Model](tree-data-model) to learn how hierarchical data is used in [Gantt Charts](../gantt-chart) and [Treemaps](../basic-charts/treemap-chart),
- [Table Data Model](table-data-model) to learn how to work with big date time based datasets in [Stock Charts](../stock-charts/overview),
- [Data Sets](data-sets) and [AnyChart Data Streaming and Manipulation (CRUD)](data-manipulation) to learn how [most of AnyChart Charts](../quick-start/supported-charts-types) work with the data.

## Data Formats

AnyChart charting library supports a lot of ways to set data to your charts. You can choose which one suits your task the best:

- [JavaScript API](supported-data-formats#javascript-api)
- [XML](supported-data-formats#xml)
- [JSON](supported-data-formats#json)
- [CSV](supported-data-formats#csv)
- [Google Spreadsheet](supported-data-formats#google-spreadsheet)
- [HTML Table](supported-data-formats#html-table)

## Loading Data

[Data Adapter](./data-adapter/overview) is a special AnyChart module that can:
- [load CSV files](./data-adapter/loading-csv-file),
- [load JSON siles](./data-adapter/loading-json-file),
- [load XML files](./data-adapter/loading-xml-file),
- [load data from HTML Tables](./data-adapter/parsing-html-table),
- and even [load data Google Spreadsheets](./data-adapter/loading-google-spreadsheet).

## Data Streaming

AnyChart html5 charting library gives you the ability to create, read, update and delete charts in real-time without full reloading and redrawing - our charts can be changed fast and in a flexible manner.

To learn how to manipulate the data in AnyChart and create Data Streaming, please see:
- [AnyChart Data Streaming and Manipulation (CRUD)](data-manipulation)
