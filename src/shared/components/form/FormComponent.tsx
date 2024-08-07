import { Form, FormProps } from 'antd';
import { FC, ReactNode } from 'react';

interface IFormComponent extends FormProps {
  children: ReactNode;
}

export const FormComponent: FC<IFormComponent> = ({
  onFinish,
  onFinishFailed,
  name,
  children,
  ...props
}) => {
  return (
    <Form name={name} onFinish={onFinish} onFinishFailed={onFinishFailed} {...props}>
      {children}
    </Form>
  );
};
