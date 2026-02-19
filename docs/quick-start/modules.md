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

**Note:** All JS files with modules are stored on the [AnyChart CDN](https://cdn.anychart.com/) server, but you can download any file and place it in another location. Learn more: [Downloading AnyChart](downloading-anychart).

### Combining Modules

The **Core** module should be combined with the modules required by the chart type and features you want to add - see the [Chart Modules](#chart-modules) and [Features](#features) sections.

For example, to create an exportable Pie chart, combine Core with the [Pie and Doughnut](#pie-and-doughnut) and [Exports](#exports) modules:

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

You can also build a file that contains your license key. See the [Credits](credits) article to learn more.

## Bundle

The AnyChart Bundle build contains all [chart modules](#chart-modules) and [features](#features). It is the biggest file, use it cautiously.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>
```

## Chart Modules

The following modules are available:

### Base

AnyChart Base is a handy module that contains:

- [Core](#core)
- [Pie and Doughnut](#pie-and-doughnut)
- [Basic Cartesian](#basic-cartesian)
- [Scatter](../basic-charts/scatter-plot)


```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

### Core

AnyChart Core is the core of the engine. It is needed whenever you use any module (except [Bundle](#bundle) and [Base](#base)).

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

### Bullet

A module for creating [Bullet](../basic-charts/bullet-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bullet.min.js"></script>
```

### Basic Cartesian

A module for creating basic Cartesian charts: [Area](../basic-charts/area-chart), [Bar](../basic-charts/bar-chart), [Box](../basic-charts/box-chart), [Bubble](../basic-charts/bubble-chart), [Column](../basic-charts/column-chart), [Area](../basic-charts/area-chart), [HiLo](../basic-charts/hilo-chart), [Candlestick](../basic-charts/japanese-candlestick-chart), [Jump Line](../basic-charts/jump-line-chart), [Line](../basic-charts/line-chart), [Marker](../basic-charts/marker-chart), [OHLC](../basic-charts/ohlc-chart), [Range Area](../basic-charts/range-area-chart), [Range Bar](../basic-charts/range-bar-chart), [Range Column](../basic-charts/range-column-chart), [Range Spline Area](../basic-charts/range-spline-area-chart), [Range Step Area](../basic-charts/range-step-area-chart), [Spline Area](../basic-charts/spline-area-chart), [Spline](../basic-charts/spline-chart), [Step Area](../basic-charts/step-area-chart), [Step Line](../basic-charts/step-line-chart), [Stick](../basic-charts/stick-chart). 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

### Basic 3D

A module for creating [Cartesian 3D](../basic-charts/3d/overview) charts (except for Pie and Doughnut):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian-3d.min.js"></script>
```

### Calendar

A module for creating [Calendar](../basic-charts/calendar-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-calendar.min.js"></script>
```

### Circle Packing

A module for creating [Circle Packing](../basic-charts/circle-packing-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-circle-packing.min.js"></script>
```

### Circular Gauge

A module for creating [Circular Gauges](../gauges/circular-gauge):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-circular-gauge.min.js"></script>
```

### Gantt

A module for creating Project and Resource [Gantt](../gantt-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-gantt.min.js"></script>
```

### Geo Maps

A module for creating [Geo Maps](../maps/quick-start):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-map.min.js"></script>
```

### Graph Chart

A module for creating [Graph](../basic-charts/network-graph) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-graph.min.js"></script>
```

### Geo Maps

A module for creating [Geo Maps](../maps/quick-start):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-map.min.js"></script>
```

### Graph Chart

A module for creating [Graph](../basic-charts/network-graph) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-graph.min.js"></script>
```

### Heat Map

A module for creating [Heat Maps](../basic-charts/heat-map-chart):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-heatmap.min.js"></script>
```

### Linear Gauge

A module for creating [Linear Gauges](../gauges/linear-gauge):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-linear-gauge.min.js"></script>
```

### Mekko

A module for creating [Mekko](../basic-charts/marimekko-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-mekko.min.js"></script>
```

### Network Graph

A module for creating [Network Graph](../basic-charts/network-graph) diagrams:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-graph.min.js"></script>
```

### Network Graph

A module for creating [Network Graph](../basic-charts/network-graph) diagrams:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-graph.min.js"></script>
```

### Pareto

A module for creating [Pareto](../basic-charts/pareto-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pareto.min.js"></script>
```

### PERT

A module for creating [PERT](../pert-chart/overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pert.min.js"></script>
```

### Pie and Doughnut

A module for creating [Pie](../basic-charts/pie-chart) and [Doughnut](../basic-charts/doughnut-chart) charts (including the 3D versions):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pie.min.js"></script>
```

### Polar

A module for creating [Polar](../basic-charts/polar-plot/overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-polar.min.js"></script>
```

### Pyramid and Funnel

A module for creating [Pyramid](../basic-charts/pyramid-chart) and [Funnel](../basic-charts/funnel-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-pyramid-funnel.min.js"></script>
```

### Radar

A module for creating [Radar](../basic-charts/radar-plot/overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-radar.min.js"></script>
```

### Resource

A beta module for creating [Resource](../beta/resource-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-resource.min.js"></script>
```

### Sankey Diagram

A module for creating [Sankey Diagrams](../basic-charts/sankey-diagram):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sankey.min.js"></script>
```

### Scatter

A module for creating [Scatter](../basic-charts/scatter-plot/overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-scatter.min.js"></script>
```

### Sparkline

A module for creating [Sparkline](../basic-charts/sparkline-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sparkline.min.js"></script>
```

### Stock

A module for creating [Stock](../stock-charts/overview) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-stock.min.js"></script>
```

### Sunburst

A module for creating [Sunburst](../basic-charts/sunburst-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sunburst.min.js"></script>
```

### Surface

A module for creating [Surface](../3d-plot/surface-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-surface.min.js"></script>
```

### Tag Cloud

A module for creating [Tag Clouds](../basic-charts/tag-cloud):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-tag-cloud.min.js"></script>
```

### Timeline

A module for creating [Timeline](../basic-charts/timeline-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-timeline.min.js"></script>
```

### Treemap

A module for creating [Treemap](../basic-charts/treemap-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-treemap.min.js"></script>
```

### Venn Diagram

A module for creating [Venn Diagrams](../basic-charts/venn-diagram):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-venn.min.js"></script>
```

### Waterfall

A module for creating [Waterfall](../basic-charts/waterfall-chart) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-waterfall.min.js"></script>
```

### Word Tree

A module for creating [Word Tree](../basic-charts/word-tree) charts:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>
```

## Features

Additional modules that are responsible for various features of the library.

### Annotations

A module for working with [Annotations](../stock-charts/drawing-tools-and-annotations/overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-annotations.min.js"></script>
```

### Data Adapter

A module for working with [Data Adapter](../working-with-data/data-adapter/overview):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-data-adapter.min.js"></script>
```

### Exports

A module that enables [Exports](../common-settings/exports) and [Sharing](../common-settings/sharing):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-exports.min.js"></script>
```

### Table UI

A module that enables [Table Layout](../dashboards/table-layout):

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-table.min.js"></script>
```

### Common UI

A module that enables UI features, such as [Context Menu](../common-settings/ui-controls/context-menu), [Preloader](../common-settings/ui-controls/preloader), [Zoom Controls](../common-settings/ui-controls/zoom-controls), [Range Picker & Range Selector](../stock-charts/range-selection):

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

Chart Editor is an extension that provides a UI for configuring charts and chart data. Read more in the [AnyChart Chart Editor](../chart-editor/overview) section.

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-editor.min.js"></script>
```
