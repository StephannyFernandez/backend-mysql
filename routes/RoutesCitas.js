//importamos express
import express from 'express';
//importamos en controlador
import{agregarCitas, mostrarCitas, getCita, modificarCitas, eliminarCitas} from '../controllers/citasController.js';

const router =express.Router();

//metodo crud


router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id', getCita);
router.put('/:id', modificarCitas);
router.delete('/:id', eliminarCitas);

export default router;

