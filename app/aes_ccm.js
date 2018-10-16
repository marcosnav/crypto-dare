"use strict";
exports.__esModule = true;
var sjcl = require("sjcl");
var EncryptedData = /** @class */ (function () {
    function EncryptedData(data) {
        this.data = data;
        var params = JSON.parse(data);
        this._iv = params.iv;
        this._v = params.v;
        this._iter = params.iter;
        this._ks = params.ks;
        this._ts = params.ts;
        this._mode = params.mode;
        this._adata = params.adata;
        this._cipher = params.cipher;
        this._salt = params.salt;
        this._ct = params.ct;
    }
    Object.defineProperty(EncryptedData.prototype, "iv", {
        get: function () { return this._iv; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "v", {
        get: function () { return this._v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "iter", {
        get: function () { return this._iter; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "ks", {
        get: function () { return this._ks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "ts", {
        get: function () { return this._ts; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "mode", {
        get: function () { return this._mode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "adata", {
        get: function () { return this._adata; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "cipher", {
        get: function () { return this._cipher; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "salt", {
        get: function () { return this._salt; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncryptedData.prototype, "ct", {
        get: function () { return this._ct; },
        enumerable: true,
        configurable: true
    });
    EncryptedData.prototype.toString = function () {
        return this.data;
    };
    EncryptedData.prototype.toJSON = function () {
        return {
            iv: this._iv,
            v: this._v,
            iter: this._iter,
            ks: this._ks,
            ts: this._ts,
            mode: this._mode,
            adata: this._adata,
            cipher: this._cipher,
            salt: this._salt,
            ct: this._ct
        };
    };
    return EncryptedData;
}());
exports.EncryptedData = EncryptedData;
exports.encrypt = function (password, data) {
    // SJCL internally reuses salts for the same password, so we force a new random salt everytime
    // We use random.randomWords(2,0) because it's what SJCL uses for randomness by default
    var randomSalt = sjcl.random.randomWords(2, 0);
    var encryptOptions = {
        iter: 10000,
        ks: 256,
        salt: randomSalt
    };
    var encrypted = sjcl.encrypt(password, data.toString(), encryptOptions);
    return new EncryptedData(encrypted);
};
exports.decrypt = function (password, data) {
    try {
        return sjcl.decrypt(password, data.toString());
    }
    catch (error) {
        if (error.message.includes('ccm: tag doesn\'t match')) {
            error.message = 'password error - ' + error.message;
        }
        throw new Error(error);
    }
};
