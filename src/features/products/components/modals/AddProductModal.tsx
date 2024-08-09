import { Flex, ModalProps, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { useGetProductItemMutation } from '../../services';
import { AddProductForm } from '../forms';

interface IAddProductModal extends ModalProps {
  onSubmit: (values: any) => void;
  id?: string;
}

export const AddProductModal: FC<IAddProductModal> = ({ onSubmit, id, ...props }) => {
  const [values, setValues] = useState<any>();
  const [getProductItem, { isLoading }] = useGetProductItemMutation();

  useEffect(() => {
    if (id) {
      getProductItem({ id }).then((res) => setValues(res.data));
    }
  }, [id, getProductItem]);

  return (
    <ModalBase {...props} footer={null}>
      {isLoading ? (
        <Flex align="center" justify="center">
          <Spin />
        </Flex>
      ) : (
        <AddProductForm defaultValues={values} onSubmit={onSubmit} />
      )}
    </ModalBase>
  );
};
