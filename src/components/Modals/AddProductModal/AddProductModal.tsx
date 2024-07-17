import { FormEvent } from 'react'
import { useAddProductMutation } from '../../../redux/productsApi'
import { IProduct } from '../../../utils/types'

interface IAddProductModal {
	setIsOpen: (isOpen: boolean) => void
}

export function AddProductModal({ setIsOpen }: IAddProductModal) {
	const [addProduct] = useAddProductMutation()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const data = {
			imageUrl: formData.get('imageUrl') as string,
			name: formData.get('name') as string,
			count: parseInt(formData.get('count') as string),
			size: {
				width: parseInt(formData.get('width') as string),
				height: parseInt(formData.get('height') as string),
			},
			weight: formData.get('weight') as string,
		}

		addProduct(data as IProduct)

		setIsOpen(false)
	}

	return (
		<div className='modalContainer'>
			<form onSubmit={handleSubmit} className='form'>
				<input type='text' name='imageUrl' placeholder='Image url:' required />
				<input type='text' name='name' placeholder='Name:' required />
				<input type='number' name='count' placeholder='Count:' required />
				<input type='number' name='width' placeholder='Width:' required />
				<input type='number' name='height' placeholder='Height:' required />
				<input type='text' name='weight' placeholder='Weight:' required />
				<button type='submit'>Submit</button>
				<button type='button' onClick={() => setIsOpen(false)}>
					Cancel
				</button>
			</form>
		</div>
	)
}
