import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { IModelType } from '../models';

export const modelApi = createApi({
  reducerPath: 'modelApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createModelType: builder.mutation<any, { model_name: string }>({
      query: ({ model_name }) => ({
        url: '/model-type/create',
        method: 'POST',
        body: { model_name },
      }),
    }),
    deleteModelType: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/model-type/delete',
        method: 'POST',
        body: { id },
      }),
    }),
    updateModelType: builder.mutation<any, { model_name: string }>({
      query: ({ model_name }) => ({
        url: '/model-type/update',
        method: 'POST',
        body: { model_name },
      }),
    }),
    getModelTypeList: builder.query<IModelType[], IQuery>({
      query: (body) => ({
        url: '/model-type/list',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useCreateModelTypeMutation,
  useGetModelTypeListQuery,
  useDeleteModelTypeMutation,
  useUpdateModelTypeMutation,
} = modelApi;
