import { TableProps } from 'antd';
import { IProduct } from '../models';

export const PRODUCT_COLUMNS: TableProps<IProduct>['columns'] = [
  {
    title: 'Nomi',
    key: 'name',
    dataIndex: 'product_name',
  },
  {
    title: 'Rangi',
    key: 'color',
    dataIndex: 'color',
  },
  {
    title: 'Kodi',
    key: 'code',
    dataIndex: 'code',
  },
  {
    title: 'Soni',
    key: 'value',
    dataIndex: 'value',
  },
];
