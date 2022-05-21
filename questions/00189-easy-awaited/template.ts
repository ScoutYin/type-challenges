/**
 * 知识点：
 * 1. 类型推断 infer
 * 2. 递归
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
	? U extends Promise<any>
		? MyAwaited<U>
		: U
	: T;
