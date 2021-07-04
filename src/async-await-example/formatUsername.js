export function formatUsername(name) {
  return name.startsWith("@") ? name : `@${name}`;
}
