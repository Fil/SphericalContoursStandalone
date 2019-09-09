#! /usr/bin/env node
const request = require('request')
const fs = require('fs')
const fetchAlias = require('../src/fetchAlias.json')
const DIR = './public/data'

for (const url of Object.keys(fetchAlias)) {
  console.warn(`download ${fetchAlias[url]} from ${url}`);
  request(url).pipe(fs.createWriteStream(`${DIR}/${fetchAlias[url]}`))
}
