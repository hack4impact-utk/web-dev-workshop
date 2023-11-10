import UserSchema from './models/User';
import dbConnect from './util/db-connect';

async function findUserById(id: string) {
  await dbConnect();
  const user = await UserSchema.findById(id);
  console.log(user);
}

findUserById('').then(() => process.exit(0));
