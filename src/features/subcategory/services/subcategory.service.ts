import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { ISubcategory } from '../models';

export const subCategoryApi = createApi({
  reducerPath: 'subCategoryApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createSubCategory: builder.mutation<any, { sub_category_name: string; category_id: string }>({
      query: ({ sub_category_name, category_id }) => ({
        url: '/sub-category/create',
        method: 'POST',
        body: { sub_category_name, category_id },
      }),
    }),
    getSubCategoryList: builder.query<ISubcategory[], void>({
      query: () => '/sub-category/list',
    }),
    getSubCategoryItem: builder.mutation<
      { id: string; name: string; is_deleted: boolean }[],
      { id: string }
    >({
      query: ({ id }) => ({
        url: '/sub-category/get-one',
        method: 'POST',
        body: {
          id,
        },
      }),
    }),
  }),
});

export const {
  useCreateSubCategoryMutation,
  useGetSubCategoryListQuery,
  useGetSubCategoryItemMutation,
} = subCategoryApi;
