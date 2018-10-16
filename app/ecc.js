const ecc = require('eccrypto')

const encrypt = async (pubKey, data) => {
  try {
    return await ecc.encrypt(pubKey, new Buffer(data));
  } catch (error) {
    throw new Error(error);
  }
};

const decrypt = async (privKey, data) => {
  try {
    return await ecc.decrypt(privKey, data);
  } catch (error) {
    if (error.message === 'Bad MAC') { error.message = 'Wrong priv'; }
    throw new Error(error);
  }
};

const toString = (data) => {
  const dData = Object.assign({}, data);
  for (const key in dData) { if (key) { dData[key] = dData[key].toString('base64'); } }
  return JSON.stringify(dData);
};

const toBuffer = (data) => {
  const nData = JSON.parse(data);
  for (const key in nData) { if (key) { nData[key] = Buffer.from(nData[key], 'base64'); } }
  return nData;
};

module.exports = {
  encrypt,
  decrypt,
  toString,
  toBuffer
}
