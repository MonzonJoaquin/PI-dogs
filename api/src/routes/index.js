const { Router } = require('express');
const { getAllDogs, getIdDog } = require('../controllers/Dogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/dogs", getAllDogs) // query: {name} filter raza
router.get("/dogs/:id", getIdDog)
// router.post("/dog", "createDog")
// router.put("/put", "putDog")
// router.delete("/delete", "deleteDog")

// router.get("/temperament", "getTemperaments")

/*
[ ] GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
[ ] GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado
[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
[ ] GET /temperament:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
[ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos
*/


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
