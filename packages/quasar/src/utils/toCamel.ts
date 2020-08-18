export const toCamel = (s: string):
string => fixStrings(s.replace(/([-_][a-z])/ig, (c) => c.toUpperCase()
  .replace(/[-_]/g, '')));
