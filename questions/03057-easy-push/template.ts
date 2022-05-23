/**
 * 知识点：
 * spread ...
 */
type Push<T extends unknown[], U> = [...T, U];
