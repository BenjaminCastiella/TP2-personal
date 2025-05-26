import fs from 'node:fs';

function leerArchivo(ruta){
    return fs.readFileSync(ruta, 'utf-8');
}

export default leerArchivo;