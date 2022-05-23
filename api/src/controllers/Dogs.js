const axios = require("axios");
const { Race } = require("../db.js");

async function getAllDogs(req, res, next) {
	const { name } = req.query;
	let dogs = await axios.get("https://api.thedogapi.com/v1/breeds");
	try {
		if (name) {
			dogs = dogs.data.filter((e) => e.name === name);
			dogs.length
				? res.json(dogs)
				: next({ status: 404, message: "No se encontró la raza especificada" });
		} else {
			res.json(
				dogs.data.map((e) => ({
					id: e.id,
					name: e.name,
					life_span: e.life_span,
					temperament: e.temperament,
					breed_group: e.breed_group,
					image: e.image.url,
					weight: e.weight.metric,
					height: e.height.metric,
				}))
			);
		}
	} catch (error) {
		next(error);
	}
}

function getIdDog(req, res, next) {
	const { id } = req.params;
	console.log("id", typeof id);
	if (id) {
		axios
			.get("https://api.thedogapi.com/v1/breeds")
			.then((response) => res.json(response.data.find((e) => e.id == id)))
			.catch((error) => next(error));
	} else {
		next({ status: 400, message: "No sé recibió un ID" }); // bad request
	}
}

async function createDog(req, res, next) {
	const {
		name,
		height_max,
		height_min,
		weight_min,
		weight_max,
		years_of_life_min,
		years_of_life_max,
	} = req.body;
	if (
		name &&
		height_max &&
		height_min &&
		weight_min &&
		weight_max &&
		years_of_life_min &&
		years_of_life_max
	) {
		try {
			const newRace = await Race.create({
				name,
				height: `${height_min} - ${height_max}`,
				weight: `${weight_min} - ${weight_max}`,
				years_of_life: `${years_of_life_min} - ${years_of_life_max} years`,
			});
			res.send(newRace);
		} catch (error) {
			next(error);
		}
	} else {
		next({
			status: 400,
			message: "No se recibieron todos los datos necesarios",
		});
	}
}

async function putDog(req, res, next) {
	const {
		nameId,
		name,
		height_max,
		height_min,
		weight_min,
		weight_max,
		years_of_life_min,
		years_of_life_max,
	} = req.body;

	if (
		nameId &&
		name &&
		height_max &&
		height_min &&
		weight_min &&
		weight_max &&
		years_of_life_min &&
		years_of_life_max
	) {
		try {
			const update = await Race.update(
				{
					name,
					height: `${height_min} - ${height_max}`,
					weight: `${weight_min} - ${weight_max}`,
					years_of_life: `${years_of_life_min} - ${years_of_life_max} years`,
				},
				{ where: { name: nameId } }
			);
			Object.values(update)[0] ? res.json("Raza de perro modificada") : next({ status: 404, message: "Raza de perro no encontrada" });
		} catch (error) {
			next(error);
		}
	} else {
		next({
			status: 400,
			message: "No se recibieron todos los valores necesarios",
		});
	}
}

function deleteDog(req, res, next) {
	const {name} = req.body
	if (name) {
		Race.destroy({where:{name}})
			.then(r => res.json(r))
			.catch(e => next(e))
	} else {
		next({status:400, message: "No se recibió un ID correcto"})
	}
}
module.exports = {
	getAllDogs,
	getIdDog,
	createDog,
	putDog,
	deleteDog
};

/*Nombre
Altura (Diferenciar entre altura mínima y máxima)
Peso (Diferenciar entre peso mínimo y máximo)
Años de vida*/
