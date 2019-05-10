const express = require("express")
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(cors());
const router = express.Router();

router.get("/getData", (req, res) => {
    res.send({data:"String after checked in database!"})
})

var checkWords = [];
router.get("/putData", (req,res) => {
    var input = req.body
    checkWords.push(res.data)
    console.log(checkWords);
    // console.log(input)
    // return res.json({
    //     success: "recieved",
    //   });
})

app.use("/api", router);

const PORT = 3001;
app.listen(PORT, () => console.log("Server is running on port: "+ PORT))


module.exports = router