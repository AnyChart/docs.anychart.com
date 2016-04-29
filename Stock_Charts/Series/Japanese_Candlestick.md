# AnyStock Candlestick Series

* [Overview](#overview)
* [AnyStock Candlestick Series Adjustment](#anystock_candlestick_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Candlestick Charts are often used for representing changes of prices. This series uses four parameters, as OHLC charts: Open, High, Low and Close. 

## AnyStock Candlestick Series Adjustment

In stocks, there are several parameters that are different from the basic charts. In this article we will consider them in general.

### Data

Data in stocks should be defined as table. There are two ways of data arranging: array of objects and array of arrays. Below you can find two samples with the same data but with different types of this data arranged. The first sample demonstrates how looks the stock with the data arranged as array of objects. The second one shows a stock which data is an array of arrays.

```
	
```

{sample}STOCK\_Candlestick\_01{sample}

```
	
```

{sample}STOCK\_Candlestick\_02{sample}

You can easily notice that there is no difference in both stocks performing. So, choose the data type you prefer to work with, as it has nothing to do with the stocks view.
