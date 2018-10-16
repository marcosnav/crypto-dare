"use strict"
const fs = require('fs')

const saveKey = function(key, uuid, filename) {
  const dir = __dirname + `/keys/${uuid}`
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync(`${dir}/${filename}`, new Buffer(key, 'hex'))
}

const getKeyBuffer = function(uuid, filename) {
  const path = __dirname + `/keys/${uuid}/${filename}`
  return fs.readFileSync(path)
}

module.exports = { saveKey, getKeyBuffer }
