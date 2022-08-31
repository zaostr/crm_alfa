import {useEffect, useState, useState} from 'react'

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue
}
