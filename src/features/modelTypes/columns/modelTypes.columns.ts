import { TableProps } from 'antd';
import { formatDate } from 'date-fns';
import { IModelType } from '../models';

export const MODEL_TYPES_COLUMNS: TableProps<IModelType>['columns'] = [
  {
    title: 'Model nomi',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Yaratilgan vaqtI',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDate(value, 'dd-mm-yyyy'),
  },
];
