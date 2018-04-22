const fs = require('fs');
const express = require('express');
const router = express.Router();
const db = require('../db.json');

const guidGenerator = () => {
    const S4 = () => {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

/* GET home page. */
router.get('/:collection', (req, res) => {
    const collection = req.params.collection;
    const list = db[collection];
    res.json({Success: true, data: list})
});

router.get('/:collection/:id', (req, res) => {
    const collection = req.params.collection;
    const id = req.params.id;
    const list = db[collection];
    const element = list.find(el => el.id === id);
    res.json({Success: true, data: element})
});

router.post('/:collection', (req, res) => {
    const collection = req.params.collection;
    const el = req.body;
    el.id = guidGenerator();
    db[collection].push(el);

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        return res.json({Success: true, data: el});
    });

});

router.put('/:collection/:id', (req, res) => {
    const collection = req.params.collection;
    const id = req.params.id;
    const editBody = req.body;
    editBody.id = id;

    db[collection] = db[collection].map(el => {
        if (el.id === id) {
            return editBody
        }
        return el;
    });

    fs.writeFile(`db.json`, JSON.stringify(db), () => {
        return res.json({Success: true, data: editBody});
    });

});

router.delete('/:collection/:id', (req, res) => {
    const collection = req.params.collection;
    const id = req.params.id;
    db[collection] = db[collection].filter(el => el.id !== id);

    fs.writeFile(`db.json`, JSON.stringify(db), (message) => {
        return res.json({Success: true});
    });

});

module.exports = router;
