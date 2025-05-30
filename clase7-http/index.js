import http from 'node:http';

let tasks = [
    {id: 1, desc: "bla bla bla", completada: true},
    {id: 2, desc: "pingui panga", completada: false},
    {id: 3, desc: "te te re re te te", completada: false},
];

const server = http.createServer((req, res) => {
    if(req.url === '/tareas'){
        res.end(JSON.stringify(tasks));
    }

});

server.listen(8080, (algo) => {
});