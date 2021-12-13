const server = require ("./server")

server.listen(server.get("port"))
console.log ("Server is running port: ", server.get("port"))