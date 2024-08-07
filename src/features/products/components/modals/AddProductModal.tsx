import { ModalProps } from 'antd';
import { FC } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { AddProductForm } from '../forms';

interface IAddProductModal extends ModalProps {
  onSubmit: (values: any) => void;
}

export const AddProductModal: FC<IAddProductModal> = ({ onSubmit, ...props }) => {
  return (
    <ModalBase {...props} footer={null}>
      <AddProductForm onSubmit={onSubmit} />
    </ModalBase>
  );
};
