const Router = require("express");
const router = new Router();
const controller = require("./controller");
const passport = require("passport");


router.get("/getApplications", controller.getApplications);
router.get("/getInputData", controller.getInputData);

router.post("/addApplication", controller.addApplication);

router.get("/discord/", passport.authenticate('discord'), (req, res)=> {
res.send(200)
});

router.get("/discord/auth/redirect", passport.authenticate('discord'), controller.discordRedirect);

 

module.exports = router;