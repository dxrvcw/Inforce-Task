import {
	createApi,
	fetchBaseQuery,
	TypedUseMutation,
	TypedUseQuery,
} from '@reduxjs/toolkit/query/react'
import { IComment } from '../utils/types'

export const commentsApi = createApi({
	reducerPath: 'commentsApi',
	tagTypes: ['comments'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: builder => ({
		getComments: builder.query<IComment[], void>({
			query: () => `comments`,
			providesTags: ['comments'],
		}),
		addComment: builder.mutation<IComment, Omit<IComment, 'id'>>({
			query: comment => ({
				url: 'comments',
				method: 'POST',
				body: {
					...comment,
				},
			}),
			invalidatesTags: ['comments'],
		}),
		deleteComment: builder.mutation<void, string>({
			query: id => ({
				url: `comments/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['comments'],
		}),
	}),
})

interface ICommentsApiHooks {
	useGetCommentsQuery: TypedUseQuery<IComment[], void, any>
	useAddCommentMutation: TypedUseMutation<IComment, Omit<IComment, 'id'>, any>
	useDeleteCommentMutation: TypedUseMutation<void, string, any>
}
export const {
	useGetCommentsQuery,
	useDeleteCommentMutation,
	useAddCommentMutation,
}: ICommentsApiHooks = commentsApi
