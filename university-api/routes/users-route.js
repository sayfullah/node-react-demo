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

route.get('/:id', async (req, res) => {
    await userService.getUser(req, res);
});

route.put('/:id', async (req, res) => {
    await userService.geUpdateUser(req, res);
});

route.delete('/:id',  async (req, res) => {
    await userService.removeUser(req, res);
});


