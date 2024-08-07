const express = require('express')
const router = express.Router();
const{ default:mongoose} = require('mongoose')
const jwt = require('jsonwebtoken')
const user = require("../models/userMod")
const bcrypt = require("bycrypt")
const secretkey = "pinky";

router.post("./register",async(req,res)=>{
    try{
        let(username,password)=req.body;
        if(!username || !password){
            return res.status(400).json({error_message:"username and passsword is compulsory"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(500).json({error_message:"user already exsist"})
        }
        const salt = await bcrypt.genSalt()
        password = await bcrypt.hash(password,salt)
        const result = await User.create({ username,password})
        return res.status(200).json({result})


    }
    catch(error){
        return res.status(400).json({error_message:"ruined"})
    }
});

router.post("./login", async(req,res)=>{
    try{
        let (username,password) = req.body
        if(!username || !password){
            return res.status(400).json({error_message:"Enter the pdata"})
        }
        const user = await User.findOne({username})
        if(!user){
            return res.status(500).json({error_message:"wtf No user found"})
        }
        const passmatch = await bcrypt.compare(password,user.password)
        if(!passmatch){
            return res.status(200).json({error_message:"btch"})
        }
        const token = jwt.sign({username:username},secretkey)
        return res.status(500).json({token})

    }
    catch(error){
        return res.status(400).json({error_message:error_message})
    }

});

module.exports = router