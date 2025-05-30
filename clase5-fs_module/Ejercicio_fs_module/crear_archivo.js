import fs from 'node:fs/promises';
import path from 'path';

export default async function crearArchivo(dir, newFileName) {
    return await fs.writeFile(path.join(dir, newFileName), 'esto es una caca');
}