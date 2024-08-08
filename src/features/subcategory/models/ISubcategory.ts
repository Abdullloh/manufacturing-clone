export interface ISubcategory {
  name: string;
  id: string;
  category_name: string;
  created_at: string;
}

export interface ISubcategoryItem extends ISubcategory {
  valume_types: {
    created_at: string;
    id: string;
    is_deleted: boolean;
    name: string;
    sub_category_id: string;
  }[];
}
