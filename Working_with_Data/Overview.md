{:index 0.4}
# Working with Data in AnyChart

## Overview

This section is dedicated to the ways AnyChart gets, processes and treats data that is visualized by the charts.

It is recommended that you read [Quick Start](../Quick_Start/Quick_Start) article before you read any article in this section.

## Single Series and Multi Series Charts

There are single-series charts, like [Pie Chart](../Basic_Charts/Pie_Chart) or [Funnel Chart](../Basic_Charts/Funnel_Chart) and multi-series charts, like [Column Chart](../Basic_Charts/Column_Chart) or [Line Chart](../Basic_Charts/Line_Chart), with the latter you may encounter a number of tasks when you need to list, access, remove or add series. Please see:
- [Series Manipulation](Series_Manipulation) article to learn how you can add, remove and list series in multi-series charts in AnyChart.

## Mapping Data Sets

AnyChart [Data Sets](Data_Sets) mechanism allows you to solve a number of tasks, like being able to plug in data from external CSV or JSON formatted sources without having to adapt format or being able to show different or same columns from the raw data source in different ways. Please see:
- [Data Sets](Data_Sets) article to learn more about this.

## Data Models

AnyChart Data engine is very flexible and it has several data models inside, these models are used in different chart types for the purpose of being as robust and comfortable to use as possible, please see:
- [Tree Data Model](Tree_Data_Model) to learn how hierarchical data is used in [Gantt Charts](../Gantt_Chart/Quick_Start) and [Treemaps](../Basic_Charts/Treemap_Chart),
- [Table Data Model](Table_Data_Model) to learn how to work with big date time based datasets in [Stock Charts](../Stock_Charts/Overview),
- [Data Sets](Data_Sets) and [AnyChart Data Streaming and Manipulation (CRUD)](Data_Manipulation) to learn how [most of AnyChart Charts](../Quick_Start/Supported_Charts_Types) work with the data.

## Data Formats

AnyChart charting library supports a lot of ways to set data to your charts. You can choose which one suits your task the best:

- [JavaScript API](Supported_Data_Formats#javascript_api)
- [XML](Supported_Data_Formats#xml)
- [JSON](Supported_Data_Formats#json)
- [CSV](Supported_Data_Formats#csv)
- [Google Spreadsheet](Supported_Data_Formats#google_spreadsheet)
- [HTML Table](Supported_Data_Formats#html_table)

## Loading Data

[Data Adapter](./Data_Adapter/Overview) is a special AnyChart module that can:
- [load CSV files](./Data_Adapter/Loading_CSV_File),
- [load JSON siles](./Data_Adapter/Loading_JSON_File),
- [load XML files](./Data_Adapter/Loading_XML_File),
- [load data from HTML Tables](./Data_Adapter/Parsing_HTML_Table),
- and even [load data Google Spreadsheets](./Data_Adapter/Loading_Google_Spreadsheet).

## Data Streaming

AnyChart html5 charting library gives you the ability to create, read, update and delete charts in real-time without full reloading and redrawing - our charts can be changed fast and in a flexible manner.

To learn how to manipulate the data in AnyChart and create Data Streaming, please see:
- [AnyChart Data Streaming and Manipulation (CRUD)](Data_Manipulation)
