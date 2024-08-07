import { Form, FormItemProps, Input } from 'antd';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IInputController extends FormItemProps {
  name: string;
  label: string;
  control: Control<any, any>;
}

export const InputController: FC<IInputController> = ({ name, control, label, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Form.Item name={name} label={label} {...props}>
          <Input {...field} />
        </Form.Item>
      )}
    />
  );
};
