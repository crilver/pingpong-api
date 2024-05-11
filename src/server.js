const express = require("express")
const cors = require("cors")

const port = "3030"

// init
const app = express()

// settings
app.set("port", port)
app.use(cors())

// middleware
app.use(express.json())

// routes
app.use(require("./routes/index.routes"))
app.use(require("./routes/player.routes"))

module.exports = app