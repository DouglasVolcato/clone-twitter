const tweetService = require("./tweets.service");

const createTweetController = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(400).send({
        message: "Send all the necessary data for the Tweet creation",
      });
    }

    const { id } = await tweetService.createTweetService(message, req.userId);

    return res.send({
      message: "Tweeted success",
      tweet: { id, message },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAllTweetsController = async (req, res) => {
  try {
    const tweets = await tweetService.findAllTweetsService();

    if (tweets.length === 0) {
      return res.status(400).send({ message: "There are no tweets" });
    }
    return res.send(tweets);
    // return res.send({
    //   results: tweets.map((tweet) => ({
    //     id: tweet._id,
    //     message: tweet.message,
    //     likes: tweet.likes.length,
    //     comments: tweet.comments.length,
    //     retweets: tweet.retweets.length,
    //     name: tweet.user,
    //     username: tweet.user.username,
    //     // avatar: tweet.user.avatar,
    //   })),
    // });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { createTweetController, findAllTweetsController };
