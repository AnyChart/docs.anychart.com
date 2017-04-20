{:index 1}
#Error Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Cartesian Charts](#cartesian_charts)
* [Scatter Charts](#scatter_charts)
* [Error Mode](#error_mode)
* [Appearance](#appearance)
* [Labels And Tooltips](#labels_and_tooltips)
* [Supported Types](#supported_types)

## Overview

## Chart

## Quick Start

??? {api:anychart.core.cartesian.series.Base#error}error(){api}

```

```

{sample}BCT\_Error\_Chart\_01{sample}

## Cartesian Charts

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper bars

```

```

{sample}BCT\_Error\_Chart\_02{sample}

```

```

{sample}BCT\_Error\_Chart\_03{sample}

## Scatter Charts

Here are the methods configuring error bars along the Y-axis:

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper Y-bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower Y-bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper Y-bars

And these methods configure error bars along the X-axis:

* {api:anychart.core.utils.Error#xError}xError(){api} sets lower and upper X-bars as equal
* {api:anychart.core.utils.Error#xLowerError}xLowerError(){api} sets lower X-bars
* {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} sets upper X-bars

```

```

{sample}BCT\_Error\_Chart\_04{sample}

```

```

{sample}BCT\_Error\_Chart\_05{sample}

## Error Mode

??? {api:anychart.core.utils.Error#mode}mode(){api}

```

```

{sample}BCT\_Error\_Chart\_06{sample}

## Visualization

{api:anychart.core.utils.Error#xErrorWidth}xErrorWidth()
{api:anychart.core.utils.Error#valueErrorWidth}valueErrorWidth(){api}

{api:anychart.core.utils.Error#xErrorStroke}xErrorStroke(){api}
{api:anychart.core.utils.Error#valueErrorStroke}valueErrorStroke(){api}

```

```

{sample}BCT\_Error\_Chart\_07{sample}

## Labels And Tooltips

{api:core.cartesian.series.Base#label}label(){api}
{api:core.cartesian.series.Base#tooltip}tooltip(){api}

```

```

{sample}BCT\_Error\_Chart\_08{sample}

## Supported Types

Here is the list of chart types compatible with error bars: