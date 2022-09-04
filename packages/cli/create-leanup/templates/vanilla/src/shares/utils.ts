export function typeIt<T>(json: Object): T {
  const typed = JSON.parse(JSON.stringify(json)) as { default: T };
  return typed.default;
}
