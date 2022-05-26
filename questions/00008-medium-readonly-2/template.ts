/**
 * 知识点：
 * 1. 泛型类型参数默认值 K extends keyof T = keyof T
 * 2. 交叉类型 A & B
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
	readonly [P in keyof T]: T[P];
} & Omit<T, K>;
