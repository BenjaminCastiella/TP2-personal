import {Router} from 'express' 

const rolesRoutes = Router();


rolesRoutes.get("/", (req, res) => {
    res.send("Estás trayendo datos del Home!")
});

rolesRoutes.post("/", (req, res) => {
    res.send("Estás enviando datos al Home!")
});

rolesRoutes.put("/", (req, res) => {
    res.send("Estás insertando un dato en el Home!")
});

export default rolesRoutes;