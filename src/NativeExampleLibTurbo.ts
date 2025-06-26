import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  compare(a: number, b: number): boolean;
  numberPromise(): Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ExampleLibTurbo');
