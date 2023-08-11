const router =require("express").Router();

const fCtrl = require("../controller/f_ctrl");

router.get("/",fCtrl.views.index);
router.get("/login",fCtrl.process.login);
router.get("/join",fCtrl.process.join);

module.exports = router;