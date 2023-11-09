import dbConnect from './util/db-connect';
import TweetSchema from './models/Tweet';

async function createTweet() {
  await dbConnect();

  // Your code here
}

createTweet();
