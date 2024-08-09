import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
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
    decrementProduct: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/out-product/out',
        method: 'POST',
        body: { id },
      }),
    }),
    getProducts: builder.query<{ total: number; data: IProduct[] }, IQuery>({
      query: (body) => ({
        url: '/products/list',
        method: 'POST',
        body,
      }),
    }),
    getExitedProducts: builder.query<{ total: number; data: IProduct[] }, IQuery>({
      query: (body) => ({
        url: '/out-product/list',
        method: 'POST',
        body,
      }),
    }),
    getProductItem: builder.mutation<IProduct[], { id: string }>({
      query: (body) => ({
        url: '/products/get-one',
        method: 'POST',
        body,
      }),
    }),
    updateProduct: builder.mutation<{ id: string }, IProduct>({
      query: (body) => ({
        url: '/products/get-one',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetExitedProductsQuery,
  useGetProductItemMutation,
  useGetProductsQuery,
  useDecrementProductMutation,
} = productService;
