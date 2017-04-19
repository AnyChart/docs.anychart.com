# Directional Movement Index (DMI)

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Visualization](#visualization)

## Overview

Developed by Marc Chaikin, the DMI measures the momentum of the Accumulation Distribution Line using the MACD formula. This makes it an indicator of an indicator. The DMI is the difference between the 3-day EMA of the Accumulation Distribution Line and the 10-day EMA of the Accumulation Distribution Line. Like other momentum indicators, this indicator is designed to anticipate directional changes in the Accumulation Distribution Line by measuring the momentum behind the movements. A momentum change is the first step to a trend change. Anticipating trend changes in the Accumulation Distribution Line can help chartists anticipate trend changes in the underlying security. The Chaikin Oscillator generates signals with crosses above/below the zero line or with bullish/bearish divergences.

Find the mathematical description of the indicator on the [DMI Mathematical Description](Mathematical_Description#directional_movement_index) page.


## Adding indicator

DMI indicator is added through the {api:anychart.core.stock.Plot#dmi}dmi(){api} method. It requires a mapping with four fields: "high", "low", "close" and "volume". The following sample demonstrates the DMI indicator applied to a spline series which data values are equal to "close" values.

```

```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_DMI\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where DMI with different parameters and settings is added to different plots:

```

```

{sample}STOCK\_Technical\_Indicators\_DMI\_02{sample}
