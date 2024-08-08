import { TableProps } from 'antd';
import { formatDate } from 'date-fns';
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
    render: (value) => formatDate(value || new Date(), 'dd-mm-yyyy'),
  },
];
