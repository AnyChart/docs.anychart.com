# Preloader

## Overview

Chart Preloader is a small animated object used when you want to show that some process is in progress and an end user needs to wait.

## Modules

The preloader requires the [Common UI](../../Quick_Start/Modules#common_ui) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>  
```

Also, you should reference the `anychart-ui.min.css` and `anychart-font.min.css` files:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css"/>
```

Learn more: [Modules](../../Quick_Start/Modules).

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