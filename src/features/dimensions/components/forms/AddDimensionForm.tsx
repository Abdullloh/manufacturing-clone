import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from '../../../../components/form';
import { InputController, SelectController } from '../../../../components/input';

interface IAddDimensionsForm {
  onSubmit: (values: any) => void;
}

export const AddDimensionForm: FC<IAddDimensionsForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <SelectController
        control={control}
        label="Kategoriya"
        name="category_id"
        options={[{ label: 'Tugma', value: '1' }]}
      />
      <SelectController
        control={control}
        label="SubCategory"
        name="subcategory_id"
        options={[{ label: 'Kok', value: '1' }]}
      />
      <InputController control={control} name="category_name" label="O'lchov birligi nomi" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormComponent>
  );
};
