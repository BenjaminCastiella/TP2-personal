import express from 'express' 
import routes from './routes/router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
routes.use(routes);

app.listen(80, ()=>{
    console.log('¡Estoy conectado!');
})