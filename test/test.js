"use strict"

var simplify = require("../simplify")
var tape = require("tape")

tape("simplify-2d-complex", function(t) {


  //Easy test
  var points = []
  var cells = []
  for(var i=0; i<100; ++i) {
    points.push([i, 0])
    if(i > 0) {
      cells.push([i-1, i])
    }
  }
  t.same(simplify(cells, positions, 1.0), {
    positions: [[0,0], [99,0]],
    cells: [[0,1]]
  })


  var points = []
  var cells = []
  for(var i=0; i<100; ++i) {
    var theta = i / 100 * Math.PI * 2.0
    points.push([Math.cos(theta), Math.sin(theta)])
    cells.push([i, (i+1)%100])
  }
  console.log(simplify(cells, positions, 0.1))

  t.end()
})