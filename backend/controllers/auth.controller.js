const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { name, email, password } = req.body;
    try {
    
      const user = new User();
      user.name = name;
      user.email = email;
      user.password = await bcrypt.hash(password, 10);
  
      await user.save();
      res.json(user);
  
    } catch(err) {
      res.status(400).json({
        message: 'Email already exist'
      });
    }
  }

  const signin = async (req, res) => {
    const {email, password} = req.body;
  
    const user = await User.findOne({email});
  
    if(!user) return res.status(404).json({message: "Invalid Credentials"});
  
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});
  
    const token = jwt.sign({email: user.email}, process.env.JWT_SECRET_KEY, {
      expiresIn: '10h'
    });

    res.status(200).json({token:token,user:user.name})
    }


module.exports = {
  signup,
  signin
}
