import { Button } from 'antd';
import { FC } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FormComponent, InputController } from '../../../../shared/components';
import {
  CategorySelectController,
  SubCategorySelectController,
} from '../../../../shared/components/selects';

interface IAddDimensionsForm {
  onSubmit: (values: any) => void;
  defaultValues: any;
}

export const AddDimensionForm: FC<IAddDimensionsForm> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit } = useForm<any>({
    defaultValues,
  });

  const categoryId = useWatch({ control, name: 'category_id' });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <CategorySelectController control={control} name="category_id" />
      <SubCategorySelectController control={control} name="sub_category_id" id={categoryId} />
      <InputController control={control} name="valume_type_name" label="O'lchov birligi nomi" />
      <Button type="primary" htmlType="submit">
        Qo'shish
      </Button>
    </FormComponent>
  );
};
