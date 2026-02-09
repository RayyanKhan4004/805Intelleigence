// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.example.com",
//   }),
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "/posts",
//     }),
//     getPostById: builder.query({
//       query: (id) => `/posts/${id}`,
//     }),
//   }),
// });

// export const {
//   useGetPostsQuery,
//   useGetPostByIdQuery,
// } = api;


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({
    getExample: builder.query({
      query: (id) => `/example/${id}`,
    }),
  }),
})

export const { useGetExampleQuery } = exampleApi