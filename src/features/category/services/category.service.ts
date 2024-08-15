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
        body: { ...body, limit: 1000000 },
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
    getCategoryExcel: builder.mutation<Blob, IQuery>({
      query: (body) => ({
        url: '/category/excel',
        method: 'POST',
        body,
        responseHandler: async (response) =>
          window.location.assign(window.URL.createObjectURL(await response.blob())),
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryListQuery,
  useGetCategoryExcelMutation,
  useGetCategoryItemMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
