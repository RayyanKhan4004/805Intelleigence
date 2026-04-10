import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '@/store'

export interface ReportListItem {
  id: number
  name: string
  status: string
  format: string
  visibility: string
  county_name: string | null
  city_name: string | null
  farm_names: string[]
  created_at: string
}

export interface ReportResult {
  calculated_at: string
  median_list_price: string
  median_sale_price: string
  price_per_sqft: string
  days_on_market: number
  inventory: number
  list_to_sale_ratio: string
  price_reductions_pct: string
  new_listings: number
  closed_sales: number
}

export interface ReportGridItem extends ReportListItem {
  schedule: string
  metrics: string[]
  agent_name: string
  updated_at: string
  result: ReportResult
}

export interface ReportsListResponse {
  view: 'list'
  count: number
  reports: ReportListItem[]
}

export interface ReportsGridResponse {
  view: 'grid'
  count: number
  reports: ReportGridItem[]
}

export interface CountySearchResult {
  id: number
  name: string
  code: string
  cities_count: number
  farms_count: number
}

export interface SearchResponse {
  type: string
  query: string
  count: number
  results: CountySearchResult[]
}

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token =
        (getState() as RootState).auth.accessToken ??
        (typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Reports'],
  endpoints: builder => ({
    getReportsList: builder.query<ReportsListResponse, void>({
      query: () => '/reports/?view=list',
      providesTags: ['Reports'],
    }),
    getReportsGrid: builder.query<ReportsGridResponse, void>({
      query: () => '/reports/?view=grid',
      providesTags: ['Reports'],
    }),
    search: builder.query<SearchResponse, { type: 'county' | 'city' | 'farm'; q: string }>({
      query: ({ type, q }) => `/search/?type=${type}&q=${encodeURIComponent(q)}`,
    }),
  }),
})

export const {
  useGetReportsListQuery,
  useGetReportsGridQuery,
  useLazySearchQuery,
} = reportsApi
