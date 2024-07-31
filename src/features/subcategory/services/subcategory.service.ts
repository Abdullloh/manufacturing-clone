import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';

export const subCategoryApi = createApi({
  reducerPath: 'subCategoryApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createSubCategory: builder.mutation<any, { category_name: string }>({
      query: ({ category_name }) => ({
        url: '/sub-category/create',
        method: 'POST',
        body: { category_name },
      }),
    }),
  }),
});

export const { useCreateSubCategoryMutation } = subCategoryApi;
