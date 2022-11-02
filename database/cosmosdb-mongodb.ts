import { connect } from 'mongoose';

export const init = async () => {
  try {
    await connect(process.env['CosmosDbConnectionString']);
    console.log('Successful connection to CosmosDB MongoDB');
  } catch (error) {
    console.log('Failed to connect to CosmosDB MongoDB =>', error);
  }
};
