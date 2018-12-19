# Modules

## Overview

Modular System is the core of AnyChart 8. It allows you to significantly reduce the size of the JavaScript code running on your web page by connecting only those chart types and features that you actually use. The modular-based AnyChart is perfectly compatible with popular bundling tools such as Webpack, Browserify, and so on. 

- [Modules List](https://anychart.com/download/products/)

## Basics

### First Step

You should always add one of the following modules:

- [Core](#core)
- [Base](#base)
- [Bundle](#bundle)

Reference them the `<head>` section of your page **before any other modules**:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

The main module, required by all chart types, is [Core](#core), the core of the engine. It is included, among other things, in the [Base](#base) and [Bundle](#bundle) modules, so you can also use them instead.

**Note:** All JS files with modules are stored on the [AnyChart CDN](https://cdn.anychart.com/) server, but you can download any file and place it in another location. Learn more: [Downloading AnyChart](Downloading_AnyChart).

### Combining Modules

The **Core** module should be combined with the modules required by the chart type and features you want to add - see the [Chart Modules](#chart_modules) and [Features](#features) sections.

For example, to create an exportable Pie chart, combine Core with the [Pie and Doughnut](#pie_and_doughnut) and [Exports](#exports) modules:

```
<head>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pie.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-exports.min.js"></script>
</head>
```

The same logic applies to the **Base** module. However, please note that it already includes some chart types, so you have to reference other modules only if you need to add a chart type that is not included or a feature.

As for **Bundle**, it includes all other modules except [Extensions](#extensions).

## Builder

Custom JavaScript Builder is designed for assembling a JavaScript file that contains only the features and chart types you are really going to use.

- [AnyChart Online Custom Binaries Builder](https://anychart.com/download/products/#custom-build)

To build a custom JavaScript binary, check modules you want to include in the build: specify the chart types you are going to create and add features and themes if you need them. Then press the green "Build" button at the bottom.

You can also build a file that contains your license key. See the [Credits](Credits) article to learn more.

## Bundle

The AnyChart Bundle build contains all [chart modules](#chart_modules) and [features](#features). It is the biggest file, so you should use it cautiously.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>
```

## Chart Modules

The following modules are available:

### Base

AnyChart Base is a handy module that contains:

- [Core](#core)
- [Pie and Doughnut](#pie_and_doughnut)
- [Basic Cartesian Charts](#basic_cartesian_charts)
- [Scatter](../Basic_Charts/Scatter_Plot)


```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

### Core

AnyChart Core is the core of the engine. It is needed whenever you use any module (except [Bundle](#bundle) and [Base](#base)).

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

### Bullet

A module for creating [Bullet](../Basic_Charts/Bullet_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bullet.min.js"></script>
```

### Basic Cartesian Charts

A module for creating basic Cartesian charts: [Area](../Basic_Charts/Area_Chart), [Bar](../Basic_Charts/Bar_Chart), [Box](../Basic_Charts/Box_Chart), [Bubble](../Basic_Charts/Bubble_Chart), [Column](../Basic_Charts/Column_Chart), [Area](../Basic_Charts/Area_Chart), [HiLo](../Basic_Charts/HiLo_Chart), [Candlestick](../Basic_Charts/Japanese_Candlestick_Chart), [Jump Line](../Basic_Charts/Jump_Line_Chart), [Line](../Basic_Charts/Line_Chart), [Marker](../Basic_Charts/Marker_Chart), [OHLC](../Basic_Charts/OHLC_Chart), [Range Area](../Basic_Charts/Range_Area_Chart), [Range Bar](../Basic_Charts/Range_Bar_Chart), [Range Column](../Basic_Charts/Range_Column_Chart), [Range Spline Area](../Basic_Charts/Range_Spline_Area_Chart), [Range Step Area](../Basic_Charts/Range_Step_Area_Chart), [Spline Area](../Basic_Charts/Spline_Area_Chart), [Spline](../Basic_Charts/Spline_Chart), [Step Area](../Basic_Charts/Step_Area_Chart), [Step Line](../Basic_Charts/Step_Line_Chart), [Stick](../Basic_Charts/Stick_Chart). 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

### Basic 3D

A module for creating [Cartesian 3D](../Basic_Charts/3D/Overview) charts (except Pie and Doughnut):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian-3d.min.js"></script>
```

### Circular Gauge

A module for creating [Circular Gauges](../Gauges/Circular_Gauge):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-circular-gauge.min.js"></script>
```

### Gantt and Gantt Resource

A module for creating [Gantt and Gantt Resource](../Gantt_Chart/Quick_Start) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-gantt.min.js"></script>
```

### Heat Map

A module for creating [Heat Maps](../Basic_Charts/Heat_Map_Chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-heatmap.min.js"></script>
```

### Linear Gauge

A module for creating [Linear Gauges](../Gauges/Linear_Gauge):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-linear-gauge.min.js"></script>
```

### Geo Maps

A module for creating [Geo Maps](../Maps/Quick_Start):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-map.min.js"></script>
```

### Mekko

A module for creating [Mekko](../Basic_Charts/Marimekko_Chart/Mekko_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-mekko.min.js"></script>
```

### Pareto

A module for creating [Pareto](../Basic_Charts/Pareto_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pareto.min.js"></script>
```

### PERT

A module for creating [PERT](../PERT_Chart/Overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pert.min.js"></script>
```

### Pie and Doughnut

A module for creating [Pie](../Basic_Charts/Pie_Chart) and [Doughnut](../Basic_Charts/Doughnut_Chart) charts (including the 3D versions):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pie.min.js"></script>
```

### Polar

A module for creating [Polar](../Basic_Charts/Polar_Plot/Overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-polar.min.js"></script>
```

### Pyramid and Funnel

A module for creating [Pyramid](../Basic_Charts/Pyramid_Chart) and [Funnel](../Basic_Charts/Funnel_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pyramid-funnel.min.js"></script>
```

### Radar

A module for creating [Radar](../Basic_Charts/Radar_Plot/Overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-radar.min.js"></script>
```

### Resource

A beta module for creating [Resource](../beta/Resource_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-resource.min.js"></script>
```

### Sankey Diagram

A module for creating [Sankey Diagrams](../Basic_Charts/Sankey_Diagram):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sankey.min.js"></script>
```

### Scatter

A module for creating [Scatter](../Basic_Charts/Scatter_Plot/Overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-scatter.min.js"></script>
```

### Sparkline

A module for creating [Sparkline](../Basic_Charts/Sparkline_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sparkline.min.js"></script>
```

### Stock

A module for creating [Stock](../Stock_Charts/Overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-stock.min.js"></script>
```

### Sunburst

A module for creating [Sunburst](../Basic_Charts/Sunburst_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sunburst.min.js"></script>
```

### Surface

A module for creating [Surface](../3D_Plot/Surface_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-surface.min.js"></script>
```

### Tag Cloud

A module for creating [Tag Clouds](../Basic_Charts/Tag_Cloud):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-tag-cloud.min.js"></script>
```

### Treemap

A module for creating [Treemap](../Basic_Charts/Treemap_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-treemap.min.js"></script>
```

### Venn Diagram

A module for creating [Venn Diagrams](../Basic_Charts/Venn_Diagram):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-venn.min.js"></script>
```

### Waterfall

A module for creating [Waterfall](../Basic_Charts/Waterfall_Chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-waterfall.min.js"></script>
```

## Features

Additional modules that are responsible for various features of the library.

### Annotations

A module for working with [Annotations](../Stock_Charts/Drawing_Tools_and_Annotations/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-annotations.min.js"></script>
```

### Data Adapter

A module for working with [Data Adapter](../Working_with_Data/Data_Adapter/Overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-adapter.min.js"></script>
```

### Exports

A module that enables [Exports](../Common_Settings/Exports) and [Sharing](../Common_Settings/Sharing):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-exports.min.js"></script>
```

### Table UI

A module that enables [Table Layout](../Dashboards/Table_Layout):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-table.min.js"></script>
```

### Common UI

A module that enables UI features, such as [Context Menu](../Common_Settings/UI_Controls/Context_Menu), [Preloader](../Common_Settings/UI_Controls/Preloader), [Zoom Controls](../Common_Settings/UI_Controls/Zoom_Controls), [Range Picker & Range Selector](../Stock_Charts/Range_Selection):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>
```

### UI Binding

The UI Binding module is a set of utilities for binding HTML5 UI elements to chart settings.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui-binding.min.js"></script>
```

### VML Renderer 

A module that enables VML support for old browsers.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-vml.min.js"></script>
```

## Extensions

Extension modules provide additional functionality. Extensions **CANNOT** be a part of [Bundle](#bundle) or compiled into it using [Builder](#builder).

### Chart Editor

Chart Editor is an extension that provides a UI for configuring charts and chart data. Read more in the [AnyChart Chart Editor](../Chart_Editor/Overview) section.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-editor.min.js"></script>
```