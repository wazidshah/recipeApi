const admin = require('express').Router();
const user_model = require('../model/user_model');
const uuid = require('../shared/uuid');


admin.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    user_model.getAdmin(username,password)
    .then(data=>{
        if(data.length==0)
        {
            res.status(404).send('User Not Found');
            return;
        }

        res.status(200).json(data[0].token);
    });
});



module.exports = admin;