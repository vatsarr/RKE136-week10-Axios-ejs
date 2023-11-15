const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.mainPage);

router.get("/search", mainController.getSearchPage);

router.post("/search", mainController.postSearchPage);

router.post("/getmovie", mainController.postMovie);

module.exports = router;
