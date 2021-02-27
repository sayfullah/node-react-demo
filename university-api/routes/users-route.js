const express = require('express');
const authMw = require('../middleware/auth-mw')
const route = express.Router();
const userService =require('../services/user-service');
module.exports= route;


route.get('/', authMw,  async (req, res) => {
    await userService.getAllUsers(req, res);
});

route.post('/', async (req, res) => {
    await userService.createUser(req, res);
});

route.get('/:id', authMw, async (req, res) => {
    await userService.getUser(req, res);
});

route.put('/:id', authMw, async (req, res) => {
    await userService.geUpdateUser(req, res);
});



