import { ModalProps } from 'antd';
import { FC } from 'react';
import { ModalBase } from '../../../../components/modal';
import { SubCategoryCreateForm } from '../forms';

interface ISubCategorAddModal extends ModalProps {
  onSubmit: (values: any) => void;
}

export const SubCategoryAddModal: FC<ISubCategorAddModal> = ({ onSubmit, ...props }) => {
  return (
    <ModalBase {...props} footer={null}>
      <SubCategoryCreateForm onSubmit={onSubmit} />
    </ModalBase>
  );
};
