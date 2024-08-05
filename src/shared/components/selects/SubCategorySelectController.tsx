import { FC, useEffect, useState } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { ICategoryResponseItem } from '../../../features/category/models';
import { useGetCategoryItemMutation } from '../../../features/category/services';
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
  const [getCotegories] = useGetCategoryItemMutation();
  const [data, setData] = useState<ICategoryResponseItem>();

  const options: IOption[] = data?.sub_categories?.map((item) => ({
    label: item?.name,
    value: item?.id,
  })) || [{ label: 'No data', value: '0' }];

  useEffect(() => {
    if (id) {
      getCotegories({ id }).then((res) => setData(res.data));
    }
  }, [id, getCotegories]);

  return (
    <SelectController
      label="Sub Kategoriya tanlash"
      options={options}
      control={control}
      name={name}
    />
  );
};
