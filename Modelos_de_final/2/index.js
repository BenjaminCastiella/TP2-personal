import express from 'express';
import { createTarea, getAllTareas, updateTarea, deleteTarea } from './routes.js';
import { logReqData, descValidator } from './middlewares.js';

const app = express();
//middlewares
app.use(express.urlencoded({extended: true})); // MIDDLEWARES BÁSICOS
app.use(express.json()); // MIDDLEWARES BÁSICOS
app.use(logReqData);

// routes
app.post('/', descValidator, createTarea);
app.get('/', getAllTareas);
app.put('/:id', updateTarea);
app.delete('/:id', deleteTarea);

app.listen(80, () => {});