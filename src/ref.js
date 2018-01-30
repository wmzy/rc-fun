export default function ref(component, key) {
  return instance => {
    component[key] = instance;
  }
}

export function innerRef(wrapKeys) {
  return (component, key) => instance => {
    checkInner: for(const k of wrapKeys) {
      if (instance[k]) {
        instance = instance[k];
        continue checkInner;
      }
    }
    component[key] = instance;
  }
}
