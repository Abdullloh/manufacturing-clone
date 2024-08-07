import { ChangeEvent, useState } from 'react';
import useDebounce from './useDebaunce';

export const useFilter = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [date, setDate] = useState<string[]>([]);
  const debouncedValue = useDebounce(inputValue, 1500);

  const debounceDateRange = useDebounce(date, 1500);
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
