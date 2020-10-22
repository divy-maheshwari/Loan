const express = require('express')
const router = express.Router();
const User = require('../models/user');

router.post('/form',(req,res) => {
    const {} = req.body;
    User.findOne({email},(err,newUser) => {
        if(err){
            res.json("User already registered");
        }
        else {
            const user = new User(newUser);
            user.save()
                   .then(userData => {res.json(userData)});
        }
    })
});

module.exports = router;