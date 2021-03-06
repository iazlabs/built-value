export const JsonAttributes = (attributes: {
  [index: string]: string | { name: string; type: new () => any };
}) => <T extends object>(constructor: T) => {
  Object.defineProperty(constructor, '__serializable', {
    configurable: false,
    enumerable: false,
    value: attributes,
    writable: false,
  });
  return constructor;
};
