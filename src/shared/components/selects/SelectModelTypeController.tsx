import { FC } from 'react';
import { Control } from 'react-hook-form';
import { SelectController } from '../../../components/input';
import { useGetModelTypeListQuery } from '../../../features/modelTypes/services';
import { IOption } from '../../models';

interface ISelectModelTypeController {
  name: string;
  control: Control<any, any>;
}

export const SelectModelTypeController: FC<ISelectModelTypeController> = ({ name, control }) => {
  const { data } = useGetModelTypeListQuery();

  const options: IOption[] = data?.map(({ name: label, id: value }) => ({ label, value })) || [];

  return (
    <SelectController
      label="Model turini tanlash"
      options={options}
      control={control}
      name={name}
    />
  );
};
