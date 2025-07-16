export function postVerifier(req, res, next){
    const titulo = req.body.titulo;
    const autor = req.body.autor;

    if(!titulo || !autor){
        res.status(400).send(JSON.stringify({mensaje: "Debe proporcionar al menos un título o autor para actualizar"}));
    }
    next();
}

export function putVerifier(req, res, next){
    const titulo = req.body.titulo;
    const autor = req.body.autor;

    if(!titulo && !autor){
        res.status(400).send(JSON.stringify({mensaje: "Debe proporcionar al menos un título o autor para actualizar"}));
    }
    next();
}