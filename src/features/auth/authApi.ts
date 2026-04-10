import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '@/store'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // Try Redux state first, fall back to localStorage
      const token =
        (getState() as RootState).auth.accessToken ??
        (typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/login/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    signup: builder.mutation({
      query: body => ({
        url: '/register/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    forgetPassword: builder.mutation({
      query: body => ({
        url: '/forgot-password/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation, useForgetPasswordMutation } = authApi
