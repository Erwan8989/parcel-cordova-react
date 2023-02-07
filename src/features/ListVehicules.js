import Vehicule from "/src/features/Vehicule";

function ListVehicules({vehicules}) {
	return {
		vehicules.map(vehicules => <Vehicule {...vehicules key={index}})
	}
}