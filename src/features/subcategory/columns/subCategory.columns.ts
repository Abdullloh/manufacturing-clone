import { TableProps } from 'antd';
import { formatDateClient } from '../../../shared/utils';
import { ISubcategory } from '../models';

export const SUB_CATEGORY_COLUMNS: TableProps<ISubcategory>['columns'] = [
  {
    title: 'Kategoriya nomi',
    dataIndex: 'category_name',
    key: 'category_name',
  },
  {
    title: 'Subkategoriya nomi',
    dataIndex: 'sub_category_name',
    key: 'sub_category_name',
  },
  {
    title: 'Yaratilgan vaqtI',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDateClient(value),
  },
];
