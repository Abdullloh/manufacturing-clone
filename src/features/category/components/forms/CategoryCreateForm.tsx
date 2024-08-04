import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from '../../../../components/form';
import { InputController } from '../../../../components/input';

interface ICategoryCreateForm {
  onSubmit: (values: any) => void;
}

export const CategoryCreateForm: FC<ICategoryCreateForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <InputController control={control} name="category_name" label="Kategoriya nomi" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormComponent>
  );
};
