"use strict"
const fs = require('fs')

const saveKey = function(key, uuid) {
  const dir = __dirname + `/keys/${uuid}`
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync(`${dir}/publicKey.txt`, new Buffer(key, 'hex'))
}

const getKeyBuffer = function(uuid) {
  const path = __dirname + `/keys/${uuid}/publicKey.txt`
  return fs.readFileSync(path)
}

module.exports = { saveKey, getKeyBuffer }
