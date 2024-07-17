import {
	createApi,
	fetchBaseQuery,
	TypedUseMutation,
	TypedUseQuery,
} from '@reduxjs/toolkit/query/react'
import { IProduct } from '../utils/types'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	tagTypes: ['products'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: builder => ({
		getProducts: builder.query<IProduct[], void>({
			query: () => `products`,
			providesTags: ['products'],
		}),
		getProductById: builder.query<IProduct | undefined, string>({
			query: id => `products/${id}`,
			providesTags: ['products'],
		}),
		addProduct: builder.mutation<IProduct, Omit<IProduct, 'id'>>({
			query: product => ({
				url: 'products',
				method: 'POST',
				body: {
					...product,
				},
			}),
			invalidatesTags: ['products'],
		}),
		deleteProduct: builder.mutation<void, string>({
			query: id => ({
				url: `products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['products'],
		}),
		updateProduct: builder.mutation<IProduct, IProduct>({
			query: product => ({
				url: `products/${product.id}`,
				method: 'PUT',
				body: {
					...product,
				},
			}),
			invalidatesTags: ['products'],
		}),
	}),
})

interface IProductsApiHooks {
	useGetProductsQuery: TypedUseQuery<IProduct[], void, any>
	useGetProductByIdQuery: TypedUseQuery<IProduct | undefined, string, any>
	useAddProductMutation: TypedUseMutation<IProduct, Omit<IProduct, 'id'>, any>
	useDeleteProductMutation: TypedUseMutation<void, string, any>
	useUpdateProductMutation: TypedUseMutation<IProduct, IProduct, any>
}
export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useAddProductMutation,
	useDeleteProductMutation,
	useUpdateProductMutation,
}: IProductsApiHooks = productsApi
