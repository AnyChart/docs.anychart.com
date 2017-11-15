{:index 2}
# GraphicsJS Quick Start

Create an HTML file and give it the “index.html” name if you want to make a new web page, or open your HTML file where the drawing should be.

## Include GraphicsJS into your web page

Reference the JavaScript file in the `<head>` section of your web page.  
You can use the link as shown below or download graphics.min.js from the [GraphicsJS CDN page](https://cdn.anychart.com/) and then put it into any folder of your site (you’ll have to use your own link in this case). 

```
<head>
    <script src="https://cdn.anychart.com/js/latest/graphics.min.js" type="text/javascript"></script>
</head>
```

## Create a container for the drawing

Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes.

Example:
```
<body>
    <div id="container" style="width: 100%; height: 100%;"></div>
</body>
```  

## Create a drawing

Put the JavaScript tag `<script>` with the following code anywhere in the “head” or “body” section.

Example:

```
<script>
anychart.onDocumentReady(function(){
    // create a stage for the Deathly Hallows symbol
    stage = anychart.graphics.create('container');

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
});
</script>
```
  
## The result

After all these steps you should have the following result:

{sample}GFX\_quick\_start{sample}

###Full source code

Below you can see how your full web page code should look like:
```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8"/>
    <script src="https://cdn.anychart.com/js/latest/graphics.min.js"></script>
    <script>
    anychart.onDocumentReady(function(){
        // create a stage for the Deathly Hallows symbol
        stage = anychart.graphics.create('container');

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
    });
    </script>
</head>
<body>
<div id="container" style="width: 100%; height: 100%"></div>
</body>
</html>
```

Also, you can copy and paste this code to a file on your computer and run it in browser to see how it works.  

## Further Steps

### Learn more

* Explore [JavaScript API Reference](https://api.anychart.com/latest/anychart.graphics)
* See [GraphicsJS Site](http://www.graphicsjs.com/)
* Go on with [GraphicsJS Docs](Overview)
* Read Harry Potter book series to learn more about the Deathly Hallows

### Subscribe

* Follow us on [Facebook](https://www.facebook.com/AnyCharts) and [Twitter](https://twitter.com/intent/follow?&screen_name=anychart&original_referer=http%3A%2F%2Fdocs.anychart.com)
* Read the [blog](https://www.anychart.com/blog/)