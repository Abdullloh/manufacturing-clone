import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IProduct } from '../models';

export const productService = createApi({
  reducerPath: 'productService',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createProduct: builder.mutation<any, IProduct>({
      query: (data) => ({
        url: '/products/create',
        method: 'POST',
        body: { ...data, price: Number(data.price), value: Number(data.value) },
      }),
    }),
    deleteProduct: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/products/delete',
        method: 'POST',
        body: { id },
      }),
    }),
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: '/products/list',
        method: 'POST',
        body: {},
      }),
    }),
  }),
});

export const { useCreateProductMutation, useDeleteProductMutation, useGetProductsQuery } =
  productService;
