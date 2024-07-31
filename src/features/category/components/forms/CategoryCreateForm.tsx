import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { FormComponent } from '../../../../components/form';

type FieldType = {
  category_name?: string;
};

interface ICategoryCreateForm {
  onSubmit: (values: any) => void;
}

export const CategoryCreateForm: FC<ICategoryCreateForm> = ({ onSubmit }) => {
  return (
    <FormComponent onFinish={onSubmit} name="categoryCreateForm" layout="vertical">
      <Form.Item<FieldType>
        label="Category Name"
        name="category_name"
        rules={[{ required: true, message: 'Iltimos kategoriya nomini kiriting!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </FormComponent>
  );
};
