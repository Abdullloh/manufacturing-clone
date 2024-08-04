import { FC } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { useGetCategoryListQuery } from '../../../features/category/services';
import { IOption } from '../../models';

interface ICategorySelect {
  name: string;
  control: Control<any, any>;
}

export const CategorySelectController: FC<ICategorySelect> = ({ name, control }) => {
  const { data } = useGetCategoryListQuery({});

  const options: IOption[] = data?.map(({ name: label, id: value }) => ({ label, value })) || [];

  return (
    <SelectController label="Kategoriya tanlash" options={options} control={control} name={name} />
  );
};
