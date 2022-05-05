// K extends keyof T 是用于保证 K 中出现的属性是存在于 T 中的
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
