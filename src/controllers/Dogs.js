const axios = require("axios");
const { Race, Temperament } = require("../db.js");

async function getAllDogs(req, res, next) {
	const { name } = req.query;
	let dogs = await axios.get("https://api.thedogapi.com/v1/breeds");
	try {
		if (name) {
			dogs = dogs.data.filter((e) => e.name.toLowerCase().startsWith(name.toLowerCase()));
			dogs
				? res.json(dogs)
				: next({ status: 404, message: "No se encontró la raza especificada" });
		} else {
			const db = await Race.findAll({
				include: [
					{
						model: Temperament,
						attributes: ["name"],
						through: {
							attributes: [],
						},
					},
				],
			});
			//
			const dbArray = db.map((e) => ({
				id: e.id,
				name: e.name.toLowerCase(),
				life_span: e.life_span
					.split(" ")
					.map((e) => Number(e))
					.filter((e) => !Number.isNaN(e)),
				breed_group: e.breedGroup,
				image: e.image,
				weight: e.weight
					.split(" ")
					.map((e) => Number(e))
					.filter((e) => !Number.isNaN(e)),
				height: e.height
					.split(" ")
					.map((e) => Number(e))
					.filter((e) => !Number.isNaN(e)),
				createdInDB: e.createdInDB,
				temperament: e.temperaments.map((e) => e.name).join(", "),
			}));

			res.json(
				dogs.data
					.map((e) => ({
						id: e.id,
						name: e.name.toLowerCase(),
						life_span: e.life_span
							.split(" ")
							.map((e) => Number(e))
							.filter((e) => !Number.isNaN(e)),
						temperament: e.temperament,
						breed_group: e.breed_group,
						image: e.image.url,
						weight:
							e.weight.metric !== "NaN"
								? e.weight.metric
									.split(" ")
									.map((e) => Number(e))
									.filter((e) => !Number.isNaN(e))
								: e.weight.imperial
									.split(" ")
									.map((e) => Number(e) * 0.45)
									.filter((e) => !Number.isNaN(e)),
						height: e.height.metric
							.split(" ")
							.map((e) => Number(e))
							.filter((e) => !Number.isNaN(e)),
					}))
					.concat(dbArray)
			);
		}
	} catch (error) {
		next(error);
	}
}

//

async function getIdDog(req, res, next) {
	const { id } = req.params;
	if (Number(id)) {
		axios
			.get("https://api.thedogapi.com/v1/breeds")
			.then((response) =>
				res.json(
					[response.data.find((e) => e.id == id)].map((e) => ({
						id: e.id,
						name: e.name.toLowerCase(),
						life_span: e.life_span
							.split(" ")
							.map((e) => Number(e))
							.filter((e) => !Number.isNaN(e)),
						temperament: e.temperament,
						breed_group: e.breed_group,
						image: e.image.url,
						weight:
							e.weight.metric !== "NaN"
								? e.weight.metric
									.split(" ")
									.map((e) => Number(e))
									.filter((e) => !Number.isNaN(e))
								: e.weight.imperial
									.split(" ")
									.map((e) => Number(e) * 0.45)
									.filter((e) => !Number.isNaN(e)),
						height: e.height.metric
							.split(" ")
							.map((e) => Number(e))
							.filter((e) => !Number.isNaN(e)),
					}))
				)
			)
			.catch((error) => next(error));
	} else if (!Number(id)) {
		try {
			const dog = await Race.findByPk(id, {
				include: [
					{
						model: Temperament,
						attributes: ["name"],
						through: {
							attributes: [],
						},
					},
				],
			});
			res.json(
				[dog].map((e) => ({
					id: e.id,
					name: e.name.toLowerCase(),
					life_span: e.life_span
						.split(" ")
						.map((e) => Number(e))
						.filter((e) => !Number.isNaN(e)),
					breed_group: e.breedGroup,
					image: e.image,
					weight: e.weight
						.split(" ")
						.map((e) => Number(e))
						.filter((e) => !Number.isNaN(e)),
					height: e.height
						.split(" ")
						.map((e) => Number(e))
						.filter((e) => !Number.isNaN(e)),
					temperament: e.temperaments.map((e) => e.name).join(", "),
				}))
			);
		} catch (error) {
			next(error);
		}
	} else {
		next({ status: 400, message: "No sé recibió un ID" }); // bad request
	}
}

async function createDog(req, res, next) {
	console.log(req.body);
	const {
		nameBreed,
		breedGroup,
		image,
		heightMin,
		heightMax,
		weightMin,
		weightMax,
		years_of_life_min,
		years_of_life_max,
		temperaments,
	} = req.body;


	if (
		nameBreed &&
		heightMin &&
		heightMax &&
		weightMin &&
		weightMax &&
		years_of_life_min &&
		years_of_life_max
	) {
		try {
			const newRace = await Race.create({
				name: nameBreed,
				breedGroup,
				image: image ? image : null,
				height: `${heightMin} - ${heightMax}`,
				weight: `${weightMin} - ${weightMax}`,
				life_span: `${years_of_life_min} - ${years_of_life_max} years`,
			});
			let list = temperaments;
			const dataDB = await Temperament.findAll();
			console.log(temperaments);
			list = dataDB
				.filter((e) => list.some((e2) => e2 === e.name))
			const names = []
			const result = list.reduce((acc, item) => {
				if (!names.includes(item.dataValues.name)) {
					names.push(item.dataValues.name)
					acc.push(item.dataValues.id);
				}
				return acc;
			}, [])

			console.log(result);
			const add = await Race.findAll({ where: { name: nameBreed } });
			add[0].addTemperament(result);
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
		image,
		breedGroup,
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
		image &&
		breedGroup &&
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
					image,
					breedGroup,
					height: `${height_min} - ${height_max}`,
					weight: `${weight_min} - ${weight_max}`,
					life_span: `${years_of_life_min} - ${years_of_life_max} years`,
				},
				{ where: { name: nameId } }
			);
			Object.values(update)[0]
				? res.json("Raza de perro modificada")
				: next({ status: 404, message: "Raza de perro no encontrada" });
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
	const { name } = req.body;
	if (name) {
		Race.destroy({ where: { name } })
			.then((r) => res.json(r))
			.catch((e) => next(e));
	} else {
		next({ status: 400, message: "No se recibió un ID correcto" });
	}
}
module.exports = {
	getAllDogs,
	getIdDog,
	createDog,
	putDog,
	deleteDog,
};

/*Nombre
Altura (Diferenciar entre altura mínima y máxima)
Peso (Diferenciar entre peso mínimo y máximo)
Años de vida*/
