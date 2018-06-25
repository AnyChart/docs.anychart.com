# Modules

## Overview

Modular System is the core of AnyChart 8. It allows you to significantly reduce the size of the JavaScript running on your web page by connecting only those chart types and features that you actually use. The modular based AnyChart is perfectly compatible with popular bundling tools such as Webpack, Browserify, and so on. 

- [Modules List](https://anychart.com/download/products/)

## Builder

Custom JavaScript Builder is designed for assembling a JavaScript file that contains only the features and chart types you are really going to use. You can also build a file that contains your [license key](Credits).

- [Online Builder](https://anychart.com/download/products/#custom-build)

## Bundle

AnyChart Bundle build contains all [chart modules](#chart_modules) and [features](#features), it is the biggest file, use it cautiously.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>
```

## Chart Modules

The following modules are available:

### Base

AnyChart Base is a handy module that contains:
- [Core](#core)
- [Pie and donut](#pie_and_donut)
- [Basic cartesian charts](#basic_cartesian_charts)
- [Scatter](../Basic_Charts/Scatter_Plot)

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

### Core

AnyChart Core is the core of engine, it is needed whenever you use any module (except [Bundle](#bundle) and [Base](#base)).

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

### Bullet

Module to create [Bullet charts](../Basic_Charts/Bullet_Chart).

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bullet.min.js"></script>
```

### Basic cartesian charts

Module to create basic cartesian charts: [Area](../Basic_Charts/Area_Chart), [Bar](../Basic_Charts/Bar_Chart), [Box](../Basic_Charts/Box_Chart), [Bubble](../Basic_Charts/Bubble_Chart), [Column](../Basic_Charts/Column_Chart), [Error](../Basic_Charts/Error_Chart), [Area](../Basic_Charts/Area_Chart), [HiLo](../Basic_Charts/HiLo_Chart), [Candlestick](../Basic_Charts/Japanese_Candlestick_Chart), [Jump Line](../Basic_Charts/Jump_Line_Chart), [Line](../Basic_Charts/Line_Chart), [Marker](../Basic_Charts/Marker_Chart), [OHLC](../Basic_Charts/OHLC_Chart), [Quadrant](../Basic_Charts/Quadrant_Chart), [Range Area](../Basic_Charts/Range_Area_Chart), [Range Bar](../Basic_Charts/Range_Bar_Chart), [Range Column](../Basic_Charts/Range_Column_Chart), [Range Spline Area](../Basic_Charts/Range_Spline_Area_Chart), [Range Step Area](../Basic_Charts/Range_Step_Area_Chart), [Spline Area](../Basic_Charts/Spline_Area_Chart), [Spline](../Basic_Charts/Spline_Chart), [Step Area](../Basic_Charts/Step_Area_Chart), [Step Line](../Basic_Charts/Step_Line_Chart), [Stick](../Basic_Charts/Stick_Chart). 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

### Basic 3D

Module to create cartesian [3D chart](../Basic_Charts/3D/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian-3d.min.js"></script>
```

### Circular gauges

Module to create [Circular gauges](../Gauges/Circular_Gauge):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-circular-gauge.min.js"></script>
```

### Gantt and gantt resource

Module to create [Gantt and gantt resource](../Gantt_Chart/Quick_Start) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-gantt.min.js"></script>
```

### Heatmap

Module to create [Heat map](../Basic_Charts/Heat_Map_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-heatmap.min.js"></script>
```

### Linear gauges

Module to create [Linear gauges](../Gauges/Linear_Gauge):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-linear-gauge.min.js"></script>
```

### Geo Maps

Module to create [Geo Maps](../Maps/Quick_Start):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-map.min.js"></script>
```

### Mekko

Module to create [Mekko chart](../Basic_Charts/Marimekko_Chart/Mekko_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-mekko.min.js"></script>
```

### Pareto

Module to create [Pareto chart](../Basic_Charts/Pareto_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pareto.min.js"></script>
```

### PERT

Module to create [PERT chart](../PERT_Chart/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pert.min.js"></script>
```

### Pie and donut

Module to create [Pie chart](../Basic_Charts/Pie_Chart) and [Donut chart](../Basic_Charts/Doughnut_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pie.min.js"></script>
```

### Polar

Module to create [Polar charts](../Basic_Charts/Polar_Plot/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-polar.min.js"></script>
```

### Pyramid and Funnel

Module to create [Pyramid charts](../Basic_Charts/Pyramid_Chart) and [Funnel charts](../Basic_Charts/Funnel_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pyramid-funnel.min.js"></script>
```

### Radar

Module to create [Radar charts](../Basic_Charts/Radar_Plot/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-radar.min.js"></script>
```

### Resource

Beta module to create [Resource charts](../beta/Resource_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-resource.min.js"></script>
```

### Scatter

Module to create [Scatter charts](../Basic_Charts/Scatter_Plot/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-scatter.min.js"></script>
```

### Sparkline

Module to create [Sparkline charts](../Basic_Charts/Sparkline_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sparkline.min.js"></script>
```

### Stock

Module to create [Stock charts](../Stock_Charts/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-stock.min.js"></script>
```

### Sunburst

Module to create [Sunburst charts](../Basic_Charts/Sunburst_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sunburst.min.js"></script>
```

### Tag cloud

Module to create [Sparkline charts](../Basic_Charts/Tag_Cloud):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-tag-cloud.min.js"></script>
```

### Treemap

Module to create [Treemap charts](../Basic_Charts/Treemap_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-treemap.min.js"></script>
```

### Venn diagram

Module to create [Venn diagram](../Basic_Charts/Venn_Diagram):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-venn.min.js"></script>
```

### Waterfall

Module to create [Waterfall chart](../Basic_Charts/Waterfall_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-waterfall.min.js"></script>
```

## Features

Additional modules that are responsible for various functionality of the library.

### Annotations

Module to work with [Annotations](../Stock_Charts/Drawing_Tools_and_Annotations/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-annotations.min.js"></script>
```

### Data Adapter

Module to work with [Data Adapter](../Working_with_Data/Data_Adapter/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-adapter.min.js"></script>
```

### Exports

Module that enables [Exports](../Common_Settings/Exports) and [Sharing](../Common_Settings/Sharing):


```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-exports.min.js"></script>
```

### Table UI

Module that enables [Table Layout](../Dashboards/Table_Layout):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-table.min.js"></script>
```

### Common UI

[Context menu](../Common_Settings/UI_Controls/Context_Menu), [range picker and range selector](../Stock_Charts/Range_Selection) and [preloader](../Common_Settings/UI_Controls/Preloader) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>
```

### UI Binding

UI Binding module is a set of utilities to bind HTML5 UI elements to chart settings.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui-binding.min.js"></script>
```

### VML Renderer 

Module that enables VML support for old browsers.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-vml.min.js"></script>
```

## Extensions

Extension is a special type of modules that provide additional functionality. Extensions **CAN NOT** be a part of [Bundle](#bunle) or compiled into it using [Builder](#builder).

### Chart Editor

Chart Editor an extension that provides the UI to configure charts and chart data. Read more about Chart Editor in [AnyChart Chart Editor](../Chart_Editor/Overview) section.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-editor.min.js"></script>
```