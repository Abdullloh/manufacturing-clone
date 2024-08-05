import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from '../../../../components/form';
import { InputController } from '../../../../components/input';
import { CategorySelectController } from '../../../../shared/components/selects';

interface ISubCategoryCreateForm {
  onSubmit: (values: any) => void;
}

export const SubCategoryCreateForm: FC<ISubCategoryCreateForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
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
