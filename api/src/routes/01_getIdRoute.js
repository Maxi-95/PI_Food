const { Router } = require("express");
const router = Router();
//const { getById } = require("../controllers/01_getController.js");


router.get("/id", async (req, res) => {

    res.status(200).send("No se envio un id");
    
});



module.exports = router;