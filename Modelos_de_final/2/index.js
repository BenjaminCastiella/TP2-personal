import express from 'express';
import { createTarea, getAllTareas, updateTarea, deleteTarea } from './routes.js';

const app = express();
app.use(express.urlencoded({extended: true})); // MIDDLEWARES BÁSICOS
app.use(express.json()); // MIDDLEWARES BÁSICOS
//middlewares

// routes
app.post('/', createTarea);
app.get('/', getAllTareas);
app.put('/:id', updateTarea);
app.delete('/:id', deleteTarea);

app.listen(80, () => {});