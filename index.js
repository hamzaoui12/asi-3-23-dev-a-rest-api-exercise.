/* eslint-disable no-unused-vars */
const express = require("express")
const connectDB = require("./src/config/db")
const dotenv = require("dotenv").config()
const port = 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/admin", require("./src/routes/admin.routes"))

// eslint-disable-next-line no-console
app.listen(port, () => console.log("Le serveur a démarré au port  " + port))
