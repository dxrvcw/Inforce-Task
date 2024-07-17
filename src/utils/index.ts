import { SortType } from '../components/Products/ProductList/ProductList'
import { IProduct } from './types'

export function sortProducts(products: IProduct[], type: SortType): IProduct[] {
	const sortedProducts = [...products]

	switch (type) {
		case 'count':
			return sortedProducts.sort((a, b) => a.count - b.count)
		case 'name':
			return sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
	}
}
