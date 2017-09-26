{:index 6.5}

# Crosshair

## Overview

## Chart and plot

## Display Mode

```
chart.crosshair().displayMode("float");
```

{sample}STOCK\_Crosshair\_01{sample}

## Appearance

```
// create two plots
var plot_1 = chart.plot(0);
var plot_2 = chart.plot(1);

// configure the crosshair strokes on the first plot
plot_1.crosshair().yStroke("black", 2);
plot_1.crosshair().xStroke("black", 2, "10 5", "round");

// configure the crosshair strokes on the second plot
plot_2.crosshair().yStroke("black", 2);
plot_2.crosshair().xStroke(null);
```

{sample}STOCK\_Crosshair\_02{sample}

## Labels

```
/* enable the crosshair labels
on the x-axis of the first plot */
plot_1.crosshair().xLabel(true);
```

```
/* configure the text of the crosshair labels
on the y-axis */
chart.crosshair().yLabel().format(function(){
  return this.value + " $";
});
```

```
/* configure the appearance of the crosshair labels
on the first plot */
var crosshair_1 = plot_1.crosshair();
crosshair_1.xLabel().fontColor("#64b5f6");
crosshair_1.xLabel().background({
  fill: "white",
  stroke: "#64b5f6"
});
crosshair_1.yLabel().fontColor("#64b5f6");
crosshair_1.yLabel().background({
  fill: "white",
  stroke: "#64b5f6"
});

/* configure the appearance of the crosshair labels
on the second plot */
var crosshair_2 = plot_2.crosshair();
crosshair_2.xLabel().fontColor("#ffa000");
crosshair_2.xLabel().background({
  fill: "white",
  stroke: "#ffa000"
});
crosshair_2.yLabel().fontColor("#ffa000");
crosshair_2.yLabel().background({
  fill: "white",
  stroke: "#ffa000"
});
```

{sample}STOCK\_Crosshair\_03{sample}

## Disabling

```
// disable the crosshair on the first plot
plot_1.crosshair(false);
```

{sample}STOCK\_Crosshair\_04{sample}