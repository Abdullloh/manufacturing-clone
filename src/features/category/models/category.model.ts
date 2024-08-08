import { ISubcategory } from '../../subcategory/models';

export interface ICategoryResponse {
  id: string;
  name: string;
  is_deleted: boolean;
  created_at: string;
}

export interface ICategoryResponseItem {
  id: string;
  category_name: string;
  sub_categories: ISubcategory[];
}
