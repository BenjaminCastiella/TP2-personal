import {Router} from 'express' 

const userRoutes = Router();


userRoutes.get("/", (req, res) => {
    res.send("Estás trayendo datos del Home!")
});

userRoutes.post("/", (req, res) => {
    res.send("Estás enviando datos al Home!")
});

userRoutes.put("/", (req, res) => {
    res.send("Estás insertando un dato en el Home!")
});

export default userRoutes;