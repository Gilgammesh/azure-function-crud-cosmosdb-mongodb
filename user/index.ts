import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import * as user from '../controllers/user.controller';
import * as db from '../database/cosmosdb-mongodb';

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
  try {
    // Connnect to database Azure Cosmosdb Mongodb
    await db.init();

    // API Routes
    switch (req.method) {
      case 'GET':
        if (req?.query?.id) {
          await user.findItemById(context, req);
        } else {
          await user.findItems(context, req);
        }
        break;
      case 'POST':
        if (req?.body) {
          await user.createItem(context, req);
        } else {
          throw Error('No body found');
        }
        break;
      case 'PUT':
        if (req?.query?.id) {
          await user.updateItemById(context, req);
        } else {
          throw Error('No id found');
        }
        break;
      case 'DELETE':
        if (req?.query?.id) {
          await user.deleteItemById(context, req);
        } else {
          throw Error('No id found');
        }
        break;
      default:
        throw Error(`${req.method} not allowed`);
    }
  } catch (error) {
    context.log(`*** Error throw: ${JSON.stringify(error)}`);
    context.res = {
      status: 500,
      body: error
    };
  }
};

export default httpTrigger;
