import { Schema, model, Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

// Model Interface
export interface IUser extends Document {
  name: string;
  email: string;
  mobile: string;
  age: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create Schema and fields
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The name is required']
    },
    email: {
      type: String,
      required: [true, 'The email is required'],
      unique: true
    },
    mobile: {
      type: String,
      required: [true, 'The mobile number is required']
    },
    age: {
      type: Number,
      required: [true, 'The age is required']
    },
    status: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  {
    collection: 'users',
    timestamps: true,
    versionKey: false
  }
);

// Validate unique fields with custom message
UserSchema.plugin(uniqueValidator, {
  message: '{VALUE}, it is already registered.'
});

// Export data model
export default model<IUser>('User', UserSchema);
