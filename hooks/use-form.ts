'use client';

import { useCallback, useEffect, useState } from "react";
import { ZodSchema } from "zod";

export interface FieldConfig {
  schema?: ZodSchema;
  disabled?: boolean;
}

type FlagMap = Record<string, boolean>;

export interface Field {
  disabled: boolean;
  isDirty: boolean;
  value: any;
  error: string | null;
  _timeout: ReturnType<typeof setTimeout> | undefined;
  disable: () => void;
  enable: () => void;
  setDirty: () => void;
  onChange: (value: any) => void;
}

interface Form {
  fields: Record<string, Field>;
  data: Record<string, any>;
  error: string | null;
}


export default function useForm<T = string>(config: Record<string, FieldConfig> = {}) {
  const [data, setData] = useState({});
  const [isDisabled, setIsDisabled] = useState<FlagMap>({});
  const [isDirty, setIsDirty] = useState<FlagMap>({});
  const [error, setError] = useState<Record<string, string | null>>({});
  const form: Form = {
    fields: {},
    get data() { return data },
    get error() {
      return Object.values(error).find(Boolean) || null;
    },
  };
  

  useEffect(() => console.log(data), [data]);

  for (const fieldName in config) {
    
    const field: Field = form.fields[fieldName] = {
      _timeout: undefined,

      get disabled() { return isDisabled[fieldName] || false; },
      get value() { return data[fieldName] || ''; },
      get isDirty() { return isDirty[fieldName] || false; },
      get error() { return error[fieldName] || null; },
      
      disable: useCallback(() => setIsDisabled(state => ({ ...state, [fieldName]: true })), []),
      enable: useCallback(() => setIsDisabled(state => ({ ...state, [fieldName]: false })), []),
      setDirty: useCallback(() => setIsDirty(state => ({ ...state, [fieldName]: true })), []),
      onChange: useCallback((value: any) => { 
        const fieldConfig= config[fieldName];

        setData(data => ({ ...data, [fieldName]: value }));
        
        try {
          if (fieldConfig.schema) fieldConfig.schema.parse(value);
          setError(state => ({ ...state, [fieldName]: null }));
        }
        catch (e) {
          setError(state => ({ ...state, [fieldName]: e.issues[0].message }));
        }
      }, [config.schema]),
    };
  }

  return form;
}