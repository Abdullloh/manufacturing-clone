import { TableProps } from 'antd';
import { formatDate } from 'date-fns';
import { ICategoryResponse } from '../models';

export const CATEGORY_COLUMNS: TableProps<ICategoryResponse>['columns'] = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Yaratilgan vaqt',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDate(value, 'dd-mm-yyyy'),
  },
];
