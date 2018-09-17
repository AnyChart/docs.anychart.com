{:index 4.1}
# Sankey Diagram

## Overview

A Sankey diagram...

This article explains how to create a basic Sankey diagram as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Sankey diagram's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Sankey Diagram](../Quick_Start/Modules#_diagram)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Sankey}anychart.charts.Sankey{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[(?)](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>(?)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Sankey Diagram](https://www.anychart.com/chartopedia/chart-types/sankey-diagram/) (?)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Sankey diagram requires adding the [Core](../Quick_Start/Modules#core) and [Sankey Diagram](../Quick_Start/Modules#sankey_diagram) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sankey.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

* {api:anychart#sankey}anychart.sankey(){api}

The following sample demonstrates how a basic Sankey diagram is created:

```

```

{sample}BCT\_Sankey\_Diagram\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Sankey diagram (for example, legend (?) and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

```

```

{sample}BCT\_Sankey\_Diagram\_01{sample}

### Nodes

* [Appearance](#appearance)
* [Labels and Tooltips](#labels_and_tooltips)

#### Width

* {api:anychart.charts.Sankey#nodePadding}nodePadding(){api}


```

```

{sample}BCT\_Sankey\_Diagram\_02{sample}

#### Padding

* {api:anychart.charts.Sankey#nodeWidth}nodeWidth(){api}


```

```

{sample}BCT\_Sankey\_Diagram\_03{sample}

### Flows

* [Appearance](#appearance)
* [Labels and Tooltips](#labels_and_tooltips)

### Dropoffs

* [Appearance](#appearance)
* [Labels and Tooltips](#labels_and_tooltips)

### Appearance

#### All Elements

The [appearance settings](../Appearance_Settings) of a Sankey diagram can be configured in two [states](../Common_Settings/Interactivity/States): **normal** and **hover**...

* nodes: {api:anychart.core.sankey.elements.Node#normal}normal(){api}, {api:anychart.core.sankey.elements.Node#normal}hovered(){api}
* flows: {api:anychart.core.sankey.elements.Flow#normal}normal(){api}, {api:anychart.core.sankey.elements.Flow#normal}hovered(){api}
* dropoffs: {api:anychart.core.sankey.elements.Dropoff#normal}normal(){api}, {api:anychart.core.sankey.elements.Dropoff#normal}hovered(){api}

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

...

```

```

{sample}BCT\_Sankey\_Diagram\_04{sample}

#### Individual Elements

```

```

{sample}BCT\_Sankey\_Diagram\_05{sample}

### Curvature

* {api:anychart.charts.Sankey#curveFactor}curveFactor(){api}


```

```

{sample}BCT\_Sankey\_Diagram\_06{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

наблюдения:

* вроде бы у чарта есть метод для настройки тултипов сразу у всех элементов, но нет такого же метода для настройки лейблов

* кажись у флоу и дропоффов лейблы можно показать и настроить только на ховер 

* а у лейблов наоборот только в нормале текст лейбла настраивается, нельзя сделать изменение на ховере, но изменение цвета можно

#### Tokens

To change the text of labels, combine the {api:anychart.charts.Sankey#label}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Sankey#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Here is the list of tokens that work with the Sankey diagram:

* `?`
* `?`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```

```

{sample}BCT\_Sankey\_Diagram\_07{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `?`
* `?`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions:

```

```

{sample}BCT\_Sankey\_Diagram\_08{sample}