"use strict"

var simplify = require("../simplify")
var tape = require("tape")

tape("simplify-2d-complex", function(t) {


  for(var j=0; j<100; ++j) {
    var theta = 2.0 * Math.PI * j / 100.0
    var dx = Math.cos(theta)
    var dy = Math.sin(theta)
    for(var k=0; k<5; ++k) {
      var w = k / 200.0
      var points = []
      var cells = []
      for(var i=0; i<100; ++i) {
        points.push([i*dx + w*Math.random(), i*dy + w*Math.random()])
        if(i > 0) {
          cells.push([i-1, i])
        }
      }
      t.same(simplify(cells, points, 1), {
        positions: [points[0], points[99]],
        cells: [[0,1]]
      }, "angle=" + theta + " var=" + w)
    }
  }

  t.end()
})