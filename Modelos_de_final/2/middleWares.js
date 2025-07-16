export function logReqData(req, res, next){
    console.log(`${new Date()} |  Método: ${req.method} | Ruta: ${req.url}`);
    next();
}

export function descValidator(req, res, next){
    try{
        const desc = req.body.descripcion;

        if(!desc){
            throw new Error();
        }
        next();

    } catch(e){
        res.status(400).send(JSON.stringify({mensaje: "La descripción es obligatoria"}));
    }
}