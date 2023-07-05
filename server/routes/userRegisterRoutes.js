const express = require(`express`);
const userRegister = require(`../models/userRegisterModel`);
const router = express.Router();

// create a new user for using site 
router.post('/registerUser', async (req,res) => {
   try{
    const {name,email,password} = req.body;
    const newUserRegistraion = new userRegister({name,email,password});
    await newUserRegistraion.save();
    res.status(201).json({message:`User Created sucessfully`}) 
   }
   catch(error) {
    res.status(500).json({error:`Failed to register`})
   }
});
 
// Retrieve the name
router.get('/getName', async (req, res) => {
   try {
     const users = await userRegister.find({}, 'name');
     res.status(200).json({ name: users[0].name });
   } catch (error) {
     res.status(500).json({ error: 'Failed to retrieve name' });
   }
 });

module.exports = router;