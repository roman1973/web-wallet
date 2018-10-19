var express = require('express');
var router = express.Router();
var client = require('../pg');


/* GET home page. */
router.get('/', function(req, res, next) {
    const query = {
        text: 'SELECT * ',
        values: ['brianc', 'brian.m.carlson@gmail.com'],
    }
    client.query(query)
        .then(res => console.log(res.rows[0]))
        .catch(e => console.error(e.stack))
});

module.exports = router;
