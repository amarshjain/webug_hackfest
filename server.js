// import required packages
var express         = require("express"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    expSan          = require("express-sanitizer"),
    compression     = require("compression"),
    flash           = require("connect-flash"),
    secure          = require('express-force-https');

// importing routes from routes folder
var indexRoutes     = require("./routes/index");

var app = express();

// set view engine to ejs
app.set("view engine", "ejs");

// redirect to https (comment if running on local)
// app.use(secure);

app.use(compression());
app.use(expSan());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "hackfest",
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

// flash config
app.use(function(req, res, next){
    res.locals.title       = "wafe.tech";
    res.locals.currentUser = req.user;
    res.locals.pageNo      = req.query.page;
    res.locals.error       = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});

// using routes
app.use(indexRoutes);

// Running web app on server
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING..");
});