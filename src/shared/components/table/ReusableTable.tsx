import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Flex, Table, TableColumnsType, TableProps } from 'antd';

interface IReusableTable<T> extends TableProps<T> {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ReusableTable = <T extends {}>({
  onDelete,
  onEdit,
  columns,
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
        </Flex>
      ),
    },
  ];

  return <Table columns={extendedColumns} {...props} bordered />;
};
