const express = require('express');
const route = express.Router();
const authService =require('../services/auth-service');
module.exports= route;


route.post('/login', async (req, res) => {
    await authService.authenticate(req, res);
});



