/**
 * 是否相等
 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
	? 1
	: 2
	? true
	: false;

/**
 * 知识点：
 * 1. 类型推断 infer
 * 2. spread 操作符
 * 3. Equal<X, Y>实现，如何判断两个类型相同
 * 4. 递归
 */
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
	? Equal<F, U> extends true
		? true
		: Includes<R, U>
	: false;
