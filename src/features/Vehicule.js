function Vehicule({roue, nbPassager}) {
	if (roue < 2) {
		throw new Error('Pas assez de roue');
	}

	return ( //render
		<div>
			<label>Nombre de roue : </label>
			<span>{roue}</span>
			<label>Nombre de passager : </label>
			<span>{nbPassager}</span>
		</div>
	)
}

export default Vehicule;