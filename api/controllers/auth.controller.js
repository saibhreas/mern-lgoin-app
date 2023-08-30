import User from "../models/user.model.js";

export const signup = (req, res)=> {
  
  const { name, email, password} = req.body;
  const newUser = new User({name, email, password});
  newUser.save()
};
