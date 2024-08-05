import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
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
    getModelTypeList: builder.query<IModelType[], void>({
      query: () => ({
        url: '/model-type/list',
      }),
    }),
  }),
});

export const { useCreateModelTypeMutation, useGetModelTypeListQuery } = modelApi;
