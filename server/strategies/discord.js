const passport = require('passport');
const Package = require("../mvc/package")

const path = require('path')

require("dotenv").config({path: path.resolve(__dirname, '../.env')});
const {Strategy} = require('passport-discord')



passport.serializeUser((user, done) => {
    console.log('serializing..');
    console.log(user);
    done(null, user.id_discord)
})


passport.deserializeUser(async (id, done) => {
    console.log('deserialize');
    console.log(id);
    try{
        const discordUser = await Package.getUser(id)
        if(!discordUser[0]) {
            throw new Error('user does not exist')
        }
        done(null, id)

    } catch (err) {
        console.log('deserialization err:', err);
        done(err, null)
    }

})



passport.use(new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_REDIRECT_URL,
    scope: ['identify'],
}, async(accessToken, refreshToken, profile, done)=> {
//console.log(profile);


try{
    const discordUser = await Package.getUser(profile.id)

    if(!discordUser[0]) {
        await Package.addUser(profile.id, profile.avatar, profile.username, new Date());
        console.log('user does not exists')
        done(null, discordUser[0])
    } else {
        await Package.updateUser(profile.id, profile.avatar,  profile.username, new Date());
        done(null, discordUser[0])
    }
} catch (err) {
    console.log('autentication error: ', err);
    done(err, null)
}


}
))