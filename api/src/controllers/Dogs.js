const axios = require("axios");

async function getAllDogs(req, res, next){
  const {name} = req.query
  let dogs = await axios.get("https://api.thedogapi.com/v1/breeds")
  try {
    if (name) {
      dogs = dogs.data.filter(e => e.name === name)
      dogs.length ? res.json(dogs) : next({status:404, message: "No se encontró la raza especificada"})
    } else {
      res.json(dogs.data.map(e => ({id: e.id, name: e.name, life_span: e.life_span, temperament: e.temperament, breed_group: e.breed_group, image: e.image.url, weight: e.weight.metric, height: e.height.metric})))
    }
  } catch (error) {
    next(error)
  }

}

function getIdDog(req, res, next) {
  const {id} = req.params
  console.log("id", typeof id);
  if (id) {
    axios.get("https://api.thedogapi.com/v1/breeds")
      .then(response => res.json(response.data.find(e => e.id == id)))
      .catch(error => next(error))
  } else {
    next({status:400, message:"No sé recibió un ID"}) // bad request
  }
}

module.exports={
  getAllDogs,
  getIdDog
}