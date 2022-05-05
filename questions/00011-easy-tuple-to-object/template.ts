type TupleToObject<T extends readonly string[]> = {
  // https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
  [K in T[number]]: K;
};
