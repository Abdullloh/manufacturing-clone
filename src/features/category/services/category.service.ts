import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { ICategory, ICategoryResponse, ICategoryResponseItem } from '../models';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createCategory: builder.mutation<any, ICategory>({
      query: ({ category_name }) => ({
        url: '/category/create',
        method: 'POST',
        body: { category_name },
      }),
    }),
    getCategoryList: builder.query<{ total: number; data: ICategoryResponse[] }, IQuery>({
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
    updateCategory: builder.mutation<ICategoryResponseItem, ICategory>({
      query: (body) => ({
        url: '/category/update',
        method: 'POST',
        body,
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
