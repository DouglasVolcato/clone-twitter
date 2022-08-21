const Tweet = require("./Tweet");

const createTweetService = async (message, userId) =>
  await Tweet.create({ message, user: userId });

const findAllTweetsService = async () => await Tweet.find().sort({ _id: -1 });

module.exports = { createTweetService, findAllTweetsService };
