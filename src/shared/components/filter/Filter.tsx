import { DatePicker, Flex, Input } from 'antd';
import { ChangeEvent, FC } from 'react';
const { RangePicker } = DatePicker;

interface IFilter {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRangeChange: (dates: any, dateString: any) => void;
}

export const Filter: FC<IFilter> = ({ handleInputChange, handleRangeChange }) => {
  return (
    <Flex justify="flex-end" style={{ marginBottom: 10 }} gap={5}>
      <Input onChange={handleInputChange} placeholder="Qidiruv" />
      <RangePicker onChange={handleRangeChange} />
    </Flex>
  );
};
