import { FormEvent } from 'react'
import { useUpdateProductMutation } from '../../../redux/productsApi'
import { IProduct } from '../../../utils/types'

interface IEditProductModal {
	product: IProduct
	setIsOpen: (isOpen: boolean) => void
}

export function EditProductModal({ product, setIsOpen }: IEditProductModal) {
	const [updateProduct] = useUpdateProductMutation()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const data = {
			id: product.id,
			imageUrl: formData.get('imageUrl') as string,
			name: formData.get('name') as string,
			count: parseInt(formData.get('count') as string),
			size: {
				width: parseInt(formData.get('width') as string),
				height: parseInt(formData.get('height') as string),
			},
			weight: formData.get('weight') as string,
		}

		updateProduct(data as IProduct)

		setIsOpen(false)
	}

	return (
		<div className='modalContainer'>
			<h2>Edit Product</h2>
			<form onSubmit={handleSubmit} className='form'>
				<input
					type='text'
					name='imageUrl'
					placeholder='Image url:'
					defaultValue={product.imageUrl}
					required
				/>
				<input
					type='text'
					name='name'
					placeholder='Name:'
					defaultValue={product.name}
					required
				/>
				<input
					type='number'
					name='count'
					placeholder='Count:'
					defaultValue={product.count}
					required
				/>
				<input
					type='number'
					name='width'
					placeholder='Width:'
					defaultValue={product.size.width}
					required
				/>
				<input
					type='number'
					name='height'
					placeholder='Height:'
					defaultValue={product.size.height}
					required
				/>
				<input
					type='text'
					name='weight'
					placeholder='Weight:'
					defaultValue={product.weight}
					required
				/>
				<button type='submit'>Submit</button>
				<button type='button' onClick={() => setIsOpen(false)}>
					Cancel
				</button>
			</form>
		</div>
	)
}
