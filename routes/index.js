var express = require("express");
var router = express.Router();

// index GET route
router.get("/", (req, res) => {
    res.render("index", {vulns: []});
});

router.post("/", (req, res) => {
    
    try {

        const scanUri = req.body.scanUri;

        if(scanUri === ''){
            res.redirect("/index");
            return;
        }
        var vulns = [];
        
        res.render("index", {vulns: vulns});

    } catch (err) {

        console.log(err);

    }

});

module.exports = router;