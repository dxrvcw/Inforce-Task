import { useGetCommentsQuery } from '../../../redux/commentsApi'
import { Comment } from '../Comment/Comment'

interface IProductComments {
	productId: string | undefined
}

export function ProductComments({ productId }: IProductComments) {
	const { data, isError } = useGetCommentsQuery()

	if (!productId || isError)
		return <p>Something went wrong while fetching comments</p>

	return (
		<div>
			<h3>Comments:</h3>
			{data &&
				data
					.filter(comment => comment.productId === productId)
					.map(comment => <Comment comment={comment} key={comment.id} />)}
		</div>
	)
}
