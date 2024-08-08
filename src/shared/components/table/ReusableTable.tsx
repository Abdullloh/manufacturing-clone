import { DeleteFilled, EditFilled, QrcodeOutlined } from '@ant-design/icons';
import { Button, Flex, Table, TableColumnsType, TableProps } from 'antd';

interface IReusableTable<T> extends TableProps<T> {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  showScannerIcon?: boolean;
  onScanShow?: (id: string) => void;
}

export const ReusableTable = <T extends {}>({
  onDelete,
  onEdit,
  onScanShow = () => {},
  columns,
  showScannerIcon = false,
  ...props
}: IReusableTable<T>) => {
  const extendedColumns: TableColumnsType<T> = [
    ...columns!,
    {
      title: 'Tahrirlash',
      key: 'action',
      render: (text: any, record: any) => (
        <Flex gap={10}>
          <Button onClick={() => onEdit(record.id)}>
            <EditFilled />
          </Button>
          <Button onClick={() => onDelete(record.id)}>
            <DeleteFilled />
          </Button>
          {showScannerIcon && (
            <Button onClick={() => onScanShow(record.id)}>
              <QrcodeOutlined />
            </Button>
          )}
        </Flex>
      ),
    },
  ];

  return <Table columns={extendedColumns} {...props} bordered />;
};
