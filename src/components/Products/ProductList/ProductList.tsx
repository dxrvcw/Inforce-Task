import { useState } from 'react'
import { useGetProductsQuery } from '../../../redux/productsApi'
import { sortProducts } from '../../../utils'
import { ProductItem } from '../ProductItem/ProductItem'

export type SortType = 'name' | 'count'

export function ProductList() {
	const [sortType, setSortType] = useState<SortType>('name')
	const { data, isLoading, isError } = useGetProductsQuery()

	return (
		<div>
			<label htmlFor='sortSelect'>Select sorting:</label>
			<select
				name='sortSelect'
				value={sortType}
				onChange={e => setSortType(e.target.value as SortType)}
			>
				<option value={'name'}>Name</option>
				<option value={'count'}>Count</option>
			</select>

			{isLoading && <div>Loading...</div>}
			{isError && <div>Error...</div>}
			{data &&
				sortProducts(data, sortType).map(product => (
					<ProductItem key={product.id} product={product} />
				))}
		</div>
	)
}
