{:index 13.5}
# Map Geo Scale

## Overview

Geo Scale controls parameters that define numerical parameters that primarily affect how [Map Grid](Map_Grid) and [Map_Axes](Map_Axes) are displayed. Map scale is represented by {api:anychart.scales.Geo}anychart.scales.Geo{api} class.

## Tick intervals

You can control major and minor tick intervals using {api:anychart.scales.GeoTicks#interval}interval(){api} of {api:anychart.scales.Geo#xMinorTicks}xMinorTicks(){api}, {api:anychart.scales.Geo#yMinorTicks}yMinorTicks(){api}, {api:anychart.scales.Geo#xTicks}xTicks(){api} and {api:anychart.scales.Geo#yTicks}yTicks(){api}: 

```
var scale = map.scale();
scale.xTicks.interval(10);
scale.yTicks.interval(10);
scale.xMinorTicks.interval(2);
scale.yMinorTicks.interval(2);
```

{sample}Maps\_Geo\_Scale\_01{sample}

## Minimum and Maximum

Controlling minimum and maximum for scales allows you to control the area of the map displayed, it is done using {api:anychart.scales.Geo#maximumX}maximumX(){api}, {api:anychart.scales.Geo#maximumY}maximumY(){api}, {api:anychart.scales.Geo#minimumX}minimumX(){api} and {api:anychart.scales.Geo#minimumY}minimumY(){api} methods:

```
var mapScale = map.scale();

// set scale minimums and maximums
mapScale.minimumX(110);
mapScale.maximumX(150);
mapScale.minimumY(-50);
mapScale.maximumY(-10);
```

{sample}Maps\_Geo\_Scale\_02{sample}

## Precision

You can control map scale precision using the {api:anychart.scales.Geo#precision}precision(){api} method, it allows to change both X- and Y-precision if needed.