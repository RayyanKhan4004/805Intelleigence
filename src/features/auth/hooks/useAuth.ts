'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { rehydrate, logout, setCredentials } from '../authSlice'

export function useAuth() {
  const dispatch = useAppDispatch()
  const { user, accessToken, isAuthenticated } = useAppSelector(state => state.auth)

  // Rehydrate from localStorage on mount
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(rehydrate())
    }
  }, [dispatch, isAuthenticated])

  return {
    user,
    accessToken,
    isAuthenticated,
    logout: () => dispatch(logout()),
    setCredentials: (payload: Parameters<typeof setCredentials>[0]) =>
      dispatch(setCredentials(payload)),
  }
}
