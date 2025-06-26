import ExampleLibTurbo from './NativeExampleLibTurbo';

export function multiply(a: number, b: number): number {
  return ExampleLibTurbo.multiply(a, b);
}

export function compare(a: number, b: number): boolean {
  return ExampleLibTurbo.compare(a, b);
}

export function numberPromise(): Promise<number> {
  return ExampleLibTurbo.numberPromise();
}
