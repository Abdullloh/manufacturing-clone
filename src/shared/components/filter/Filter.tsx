import { DatePicker, Flex, Input } from 'antd';
import { ChangeEvent, FC, useState } from 'react';
import useDebounce from '../../hooks/useDebaunce';
const { RangePicker } = DatePicker;

export const Filter: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const debouncedValue = useDebounce(inputValue, 500);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  console.log(debouncedValue);

  return (
    <Flex justify="flex-end" style={{ marginBottom: 10 }} gap={5}>
      <Input onChange={handleChangeInput} placeholder="Qidiruv" />
      <RangePicker />
    </Flex>
  );
};
