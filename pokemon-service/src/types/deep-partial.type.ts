export type DeepPartialType<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartialType<T[P]> : T[P] extends (infer U)[] ? DeepPartialType<U>[] : T[P];
};
