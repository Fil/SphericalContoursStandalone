// Import Observable notebook
import notebook from '_notebook';

// intercept and reroute calls
const fetchAlias = {
  "https://gist.githubusercontent.com/Fil/6bc12c535edc3602813a6ef2d1c73891/raw/3ae88bf307e740ddc020303ea95d7d2ecdec0d19/points.json": "./points.json",
  "https://unpkg.com/visionscarto-world-atlas/world/110m_land.geojson": "./110m_land.geojson"
};
const _fetch = fetch;
fetch = function() {
  const a = arguments;
  if (a[0] in fetchAlias)
    a[0] = fetchAlias[a[0]];
  return _fetch(...a);
}

// Import d3
import * as d3 from 'd3';
import * as d3GeoVoronoi from 'd3-geo-voronoi';
import * as d3GeoProjection from 'd3-geo-projection';

// Import d3-require
import {require} from 'd3-require';

// Import Observable library
import {Runtime, Inspector, Library} from '@observablehq/runtime';

// Resolve "d3@5" module to current object `d3`
const customResolve = require.alias({
  'd3@5': d3,
  'd3-geo-voronoi@1.5': d3GeoVoronoi,
  'd3-geo-projection@2': d3GeoProjection
}).resolve;

// Render selected notebook cells into DOM elements of this page
// Use the custom resolve function to load modules
const runtime = new Runtime(new Library(customResolve));
const main = runtime.module(notebook, (name) => {

  switch (name) {
    case 'chart':
      // render 'chart' notebook cell into <div id="chart"></div>
      return new Inspector(document.querySelector('#chart'));
      break;
  }

});
