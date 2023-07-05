const express = require(`express`);
const userRegister = require(`../models/userRegisterModel`);
const router = express.Router();

// Login user
router.post('/loginUser', async (req, res) => {
   try {
     const { email, password } = req.body;
     const user = await userRegister.findOne({ email });
     
     if (user && user.password === password) {
       // Successful login
       res.status(200).json({ message: 'Login successful' });
     } else {
       // Incorrect credentials
       res.status(401).json({ error: 'Invalid credentials' });
     }
   } catch (error) {
     res.status(500).json({ error: 'Login failed' });
   }
 });
 
module.exports = router;