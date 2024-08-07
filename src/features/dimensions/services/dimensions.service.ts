import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { IDimension } from '../models';

export const dimensionsApi = createApi({
  reducerPath: 'dimensionsApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createDimension: builder.mutation<any, { valume_type_name: string; sub_category_id: string }>({
      query: ({ valume_type_name, sub_category_id }) => ({
        url: '/valume-type/create',
        method: 'POST',
        body: { valume_type_name, sub_category_id },
      }),
    }),
    deleteDimension: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/valume-type/delete',
        method: 'POST',
        body: { id },
      }),
    }),
    updateDimension: builder.mutation<any, { valume_type_name: string }>({
      query: ({ valume_type_name }) => ({
        url: '/valume-type/update',
        method: 'POST',
        body: { valume_type_name },
      }),
    }),
    getValumeTypeList: builder.query<IDimension[], IQuery>({
      query: (body) => ({
        url: '/valume-type/list',
        body,
      }),
    }),
  }),
});

export const {
  useCreateDimensionMutation,
  useGetValumeTypeListQuery,
  useDeleteDimensionMutation,
  useUpdateDimensionMutation,
} = dimensionsApi;
