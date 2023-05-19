const { Router } = require("express");
const router = Router();
const { getById } = require("../controllers/01_getIdController.js");


router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const resultId = await getById(id)
        res.status(200).json(resultId);
    } catch (error) {
        res.status(404).json({error: error.message});
        
    }
    
});



module.exports = router;