# Preloader

## Overview

Chart Preloader is a small animated object used when you want to show that some process is in progress and an end user needs to wait.

## Prerequisites

Chart editor works only if `anychart.css` and `anychart-ui.min.css` are referenced in the page, you can find latest and versioned options at [AnyChart CDN](https://cdn.anychart.com/):

```
<link rel="stylesheet" href="https://cdn.anychart.com/css/DVF-3692-table/anychart-ui.min.css">
<link rel="stylesheet" href="https://cdn.anychart.com/releases/8.0.1/fonts/css/anychart.css">
```

## Sample

Preloader is a very simple element that is created using {api:anychart.ui#preloader}preloader(){api} method which returns an instance of {api:anychart.ui.Preloader}anychart.ui.Preloader{api} class.

You can create preloader when needed, render it to DOM and the turn it on and off simply by toggling visibility.

```
// create a preloader
preloader = anychart.ui.preloader();
// render preloader to the DOM
preloader.render();

// Optional: 
// preloader.render(document.getElementById("container")); renders
// preloader in the given element
// Optional: decide what element becomes a preloader
// preloader.decorate(document.getElementById("preloader_container"));

// show preloader
preloader.visible(true);

// do something

// hide preloader
preloader.visible(true);
```

Here is a basic sample with chart hidden by preloader for some time, see the code to learn more:

{sample}CS\_Preloader\_01{sample}