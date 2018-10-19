const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'webmoney',
    password: 'qweasd333',
    port: 5432,
});
client.connect().then(() => console.log('connected'))
    .catch(e => console.error('connection error', err.stack));
module.exports = client;