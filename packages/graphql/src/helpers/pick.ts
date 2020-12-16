export function pick(object: object, keys: string[]) {
  return keys.reduce((obj, key) => {
    //   eslint-disable-next-line no-prototype-builtins
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}
