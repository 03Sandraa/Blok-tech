const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
// const PORT = process.evn.PORT || 1337
const PORT = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", onHome)
app.get("/", onAbout)
app.get("*", notFound)

function onHome(req, res){
    res.render("home")
}

function onAbout(req, res){
    res.render("about")
}

function notFound(req, res){
    res.render("notfound")
}

app.listen(PORT, () => {
    console.log("Server running on port: ${PORT}")
}) 
