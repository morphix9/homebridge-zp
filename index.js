// homebridge-zp/index.js
// Copyright © 2016-2021 Erik Baauw. All rights reserved.
//
// Homebridge plugin for Sonos ZonePlayer.

'use strict'

const { ZpPlatform, ZpS1Platform } = require('./lib/ZpPlatform')
const packageJson = require('./package.json')

module.exports = (homebridge) => {
  ZpPlatform.loadPlatform(homebridge, packageJson, 'ZP', ZpPlatform)
  ZpPlatform.loadPlatform(homebridge, packageJson, 'ZPS1', ZpS1Platform)
}
