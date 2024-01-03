import { ComponentType } from 'react';

export type ChangeTypeOfKeys<T extends object, Keys extends keyof T, NewType> = {
  // Loop to every key. We gonna check if the key
  // is assignable to Keys. If yes, change the type.
  // Else, retain the type.
  [key in keyof T]: key extends Keys ? NewType : T[key];
};

export type ExtractPropsFromComponent<C> = C extends ComponentType<infer P> ? P : any;
