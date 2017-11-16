'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'testing')
})
