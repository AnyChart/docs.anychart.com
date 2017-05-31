{:index 6.1}
#Tag Cloud

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Samples](#samples)

## Overview

A tag cloud (word cloud, or weighted list in visual design) is a visual representation of text data, typically used to depict keyword metadata (tags) on websites, or to visualize free form text. Tags are usually single words, and the importance of each tag is shown with font size or color.

## Quick Start

To create a Tag cloud use {api:anychart#tagCloud}tagCloud(){api} method, you can pass the data right into the constructor:

```
anychart.onDocumentReady(function () {
    var data = [
        {"x": "learning", "value": 80},
        {"x": "lists", "value": 44},
        {"x": "meaning", "value": 40},
        {"x": "useful", "value": 36},
        {"x": "different", "value": 32},
        {"x": "grammar", "value": 28},
        {"x": "teaching", "value": 24},
        {"x": "example", "value": 20},
        {"x": "includes", "value": 56},
        {"x": "thing", "value": 12},
        {"x": "vocabulary", "value": 10},
        {"x": "frequency", "value": 10},
        {"x": "phrases", "value": 15},
        {"x": "content", "value": 27}
    ];

    // create a tag cloud chart
    chart = anychart.tagCloud(data);

    // display chart
    chart.container("container");
    chart.draw();
});
```

Here is a basic Tag cloud chart:

{sample}BCT\_Tag\_Cloud\_01{sample}

## Samples

You can find a lot of samples of Tag Cloud charts in [AnyChart Tag Cloud (Word Cloud) Charts Gallery](https://www.anychart.com/products/anychart/gallery/Tag_Cloud/)
