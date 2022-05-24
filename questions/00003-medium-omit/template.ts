/**
 * 知识点：
 * keyof 获取对象上的key
 * Exclude 从联合类型T中排除K的类型成员，来构造一个新的类型
 */
type MyOmit<T, K extends keyof T> = {
	[P in Exclude<keyof T, K>]: T[P];
};
