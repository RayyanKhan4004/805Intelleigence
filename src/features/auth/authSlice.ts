import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthUser {
  id: number
  username: string
  email: string
  membership: string
  role: string
}

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  user: AuthUser | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ access: string; refresh: string; user: AuthUser }>
    ) {
      state.accessToken = action.payload.access
      state.refreshToken = action.payload.refresh
      state.user = action.payload.user
      state.isAuthenticated = true
      // persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', action.payload.access)
        localStorage.setItem('refreshToken', action.payload.refresh)
        localStorage.setItem('user', JSON.stringify(action.payload.user))
      }
    },
    logout(state) {
      state.accessToken = null
      state.refreshToken = null
      state.user = null
      state.isAuthenticated = false
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
      }
    },
    rehydrate(state) {
      if (typeof window !== 'undefined') {
        const access = localStorage.getItem('accessToken')
        const refresh = localStorage.getItem('refreshToken')
        const userStr = localStorage.getItem('user')
        if (access && refresh && userStr) {
          state.accessToken = access
          state.refreshToken = refresh
          state.user = JSON.parse(userStr)
          state.isAuthenticated = true
        }
      }
    },
  },
})

export const { setCredentials, logout, rehydrate } = authSlice.actions
export default authSlice.reducer
