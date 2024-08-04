import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';

export const subCategoryApi = createApi({
  reducerPath: 'subCategoryApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createSubCategory: builder.mutation<any, { sub_category_name: string }>({
      query: ({ sub_category_name }) => ({
        url: '/sub-category/create',
        method: 'POST',
        body: { sub_category_name },
      }),
    }),
    getSubCategoryList: builder.query<{ id: string; name: string; is_deleted: boolean }[], void>({
      query: () => '/sub-category/list',
    }),
  }),
});

export const { useCreateSubCategoryMutation, useGetSubCategoryListQuery } = subCategoryApi;
