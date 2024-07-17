import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { ListView } from './components/Views/ListView'
import { ProductView } from './components/Views/ProductView'

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<ListView />} />
					<Route path={`/:productId`} element={<ProductView />} />
				</Routes>
			</Router>
		</>
	)
}
