const express = require('express');
const fs = require('fs');

const util = require('../utils');
const db = require('../db.json');
const router = express.Router();

router.put('/:user/:listId/:toDoId', (req, res) => {
    const {user, listId, toDoId} = req.params;
    const editBody = req.body;
    editBody.id = toDoId;

    const listIndex = db[user].findIndex(list => list.id === listId);
    db[user][listIndex].items = db[user][listIndex].items.map(toDo => {
        if (toDo.id === toDoId) {
            return editBody
        }
        return toDo;
    });

    fs.writeFile(`db.json`, JSON.stringify(db), (message) => {
        return res.json({Success: true});
    });

});
router.delete('/:user/:listId/:toDoId', (req, res) => {
    const {user, listId, toDoId} = req.params;

    const listIndex = db[user].findIndex(list => list.id === listId);
    db[user][listIndex].items = db[user][listIndex].items.filter(toDo => toDo.id !== toDoId);

    fs.writeFile(`db.json`, JSON.stringify(db), (message) => {
        return res.json({Success: true});
    });
});

module.exports = router;
