const cache = WeakMap();

export default function bindKey(component, key, method, ...rest) {
  // key should not include ':'
  if (key.includes(':')) throw new Error('[key] should not include ":"');

  key = [method, key].join(':');
  if (!cache.has(component)) {
    cache.set(component, {});
  }

  const methods = cache.get(component);

  if (!methods[key]) {
    methods[key] = component[method].bind(component, ...rest);
  }

  return methods[key];
}
