import { TableProps } from 'antd';
import { ISubcategory } from '../models';

export const SUB_CATEGORY_COLUMNS: TableProps<ISubcategory>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
];
