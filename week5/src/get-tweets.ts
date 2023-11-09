import dbConnect from './util/db-connect';
import TweetSchema from './models/Tweet';

async function getTweets() {
  await dbConnect();

  const tweets = await TweetSchema.find({}).populate('author');

  console.log(tweets);
}

getTweets();
