const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: 2, titulo: "1984", autor: "George Orwell" },
    { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { id: 4, titulo: "Fahrenheit 451", autor: "Ray Bradbury" },
    { id: 5, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" }
];

// GETTERS
export function getLibros(req, res) {
    res.send(JSON.stringify(libros));
}

export function getLibroById(req, res){
    const errorMsj = "Libro no encontrado";
    try{
        let seekedId = parseInt(req.params.id);
        let book = searchBookById(seekedId);
        if(!book){
            throw errorMsj;
        }
        res.status(200).send(JSON.stringify({libro: book}));

    } catch(e){
        if(e === errorMsj){
            res.status(404).send(JSON.stringify({mensaje: errorMsj}));
        } else {
            res.send(e);
        }
    }
}

function searchBookById(id){
    return libros.find(libro => libro.id === id);

}

// POST
export function addLibro(req, res) {
    let newBook = req.body;
    let nextId = libros[libros.length - 1].id + 1;
    newBook = {id: nextId, ...newBook};
    libros.push(newBook);
    res.status(201).send(newBook);
}

// PUT
export function updateLibro(req, res){
    const errorMsj = "Libro no encontrado";

    try{
        let seekedId = parseInt(req.params.id);
        let book = searchBookById(seekedId);
        if(!book){
            throw errorMsj;
        }
        book.titulo = req.body.Titulo;
        book.autor = req.body.Autor;
        res.status(200).send(JSON.stringify(book));

    } catch(e){
        if(e === errorMsj){
            res.status(404).send(JSON.stringify({mensaje: errorMsj}));
        } else {
            res.send(e);
        }
    }
}

// DELETE
export function deleteLibro(req, res){
    const errorMsj = "Libro no encontrado";
 
    try{
        let seekedId = parseInt(req.params.id);
        let book = searchBookById(seekedId);
        if(!book){
            throw errorMsj;
        }
        let bookIndex = libros.indexOf(book);
        libros.splice(bookIndex, 1);
        res.status(204).send();

    } catch(e){
        if(e === errorMsj){
            res.status(404).send(JSON.stringify({mensaje: errorMsj}));
        } else {
            res.send(e);
        }
    }
}