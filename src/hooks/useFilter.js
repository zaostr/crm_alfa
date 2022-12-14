import {useState} from 'react'
import { useDebounce } from './useDebounce'

export const useFilter = (items, filterProp) => {
    const [enteredSearchValue, setEnteredSearchValue] = useState('');
    const activeSearchValue = useDebounce(enteredSearchValue, 500);

    const availableItems = activeSearchValue
        ? items.filter((item) => RegExp(activeSearchValue, "i").test(item[filterProp]))
        : items;
        
  return {
    enteredSearchValue, 
    setEnteredSearchValue,
    availableItems
  }
}
