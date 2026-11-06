export function withBase(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${pathname.replace(/^\//, '')}`;
}
