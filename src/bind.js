const cache = WeakMap();

export default function bind(component, method) {
  if (!cache.has(component)) {
    cache.set(component, {});
  }

  const methods = cache.get(component);

  if (!methods[method]) {
    methods[method] = component.method.bind(component);
  }

  return methods[method];
}
