import { useState } from 'react'
import { useAddCommentMutation } from '../../../redux/commentsApi'
import { IComment } from '../../../utils/types'

export function AddCommentInput({
	productId,
}: {
	productId: string | undefined
}) {
	const [text, setText] = useState('')

	const [addComment] = useAddCommentMutation()

	const handleAddComment = () => {
		if (!text) return
		if (!productId) return

		const comment: Omit<IComment, 'id'> = {
			productId,
			description: text,
			date: new Date(Date.now()).toUTCString(),
		}

		addComment(comment)
		setText('')
	}

	return (
		<div style={{ marginTop: '30px' }}>
			<input
				type='text'
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Enter comment text'
			/>
			<button onClick={handleAddComment}>Add comment</button>
		</div>
	)
}
