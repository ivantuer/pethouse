export type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? never : K;
}[keyof T];
