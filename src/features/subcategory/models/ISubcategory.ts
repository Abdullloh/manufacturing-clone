import { IDimension } from '../../dimensions/models';

export interface ISubcategory {
  name: string;
  id: string;
  is_deleted: boolean;
  created_at: string;
}

export interface ISubcategoryItem extends ISubcategory {
  valume_types: IDimension[];
}
