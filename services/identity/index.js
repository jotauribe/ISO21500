require('dotenv').config();
const application = require('./src/app');
const router = require('./src/routes');

const baseUrl = '/api/v1';
const port = process.env.PORT || 5001;

application({ baseUrl, router, port }).start();
