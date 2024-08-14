const passport = require('passport');
console.log(__dirname + '../');
const path = require('path')

require("dotenv").config({path: path.resolve(__dirname, '../.env')});
const {Strategy} = require('passport-discord')


passport.use(new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_REDIRECT_URL,
    scope: ['identify'],
}, async(accessToken, refreshToken, profile, done)=> {
console.log(accessToken, refreshToken);
console.log(profile);
}
))