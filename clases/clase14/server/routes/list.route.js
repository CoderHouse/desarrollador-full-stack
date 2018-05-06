const express = require('express');
const fs = require('fs');

const util = require('../utils');
const db = require('../db.json');
const router = express.Router();

router.get('/:user/:listId', (req, res) => {
    const {user, listId} = req.params;
    const id = req.params.id;
    const lists = db[user] || [];

    const element = lists.find(list => list.id === listId) || {};
    res.json({Success: true, data: element.items})
});
router.post('/:user/:listId', (req, res) => {
    const {user, listId} = req.params;
    const item = req.body;
    item.id = util.guidGenerator();

    db[user] = db[user] || [];
    const list = db[user].find(list => list.id === listId) || [];
    list.items.push(item);

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        res.setHeader('Content-Location', `${req.protocol}://${req.headers.host}/${user}/list/${list.id}`);
        return res.json({Success: true, data: item});
    });

});
router.put('/:user/:listId', (req, res) => {
    const {user, listId} = req.params;
    const editBody = req.body;
    editBody.id = listId;

    db[user] = db[user].map(list => {
        if (list.id === listId) {
            return editBody
        }
        return list;
    });

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        return res.json({Success: true, data: editBody});
    });

});
router.delete('/:user/:listId', (req, res) => {
    const {user, listId} = req.params;

    db[user] = db[user].filter(list => list.id !== listId);

    fs.writeFile(`db.json`, JSON.stringify(db), (message) => {
        return res.json({Success: true});
    });

});

module.exports = router;
