import { Button, Flex } from 'antd';
import { FC } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FormComponent, InputController, SelectController } from '../../../../shared/components';
import {
  CategorySelectController,
  SelectModelTypeController,
  SelectValumeController,
  SubCategorySelectController,
} from '../../../../shared/components/selects';
interface IAddProductForm {
  onSubmit: (values: any) => void;
}
export const AddProductForm: FC<IAddProductForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<any>({
    defaultValues: {},
  });

  const categoryId = useWatch({ control, name: 'category_id' });
  const subCategoryId = useWatch({ control, name: 'sub_category_id' });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <InputController control={control} name="product_name" label="Mahsulot nomi" />
      <CategorySelectController control={control} name="category_id" />
      <SubCategorySelectController control={control} name="sub_category_id" id={categoryId} />
      <SelectValumeController control={control} name="valume_type_id" id={subCategoryId} />
      <InputController control={control} name="value" label="Miqdori" />
      <InputController control={control} name="color" label="Rangi" />
      <InputController control={control} name="code" label="Kodi" />
      <Flex gap={5}>
        <InputController control={control} name="price" label="Narxi" />
        <SelectController
          control={control}
          name="currency_type"
          label="Valyuta"
          options={[
            { label: "S'om", value: '0' },
            { label: 'Dollar', value: '1' },
          ]}
        />
      </Flex>
      <SelectModelTypeController control={control} name="model_id" />
      <Button type="primary" htmlType="submit">
        Qo'shish
      </Button>
    </FormComponent>
  );
};
