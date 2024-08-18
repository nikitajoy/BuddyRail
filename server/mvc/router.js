const Router = require("express");
const router = new Router();
const controller = require("./controller");
const passport = require("passport");


router.get("/getApplications",controller.getApplications);
router.get("/getInputData", controller.getInputData);
router.get("/checkLastApplication", controller.isAuthenticated, controller.checkLastApplication);

router.post("/addApplication", controller.isAuthenticated, controller.addApplication);

router.get("/discord/", passport.authenticate('discord'), (req, res)=> {
res.send(200)
});

router.get("/discord/auth/redirect", passport.authenticate('discord'), controller.discordRedirect);

router.get('/isAuthenticated', controller.isAuthenticated, controller.returnUser)

router.get('/getAnalytics', controller.getAnalytics)

module.exports = router;