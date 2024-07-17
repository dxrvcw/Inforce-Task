import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AddProductModal } from '../../Modals/AddProductModal/AddProductModal'

export function AddProductButton() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div>
			<button onClick={() => setIsModalOpen(true)}>Add Product</button>
			{isModalOpen &&
				createPortal(
					<AddProductModal setIsOpen={setIsModalOpen} />,
					document.body
				)}
		</div>
	)
}
