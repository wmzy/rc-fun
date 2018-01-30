const cache = WeakMap();

export default function switchState(component, key) {
  if (!cache.has(component)) {
    cache.set(component, {});
  }

  const methods = cache.get(component);

  if (!methods[method]) {
    methods[method] = () => component.setState({[key]: !component.state[key]});
  }

  return methods[method];
}


