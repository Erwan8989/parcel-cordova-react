import {useState} from "react";

import ('./App.css')
import Vehicule from "/src/features/Vehicule";

function App() {

	const [nbRoue, setNbRoue] = useState(4);
	const changeNbRoue = () => setNbRoue(nbRoue + 1);
	return (
		<div style={{width : "300px", margin : 'auto', marginTop : '20px'}}>
			<Vehicule roue={nbRoue} nbPassager={2}/>
			<button onClick={changeNbRoue}>Ajoute une roue</button>
		</div>
	)
}

export default App;

/*
1. Créer un composant React qui s'appelle Véhicule avec les props suivants, (roues, nombres de passagers)
2. Si les roues du véhicule sont inférieur à 2 renvoyer une erreur
3. Afficher le nombres de passagers et de roues de façon dynamique
4. Créer un composant List de Véhicule qui permet d'afficher plusieurs véhicule avec leurs caractérisques
5. Avec la fonction random créer une Liste de véhicule aléatoire
*/
