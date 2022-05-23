/**
 * 知识点：
 * 1. 类型推断
 * 2. Function
 * 3. spread
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
	...args: infer Args
) => any
	? Args
	: never;
