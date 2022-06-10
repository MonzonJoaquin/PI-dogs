const axios = require("axios");
const {Temperament} = require("../db.js");

function getTemperament(req, res, next) {
  Temperament.findAll()
    .then(r => {r.temperament ? res.json(r) : bulkCreateTemperament(req, res, next)})
    .catch(e => next(e))
}

function bulkCreateTemperament(req, res, next){
  let temperament = new Set([]);
  axios.get("https://api.thedogapi.com/v1/breeds")
    .then(r => {return r.data.filter(e => e.temperament != null).map(e => e.temperament.split(", ")).map(e => temperament.add(...e))})  // Filtro los temperamentos que no sean null (filter)
    .then(_ => {temperament = [...temperament]; return temperament.map((e) => ({name: e}))})                                   // Como cada perro tiene en la propiedad temperaments un string con varios temperamentos, devuelvo un array cuyo elementos es un array cuyo elemento son un temperamento como string (.map .split)
    .then(r => Temperament.bulkCreate(r))                                                                                      // Por cada elemento (el array de strings) añado al set cada string con el spread operator (.map) 
    .then(r => res.json(r))                                                                                                    // Parseo el set a array, para recuperar el .map y devolver un array de objetos cuya propiedad sea name, cuyo valor sea el temperamento
    .catch(e => next(e))                                                                                                       // Ya teniendo un array de objetos puedo guarda en la base de datos los temperamentos con el bulkCrate
}

module.exports = {
  getTemperament
}