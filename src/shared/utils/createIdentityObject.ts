export const createIdentityObject = <T extends Record<keyof T, keyof T>>(
  object: T
): T => {
  return object;
};
