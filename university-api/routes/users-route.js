const express = require('express');
const route = express.Router();
const userService =require('../services/user-service');
module.exports= route;


route.get('/', (req, res) => {
    userService.getAllUsers(req, res);
});

route.post('/', (req, res) => {
    userService.createUser(req, res);
});

route.get('/:id', (req, res) => {
    userService.getUser(req, res);
});

route.put('/:id', (req, res) => {
    userService.geUpdateUser(req, res);
});

route.delete('/:id', (req, res) => {
    userService.removeUser(req, res);
});


