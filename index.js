const path = require('path')
const Spacehorn = require('spacehorn')

const routes = [
  {
    path: '/nivel/1/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === '') {
        res.render('1')
      } else {
        res.render('fail')
      }
    }
  },
  {
    path: '/nivel/2/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'aes') {
        res.render('2')
      } else {
        res.render('fail')
      }
    }
  },
  {
    path: '/nivel/3/mago-de-llaves',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'aes') {
        res.render('3')
      } else {
        res.render('fail')
      }
    }
  },
  {
    path: '/nivel/4/mensajes-secretos',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'aes') {
        res.render('4')
      } else {
        res.render('fail')
      }
    }
  },
  {
    path: '/nivel/5/firma-tu-union',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'aes') {
        res.render('5')
      } else {
        res.render('fail')
      }
    }
  },
  {
    path: '/nivel/final/identifica-el-impostor',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'aes') {
        res.render('6')
      } else {
        res.render('fail')
      }
    }
  }
]

const Website = new Spacehorn({
  name: 'Awesome Website',
  publicDir: path.join(__dirname, 'public'),
  viewsDir: path.join(__dirname, 'views'),
  viewsEngine: 'pug',
  routes,
})
 
Website.attend()
