import { Flex, ModalProps, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { useGetSubCategoryItemMutation } from '../../services';
import { SubCategoryCreateForm } from '../forms';

interface ISubCategorAddModal extends ModalProps {
  onSubmit: (values: any) => void;
  id: string;
}

export const SubCategoryAddModal: FC<ISubCategorAddModal> = ({ onSubmit, id, ...props }) => {
  const [values, setValues] = useState<any>();
  const [getSubcategoryItem, { isLoading }] = useGetSubCategoryItemMutation();

  useEffect(() => {
    if (id) {
      getSubcategoryItem({ id }).then((response) => setValues(response.data));
    }
  }, [id]);
  return (
    <ModalBase {...props} footer={null}>
      {isLoading ? (
        <Flex align="center" justify="center">
          <Spin />
        </Flex>
      ) : (
        <SubCategoryCreateForm defaultValues={values} onSubmit={onSubmit} />
      )}
    </ModalBase>
  );
};
