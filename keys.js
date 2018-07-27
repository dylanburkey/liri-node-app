/// Spotify API keys




SPOTIFY_ID=84b637c5d2dd42909977aa408428b39a
SPOTIFY_SECRET=e08b385da95a47f7be544afcbb4f52a9
 ///Twitter API keys



TWITTER_CONSUMER_KEY= ZBuiM9haJaFQuEtOnKToJjp1P
TWITTER_CONSUMER_SECRET=Ne1EFh7ZbKNOAiJuLUpU5eUi14QZ9jo3ACfDkdJAuFnqDfpTnN
TWITTER_ACCESS_TOKEN_KEY= 232588299-33RhZJ2jpfkUSZ9MzSAxxxXPOYmz4n4rceQr8nOU
TWITTER_ACCESS_TOKEN_SECRET=kqCPwffD7giXUMDpqOd4UwPWMGBakx8RNCJAt0XvfrreZ

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
