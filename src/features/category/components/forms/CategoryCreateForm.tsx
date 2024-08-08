import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent, InputController } from '../../../../shared/components';

interface ICategoryCreateForm {
  onSubmit: (values: any) => void;
  defaultValues: any;
}

export const CategoryCreateForm: FC<ICategoryCreateForm> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit } = useForm<any>({
    defaultValues,
    shouldUnregister: true,
  });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <InputController control={control} name="category_name" label="Kategoriya nomi" />
      <Button type="primary" htmlType="submit">
        Qo'shish
      </Button>
    </FormComponent>
  );
};
