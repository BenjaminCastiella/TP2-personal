let tareas = [
    { id: 1, descripcion: "Hacer la compra", completada: false },
    { id: 2, descripcion: "Estudiar Express", completada: false }
];

function getNextId(){
    return tareas.length + 1;
}

function getTareaById(id){
    return tareas.find(t => t.id === parseInt(id));
}

export function createTarea(req, res){
    const desc = req.body.descripcion;
    const newTarea = {id: getNextId(), descripcion: desc, completada: false};
    tareas.push(newTarea);
    res.status(201).send(JSON.stringify({msj: 'Nueva Tarea', tarea: newTarea}));
}

export function getAllTareas(req, res){
    res.status(200).send(JSON.stringify(tareas));
}

export function updateTarea(req, res){
    const tarea = getTareaById(req.params.id);

    if(!tarea){
        res.status(400).send("No se encontró una tarea con ese id");
    }
    
    const { descripcion, completada } = req.body;

    if(!descripcion && !completada){
        res.status(400).send("Tiene que actualizar o la descripción o el estado de la tarea");
    }

    tarea.descripcion = descripcion ? descripcion : tarea.descripcion;
    tarea.completada = completada ? completada === 'true' : tarea.completada;

    res.status(200).send(JSON.stringify(tarea));
}

export function deleteTarea(req, res){
    const tarea = getTareaById(req.params.id);

    if(!tarea){
        res.status(404).send(JSON.stringify({msj: "No se encontró una tarea con ese id"}));
    }

    const indiceDeTareaAEliminar = tareas.indexOf(tarea);
    tareas.splice(indiceDeTareaAEliminar, 1);
    res.status(204).send();
}