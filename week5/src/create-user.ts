import dbConnect from './util/db-connect';
import UserSchema from './models/User';

async function createUser() {
  await dbConnect();

  // Your code here
}

createUser();
