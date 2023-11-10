import dbConnect from './util/db-connect';
import UserSchema from './models/User';

async function deleteUser(id: string) {
  await dbConnect();

  // Your code here
}

deleteUser('').then(() => process.exit(0));
