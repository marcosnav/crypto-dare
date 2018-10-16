const path = require('path')
const Spacehorn = require('spacehorn')
const routes = require('./app/routes')

const Website = new Spacehorn({
  name: 'Crypto Dare',
  port: 3120,
  publicDir: path.join(__dirname, 'public'),
  viewsDir: path.join(__dirname, 'views'),
  viewsEngine: 'pug',
  routes,
})

Website.attend()
