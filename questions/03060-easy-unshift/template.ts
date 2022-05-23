/**
 * 知识点：
 * spread ...
 */
type Unshift<T extends unknown[], U> = [U, ...T];
