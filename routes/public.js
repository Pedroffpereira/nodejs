const express = require("express")

const routes = express.Router()

const UsersControll = require("../Controllers/UsersController")

const HomeController = require("../Controllers/PageController")

routes.get("/", PageController.index)

routes.post("/", UsersControll.Insert)

routes.get("/login", PageController.index)

routes.post("/login", UsersControll.Insert)

module.exports = routes