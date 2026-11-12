{:index 1}
# Chart Editor

## Overview

Chart Editor is an [AnyChart Extension](../Quick_Start/Modules#extensions) that provides a UI allowing you to create and set up various chart types. The result can be saved with the data in XML or JSON format or in a reusable format with a JavaScript code string.

## Prerequisites

Chart Editor works only if proper AnyChart files are included.

### Minimal

```
<!-- anychart -->
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-bundle.min.js"></script>

<!-- anychart CSS -->
<link href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css" type="text/css" rel="stylesheet">
<link href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css" type="text/css" rel="stylesheet">
```

### Maps

It is recommended to include **proj4.js** if you plan to use [Maps](../Maps/):

```
<!-- include this if you plan to use Maps -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js"></script>
```

### Themes

If you want to use [themes](../Appearance_Settings/Themes), you need to include desired theme files as well:

```
<!-- themes -->
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-coffee.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-dark-blue.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-dark-earth.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-dark-glamour.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-dark-provence.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-dark-turquoise.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-light-blue.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-light-earth.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-light-glamour.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-light-provence.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-light-turquoise.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-monochrome.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-morning.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-pastel.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-sea.min.js"></script>
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-theme-wines.min.js"></script>
```

## Files

Chart Editor files to be included:

```
<!-- chart editor CSS-->
<link href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-editor.min.css" type="text/css" rel="stylesheet"></script>
<!-- chart editor JS-->
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-editor.min.js"></script>
```

## Using

AnyChart Chart Editor UI can be configured and used in several ways - please see [Configuration](Configuration) and [Use Cases](Use_Cases) to learn more.

## Contributing

AnyChart Chart Editor is developed and supported by AnyChart team, but it is not a part of the main AnyChart library. It is open source, but subject to licensing. If you want to contribute, fork, or report issues, please see [https://github.com/AnyChart/chart-editor/](https://github.com/AnyChart/chart-editor/).

## Licensing

Please contact [AnyChart Licensing Team](mailto:sales@anychart.com) if you are planning to use AnyChart Charts Editor in your project.