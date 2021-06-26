const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("wus good")
})

app.get('/about', (req, res) => {
    res.send("u tryna fuck?")
})

app.get('*', (req, res) => {
    res.status(404).send("<h1>bruh</h1>")
})

app.listen(5000, () => {
    console.log("listening on port 5000...")  
})