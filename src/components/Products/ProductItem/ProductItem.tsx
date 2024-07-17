import { IProduct } from '../../utils/types'
import { ProductControls } from '../ProductControls/ProductControls'

export function ProductItem({ product }: { product: IProduct }) {
	return (
		<div>
			<h2>{product.name}</h2>
			<p>Count: {product.count}</p>
			<p>Weight: {product.weight}</p>
			<p>
				Width: {product.size.width} Height: {product.size.height}
			</p>
			<ProductControls productId={product.id} />
		</div>
	)
}
