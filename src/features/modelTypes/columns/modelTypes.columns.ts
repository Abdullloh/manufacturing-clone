import { TableProps } from 'antd';
import { IModelType } from '../models';

export const MODEL_TYPES_COLUMNS: TableProps<IModelType>['columns'] = [
  {
    title: 'Nomi',
    key: 'name',
    dataIndex: 'name',
  },
];
