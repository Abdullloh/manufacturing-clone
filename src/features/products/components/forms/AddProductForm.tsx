import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from '../../../../components/form';
import { InputController, SelectController } from '../../../../components/input';
interface IAddProductForm {
  onSubmit: (values: any) => void;
}
export const AddProductForm: FC<IAddProductForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <SelectController
        control={control}
        label="smth"
        name=""
        options={[{ label: 'asd', value: 'ads' }]}
      />
      <SelectController
        control={control}
        label="smth"
        name=""
        options={[{ label: 'asd', value: 'ads' }]}
      />
      <SelectController
        control={control}
        label="smth"
        name=""
        options={[{ label: 'asd', value: 'ads' }]}
      />
      <InputController control={control} name="category_name" label="Kategoriya nomi" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormComponent>
  );
};
