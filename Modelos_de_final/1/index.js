import express from 'express';
import { getLibros, addLibro, getLibroById, updateLibro, deleteLibro } from './routes.js'
import { logPeticion } from './middlewares/logPeticiones.js';
import { postVerifier, putVerifier } from './middlewares/postAndPutVerifier.js';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Ejercicio 2
app.use(logPeticion); //punto 1

// Ejercicio 1
app.get('/', getLibros); //punto 1
app.get('/:id', getLibroById); //punto 2
app.post('/', postVerifier /*Ejercicio 2 punto 2*/, addLibro); //punto 3
app.put('/:id', putVerifier /*Ejercicio 2 punto 2*/, updateLibro); //punto 4
app.delete('/:id', deleteLibro); //punto 5


app.listen(80, () => {
    console.log("todo bien");
});