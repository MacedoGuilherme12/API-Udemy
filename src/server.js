const express = require('express')
const app = express()


app.use(express.json)


app.listen(3000, (req, res) =>{
    console.log("http://localhost:3000")

    console.log(teste)
})