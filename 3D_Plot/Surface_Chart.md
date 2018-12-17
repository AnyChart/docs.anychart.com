{:index 1}
# Surface Chart

## Overview

text

## Quick Start

{sample}Surface\_Chart\_01{sample}

## Data

text

## Appearance

text

### Color Scale

text

```
// Create color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: -1.5},
    {from: -1.5, to: 0},
    {greater: 0}
]);

// Set color scale.
chart.colorScale(customColorScale);
```

### Mesh

text

```
chart.stroke({color: '#ff4040', thickness: 3, dash: '5 5'});
```

### Grids

text

```
chart.xGrid(true);
chart.yGrid(true);
chart.zGrid(true);
```

### Box

text

```
chart.box('#F44336', 2, '5 2', 'round');
```

### Axes

text

```
chart.xAxis(true);
chart.yAxis(true);
chart.zAxis(true);
```

### Rotation

text

```
rotationZ
rotationY
```