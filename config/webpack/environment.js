const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pugLoader = require('./loaders/pug')
const sassLoader = require('./loaders/sass')

environment.loaders.prepend('vue', vue)

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('sass', sassLoader)
environment.loaders.prepend('pug', pugLoader)





module.exports = environment
