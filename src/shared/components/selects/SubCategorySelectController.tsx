import { FC } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { useGetSubCategoryListQuery } from '../../../features/subcategory/services';
import { IOption } from '../../models';

interface ISubCategorySelectController {
  name: string;
  control: Control<any, any>;
  id?: string;
}

export const SubCategorySelectController: FC<ISubCategorySelectController> = ({
  name,
  control,
  id,
}) => {
  const { data } = useGetSubCategoryListQuery();

  const options: IOption[] = data?.map(({ name: label, id: value }) => ({ label, value })) || [];

  // useEffect(() => {
  //   if (id) {
  //     fetchData({ id });
  //   }
  // }, [id, fetchData]);

  return (
    <SelectController
      label="Sub Kategoriya tanlash"
      options={options}
      control={control}
      name={name}
    />
  );
};
