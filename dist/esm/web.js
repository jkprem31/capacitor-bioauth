import { WebPlugin } from '@capacitor/core';
export class BiometricAuthWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map