const http = require('http');
const app = require('./app/app');
global.axios = require('axios').default;
http.timeout = 0;
http.createServer(app).listen(3000);