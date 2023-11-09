import dbConnect from './util/db-connect';
import UserSchema from './models/User';

async function deleteUser(id: string) {
  await dbConnect();

  // Your code here

  await UserSchema.findByIdAndDelete(id);
}

// @ts-expect-error
deleteUser(/* insert id here */);
