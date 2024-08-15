import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { ISubcategory, ISubcategoryItem } from '../models';

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
    deleteSubCategory: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/sub-category/delete',
        method: 'POST',
        body: { id },
      }),
    }),
    updateSubCategory: builder.mutation<
      any,
      { sub_category_name: string; category_id: string; id: string }
    >({
      query: ({ sub_category_name, category_id, id }) => ({
        url: '/sub-category/update',
        method: 'POST',
        body: { sub_category_name, category_id, id },
      }),
    }),
    getSubCategoryList: builder.query<{ total: number; data: ISubcategory[] }, IQuery>({
      query: (body) => ({
        url: '/sub-category/list',
        method: 'POST',
        body: { ...body, limit: 1000000 },
      }),
    }),
    getSubCategoryItem: builder.mutation<ISubcategoryItem, { id: string }>({
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
  useDeleteSubCategoryMutation,
  useUpdateSubCategoryMutation,
} = subCategoryApi;
