const express = require("express");
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
const PORT = 3000;

// ------- Database config -------

const uri = "mongodb+srv://03sandraa:Voor school@cluster0.omrch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        // console.log('connected')   
    } catch (error) {
        throw error;
    }
}

connect();
require('dotenv').config();

// ------- Einde database config -------


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", onHome);
app.get("/", onAbout);
app.get("*", notFound);

app.post("/createprofile", createprofile);
app.post('/avatar', upload.single('avatar'), avatar);


// ------- Database functies -------

async function FindProfile(client, profielnummer){
    const gebruiker = await client.db("profieldb").collection("profiel").findOne({profiel: profielnummer});

    if (gebruiker){
        console.log(gebruiker.roepnaam);
        return gebruiker
    } else{
        console.log("no result")
    }
}

async function maakNieuwProfiel(client, NieuweData){
    const result = await client.db("profieldb").collection("profiel").insertMany(NieuweData);
}

async function update(client, profielKenmerk, updatedata) {
    const result = await client.db("profieldb").collection("profiel").updateOne({profiel: profielKenmerk}, {$set: updatedata}, {upsert: true})
}

// ------- einde database functies -------


// ------- Pagina render functies -------

async function onHome(req, res){
    
    let user = await FindProfile(client, "0");
    
    res.render("home", {user});
};

function onAbout(req, res){
    res.render("about");
};

function notFound(req, res){
    res.render("notfound");
};

async function createprofile(req, res){

    update(client, "0", {
        "roepnaam" : req.body.roepnaam,
        "omschrijving" : req.body.omschrijving,
    })
    
    let user = await FindProfile(client, "0");
    res.render("home", {user});
};

async function avatar(req, res){
    const avatar = await "uploads/" + req.file.filename;
    
    update(client, "0", {
        "profielfoto" : avatar,
    })

    console.log(avatar);
    let user = await FindProfile(client, "0");
    res.render("home", {user});

}

// ------- Einde pagina render functies -------

app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});
