import { require } from 'd3-require'
import * as d3 from 'd3'
import * as d3GeoVoronoi from 'd3-geo-voronoi'
import * as d3GeoProjection from 'd3-geo-projection'

// Resolve "d3@5" module to current object `d3`
// Be careful: the 'd3@5' alias must be *exactly* the same string as in your
// notebook cell, `d3 = require("d3@5")` in our case. Setting 'd3' or
// 'd3@5.11.0' would not work
export const customResolve = require.alias({
  'd3@5': d3,
  'd3-geo-voronoi@1.5': d3GeoVoronoi,
  'd3-geo-projection@2': d3GeoProjection,
}).resolve
