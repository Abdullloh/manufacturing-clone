import { ModalProps } from 'antd';
import { FC } from 'react';
import { ModalBase } from '../../../../components/modal';
import { CategoryCreateForm } from '../forms';

interface ICategorAddModal extends ModalProps {
  onSubmit: (values: any) => void;
}

export const CategoryAddModal: FC<ICategorAddModal> = ({ onSubmit, ...props }) => {
  return (
    <ModalBase {...props} footer={null}>
      <CategoryCreateForm onSubmit={onSubmit} />
    </ModalBase>
  );
};
