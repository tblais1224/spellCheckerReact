const express = require("express")
const app = express()
const uri = require("./passwords")
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const MyMethods = require("./checkSpelling");
const spellCheckBackend = MyMethods.method;
const outputSpellCheck = MyMethods.otherMethod;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let dictionaryData;
const client = new MongoClient(uri, {useNewUrlParser: true})
client.connect(err => {
    if (err) {
        throw err
    }
    const collection = client.db("dictionary").collection("new_data");

    // perform actions on the collection object
    dictionaryData = collection
})

app.get("/", (req, res) => {
    res.send("TESTING 1,2,3 . EXPRESS SERVER IS RUNNING ON PORT 3000, route /")
})

app.post("/checked", (req, res) => {
    // console.log(req.body.userInput)
    // res.json("testing the response post router")
    spellCheckBackend(req.body.userInput, dictionaryData).then((result) => {
        console.log(result)
        res.send(outputSpellCheck(result, req.body.userInput));
    });
})

const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("server running on port " + PORT)
})