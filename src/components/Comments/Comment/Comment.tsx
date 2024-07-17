import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDeleteCommentMutation } from '../../../redux/commentsApi'
import { IComment } from '../../../utils/types'
import { ConfirmationModal } from '../../Modals/ConfirmationModal/ConfirmationModal'

interface ICommentProps {
	comment: IComment
}

export function Comment({ comment }: ICommentProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const [deleteComment] = useDeleteCommentMutation()

	return (
		<div>
			<p>{comment.description}</p>
			<p>{comment.date}</p>
			<button onClick={() => setIsModalOpen(true)}>Delete</button>
			{isModalOpen &&
				createPortal(
					<ConfirmationModal
						action={() => deleteComment(comment.id)}
						setIsOpen={setIsModalOpen}
					/>,
					document.body
				)}
		</div>
	)
}
