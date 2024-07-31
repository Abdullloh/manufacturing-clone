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
    <Form
      name={name}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      {...props}
    >
      {children}
    </Form>
  );
};
