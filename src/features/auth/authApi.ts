import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    signup: builder.mutation({
      query: body => ({
        url: '/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = authApi
