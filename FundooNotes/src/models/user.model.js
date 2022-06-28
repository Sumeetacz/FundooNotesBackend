import { any } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    mailid: {
      type: String,
      required: true,
      unique: (true)
      
      
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);