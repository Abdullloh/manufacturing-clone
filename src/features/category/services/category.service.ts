import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { ICategoryResponse, ICategoryResponseItem } from '../models';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createCategory: builder.mutation<any, { category_name: string }>({
      query: ({ category_name }) => ({
        url: '/category/create',
        method: 'POST',
        body: { category_name },
      }),
    }),
    getCategoryList: builder.query<ICategoryResponse[], IQuery>({
      query: (body) => ({
        url: '/category/list',
        method: 'POST',
        body,
      }),
    }),
    getCategoryItem: builder.mutation<ICategoryResponseItem, { id: string }>({
      query: ({ id }) => ({
        url: '/category/get-one',
        body: { id },
        method: 'POST',
      }),
    }),
    deleteCategory: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/category/delete',
        body: { id },
        method: 'POST',
      }),
    }),
    updateCategory: builder.mutation<ICategoryResponseItem, { id: string }>({
      query: ({ id }) => ({
        url: '/category/update',
        body: { id },
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryListQuery,
  useGetCategoryItemMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
