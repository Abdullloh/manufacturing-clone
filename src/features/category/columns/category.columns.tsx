import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Flex, TableProps } from 'antd';
import { ICategoryResponse } from '../models';

export const CATEGORY_COLUMNS: TableProps<ICategoryResponse>['columns'] = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Tahrirlash',
    key: 'index',
    render: () => (
      <Flex gap={2}>
        <EditFilled />
        <DeleteFilled />
      </Flex>
    ),
  },
];
