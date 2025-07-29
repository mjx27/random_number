export const createIdentityObject = <T extends { [K in keyof T]: K }>(
  object: T
): T => {
  return object;
};
