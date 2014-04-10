simplify-2d-complex
===================
Simplifies a 2D simplicial complex by removing small or nearly flat corners.

# Example

```javascript
var simplify = require("simplify-2d-complex")

//Create a circle
var points = []
var cells = []
for(var i=0; i<100; ++i) {
  var theta = i / 100 * Math.PI * 2.0
  points.push([Math.cos(theta), Math.sin(theta)])
  cells.push([i, (i+1)%100])
}

//Simplify it
console.log(simplify(points, cells, 0.1))
```

Output:

```
{ positions:
   [ [ 0.6845471059286886, 0.7289686274214116 ],
     [ 0.24868988716485496, 0.9685831611286311 ],
     [ -0.6374239897486897, 0.7705132427757893 ],
     [ -0.9297764858882513, 0.36812455268467814 ],
     [ -0.9510565162951535, -0.30901699437494773 ],
     [ -0.7705132427757893, -0.6374239897486896 ],
     [ -0.2486898871648553, -0.968583161128631 ],
     [ 0.6374239897486893, -0.7705132427757896 ],
     [ 0.9980267284282716, -0.06279051952931326 ] ],
  cells:
   [ [ 0, 1 ],
     [ 1, 2 ],
     [ 2, 3 ],
     [ 3, 4 ],
     [ 8, 0 ],
     [ 4, 5 ],
     [ 5, 6 ],
     [ 6, 7 ],
     [ 7, 8 ] ] }
```

# Install

```
npm install simplify-2d-complex
```

# API

#### `require("simplify-2d-complex")(cells, positions, minArea)`
Simplies the 2D mesh to a gfixed tolerance

* `cells` is a collection of edges in the 2D mesh represented as pairs of indices into the vertices
* `positions` is a list of vertex coordinates encoded as an array of 2D arrays
* `minArea` is the area of the smallest corner in the resulting polygonal region

**Returns** A simplicial complex with two properties:

* `positions` is an array of positions for the simplicial complex
* `cells` is an array of edges encoding the cells of the mesh

# Credits
(c) 2014 Mikola Lysenko. MIT License