#! /usr/bin/env node
const request = require('request')
const fs = require('fs')
const fetchAlias = require('../src/fetchAlias.json')
const DIR = './public/data'

Object.keys(fetchAlias).forEach(url => {
  request(url).pipe(fs.createWriteStream(`${DIR}/${fetchAlias[url]}`))
})
