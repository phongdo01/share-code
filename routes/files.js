const { fail } = require('assert');
var express = require('express');
var router = express.Router();
var fs = require('fs');

let createFile = (name, content) => {
    fs.writeFile(`./public/files/${name}`, content, function (err) {
        if (err) throw err;
        console.log(`File ${name} is created`);
    });
}

router.get('/create-file/:name/:content', function (req, res) {
    try {
        const { name, content } = req.params;
        createFile(name, content);
        res.json({status: 'SUCCESS', status: 200});
    } catch (err) {
        req.json({
            status: 'FAIL',
            data: err.message
        })
    }
    
})

module.exports = router;