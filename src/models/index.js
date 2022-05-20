// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Trips } = initSchema(schema);

export {
  Trips
};