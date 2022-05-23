/**
 * 知识点：
 * extends
 * Function 参数
 * infer
 */
type MyReturnType<T extends (...args: any[]) => any> = T extends (
	...args: any[]
) => infer R
	? R
	: any;
