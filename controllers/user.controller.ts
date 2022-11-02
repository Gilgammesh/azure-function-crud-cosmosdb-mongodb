import { Context, HttpRequest } from '@azure/functions';
import User, { IUser } from '../models/user';

// Function for list all users
export const findItems = async (context: Context, req: HttpRequest): Promise<void> => {
  try {
    const users: IUser[] = await User.find({});
    context.res = {
      body: {
        users,
        registers: users.length
      }
    };
  } catch (error) {
    context.log('Error getting users list =>', JSON.stringify(error));
    context.res = {
      status: 404,
      body: { message: 'Could not get users list' }
    };
  }
};

// Function for get a user by id
export const findItemById = async (context: Context, req: HttpRequest): Promise<void> => {
  try {
    const user: IUser | null = await User.findById(req?.query.id);
    context.res = {
      body: { user }
    };
  } catch (error) {
    context.log('Error getting the user', req?.query.id, '=>', JSON.stringify(error));
    context.res = {
      status: 404,
      body: { message: 'Could not get user' }
    };
  }
};

// Function for create a user
export const createItem = async (context: Context, req: HttpRequest): Promise<void> => {
  try {
    const newUser: IUser = new User(req?.body);
    const user: IUser = await newUser.save();
    context.res = {
      body: { message: 'User created successfully', user }
    };
  } catch (error) {
    context.log('Error creating user =>', JSON.stringify(error));
    context.res = {
      status: 404,
      body: { message: 'Failed to create user' }
    };
  }
};

// Function for update a user by id
export const updateItemById = async (context: Context, req: HttpRequest): Promise<void> => {
  try {
    await User.findByIdAndUpdate(
      req?.query.id,
      { $set: req?.body },
      {
        new: true,
        runValidators: true,
        context: 'query'
      }
    );
    context.res = {
      body: { message: 'User updated successfully' }
    };
  } catch (error) {
    context.log('Error updating user =>', JSON.stringify(error));
    context.res = {
      status: 404,
      body: { message: 'Failed to update user' }
    };
  }
};

// Function for delete a user by id
export const deleteItemById = async (context: Context, req: HttpRequest): Promise<void> => {
  try {
    await User.findByIdAndDelete(req?.query.id);
    context.res = {
      body: { message: 'User deleted successfully' }
    };
  } catch (error) {
    context.log('Error deleting user', req?.query.id, '=>', JSON.stringify(error));
    context.res = {
      status: 404,
      body: { message: 'Failed to delete user' }
    };
  }
};
