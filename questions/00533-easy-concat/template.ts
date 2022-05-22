/**
 * 知识点：
 * spread 操作符 -> ...
 */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
