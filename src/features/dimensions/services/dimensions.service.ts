import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { IDimension, IDimensionItem } from '../models';

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
    updateDimension: builder.mutation<any, IDimension>({
      query: (body) => ({
        url: '/valume-type/update',
        method: 'POST',
        body,
      }),
    }),
    getValumeTypeList: builder.query<IDimension[], IQuery>({
      query: (body) => ({
        url: '/valume-type/list',
        method: 'POST',
        body,
      }),
    }),
    getValumeTypeItem: builder.mutation<IDimensionItem, { id: string }>({
      query: (body) => ({
        url: '/valume-type/get-one',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useCreateDimensionMutation,
  useGetValumeTypeListQuery,
  useGetValumeTypeItemMutation,
  useDeleteDimensionMutation,
  useUpdateDimensionMutation,
} = dimensionsApi;
