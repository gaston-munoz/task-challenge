const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const routes = require('./api/routes/index');
const { port } = require('./common/config');


const server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use('/api', routes);

server.listen(port, () => {
    console.log('Server listen on port', port);
});
