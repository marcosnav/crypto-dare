const {
  IMP_MESSAGE_LVL_1,
  IMP_MESSAGE_LVL_2,
  WIZARD_MESSAGE_1,
  WIZARD_MESSAGE_2,
  CROW_MESSAGE,
  CRYPTO_GENERAL_MESSAGE,
  CRYPTO_GENERAL_MESSAGE_FAIL,
  CRYPTO_GENERAL_MESSAGE_SUCCESS,
  LAST_CHAP_MESSAGE,
  LAST_CHAP_MESSAGE_FAIL,
  LAST_CHAP_MESSAGE_SUCCESS,
} = require('./messages')

const FAIL_RESPONSE = { title: 'Ooops!' }

const routes = [
  {
    path: '/nivel/1/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === '1d024fa20bd6f6471c6e1ff0a53327ab03f4e3a0bb31c35381e61b0fbc1bea34') {
        res.render('1', {
          title: 'Nivel 1',
          messages: [IMP_MESSAGE_LVL_1],
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '/nivel/2/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'aes') {
        res.render('2', {
          title: 'Nivel 2',
          messages: [IMP_MESSAGE_LVL_2],
          aesEncryptedMessage: '',
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '/nivel/3/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'mago-de-llaves') {
        res.render('3', {
          title: 'Nivel 3',
          messages: [
            WIZARD_MESSAGE_1,
            WIZARD_MESSAGE_2,
          ]
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '/nivel/4/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'mensajes-secretos') {
        res.render('4', {
          title: 'Nivel 4',
          messages: [CROW_MESSAGE],
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '/nivel/5/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'firma-tu-union') {
        res.render('5', {
          title: 'Nivel 5',
          messages: [
            CRYPTO_GENERAL_MESSAGE,
            CRYPTO_GENERAL_MESSAGE_FAIL,
            CRYPTO_GENERAL_MESSAGE_SUCCESS,
          ]
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '/nivel/final/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === 'identifica-el-impostor') {
        res.render('6', {
          title: 'Nivel 6',
          messages: [
            LAST_CHAP_MESSAGE,
            LAST_CHAP_MESSAGE_FAIL,
            LAST_CHAP_MESSAGE_SUCCESS,
          ]
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '*',
    method: 'get',
    exec(drawer, req, res){
      res.render('fail', FAIL_RESPONSE)
    }
  }
]

module.exports = routes
