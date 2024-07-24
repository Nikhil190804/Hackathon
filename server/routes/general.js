const express = require("express");
const router = express.Router();


const {getTrees,getCarbon,getWaste} = require("../controllers/getStatistics")



//stats related routes
router.get("/statistics-trees", getTrees);
router.get("/statistics-waste", getWaste);
router.get("/statistics-carbon", getCarbon);

module.exports = router;