const express = require('express');
const router = express.Router();

const Profile = require('../model/profileSchema');

router.post('/api/v1/profile/new', async (req,res) =>{

    const {email, name, age, gender, weight} = req.body;

    if(!email || !name || !age || !gender || !weight){
        return res.status(400).json({error: "invalid details"});
    }

    try{
       const profileExist = await Profile.findOne({email:email});

       if(profileExist){
            return res.status(400).json({message: "profile exist"});
        }
        
        else{
            const profile = new Profile({email, name, age, gender, weight});
            
            const savedProfile = await profile.save();
            res.status(200).json({status:"success", profileData:savedProfile});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"server error"});
    }
    
})

router.get('/api/v1/profile/all', async (req,res) =>{

    try {
        const allProfile = await Profile.find({});
        res.status(200).json({status:"success", allprofile:allProfile});
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({error:"server error"});
    }    
})

router.delete('/api/v1/profile/del/:name', async (req,res) =>{

    const profileName = req.params.name;
    try{
        const profileExist = await Profile.findOne({name:profileName});
 
        if(!profileExist){
             return res.status(400).json({error: "invalid detail"});
         }
         
         else{
             await Profile.deleteOne({name:profileName});
             res.status(200).json({message:"success"});
         }
     }
     catch(err){
         console.log(err);
         res.status(500).json({status:500, error:"server error"});
     }
})

router.patch('/api/v1/profile/update/:name', async (req,res) =>{

    const profileName = req.params.name;
    var {age, gender, weight} = req.body;
    try{
        const profileExist = await Profile.findOne({name:profileName});
        if(!profileExist){
             return res.status(400).json({error: "invalid detail"});
         }
         
         else{
            await Profile.updateOne({name:profileName},{$set : { 'age' : age, 'gender' : gender, 'weight' : weight}});
            res.status(200).json({message:"success"});
         }
     }
     catch(err){
         console.log(err);
         res.status(500).json({status:500, error:"server error"});
     }
})

module.exports = router;