import { Form, Select } from 'antd';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface ISelectController {
  name: string;
  label: string;
  control: Control<any, any>;
  options: { label: string; value: string }[];
}

export const SelectController: FC<ISelectController> = ({ name, control, label, options }) => {
  return (
    <Form.Item name={name} label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Select options={options} {...field} />}
      />
    </Form.Item>
  );
};
