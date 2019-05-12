const express = require("express")
const app = express()


app.get("/", (req, res)=>{
    res.send("TESTING 1,2,3 . EXPRESS SERVER IS RUNNING ON PORT 3000, route /")
})



const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {console.log("server running on port "+ PORT)})