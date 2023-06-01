const express = require('express');
const app = express();

app.get('/', function (req, response) {
    response.send('auth_server')
});

app.listen(5002, function () {
    console.log('auth_server is listening on port 5002');
});