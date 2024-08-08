import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent, InputController } from '../../../../shared/components';
import { CategorySelectController } from '../../../../shared/components/selects';

interface ISubCategoryCreateForm {
  onSubmit: (values: any) => void;
  defaultValues: any;
}

export const SubCategoryCreateForm: FC<ISubCategoryCreateForm> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <CategorySelectController control={control} name="category_id" />
      <InputController control={control} name="sub_category_name" label="Subkategoriya nomi" />
      <Button type="primary" htmlType="submit">
        Qo'shish
      </Button>
    </FormComponent>
  );
};
