import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ResturantApi = createApi({
  reducerPath: "ResturantApi",
  baseQuery: fetchBaseQuery({ baseUrl: "  http://localhost:3003/" }),
  endpoints: (builder) => ({
    //這邊要小寫get
    getResturantItems: builder.query({
      query: (id) => "ResturantItem",
    }),
  }),
});

//TODO: 這邊要大寫Ｇet 會影響到
export const { useGetResturantItemsQuery } = ResturantApi;
