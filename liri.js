require("dotenv").config();
const keys = require('./keys.js');

const fs = require("fs");
const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");

// Keys for Spotify and Twitter



// Twitter Function
// getTweets
const getTweets = function() {
    // Parameters for Twitter Function
    let client = new Twitter(keys.twitter);
    let params = {
        screen_name: 'dylanburkey'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error && response.statusCode === 200) {
            for(let i = 0; i < tweets.length; i++){
                let tweetText = tweets[i].text;
                let postDate = tweets[i].created_at;
                // Log Data
                console.log(
                    "I said: " + tweetText +
                    "This tweet on" + postDate
                );
            }
        }
        if (error) {
            // If we do have an error just log it
            console.log(error);
        }
    });
};

// Spotify Function
// getSpotify
// @parm songTitle

const getSpotify = function (songTitle)
{
    // If user does not enter a songTitle
    let spotify = new Spotify(keys.spotify);

    if(!songTitle){
        songTitle = "Rage the night away";
    }

    spotify.search({ type: 'track', query: songTitle }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let songInfo = data.tracks.items;
        for (let i = 0; i < 5; i++) {
            let songData =
                "Song Title: " + songInfo[i].name + "\r\n" +
                "Artist Name: " + songInfo[i].artists[0].name + "\r\n" +
                "Find this track on " + songInfo[i].album.name + "\r\n" +
                "Preview this track at: " + songInfo[i].preview_url + "\r\n";
            console.log(songData);
        }
    });
};

// Movie Function
// getMovie
// @param movieTitle
const getMovie = function movie(movieTitle)
{

    let queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
        // if there is no movieTitle
        if (!movieTitle){
            movieTitle = 'Boiler Room';
        }
        if (!error && response.statusCode === 200) {
            let movieData =
            "Title: " + JSON.parse(body).Title + "\r\n" +
            "The movie was released in: " + JSON.parse(body).Year + "\r\n" +
            "The IMDB Rating is: " + JSON.parse(body).imdbRating + "\r\n" +
            "The Rotten Tomatoes Rating is: " + JSON.parse(body).tomatoRating + "\r\n" +
            "It was created in: " + JSON.parse(body).Country + "\r\n" +
            "Produced in the following language: " + JSON.parse(body).Language + "\r\n" +
            "The plot is: " + JSON.parse(body).Plot + "\r\n" +
            "The following Actors are: " + JSON.parse(body).Actors;
            console.log(movieData);
        }
    });
};

const doWhatItSays = function(){
fs.readFile('random.txt', 'utf8', function (error, data) {

    if (error) {
        return console.log(error);
    }

    let titleProb = data.split(/\s*"\s*/);
    let titleProbArr = (" " + titleProb[1]).split(" ");
    getSpotify(titleProbArr);
})

};

// Choice Function
const choiceFunction = function(command, choice) {
    switch (command) {
        case "my-tweets":
            getTweets();
            break;
        case "spotify-this-song":
            getSpotify(choice);
            break;
        case "movie-this":
            getMovie(choice);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("Sorry what was that?")
    }
}

choiceFunction(process.argv[2], process.argv[3]);

