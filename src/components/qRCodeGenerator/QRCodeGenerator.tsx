import React, { FC } from 'react';
import QRCode from 'react-qr-code';

interface IQRCodeGenerator {
  value: string;
}
export const QRCodeGenerator: FC<IQRCodeGenerator> = ({ value }) => {
  return <QRCode value={value} />;
};
