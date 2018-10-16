var crypto = require("crypto");
var eccrypto = require("eccrypto");

// A new random 32-byte private key.
var privateKey = crypto.randomBytes(32);
// Corresponding uncompressed (65-byte) public key.
var publicKey = eccrypto.getPublic(privateKey);

var str = "message to sign";
// Always hash you message to sign!
var msg = crypto.createHash("sha256").update(str).digest();

eccrypto.sign(privateKey, msg).then(function(sig) {
  console.log("Signature in DER format:", sig);
  console.log(sig.toString('hex'))
  eccrypto.verify(publicKey, msg, Buffer.from(sig.toString('hex'), 'hex')).then(function() {
    console.log("Signature is OK");
  }).catch(function() {
    console.log("Signature is BAD");
  });
});
