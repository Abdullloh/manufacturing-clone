import { Form, FormItemProps, InputNumber } from 'antd';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IInpuNumberController extends FormItemProps {
  name: string;
  label: string;
  control: Control<any, any>;
}

export const InputNumberController: FC<IInpuNumberController> = ({
  name,
  control,
  label,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Form.Item name={name} label={label} {...props}>
          <InputNumber {...field} />
        </Form.Item>
      )}
    />
  );
};
