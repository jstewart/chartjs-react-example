import { useCallback, useRef } from 'react';

export const useHookWithRefCallback = (onMountCallback) => {
  const ref = useRef(null);
  const setRef = useCallback(
    (node) => {
      if (node) {
        onMountCallback(node);
      }
      ref.current = node;
    },
    [onMountCallback]
  );

  return setRef;
};
