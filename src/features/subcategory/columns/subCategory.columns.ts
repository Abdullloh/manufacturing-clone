import { TableProps } from 'antd';
import { formatDate } from 'date-fns';
import { ISubcategory } from '../models';

export const SUB_CATEGORY_COLUMNS: TableProps<ISubcategory>['columns'] = [
  {
    title: 'Subkategoriya nomi',
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
