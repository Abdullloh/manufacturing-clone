import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from '../../../../components/form';
import { InputController } from '../../../../components/input';

interface IAddModalTypeForm {
  onSubmit: (values: any) => void;
}

export const AddModelTypeForm: FC<IAddModalTypeForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <InputController control={control} name="model_name" label="Model nomi" />
      <Button type="primary" htmlType="submit">
        Qo'shish
      </Button>
    </FormComponent>
  );
};
