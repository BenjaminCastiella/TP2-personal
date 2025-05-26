import http from 'node:http';
import path from 'node:path';
import taskList from './tareas/tareas.js';

const server = http.createServer((req, res) => {
    
    // res.end(JSON.stringify({
    //     data: "HolaHola"
    // }))
    if(req.method === 'GET' && req.url === '/tareas'){
        res.end(JSON.stringify(taskList()));
    }

});

server.listen(8080, (res) => console.log(res));
