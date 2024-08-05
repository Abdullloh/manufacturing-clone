import { Button, Flex, ModalProps } from 'antd';
import { FC } from 'react';
import { QRCodeGenerator } from '../../../../components';
import { ModalBase } from '../../../../components/modal';

interface IShowQrCodeModal extends ModalProps {
  value: string;
  onPrintQrCode: () => void;
}
export const ShowQrCodeModal: FC<IShowQrCodeModal> = ({ value, onPrintQrCode, ...props }) => {
  return (
    <ModalBase {...props} footer={null}>
      <QRCodeGenerator value={value} />
      <Flex justify="center" style={{ marginTop: 20 }}>
        <Button type="primary" onClick={onPrintQrCode}>
          QRCode chop etish
        </Button>
      </Flex>
    </ModalBase>
  );
};
