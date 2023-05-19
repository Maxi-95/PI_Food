const {Router} = require("express");
//const { getApiDiets } = require("../Controllers/DietController");
//const { diets } = require("../controllers/diets");
const { Type } = require("../db.js")
const router = Router();

router.get("/tipos", async(req,res)=>{
    try{
        let ApiDiets = await Type.findAll()

        res.status(200).send(ApiDiets);
    }
    catch(err){
        res.status(404).send({msg:err.message})}
})

module.exports = router;