'use client';

import { useCallback, useState } from "react";

export default function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);
  const toggleState = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, toggleState];
}