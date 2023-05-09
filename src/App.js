import { useEffect, useState } from "react";
import BusinessCardParent from "./components/BusinessCardParent";

function App() {

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/25")
		.then(response => response.json())
		.then(data => {
			setPokemon(data.name);
		})
	}, []);

	useEffect(() => {
		console.log("Pokemon was updated! It is now: " + pokemon);
	}, [pokemon]);


	return (
		<div className="App">
			<h1>{pokemon}</h1>
			<BusinessCardParent />
			<BusinessCardParent />
			<BusinessCardParent />
			<BusinessCardParent />
		</div>
	);
}

export default App;
