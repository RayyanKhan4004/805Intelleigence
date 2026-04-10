import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '@/features/auth/authApi'
import authReducer from '@/features/auth/authSlice'
import { reportsApi } from '@/features/reports/reportsApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, reportsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
