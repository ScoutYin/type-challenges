/**
 * 关键在于如何判断 T 是否为空数组，如果为空数组就返回 never 不为空数组就返回 T[0]
 */

// 方法一：extends []
type First<T extends any[]> = T extends [] ? never : T[0];

// 方法二: 判断元组的 length 是否 extends 0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// 方法三：看 T[0] 在不在 T[number] 中
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 方法四：
// type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never;
