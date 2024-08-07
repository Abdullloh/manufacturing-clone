import { ModalProps } from 'antd';
import { FC } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { AddModelTypeForm } from '../forms';

interface IAddModalTypeModal extends ModalProps {
  onSubmit: (values: any) => void;
}

export const AddModalTypeModal: FC<IAddModalTypeModal> = ({ onSubmit, ...props }) => {
  return (
    <ModalBase {...props} footer={null}>
      <AddModelTypeForm onSubmit={onSubmit} />
    </ModalBase>
  );
};
