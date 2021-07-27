import { registerPlugin } from '@capacitor/core';
const BiometricAuth = registerPlugin('BiometricAuth', {
    web: () => import('./web').then(m => new m.BiometricAuthWeb()),
});
export * from './definitions';
export { BiometricAuth };
//# sourceMappingURL=index.js.map