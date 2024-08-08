import { IDimension } from '../../dimensions/models';

export interface ISubcategory {
  sub_category_name: string;
  id: string;
  category_name: string;
  created_at: string;
}

export interface ISubcategoryItem extends ISubcategory {
  valume_types: IDimension[];
}
