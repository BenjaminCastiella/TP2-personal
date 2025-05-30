import fs from 'node:fs/promises';
import path from 'path';

async function crearDirectorio(newDirName) {
    let resultPath;

    try{
        let containingDir = await fs.readdir('./');
        let alreadyExistNewDir = containingDir.find(dir => dir === newDirName);
        if(alreadyExistNewDir) throw 'El directorio ya existe';

        await fs.mkdir(newDirName);
        resultPath = path.resolve(`${newDirName}`);
        console.log(resultPath);
        console.log('El directorio se creó con exito');

    } catch(e){
        console.log(e);  
    }

    return resultPath;
}

export default crearDirectorio
