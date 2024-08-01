import { ModalProps } from 'antd';
import { FC } from 'react';
import { ModalBase } from '../../../../components/modal';
import { AddDimensionForm } from '../forms';

interface IAddDimensionModal extends ModalProps {
  onSubmit: (values: any) => void;
}
export const AddDimensionModal: FC<IAddDimensionModal> = ({ onSubmit, ...props }) => {
  return (
    <ModalBase {...props} footer={null}>
      <AddDimensionForm onSubmit={onSubmit} />
    </ModalBase>
  );
};
