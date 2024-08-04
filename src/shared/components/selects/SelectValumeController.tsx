import { FC } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { useGetValumeTypeListQuery } from '../../../features/dimensions/services';
import { IOption } from '../../models';

interface ISelectValumeController {
  name: string;
  control: Control<any, any>;
  id?: string;
}

export const SelectValumeController: FC<ISelectValumeController> = ({ name, control, id }) => {
  const { data } = useGetValumeTypeListQuery();

  const options: IOption[] = data?.map(({ name: label, id: value }) => ({ label, value })) || [];

  //   useEffect(() => {
  //     if (id) {
  //       fetchData({ id });
  //     }
  //   }, [id, fetchData]);

  return (
    <SelectController
      label="O'lchov birligi tanlash"
      options={options}
      control={control}
      name={name}
    />
  );
};
