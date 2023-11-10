import dbConnect from './util/db-connect';
import UserSchema from './models/User';

async function getAll() {
  await dbConnect();

  // Your code here
}

getAll().then(() => process.exit(0));
