import { TableProps } from 'antd';
import { formatDateClient } from '../../../shared/utils';
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
    render: (value) => formatDateClient(value),
  },
  {
    title: 'Chiqib ketish vaqti',
    key: 'out_date',
    dataIndex: 'out_date',
    render: (value) => formatDateClient(value),
  },
];
