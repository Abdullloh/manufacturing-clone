import { Scanner } from '@yudiel/react-qr-scanner';
import { FC } from 'react';

interface IQRCodeScanner {
  onScan: (scannedData: any) => void;
}

export const QRCodeScanner: FC<IQRCodeScanner> = ({ onScan }) => {
  return <Scanner onScan={onScan} onError={() => {}} />;
};
