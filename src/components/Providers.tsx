import { Provider } from 'react-redux'
import { store } from '../redux/store'

interface IProviders {
	children: React.ReactNode
}

export function Providers({ children }: IProviders) {
	return <Provider store={store}>{children}</Provider>
}
