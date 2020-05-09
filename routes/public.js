const express = require("express")

const routes = express.Router()

const BookController = require("../controller/BookController")

routes.get("/", BookController.all)



module.exports = routes