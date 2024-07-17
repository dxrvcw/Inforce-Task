import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { useDeleteProductMutation } from '../../../redux/productsApi'
import { ConfirmationModal } from '../../Modals/ConfirmationModal/ConfirmationModal'

export function ProductControls({ productId }: { productId: string }) {
	const [deleteProduct] = useDeleteProductMutation()
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div>
			<button onClick={() => setIsModalOpen(true)}>Delete</button>
			{isModalOpen &&
				createPortal(
					<ConfirmationModal
						action={() => deleteProduct(productId)}
						setIsOpen={setIsModalOpen}
					/>,
					document.body
				)}
			<Link to={`/${productId}`}>Details</Link>
		</div>
	)
}
