import { Form, Input } from 'antd';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IInputController {
  name: string;
  control: Control<any, any>;
  label?: string;
}

export const InputController: FC<IInputController> = ({ name, control, label }) => {
  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return <Input {...field} />;
        }}
      />
    </Form.Item>
  );
};
