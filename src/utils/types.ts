export interface IProduct {
	id: string
	imageUrl: string
	name: string
	count: number
	size: {
		width: number
		height: number
	}
	weight: string
}

export interface IComment {
	id: string
	productId: string
	description: string
	date: string
}
