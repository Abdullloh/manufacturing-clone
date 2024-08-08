import { ChangeEvent, useState } from 'react';
import useDebounce from './useDebaunce';

export const useFilter = (delay: number = 1000) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [date, setDate] = useState<string[]>([]);
  const debouncedValue = useDebounce(inputValue, delay);

  const debounceDateRange = useDebounce(date, delay);
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleRangeChange = (dates: any, dateString: any) => {
    setDate(dateString);
  };

  return {
    handleRangeChange,
    handleChangeInput,
    inputValue,
    from_date: debounceDateRange[0],
    to_date: debounceDateRange[1],
    debouncedValue,
  };
};
