{:index 5}

# Custom TopoJSON Maps

## Overview

AnyChart supports Geo Data in [GeoJSON](Custom_GeoJson_Maps), TopoJSON and [SVG](Custom_SVG_Maps) formats.

TopoJSON is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called arcs. Arcs are sequences of points, while line strings and polygons are defined as sequences of arcs. Each arc is defined only once, but can be referenced several times by different shapes, thus reducing redundancy and decreasing the file size. 

A reference implementation of the TopoJSON specification is available as a command-line tool to encode TopoJSON from GeoJSON (or ESRI Shapefiles) and a client side JavaScript library to decode TopoJSON back to GeoJSON again. 
See [https://github.com/mbostock/topojson](https://github.com/mbostock/topojson) and [TopoJSON specification](https://github.com/topojson/topojson-specification/blob/master/README.md) for more.

Working with TopoJSON in AnyMap is identical to working with GeoJSON in every way. Take a look at the sample of a custom map created from TopoJSON source below. 

All maps in [AnyChart Map Collection](https://cdn.anychart.com/) have both GeoJSON and TopoJSON versions, you can use whichever you like most.

## Sample

{sample}Maps\_TopoJSON\_01{sample}

