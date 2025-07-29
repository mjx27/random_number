// function createStyles<T extends Record<keyof T, keyof T>>(styles: T): T {
//   return styles;
// }

export const createIdentityObject = <T extends Record<keyof T, keyof T>>(
  object: T
): T => {
  return object;
};
