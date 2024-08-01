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
        label="Kategoriya nomi"
        name="category_name"
        options={[
          { label: 'Zamok', value: '1' },
          { label: 'Tugma', value: '2' },
        ]}
      />
      <SelectController
        control={control}
        label="Sub kategoriya"
        name="sub_category"
        options={[
          { label: 'Kok', value: '1' },
          { label: 'Sariq', value: '2' },
        ]}
      />
      <SelectController
        control={control}
        label="O'lchov birliklari"
        name="dimensions"
        options={[
          { label: 'Dona', value: '1' },
          { label: 'Kg', value: '2' },
        ]}
      />
      <InputController control={control} name="valume" label="Hajmi" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormComponent>
  );
};
