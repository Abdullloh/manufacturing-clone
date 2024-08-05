import { Flex } from 'antd';
import { FC } from 'react';
import QRCode from 'react-qr-code';
import './style.css';
interface IQRCodeGenerator {
  value: string;
}

export const QRCodeGenerator: FC<IQRCodeGenerator> = ({ value }) => {
  return (
    <Flex className="print-section">
      <Flex
        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <QRCode value={`${window.location.host}/products/delete/${value}`} />
      </Flex>
    </Flex>
  );
};
