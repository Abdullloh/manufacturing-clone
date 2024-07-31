import { Input } from 'antd';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IInputController {
  name: string;
  control: Control<any, any>;
}
export const InputController: FC<IInputController> = ({ name, control }) => {
  return <Controller name={name} control={control} render={({ field }) => <Input {...field} />} />;
};
