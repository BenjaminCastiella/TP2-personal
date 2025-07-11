export function logPeticion(req, res, next){
    const petitionDate = new Date();
    console.log(`Fecha de la petición: ${petitionDate}`);
    console.log(`Método de la petición: ${req.method}`);
    console.log(`Url de la petición: ${req.url}`);
    next();
}