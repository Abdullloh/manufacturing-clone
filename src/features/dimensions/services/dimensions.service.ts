import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IDimension } from '../models';

export const dimensionsApi = createApi({
  reducerPath: 'dimensionsApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createDimension: builder.mutation<any, { valume_type_name: string }>({
      query: ({ valume_type_name }) => ({
        url: '/valume-type/create',
        method: 'POST',
        body: { valume_type_name },
      }),
    }),
    getValumeTypeList: builder.query<IDimension[], void>({
      query: () => ({
        url: '/valume-type/list',
      }),
    }),
  }),
});

export const { useCreateDimensionMutation, useGetValumeTypeListQuery } = dimensionsApi;
