import { TableProps } from 'antd';
import { formatDateClient } from '../../../shared/utils';
import { ICategoryResponse } from '../models';

export const CATEGORY_COLUMNS: TableProps<ICategoryResponse>['columns'] = [
  {
    title: 'Kategoriya nomi',
    key: 'name',
    dataIndex: 'category_name',
  },
  {
    title: 'Yaratilgan vaqtI',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDateClient(value),
  },
];
