import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const baseApi = fetchBaseQuery({
  baseUrl,
});
