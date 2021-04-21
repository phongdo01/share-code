var express = require('express');
var router = express.Router();

module.exports = function(io) {
    io.on('connection', socket => {
        console.log('some one connected: ', socket.id);
        socket.on('change-code', textValue => {
            console.log('text value: ', textValue);
            socket.broadcast.emit('get-new-code', textValue);
        })
    })
    router.get('/', (req, res) => {
        res.render('code', {});
    })
    return router;
}

