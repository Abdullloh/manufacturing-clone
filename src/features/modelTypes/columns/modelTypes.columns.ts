import { TableProps } from 'antd';
import { formatDateClient } from '../../../shared/utils';
import { IModelType } from '../models';

export const MODEL_TYPES_COLUMNS: TableProps<IModelType>['columns'] = [
  {
    title: 'Model nomi',
    key: 'model_name',
    dataIndex: 'model_name',
  },
  {
    title: 'Yaratilgan vaqtI',
    key: 'date',
    dataIndex: 'created_at',
    render: (value) => formatDateClient(value),
  },
];
