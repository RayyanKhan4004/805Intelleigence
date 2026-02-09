// // store.ts
// import { configureStore } from "@reduxjs/toolkit"

// export const store = configureStore({
//   reducer: {
//     // reducers go here
//   },
// })

// // types (VERY IMPORTANT for TS)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
// Import your API slices here
// import { exampleApi } from './apis/exampleApi'

export const store = configureStore({
  reducer: {
    // reducers go here
    // [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // .concat(exampleApi.middleware)
})

// Enable refetching on focus/reconnect
setupListeners(store.dispatch)

// types (VERY IMPORTANT for TS)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch