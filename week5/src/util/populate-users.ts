import User from '../models/User';
import dbConnect from './db-connect';

async function populateUsers() {
  await dbConnect();

  const user1 = {
    email: 'john.doe@email.com',
    username: 'john.doe',
    name: 'John Doe',
    isVerified: true,
    numFollowers: 0,
  };

  const user2 = {
    email: 'jane.doe@email.com',
    username: 'jane.doe',
    name: 'Jane Doe',
    isVerified: false,
    numFollowers: 12,
  };

  const res = await User.create([user1, user2]);
  console.log(`_id for John: ${res[0]._id}`);
  console.log(`_id for Jane: ${res[1]._id}`);
}

populateUsers().then(() => process.exit(0));
