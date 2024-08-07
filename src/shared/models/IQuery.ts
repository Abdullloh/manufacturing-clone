export interface IQuery {
  keyword?: string;
  from_date?: string;
  to_date?: string;
  is_deleted?: boolean;
  page?: number;
  limit?: number;
}
