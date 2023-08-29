import mongoose from 'mongoose';

{/* Define Schema*/}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a Username'],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps:true});
{/* timestamps used to demonstrates using data that Mongo DB collects on its own*/}

{/* Create the model -- variable must be Upper Case*/}
const User = mongoose.model('User', userSchema);
export default User;
