const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send({header:"<h1>THE test ROUTE IS WORKING</h1>"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running on port: "+ PORT))
