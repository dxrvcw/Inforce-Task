import { configureStore } from '@reduxjs/toolkit'
import { commentsApi } from './commentsApi'
import { productsApi } from './productsApi'

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[commentsApi.reducerPath]: commentsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(productsApi.middleware)
			.concat(commentsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
