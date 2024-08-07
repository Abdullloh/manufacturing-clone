import { ModalProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { useGetCategoryItemMutation } from '../../services';
import { CategoryCreateForm } from '../forms';

interface ICategorAddModal extends ModalProps {
  onSubmit: (values: any) => void;
  id: string;
}

export const CategoryAddModal: FC<ICategorAddModal> = ({ onSubmit, id, ...props }) => {
  const [getCategory] = useGetCategoryItemMutation();
  const [values, setValues] = useState<any>();

  useEffect(() => {
    if (id) {
      getCategory({ id }).then((res) => setValues(res.data));
    }
  }, [id, getCategory]);
  return (
    <ModalBase {...props} footer={null}>
      <CategoryCreateForm defaultValues={values} onSubmit={onSubmit} />
    </ModalBase>
  );
};
