import UserSchema from './models/User';
import dbConnect from './util/db-connect';

async function createUser(user: any) {
  await dbConnect();

  // await UserSchema.create(user)
}

const user = {
  name: 'Mr. Pibb',
  email: 'pibb@gmail.com',
};

createUser(user).then(() => process.exit(0));
