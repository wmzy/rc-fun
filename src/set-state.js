const cache = WeakMap();

export default function setState(component, key, value) {
  if (!cache.has(component)) {
    cache.set(component, {});
  }

  const methods = cache.get(component);

  if (!methods[method]) {
    methods[method] = () => component.setState({[key]: value});
  }

  return methods[method];
}

