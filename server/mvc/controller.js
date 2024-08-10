const { response } = require("express");
const Package = require("./package")
const router = require("./router")


class qualityController {
    async addApplication(req, res) {
        try {
            const {isAuthorized, isMic, games, languages, message} = req.body
            const dateCreated = new Date()
            
            await Package.addApplication(isAuthorized, isMic, games, languages, dateCreated, message)
            return res.status(200).json({ message: 'Application has been added.' })
        } catch (error) {
            console.log(error);
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
            console.log(error);
            return res.status(500).json({ message: "Error occurred." })
     
        }
    }


    async getApplications(req, res) {
        try {  
            const {isAuthorized, languages, games, isMic, userAge} = req.body
            const applications = await Package.getApplications(isAuthorized, languages, games, isMic, userAge)

            return res.status(200).json({ applications })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Error occurred." })
     
        }
    }


}

module.exports = new qualityController();


