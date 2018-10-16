const path = require('path')

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
  AES_HASH_MESSAGE,
  ECC_MESSAGE_TO_LEVEL_4,
  ECC_MESSAGE_CAMARON,
  JABURA_PUBLIC_MESSAGE
} = require('./messages')

const FAIL_RESPONSE = { title: 'Ooops!' }
const aes = require('./aes_ccm')
const ecc = require('./ecc')
const km = require('./keyManager')
const hashLevel1 = '1d024fa20bd6f6471c6e1ff0a53327ab03f4e3a0bb31c35381e61b0fbc1bea34'
const routes = [
  {
    path: '/nivel/1/:opt',
    method: 'get',
    exec(drawer, req, res){
      const { params } = drawer
      if (params.opt === hashLevel1) {
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
          aesEncryptedMessage: aes.encrypt(hashLevel1, AES_HASH_MESSAGE).toString(),
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
            JABURA_PUBLIC_MESSAGE
          ],
          jaburaPublic: km.getKeyBuffer('jabura','publicKey.txt').toString('hex')
        })
      } else {
        res.render('fail', FAIL_RESPONSE)
      }
    }
  },
  {
    path: '/nivel/3/publicKey',
    method: 'post',
    exec(drawer, req, res){
      const { params } = drawer
      const { input, user } = params
      if (input && user) {
        km.saveKey(input, user, 'publicKey.txt')
        ecc.encrypt(new Buffer(input, 'hex'), new Buffer(ECC_MESSAGE_TO_LEVEL_4))
        .then((e) => {
          res.json({ message: `${WIZARD_MESSAGE_2}\n\n${ecc.toString(e)}`, replace: true })
        })
        .catch(err => res.json({ err: "Can't encrypt message. Please Try Again" }))
      } else {
        res.json({ err: 'missing params' })
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
    path: '/nivel/4/camaron',
    method: 'post',
    exec(drawer, req, res){
      const { params } = drawer
      const { user, input} = params
      if (user && input) {
        const userPublicKey = km.getKeyBuffer(user,'publicKey.txt')
        const jaburaPrivateKey = km.getKeyBuffer('jabura','privateKey.txt')

        ecc.decrypt(jaburaPrivateKey, ecc.toBuffer(input))
        .then(msg => msg.toString() == 'la corriente')
        .then(isValid => {
          if(!isValid) throw 'Invalid answer'
          ecc.encrypt(userPublicKey, Buffer(ECC_MESSAGE_CAMARON))
          .then((e) => {
            res.json({ message: ecc.toString(e), replace: true })
          })
          .catch(err => res.json({ err: msg || "Can't encrypt message. Please Try Again" }))
        })
        .catch(err => {
          let msg;
          if(err == 'Invalid answer') msg = err
          res.json({ err: msg || "Can't decrypt message. Please Try Again"})
        })
      } else {
        res.json({ err: 'missing params' })
      }
    }
  },
  {
    path: '/nivel/5/documento',
    method: 'get',
    exec(drawer, req, res){
      res.download(path.join(__dirname, '..', 'public', 'caballero-para-firma.pdf'))
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
    path: '/nivel/final/documento',
    method: 'get',
    exec(drawer, req, res){
      res.download(path.join(__dirname, '..', 'public', 'documento-del-pueblo.pdf'))
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
