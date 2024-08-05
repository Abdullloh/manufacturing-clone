import { ISubcategory } from '../../subcategory/models';

export interface ICategoryResponse {
  id: string;
  name: string;
  is_deleted: boolean;
  created_at: string;
}

export interface ICategoryResponseItem {
  id: string;
  name: string;
  is_deleted: boolean;
  created_at: string;
  sub_categories: ISubcategory[];
}
