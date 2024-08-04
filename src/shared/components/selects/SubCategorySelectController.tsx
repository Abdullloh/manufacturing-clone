import { FC } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { useGetSubCategoryListQuery } from '../../../features/subcategory/services';
import { IOption } from '../../models';

interface ISubCategorySelectController {
  name: string;
  control: Control<any, any>;
}

export const SubCategorySelectController: FC<ISubCategorySelectController> = ({
  name,
  control,
}) => {
  const { data } = useGetSubCategoryListQuery();

  const options: IOption[] = data?.map(({ name: label, id: value }) => ({ label, value })) || [];

  return (
    <SelectController
      label="Sub Kategoriya tanlash"
      options={options}
      control={control}
      name={name}
    />
  );
};
