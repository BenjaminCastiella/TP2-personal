import createDir from './crear_directorio.js'
import createFile from './crear_archivo.js';
import leerArchivo from './leer_archivo.js';
import fs from 'node:fs';


//let newDir = await createDir('testing_dir');
//let newFile = await createFile(newDir, 'caca.txt');
const lectura = leerArchivo('./package.json');

console.log(fs);

