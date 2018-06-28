{:index 2}
# GraphicsJS Quick Start

## Getting Started

Create an HTML file and give it the "index.html" name if you want to make a new web page, or open your HTML file where the drawing should be.

## Include GraphicsJS

Reference the JavaScript file in the `<head>` section of your web page.  
You can use the link as shown below or download graphics.min.js from the [GraphicsJS CDN page](https://cdn.anychart.com/) and then put it into any folder of your site (you'll have to use your own link in this case). 

```
<head>
    <script src="https://cdn.anychart.com/releases/DVF-3692-table/js/graphics.min.js" type="text/javascript"></script>
</head>
```

## Create a Container

Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes.

```
<body>
    <div id="container" style="width: 100%; height: 100%;"></div>
</body>
```

## Create a Drawing

Put the JavaScript tag `<script>` with the following code anywhere after the `<div>` section.

```
<script>
// create a stage for the Deathly Hallows symbol
stage = acgraph.create('container');

// draw the square
stage.rect(25, 50, 350, 300);

// draw the circle
stage.circle(200, 250, 100);

// draw the triangle
stage.path()
    .moveTo(25, 350)
    .lineTo(200, 50)
    .lineTo(375, 350)
    .close();

// draw the wand in the middle
stage.path()
    .moveTo(200, 50)
    .lineTo(200, 350);
</script>
```
  
## See the Result

After all these steps you should have the following result. You can launch and explore this {pg:docs/samples/GFX_quick_start-plain}GraphicsJS Drawing Sample in the Playground{pg}.

{sample}GFX\_quick\_start{sample}

## Full Source Code

Below you can see how your full web page code should look like:

```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8"/>
    <script src="https://cdn.anychart.com/releases/DVF-3692-table/js/graphics.min.js"></script>
</head>
<body>
    <div id="container" style="width: 100%; height: 100%"></div>
    <script>
        // create a stage for the Deathly Hallows symbol
        stage = acgraph.create('container');

        // draw the square
        stage.rect(25, 50, 350, 300);

        // draw the circle
        stage.circle(200, 250, 100);

        // draw the triangle
        stage.path()
            .moveTo(25, 350)
            .lineTo(200, 50)
            .lineTo(375, 350)
            .close();

        // draw the wand in the middle
        stage.path()
            .moveTo(200, 50)
            .lineTo(200, 350);
    </script>
</body>
</html>
```

Also, you can copy and paste this code to a file on your computer and run it in browser to see how it works  

## Further Steps

### Learn more

* Explore {api:anychart.graphics}JavaScript API Reference{api}
* See [GraphicsJS Site](http://www.graphicsjs.org/)
* Go on with [GraphicsJS Docs](Overview)
* Read Harry Potter book series to learn more about the Deathly Hallows

### Subscribe

* Follow us on [Facebook](https://www.facebook.com/AnyCharts) and [Twitter](https://twitter.com/intent/follow?&screen_name=anychart&original_referer=http%3A%2F%2Fdocs.anychart.com)
* Read the [blog](https://www.anychart.com/blog/)



