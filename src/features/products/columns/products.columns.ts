import { TableProps } from 'antd';
import { IProduct } from '../models';

export const PRODUCT_COLUMNS: TableProps<IProduct>['columns'] = [
  {
    title: 'Mahsulot nomi',
    key: 'name',
    dataIndex: 'product_name',
  },
  {
    title: 'Kategoriya',
    key: 'category_name',
    dataIndex: 'category_name',
  },
  {
    title: 'Subkategoriya',
    key: 'sub_category_name',
    dataIndex: 'sub_category_name',
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
    title: 'Narxi',
    key: 'price',
    dataIndex: 'price',
  },
  {
    title: 'Soni',
    key: 'value',
    dataIndex: 'value',
  },
];
