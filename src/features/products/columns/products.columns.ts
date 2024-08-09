import { TableProps } from 'antd';
import { IProduct } from '../models';

export const PRODUCT_COLUMNS: TableProps<IProduct>['columns'] = [
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
    title: 'Valyuta turi',
    key: 'currency_type',
    dataIndex: 'currency_type',
    render: (value) => (value === '0' ? 'Sum' : 'Dollar'),
  },
  {
    title: 'Soni',
    key: 'value',
    dataIndex: 'value',
  },
  {
    title: 'Model',
    key: 'model_name',
    dataIndex: 'model_name',
  },
  {
    title: 'Kirgan vaqti',
    key: 'created_at',
    dataIndex: 'created_at',
  },
  {
    title: 'Chiqib ketish vaqti',
    key: 'exited_date',
    dataIndex: 'exited_date',
  },
];
