import { TableProps } from 'antd';
import { formatDateClient } from '../../../shared/utils';
import { IDimension } from '../models';

export const DIMENSIONS_COLUMNS: TableProps<IDimension>['columns'] = [
  {
    title: 'Subkategoriya nomi',
    dataIndex: 'sub_category_name',
    key: 'sub_category_name',
  },
  {
    title: "O'lchov birligi nomi",
    dataIndex: 'valume_type_name',
    key: 'valume_type_name',
  },
  {
    title: 'Yaratilgan vaqtI',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDateClient(value),
  },
];
