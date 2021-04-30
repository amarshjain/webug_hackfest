var express = require("express");
var router = express.Router();

// index GET route
router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;