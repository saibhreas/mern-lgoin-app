import mongoose from 'mongoose';

{
  /* Define Schema*/
}
const userSchema = new mongoose.Schema(
  {
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
    profilePicture: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRfV9n69zxuV4DQX7sYF7ql8ajx47wLioPeP-m4qFbHLkD9UNwfQSneRtkQEDnx-QxFs&usqp=CAU',
    },
  },
  { timestamps: true }
);
{
  /* timestamps used to demonstrates using data that Mongo DB collects on its own*/
}

{
  /* Create the model -- variable must be Upper Case*/
}
const User = mongoose.model('User', userSchema);
export default User;
