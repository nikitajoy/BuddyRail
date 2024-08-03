const { response } = require("express");
const Package = require("./package")
const router = require("./router")


class qualityController {
    async addApplication(req, res) {
        try {
            const {isAuthorized, prefferedAge, isMic, games, languages} = req.body
            const dateCreated = new Date()
            
            await Package.addApplication(isAuthorized, prefferedAge, isMic, games.join(), languages.join(), dateCreated)
            return res.status(200).json({ message: 'Application has been added.' })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Error occurred." })
     
        }
    }

    async getApplications(req, res) {
        try {  
            const applications = await Package.getApplications()
            return res.status(200).json({ applications })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Error occurred." })
     
        }
    }


}

module.exports = new qualityController();


