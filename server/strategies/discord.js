const passport = require('passport');
const Package = require("../mvc/package")

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


const discordUser = await Package.getUser(profile.id)

if(!discordUser[0]) {
    await Package.addUser(profile.id, profile.avatar, profile.username);
    done(null, discordUser)
} else {
    await Package.updateUser(profile.id, profile.avatar,  profile.username);
    done(null, discordUser)
}


}
))