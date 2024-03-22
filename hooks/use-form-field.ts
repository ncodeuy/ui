'use client';

import { ChangeEvent, useCallback, useState } from "react";
import useToggle from './use-toggle';
import { ZodSchema } from "zod";

export interface FieldConfig {
  schema?: ZodSchema;
  disabled?: boolean;
}

export type Field = ReturnType<typeof useFormField>;

export default function useFormField<T = string>(initialValue: T, config: FieldConfig = {}) {
  const [value, setValue] = useState(initialValue);
  const [isDisabled, setIsDisabled] = useState(config.disabled || false);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setDirty = useCallback(() => {
    setIsDirty(true);
  }, []); 

  const disable = useCallback(() => setIsDisabled(true), []);
  const enable = useCallback(() => setIsDisabled(false), []);

  const onChange = useCallback((value: any) => {
    setValue(value);

    try {
      if (config.schema) config.schema.parse(value);
      setError(null);
    }
    catch (e) {
      setError(e.issues[0].message);
    }
  }, [config.schema]);

  return { 
    value, 
    onChange, 
    error ,
    isDirty, 
    setDirty, 
    disabled: isDisabled, 
    disable, 
    enable,  
  };
}