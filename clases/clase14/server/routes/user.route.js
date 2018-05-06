const express = require('express');
const fs = require('fs');

const util = require('../utils');
const db = require('../db.json');
const router = express.Router();

router.get('/:user', (req, res) => {
    const {user} = req.params;
    const lists = db[user] || [];

    res.json({Success: true, data: lists})
});

router.post('/:user', (req, res) => {
    const {user} = req.params;
    const list = req.body;
    list.id = util.guidGenerator();
    list.items = [];

    db[user] = db[user] || [];
    db[user].push(list);

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        res.setHeader('Content-Location', `${req.protocol}://${req.headers.host}/${user}/list/${list.id}`);
        return res.json({Success: true, data: list});
    });
});

module.exports = router;
