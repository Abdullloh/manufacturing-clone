export interface IDimension {
  valume_type_name: string;
  sub_category_id: string;
  id: string;
  is_deleted: boolean;
}

export interface IDimensionListResponse {
  id: string;
  valume_type_name: string;
  sub_category_name: string;
  created_at: string;
}

export interface IDimensionItem {
  created_at: string;
  id: string;
  sub_category_id: string;
  valume_type_name: string;
}
