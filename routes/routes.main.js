import { Router } from 'express'; 
import cars from '../database/database.cars.js'; // Importa la base de datos de carros
import { getAllCars, getCarStats, getCarById } from '../controllers/controller.cars.js'; // Importa los controladores

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

// router.get('/cars', (req, res) => {
//     res.json(cars);
// });


router.get('/cars', getAllCars); // Ruta para obtener todos los carros
router.get('/cars/stats', getCarStats); // Ruta para obtener estadísticas de los carros
router.get('/cars/:id', getCarById); // Ruta para obtener un carro por ID 

export default router;