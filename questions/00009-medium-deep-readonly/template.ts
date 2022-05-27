/**
 * 知识点：
 * 1. readonly
 * 2. 条件类型，注意：因为函数也是extends object的所以不能将extends object作为递归判断条件
 * 3. 递归
 */
/* eslint-disable @typescript-eslint/ban-types */
type DeepReadonly<T extends {}> = {
	readonly [K in keyof T]: T[K] extends number | boolean | string | Function
		? T[K]
		: DeepReadonly<T[K]>;
};
