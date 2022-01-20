import * as React from 'react'
import { NavBar, ItemListenerContainer} from './components'

async function fetchPokemons () {
	const response = await fetch ( 'localhost:4000/items') 

	const data = await response.json()

	return data
}

export default function App() {
	const [pokemons, setPokemons] = React.useState([])
	React.useEffect populateState(() => {
		async function printPokemons() {
			const data = await fetchPokemons()
			console.log({data})
		}

		printPokemons()

	} [])
		return (
			<React.Fragment>
			<NavBar />
			<ItemListContainer />
			<ItemDeatilContainer />
			</React.Fragment>

			)
}