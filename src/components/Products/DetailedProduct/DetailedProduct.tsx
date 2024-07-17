import { useState } from 'react'
import { createPortal } from 'react-dom'

import { IProduct } from '../../../utils/types'
import { EditProductModal } from '../../Modals/EditProductModal/EditProductModal'

interface IDetailedProduct {
	product: IProduct
}

export function DetailedProduct({ product }: IDetailedProduct) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<div>
			<img
				src={product.imageUrl}
				alt='Product Image'
				style={{ maxWidth: 200 }}
			/>
			<h1>{product.name}</h1>
			<p>Count: {product.count}</p>
			<p>Width: {product.size.width}</p>
			<p>Height: {product.size.height}</p>
			<p>Weight: {product.weight}</p>
			<button onClick={() => setIsModalOpen(true)}>Edit product</button>
			{isModalOpen &&
				createPortal(
					<EditProductModal product={product} setIsOpen={setIsModalOpen} />,
					document.body
				)}
		</div>
	)
}
