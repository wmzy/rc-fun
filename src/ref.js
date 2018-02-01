export default function ref(component, key) {
  return instance => {
    component[key] = instance;
  }
}

// see https://github.com/facebook/react/issues/6974

export function innerRefWithKeys(wrapKeys) {
  return (component, key) => instance => {
    checkInner: for(const k of wrapKeys) {
      if (instance[k]) {
        if (typeof instance[k] === 'function') {
          instance = instance[k]();
        } else {
          instance = instance[k];
        }
        continue checkInner;
      }
    }
    component[key] = instance;
  }
}

export const innerRef = innerRefWithKeys([
  'innerRef',
  'getInstance',
  'getWrappedInstance'
])
