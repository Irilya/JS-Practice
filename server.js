const http = require('http');

const routerHandler = require('./Routes/router');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer(routerHandler);

server.listen(port, hostname, (error) => {
  if (error) {
    console.error(error);
  } else {console.log(`Server running at http://${port}/`);
 }
});
