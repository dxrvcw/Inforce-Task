import { Link, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../redux/productsApi'
import { AddCommentInput } from '../Comments/AddCommentInput/AddCommentInput'
import { ProductComments } from '../Comments/ProductComments/ProductComments'
import { DetailedProduct } from '../Products/DetailedProduct/DetailedProduct'

export function ProductView() {
	const { productId } = useParams()
	const { data, isError, isLoading } = useGetProductByIdQuery(productId!)

	if (isError) return <h1>404 Not Found!</h1>

	return (
		<>
			<Link to={'/'}>Go back</Link>
			{isLoading && <h1>Loading...</h1>}
			{data && <DetailedProduct product={data} />}
			<AddCommentInput productId={productId} />
			<ProductComments productId={productId} />
		</>
	)
}
