import { FC, useEffect, useState } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { ISubcategoryItem } from '../../../features/subcategory/models';
import { useGetSubCategoryItemMutation } from '../../../features/subcategory/services';
import { IOption } from '../../models';

interface ISelectValumeController {
  name: string;
  control: Control<any, any>;
  id?: string;
}

export const SelectValumeController: FC<ISelectValumeController> = ({ name, control, id }) => {
  const [getValumes] = useGetSubCategoryItemMutation();
  const [data, setData] = useState<ISubcategoryItem>();

  const options: IOption[] =
    data?.valume_types.map(({ name: label, id: value }) => ({ label, value })) || [];

  useEffect(() => {
    if (id) {
      getValumes({ id }).then((res) => setData(res.data));
    }
  }, [id, getValumes]);

  return (
    <SelectController
      label="O'lchov birligi tanlash"
      options={options}
      control={control}
      name={name}
    />
  );
};
