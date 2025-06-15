import http from 'node:http';
import { v4 as uuidv4 } from 'uuid';

// {
//     "id": 3, 
//     "desc": "te te re re te te", 
//     "completada": false
// }

let tasks = [
    {id: 1, desc: "bla bla bla", completada: true},
    {id: 2, desc: "pingui panga", completada: false},
    {id: 3, desc: "te te re re te te", completada: false},
];

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/tareas'){
        res.end(tareasToJson());
    }

    req.on("data", chunk => {
        let body = `${chunk}`;
        addTarea(body);
        console.log(tasks);
        
    });

});

function tareasToJson(){
    return JSON.stringify(tasks);
}

function addTarea(data) {
    let newTask = JSON.parse(data);

    tasks.push({
        id: uuidv4(),
        desc: newTask.desc,
        completada: false
    });
}


server.listen(8080, (algo) => {
});