import dbConnect from './util/db-connect';
import TweetSchema from './models/Tweet';
import UserSchema from './models/User';
UserSchema.name;

async function getTweets() {
  await dbConnect();

  const tweets = await TweetSchema.find({});

  console.log(tweets);
}

getTweets();
