import UserSchema from './models/User';
import dbConnect from './util/db-connect';

async function findUserById(id: string) {
  await dbConnect();
  const user = await UserSchema.findById(id);
  console.log(user);
}

// @ts-ignore
findUserById('654d6c9239e4e9d5e0ffd7d2');
