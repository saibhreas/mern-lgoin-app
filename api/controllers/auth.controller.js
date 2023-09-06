import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";

export const signup = async (req, res, next)=> {
  const { username, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({username, email, password: hashedPassword});
  try {
    await newUser.save()
    res.status(201).json({message: "Success!  User created"});
    }  catch (error) {
       next(error);
   }
};
{/* Custom error handler */}

export const signing = async (req, res, next) =>{
  const {email, password} = req.body;
  try {
    const validUser=await User.findOne({email});
    if(!validUser) return (errorHandler(404, 'Are you sure you belong here?'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword) return (errorHandler(401, "Not even close"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res.cookies('access_token', token, {httpOnly: true});
  } catch (error) {
    next (error);
  };
};
