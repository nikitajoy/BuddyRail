const { response } = require("express");
const Package = require("./package")
const router = require("./router")
const path = require('path')

require("dotenv").config({path: path.resolve(__dirname, '../.env')});

class qualityController {


    isAuthenticated = async (req, res, next) => {

        if (req.isAuthenticated()) {
            console.log('user is', req.user);
            res.locals.user = await Package.getUser(req.user);
            console.log('locals:', res.locals.user);
            return next();
        }
        res.status(401).send('Unauthorized');
    };
    returnUser = async(req,res) => {
        return res.status(200).json(res.locals.user[0])
    }
    async addApplication(req, res) {
        try {
            const {isAuthorized, isMic, games, languages, message, buddyMicrophone} = req.body
            
            const dateCreated = new Date()
            
            await Package.addApplication(isAuthorized, isMic, games, languages, dateCreated, message, buddyMicrophone, res.locals.user[0].id_user)
            return res.status(200).json({ message: 'Application has been added.' })
        } catch (error) {
            console.log('addApplication error: ', error);
            return res.status(500).json({ message: "Error occurred." })
     
        }
    }


    // getting games and languages
    async getInputData(req, res) {
        try {
            let games = await Package.getGames()
            let languages = await Package.getLanguages()
            return res.status(200).json({ games, languages })
        } catch (error) {
            console.log('getInputDate error: ', error);
            return res.status(500).json({ message: "Error occurred." })
     
        }
    }


    async getApplications(req, res) {
        try {  

            let {isAuthorized, languages, games, isMic, buddyMicrophone, currentPage} = req.query
            currentPage == 0 ? currentPage = 1 : ''
            const maxApplications = 5;

            const applications = await Package.getApplications(isAuthorized, languages, games, isMic, buddyMicrophone, currentPage, maxApplications)
            let totalPages = await Package.countApplications(isAuthorized, languages, games, isMic, buddyMicrophone, currentPage, maxApplications)
            totalPages = Math.ceil(totalPages.length / 5)
            const languagesFromDatabase = await Package.getLanguages()
            const gamesFromDatabase = await Package.getGames()


            const filteredApplications = applications.map((application)=> {
               let languagesSorted =  languagesFromDatabase.filter((elDb) => application.languages.includes(elDb.id_language))
               application.languages = languagesSorted

               let gamesSorted =  gamesFromDatabase.filter((elDb) => application.games.includes(elDb.id_game))
               application.games = gamesSorted
               
               return application
            })

            return res.status(200).json({ filteredApplications, totalPages })
        } catch (error) {
            console.log('getApplications error:', error);

            return res.status(500).json({ message: "Error occurred." })
        }
    }



    async discordRedirect(req, res) {
        try {
            res.redirect(`${process.env.START_PAGE}`);
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new qualityController();


