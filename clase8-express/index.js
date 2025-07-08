/*
✅ = VITAL

Express es un framework de nodeJS que se usa para construir APIs RESTful y backends webs.

Express, inicializa un servidor http y entrega una interfaz más sencilla que el propio módulo, para 
el desarrollador.

Un servidor http es un proceso (programa) alojado en un servidor físico, que escucha a un puerto
específico (como 8080). Cuando llegan peticiones de clientes a ese puerto las detecta y procesa.


CONTINUAR CLASE 8 EN 1:52:33
*/

import express, { urlencoded } from 'express' 
import routes from './routes/router.js';

// Inicializa el entorno express ✅ 
const app = express();


/* MIDDLEWARES
    Son funciones que tienen acceso al req, res y otra función next(). Se usan con:
        1. pp.use(express."middleware") para middlewares de express
        2. pp.use((req, res, next) => {}) para middlewares propios. next es una función que indica que el 
            proceso debe continuar con el flujo de ejecución. Si no se usa el proceso se estanca en el 
            middleware. 
        3. En un método http, se incluye entre la ruta y el callback: 
            app.get('/:id', middleware,  (req, res) => {});
*/
// Es un middleware. Decodifica, parsea y organiza toda la data que envíe el cliente al servidor a través
// de un formulario html,  permitiendo manejar la misma más facilmente.✅
app.use(express.urlencoded({extended: true}));

// Otro middleware. Hace lo mismo que el de arriba pero en formato json.✅
app.use(express.json());


/* MÉTODOS EXPRESS DEL PROTOCOLO HTTP */
app.get('/:id', (req, res) => {
    console.log(req.params);
    res.status(200).send('got fst or snd bish');
});

app.post('/', (req, res) => {
    console.log(req.body);
})

// Pone al servidor a escuchar un puerto✅
app.listen(80, ()=>{
    console.log('¡Estoy conectado!');
})