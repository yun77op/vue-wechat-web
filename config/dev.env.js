var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

var args = require('optimist').argv;

var env = merge(prodEnv, {
  NODE_ENV: '"development"'
})

if (args.platform !== undefined) {
  env = merge(env, {
    PLATFORM: JSON.stringify(args.platform)
  })
}

module.exports = env;
