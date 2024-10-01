export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s.-]/g, '') 
    .replace(/[\s._]+/g, '-') 
    .replace(/^-+|-+$/g, '') 
    .replace(/\.+/g, '-') 
}
