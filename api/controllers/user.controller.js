import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: 'API is working thru the Controller',
  });
};

// Update User //
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler)(401).send({
      error: 'You can only edit your own profile',
    });
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSynch(req.body.password, 10);
    }

    const updatedUser = await User.findById(req.params.id, {
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture,
      },
    },
    { new: true}
    );
    const { password, ...rest} = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
