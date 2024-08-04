import { TableProps } from 'antd';
import { IDimension } from '../models';

export const DIMENSIONS_COLUMNS: TableProps<IDimension>['columns'] = [
  {
    dataIndex: 'name',
    title: 'Nomi',
    key: 'name',
  },
];
