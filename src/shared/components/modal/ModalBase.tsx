import { Modal, ModalProps } from 'antd';
import { FC, ReactNode } from 'react';

interface IModalBase extends ModalProps {
  children: ReactNode;
}

export const ModalBase: FC<IModalBase> = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>;
};
