'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import { useEffect } from 'react'
import { rehydrate } from '@/features/auth/authSlice'

function AuthRehydrator({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(rehydrate())
  }, [])
  return <>{children}</>
}

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthRehydrator>{children}</AuthRehydrator>
    </Provider>
  )
}
