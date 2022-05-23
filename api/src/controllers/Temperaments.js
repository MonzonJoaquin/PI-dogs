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
    .then(r => r.data.filter(e => e.temperament != null).map(e => e.temperament.split(", ")).map(e => temperament.add(...e)))
    .then(_ => {temperament = [...temperament]; return temperament.map((e) => ({name: e}))})
    .then(r => Temperament.bulkCreate(r))
    .then(r => res.json(r))
    .catch(e => next(e))
}

module.exports = {
  getTemperament
}