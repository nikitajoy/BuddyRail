const Router = require("express");
const router = new Router();
const controller = require("./controller");


router.get("/getApplications", controller.getApplications);

router.post("/addApplication", controller.addApplication);


module.exports = router;