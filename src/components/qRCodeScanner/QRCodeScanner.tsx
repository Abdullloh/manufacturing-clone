import { FC } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

interface IQRCodeScanner {
  onScan: (scannedData: any) => void;
}

export const QRCodeScanner: FC<IQRCodeScanner> = ({ onScan }) => {
  return <Scanner onScan={onScan} />;
};
