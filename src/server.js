const express = require("express")
const path = require("path")
const routes = require("./routes")

const server = express()

server.use(express.urlencoded({extended: false}))

server.set("port", 4500)
server.use("/api", routes.email)

server.use(express.static(path.join(__dirname, "public")))

module.exports = server