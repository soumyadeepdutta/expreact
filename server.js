const express = require("express");
const path = require("path")
const app = express();

const data = require("./data/users.json")

app.use('/', express.static(path.join(__dirname, 'build')))
app.get("/api/users", (req, res) => {
    return res.json(data)
})

app.listen(3001, () => console.log('started on port 3001'))
