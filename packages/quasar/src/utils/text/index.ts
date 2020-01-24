export const toCamel = (s: string) => s.replace(/([-_][a-z])/ig, (c) => c.toUpperCase()
  .replace(/[-_]/g, ''));

export const toUnderscore = (s: string) => s.split(/(?=[A-Z])/).join('_').toLocaleLowerCase();

export default {
  toCamel,
  toUnderscore,
};
