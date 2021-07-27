import { WebPlugin } from '@capacitor/core';
import { AvailableOptions, VerifyOptions, BiometricAuthPlugin } from './definitions';
export declare class BiometricAuthWeb extends WebPlugin implements BiometricAuthPlugin {
    constructor();
    isAvailable(): Promise<AvailableOptions>;
    verify(options: {
        reason: string;
    }): Promise<VerifyOptions>;
}
