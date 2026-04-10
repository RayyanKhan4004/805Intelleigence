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
  tagTypes: ['reports'],
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/reports/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['reports'],
    }),

    signup: builder.mutation({
      query: body => ({
        url: '/repotrs/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['reports'],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = authApi
