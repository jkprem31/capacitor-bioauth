var capacitorBiometricAuth = (function (exports, core) {
    'use strict';

    const BiometricAuth = core.registerPlugin('BiometricAuth', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BiometricAuthWeb()),
    });

    class BiometricAuthWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'BiometricAuth',
                platforms: ['web']
            });
        }
        async isAvailable() {
            return new Promise(() => { });
        }
        async verify(options) {
            console.log('OPTIONS', options);
            return new Promise(() => { });
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BiometricAuthWeb: BiometricAuthWeb
    });

    exports.BiometricAuth = BiometricAuth;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
