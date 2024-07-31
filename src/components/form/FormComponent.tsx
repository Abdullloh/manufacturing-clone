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
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      {...props}
    >
      {children}
    </Form>
  );
};
