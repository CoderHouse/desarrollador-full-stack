const fs = require('fs');
const express = require('express');
const router = express.Router();
const db = require('../db.json');
const util = require('../utils');

const guidGenerator = () => {
    const S4 = () => {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

router.get('/:user/list', (req, res) => {
    const {user} = req.params;
    const lists = db[user] || [];

    res.json({Success: true, data: lists})
});

router.get('/:user/list/:listId', (req, res) => {
    const {user, listId} = req.params;
    const id = req.params.id;
    const lists = db[user] || [];

    const element = lists.find(list => list.id === listId) || {};
    res.json({Success: true, data: element.items})
});

router.post('/:user/list', (req, res) => {
    const {user} = req.params;
    const list = req.body;
    list.id = guidGenerator();
    list.items = [];

    db[user] = db[user] || [];
    db[user].push(list);

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        res.setHeader('Content-Location', `${req.protocol}://${req.headers.host}/${user}/list/${list.id}`);
        return res.json({Success: true, data: list});
    });

});

router.post('/:user/list/:listId', (req, res) => {
    const {user, listId} = req.params;
    const item = req.body;
    item.id = guidGenerator();

    db[user] = db[user] || [];
    const list = db[user].find(list => list.id === listId) || [];
    list.push(item);

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        res.setHeader('Content-Location', `${req.protocol}://${req.headers.host}/${user}/list/${list.id}`);
        return res.json({Success: true, data: list});
    });

});

router.put('/:user/list/:listId', (req, res) => {
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

router.delete('/:user/list/:listId', (req, res) => {
    const {user, listId} = req.params;

    db[user] = db[user].filter(list => list.id !== listId);

    fs.writeFile(`db.json`, JSON.stringify(db), (message) => {
        return res.json({Success: true});
    });

});

module.exports = router;
