import express from 'express';
import { getLibros, addLibro, getLibroById, updateLibro, deleteLibro } from './routes.js'

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Ejercicio 1
app.get('/', getLibros); //punto 1
app.get('/:id', getLibroById); //punto 2
app.post('/', addLibro); //punto 3
app.put('/:id', updateLibro); //punto 4
app.delete('/:id', deleteLibro); //punto 5


app.listen(80, () => {
    console.log("todo bien");
});