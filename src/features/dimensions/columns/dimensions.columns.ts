import { TableProps } from 'antd';
import { formatDate } from 'date-fns';
import { IDimension } from '../models';

export const DIMENSIONS_COLUMNS: TableProps<IDimension>['columns'] = [
  {
    title: "O'lchov birligi nomi",
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Yaratilgan vaqtI',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDate(value || new Date(), 'dd-mm-yyyy'),
  },
];
