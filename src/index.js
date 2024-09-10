//importamos express
import express from 'express';
//importamos cors
import cors from 'cors';
//importar la configuracion a la base de datos
import ConectarBD from '../config/db.js';


//importamos el archivo de las rutas
import RoutesCitas from '../routes/RoutesCitas.js';

const app = express();
app.use(cors());
app.use(express.json());



//importamos el archivo RoutesCitas
app.use('/api/citas', RoutesCitas);

const port = 5000;

//verificamos conexion a la base de datos

try {
    await ConectarBD.authenticate();
    console.log('conexion a la base de datos con exito');

}catch (error){
    console.error('tenemos un error al conectar la base de datos', error);
}

//ruta para verificar la pagina
app.get('/', (req, res) =>{
    res.send ('Hola mundo')
});

//configuracion servidor
app.listen(port, () =>{
    console.log('El servidor esta corriendo http://localhost:5000');

})